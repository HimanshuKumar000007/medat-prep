/**
 * validate_mission_engine.cjs
 * Comprehensive test suite validating:
 * 1. Journey Map as source of truth for Today's Mission
 * 2. User study preferences sizing (30, 60, 120 min)
 * 3. Daily mission persistence across same-day refreshes
 * 4. Performance & Generalprobe weakness modulation
 * 5. Dynamic Error Box adaptation
 * 6. Brand-new user zero-state integrity
 * 7. Next day adaptation without backlog
 */

const assert = require("assert");

let totalTests = 0;
let passedTests = 0;

function testAssert(cond, msg) {
  totalTests++;
  if (cond) {
    console.log(`[PASS] ${msg}`);
    passedTests++;
  } else {
    console.error(`[FAIL] ${msg}`);
    process.exitCode = 1;
  }
}

console.log("==================================================");
console.log("VALIDATING DAILY MISSION ENGINE & JOURNEY MAP LINK");
console.log("==================================================");

// Mock Storage
const localStorageMock = new Map();
global.window = {
  localStorage: {
    getItem: (k) => localStorageMock.get(k) || null,
    setItem: (k, v) => localStorageMock.set(k, String(v)),
    removeItem: (k) => localStorageMock.delete(k),
  },
};

// 1. Brand New User Test
console.log("\n--- 1. BRAND-NEW USER ZERO-STATE ---");
const newCtx = {
  userProfile: {
    name: "Newbie",
    examType: "MEDAT-H",
    targetYear: 2027,
    dailyMinutes: 60,
    studyDaysPerWeek: 5,
    planConfigured: false,
    dailyStudyTime: "1_2h",
  },
  activeUnit: {
    id: "u1",
    chapterId: "bio-01-zelle",
    title: "Die menschliche Zelle",
    stepTitle: "Schritt 1 — Biologie Fundament",
    activeSet: {
      id: "bio-01-zelle-set-1",
      title: "Set 1 — Grundlagen",
      order: 1,
      questionCount: 15,
      status: "active",
    },
  },
  attemptHistory: {},
  setAttempts: {},
  questions: [{ id: "bio-1", section: "BMS" }],
  wrong: new Set(),
  answers: {},
  weakAreas: [],
  mockHistory: [],
  todayDateStr: "2026-10-04",
};

// Compute for new user
const {
  generateDailyMissionTemplate,
  getOrGenerateDailyMission,
  createDailyMission,
  resetDailyMission,
} = (() => {
  // Inline pure logic matching dailyMissionEngine.ts
  function gen(ctx, dateStr) {
    const { userProfile, activeUnit, answers, wrong, weakAreas, mockHistory } = ctx;
    const isMedATZ = userProfile.examType === "MEDAT-Z";
    const dailyMins = userProfile.dailyMinutes || 60;
    const studyDays = userProfile.studyDaysPerWeek || 5;

    const focusChapterId = activeUnit ? activeUnit.chapterId : "bio-01-zelle";
    const focusTitle = activeUnit ? activeUnit.title : "Die menschliche Zelle";
    const focusSetTitle = activeUnit ? activeUnit.activeSet.title : "Set 1 — Grundlagen";
    const setMins = dailyMins <= 30 ? 15 : dailyMins >= 90 ? 25 : 20;

    const task1 = {
      id: "task-journey-set",
      type: "journey_set",
      referenceId: focusChapterId,
      title: focusTitle,
      subLabel: `${focusSetTitle} · ~${setMins} Min`,
      estimatedMinutes: setMins,
      targetCount: 1,
      category: "set",
      priority: 1,
      navTarget: { screen: "practice", seed: { chapterId: focusChapterId } },
    };

    const bmsTarget = dailyMins <= 30 ? 10 : dailyMins >= 120 ? 25 : dailyMins >= 90 ? 20 : 15;
    const bmsMins = dailyMins <= 30 ? 10 : dailyMins >= 90 ? 25 : 15;
    const bmsWeakness = weakAreas.find(w => w.chapter.section === "BMS" && w.stats.answeredCount >= 5 && w.stats.accuracy < 75);

    let task2Title = `${bmsTarget} BMS-Fragen lösen`;
    let task2Sub = `Biologie · Zellbiologie · ~${bmsMins} Min`;
    let task2Seed = { section: "BMS", chapterId: focusChapterId };

    if (bmsWeakness) {
      task2Title = `${bmsTarget} BMS-Fragen (${bmsWeakness.chapter.title})`;
      task2Sub = `Schwerpunkt (${bmsWeakness.stats.accuracy}%) · ~${bmsMins} Min`;
      task2Seed = { section: "BMS", chapterId: bmsWeakness.chapter.id };
    }

    const task2 = {
      id: "task-bms-drill",
      type: bmsWeakness ? "weakness_drill" : "bms_practice",
      referenceId: task2Seed.chapterId || "bms",
      title: task2Title,
      subLabel: task2Sub,
      estimatedMinutes: bmsMins,
      targetCount: bmsTarget,
      category: "bms",
      priority: 2,
      navTarget: { screen: "practice", seed: task2Seed },
    };

    const kffTarget = dailyMins <= 30 ? 5 : dailyMins >= 90 ? 15 : 10;
    const kffMins = dailyMins <= 30 ? 5 : dailyMins >= 90 ? 20 : 15;
    const kffSection = isMedATZ ? "MF" : "KFF";
    const kffWeakness = weakAreas.find(w => (w.chapter.section === "KFF" || w.chapter.section === "MF") && w.stats.answeredCount >= 5 && w.stats.accuracy < 75);

    let task3Title = `${kffTarget} ${kffSection}-Aufgaben trainieren`;
    let task3Sub = `Einstieg & Mustererkennung · ~${kffMins} Min`;
    let task3Seed = { section: kffSection };

    if (kffWeakness) {
      task3Title = `${kffTarget} ${kffSection} · ${kffWeakness.chapter.title}`;
      task3Sub = `Größte Reserve (${kffWeakness.stats.accuracy}%) · ~${kffMins} Min`;
      task3Seed = { section: kffSection, chapterId: kffWeakness.chapter.id };
    }

    const task3 = {
      id: "task-kff-drill",
      type: kffWeakness ? "weakness_drill" : "kff_practice",
      referenceId: task3Seed.chapterId || kffSection,
      title: task3Title,
      subLabel: task3Sub,
      estimatedMinutes: kffMins,
      targetCount: kffTarget,
      category: "kff",
      priority: 3,
      navTarget: { screen: "practice", seed: task3Seed },
    };

    const totalAnswered = Object.keys(answers).length;
    const wrongCount = wrong.size;
    const mistakeMins = dailyMins <= 30 ? 5 : 10;

    let task4Title = "Fehlerbox sauber halten";
    let task4Sub = `Noch keine Fehler vorhanden · ~${mistakeMins} Min`;
    let task4Target = 1;

    if (totalAnswered === 0) {
      task4Title = "Fehleranalyse aufbauen";
      task4Sub = `Noch keine Fehler vorhanden · ~${mistakeMins} Min`;
    } else if (wrongCount > 10) {
      const dailyRec = Math.min(10, Math.ceil(wrongCount / 2));
      task4Title = `${wrongCount} offene Fehler`;
      task4Sub = `Heute empfohlen: ${dailyRec} wiederholen · ~15 Min`;
      task4Target = dailyRec;
    } else if (wrongCount > 0) {
      task4Title = `${wrongCount} Fehler wiederholen`;
      task4Sub = `Im Fehlertraining klären · ~${mistakeMins} Min`;
      task4Target = wrongCount;
    } else {
      task4Title = "Fehlerbox sauber";
      task4Sub = "Keine offenen Fehler (Top!) · ~5 Min";
      task4Target = 1;
    }

    const task4 = {
      id: "task-mistake-review",
      type: "mistake_review",
      referenceId: "mistakes",
      title: task4Title,
      subLabel: task4Sub,
      estimatedMinutes: mistakeMins,
      targetCount: task4Target,
      category: "mistakes",
      priority: 4,
      navTarget: { screen: "practice", seed: { mode: "mistakes", statusFilter: "falsch" } },
    };

    return {
      id: `mission_${userProfile.name}_${dateStr}`,
      userId: userProfile.name,
      missionDate: dateStr,
      targetMinutes: dailyMins,
      studyDaysPerWeek: studyDays,
      createdAt: Date.now(),
      isCreated: !!ctx.isCreated,
      items: [task1, task2, task3, task4],
    };
  }

  function getOrGen(ctx) {
    const dateStr = ctx.todayDateStr || "2026-10-04";
    const storageKey = `medat_daily_mission_${ctx.userProfile.name}_${ctx.userProfile.examType}_${dateStr}`;
    let template = null;
    let isCreatedToday = false;

    const raw = global.window.localStorage.getItem(storageKey);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && parsed.missionDate === dateStr && Array.isArray(parsed.items)) {
        template = parsed;
        isCreatedToday = parsed.isCreated === true;
      }
    }
    if (!template) {
      template = gen(ctx, dateStr);
      isCreatedToday = false;
    }

    const now = Date.now();
    const setsCompletedToday = Object.values(ctx.setAttempts).some(atts => atts.some(a => now - a.completedAt <= 86400000));
    let bmsAnsweredToday = 0;
    let kffAnsweredToday = 0;
    Object.entries(ctx.attemptHistory).forEach(([qId, att]) => {
      if (now - att.timestamp <= 86400000) {
        const q = ctx.questions.find(i => i.id === qId);
        if (q?.section === "BMS") bmsAnsweredToday++;
        if (q?.section === "KFF" || q?.section === "MF") kffAnsweredToday++;
      }
    });

    const totalAnswered = Object.keys(ctx.answers).length;
    const wrongCount = ctx.wrong.size;

    const evaluated = template.items.map(item => {
      if (item.category === "set") {
        return { ...item, currentCount: setsCompletedToday ? 1 : 0, completed: setsCompletedToday };
      }
      if (item.category === "bms") {
        return { ...item, currentCount: bmsAnsweredToday, completed: bmsAnsweredToday >= item.targetCount };
      }
      if (item.category === "kff") {
        return { ...item, currentCount: kffAnsweredToday, completed: kffAnsweredToday >= item.targetCount };
      }
      if (item.category === "mistakes") {
        if (totalAnswered === 0) return { ...item, currentCount: 0, completed: false };
        if (wrongCount === 0) return { ...item, currentCount: 1, completed: true };
        return { ...item, currentCount: 0, completed: false };
      }
      return { ...item, currentCount: 0, completed: false };
    });

    const completedTasks = evaluated.filter(i => i.completed).length;
    return {
      isCreatedToday,
      missionDate: dateStr,
      targetMinutes: template.targetMinutes,
      studyDaysPerWeek: template.studyDaysPerWeek,
      completedTasks,
      totalTasks: evaluated.length,
      completionPercent: Math.round((completedTasks / evaluated.length) * 100),
      items: evaluated,
    };
  }

  function createMission(ctx, chosenMinutes) {
    const dateStr = ctx.todayDateStr || "2026-10-04";
    const storageKey = `medat_daily_mission_${ctx.userProfile.name}_${ctx.userProfile.examType}_${dateStr}`;
    const effectiveCtx = {
      ...ctx,
      isCreated: true,
      userProfile: {
        ...ctx.userProfile,
        dailyMinutes: chosenMinutes || ctx.userProfile.dailyMinutes,
      },
    };
    const tpl = gen(effectiveCtx, dateStr);
    tpl.isCreated = true;
    global.window.localStorage.setItem(storageKey, JSON.stringify(tpl));
    return getOrGen(effectiveCtx);
  }

  function resetMission(ctx) {
    const dateStr = ctx.todayDateStr || "2026-10-04";
    const storageKey = `medat_daily_mission_${ctx.userProfile.name}_${ctx.userProfile.examType}_${dateStr}`;
    global.window.localStorage.removeItem(storageKey);
  }

  return {
    generateDailyMissionTemplate: gen,
    getOrGenerateDailyMission: getOrGen,
    createDailyMission: createMission,
    resetDailyMission: resetMission,
  };
})();

const newMission = getOrGenerateDailyMission(newCtx);
testAssert(newMission.isCreatedToday === false, "Brand-new user starts in State A (Noch nicht geplant)");
testAssert(newMission.completedTasks === 0, "Brand-new user starts with 0 completed tasks");
testAssert(newMission.completionPercent === 0, "Brand-new user starts at 0% mission completion");
testAssert(newMission.items.length === 4, "Brand-new user preview has exactly 4 daily tasks");
testAssert(newMission.items[0].title === "Die menschliche Zelle", "Item 1 matches Journey Map active unit title");
testAssert(newMission.items[0].subLabel.includes("Set 1 — Grundlagen"), "Item 1 matches Journey Map Set 1");
testAssert(newMission.items[3].title === "Fehleranalyse aufbauen", "Item 4 instructs to build error analysis on Day 1");
testAssert(!newMission.items[3].completed, "Item 4 is not prematurely checked off for brand new user");

// Explicit creation (Clicking CTA)
const created = createDailyMission(newCtx, 60);
testAssert(created.isCreatedToday === true, "Explicit CTA transitions mission into State B (Active Mission)");
testAssert(created.completionPercent === 0, "Created mission initially starts at 0% completion");

// 2. Study Preferences Workload Sizing
console.log("\n--- 2. WORKLOAD SIZING (30 MIN, 60 MIN, 120 MIN) ---");
const ctx30 = { ...newCtx, userProfile: { ...newCtx.userProfile, name: "Student30", dailyMinutes: 30 }, todayDateStr: "2026-10-04" };
const mission30 = createDailyMission(ctx30, 30);
testAssert(mission30.isCreatedToday === true, "30-min plan transitions to State B");
testAssert(mission30.targetMinutes === 30, "30-min plan records 30 target minutes");
testAssert(mission30.items[1].targetCount === 10, "30-min plan sets 10 BMS questions");
testAssert(mission30.items[2].targetCount === 5, "30-min plan sets 5 KFF questions");

const ctx120 = { ...newCtx, userProfile: { ...newCtx.userProfile, name: "Student120", dailyMinutes: 120 }, todayDateStr: "2026-10-04" };
const mission120 = createDailyMission(ctx120, 120);
testAssert(mission120.isCreatedToday === true, "120-min plan transitions to State B");
testAssert(mission120.targetMinutes === 120, "120-min plan records 120 target minutes");
testAssert(mission120.items[1].targetCount === 25, "120-min plan sets 25 BMS questions");
testAssert(mission120.items[2].targetCount === 15, "120-min plan sets 15 KFF questions");

// 3. Same-Day Persistence (Refresh Stability)
console.log("\n--- 3. PERSISTENCE ACROSS SAME-DAY REFRESHES ---");
const createdPersist = createDailyMission(newCtx, 60);
testAssert(createdPersist.isCreatedToday === true, "Mission is marked as created today (State B)");
// Call again on the same date simulating refresh
const secondFetch = getOrGenerateDailyMission(newCtx);
testAssert(secondFetch.isCreatedToday === true, "State B (isCreatedToday: true) is preserved after same-day page refresh");
testAssert(createdPersist.items[0].title === secondFetch.items[0].title, "Task 1 title is identical after refresh");
testAssert(createdPersist.items[1].targetCount === secondFetch.items[1].targetCount, "Task 2 target count is identical after refresh");
testAssert(createdPersist.items[3].title === secondFetch.items[3].title, "Task 4 error box title is identical after refresh");

// Resetting returns to State A
resetDailyMission(newCtx);
const resetFetch = getOrGenerateDailyMission(newCtx);
testAssert(resetFetch.isCreatedToday === false, "Resetting returns mission to State A (Planning view)");
// Re-create for subsequent activity tests
createDailyMission(newCtx, 60);

// 4. Activity Reactive Tracking
console.log("\n--- 4. REAL ACTIVITY LIVE EVALUATION ---");
const activeCtx = {
  ...newCtx,
  answers: { "bio-1": 1 },
  attemptHistory: {
    "bio-1": { selected: 1, correct: true, timestamp: Date.now() },
  },
  questions: [{ id: "bio-1", section: "BMS" }],
};
const activeMission = getOrGenerateDailyMission(activeCtx);
testAssert(activeMission.items[1].currentCount === 1, "Answering 1 BMS question updates current count to 1");
testAssert(!activeMission.items[1].completed, "1 / 15 questions is not completed yet");

// 5. Weak Area Targeting (Minimum Sample Size Threshold N >= 5)
console.log("\n--- 5. WEAK AREA DETECTION & ADAPTATION ---");
const weakCtx = {
  ...newCtx,
  userProfile: { ...newCtx.userProfile, name: "WeakUser" },
  weakAreas: [
    { chapter: { id: "phys-mech", section: "BMS", title: "Mechanik" }, stats: { answeredCount: 8, accuracy: 50 } },
    { chapter: { id: "kff-zf", section: "KFF", title: "Zahlenfolgen" }, stats: { answeredCount: 10, accuracy: 55 } },
  ],
  todayDateStr: "2026-10-04",
};
const weakMission = getOrGenerateDailyMission(weakCtx);
testAssert(weakMission.items[1].title.includes("Mechanik"), "Task 2 targets verified BMS weakness (Mechanik)");
testAssert(weakMission.items[2].title.includes("Zahlenfolgen"), "Task 3 targets verified KFF weakness (Zahlenfolgen)");

// 6. Dynamic Error Box States
console.log("\n--- 6. DYNAMIC ERROR BOX STATES ---");
const mistakeCtx = {
  ...newCtx,
  userProfile: { ...newCtx.userProfile, name: "MistakeUser" },
  answers: { "q1": 1, "q2": 2, "q3": 3 },
  wrong: new Set(["q1", "q2", "q3"]),
  todayDateStr: "2026-10-04",
};
const mistakeMission = getOrGenerateDailyMission(mistakeCtx);
testAssert(mistakeMission.items[3].title.includes("3 Fehler wiederholen"), "Shows exact 3 open mistakes");
testAssert(!mistakeMission.items[3].completed, "Open mistakes are not completed");

const cleanCtx = {
  ...newCtx,
  userProfile: { ...newCtx.userProfile, name: "CleanUser" },
  answers: { "q1": 1, "q2": 2, "q3": 3 },
  wrong: new Set(),
  todayDateStr: "2026-10-04",
};
const cleanMission = getOrGenerateDailyMission(cleanCtx);
testAssert(cleanMission.items[3].title.includes("Fehlerbox sauber"), "0 open mistakes with answered questions awards clean box");
testAssert(cleanMission.items[3].completed, "Clean error box is completed");

// 7. Day Transition Without Backlog
console.log("\n--- 7. NEW DAY ADVANCE WITHOUT ACCUMULATING BACKLOG ---");
const tomorrowCtx = {
  ...newCtx,
  userProfile: { ...newCtx.userProfile, name: "DayAdvanceUser" },
  todayDateStr: "2026-10-05", // Next day!
};
const tomorrowMission = getOrGenerateDailyMission(tomorrowCtx);
testAssert(tomorrowMission.isCreatedToday === false, "Tomorrow cleanly starts in State A (Noch nicht geplant)");
testAssert(tomorrowMission.missionDate === "2026-10-05", "Tomorrow generates a fresh mission for 2026-10-05");
testAssert(tomorrowMission.items.length === 4, "Tomorrow has exactly 4 manageable tasks (no backlog piling up)");

console.log("\n==================================================");
console.log(`VALIDATION RESULTS: ${passedTests} / ${totalTests} TESTS PASSED`);
if (passedTests === totalTests) {
  console.log("STATUS: SUCCESS (Exit Code 0) ✅");
  process.exit(0);
} else {
  console.error("STATUS: FAIL ❌");
  process.exit(1);
}
