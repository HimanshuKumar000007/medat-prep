/**
 * src/orchestrator/services/journeyService.ts
 *
 * Journey Service: Canonical Single Source of Truth for the 5-Phase Learning Roadmap,
 * dynamic phase unlock progression, sequential active unit advancement, and chapter sets.
 */

import type {
  UserProfile,
  SetAttempt,
  SetWithStatus,
  SetProgressStatus,
  ChapterStats,
  LearningUnit,
  LearningPhase,
} from "../../dashboard/practiceContext";
import {
  CHAPTERS,
  generateSetsForChapter,
  resolveChapterId,
} from "../../dashboard/practiceData";

export class JourneyService {
  /**
   * Generates 5 sequential sets for a chapter with real completion status,
   * best scores, and attempts count.
   */
  public getChapterSetsWithStatus(
    rawChapterId: string,
    setAttempts: Record<string, SetAttempt[]>,
    completedSetIds: Set<string>
  ): SetWithStatus[] {
    const chapterId = resolveChapterId(rawChapterId);
    const sets = generateSetsForChapter(chapterId);
    const result: SetWithStatus[] = [];

    for (let i = 0; i < sets.length; i++) {
      const set = sets[i];
      const rawAttempts = setAttempts[set.id] || [];
      const attempts = rawAttempts.filter(
        (a) =>
          !a.chapterId ||
          a.chapterId === chapterId ||
          resolveChapterId(a.chapterId) === chapterId ||
          a.setId === set.id
      );
      // STRICT AUDIT REQUIREMENT: A set is ONLY marked completed if there is a genuine completed attempt
      const hasValidAttempt =
        Array.isArray(attempts) &&
        attempts.length > 0 &&
        attempts.some(
          (a) =>
            typeof a.totalQuestions === "number" &&
            a.totalQuestions > 0 &&
            typeof a.score === "number" &&
            a.score >= 0
        );
      const isCompleted = hasValidAttempt && (completedSetIds.has(set.id) || attempts.length > 0);
      const bestAttempt =
        hasValidAttempt ? [...attempts].sort((a, b) => b.score - a.score)[0] : undefined;
      const latestAttempt = hasValidAttempt ? attempts[attempts.length - 1] : undefined;

      const status: SetProgressStatus = isCompleted ? "completed" : "active";

      result.push({
        ...set,
        status,
        bestScore: bestAttempt ? bestAttempt.score : undefined,
        latestScore: latestAttempt ? latestAttempt.score : undefined,
        attemptsCount: hasValidAttempt ? attempts.length : 0,
        bestAttempt,
      });
    }

    return result;
  }

  /**
   * Identifies the current active set for a chapter (first uncompleted set).
   */
  public getActiveSetForChapter(
    rawChapterId: string,
    setAttempts: Record<string, SetAttempt[]>,
    completedSetIds: Set<string>
  ): SetWithStatus {
    const chapterId = resolveChapterId(rawChapterId);
    const sets = this.getChapterSetsWithStatus(chapterId, setAttempts, completedSetIds);
    const activeSet = sets.find((s) => s.status === "active");
    if (activeSet) return activeSet;
    return sets[sets.length - 1];
  }

  /**
   * Evaluates the 5-Phase Learning Roadmap dynamically based on profile,
   * completed questions, and chapter mastery.
   */
  public getLearningPlanPhases(
    userProfile: UserProfile,
    answers: Record<string, number>,
    getChapterStats: (chId: string) => ChapterStats
  ): LearningPhase[] {
    const isMedATZ = userProfile.examType === "MEDAT-Z";
    const focusAreas: string[] = userProfile.focusAreas?.length ? userProfile.focusAreas : ["BMS"];

    const wantBMS = focusAreas.includes("BMS");
    const wantKFF = focusAreas.includes("KFF") || (isMedATZ && focusAreas.includes("MF"));
    const wantTV = !isMedATZ && focusAreas.includes("TV");
    const wantSEK = !isMedATZ && focusAreas.includes("SEK");

    const bioCellStats = getChapterStats("bio-01-zelle");
    const bioGenStats = getChapterStats("bio-04-genetik");
    const sekEeStats = getChapterStats("sek-rec-face");

    const totalAnsweredCount = Object.keys(answers).length;
    const isStageStarted = userProfile.preparationStage === "started_studying";
    const isStagePreparing = userProfile.preparationStage === "preparing_while";
    const isStageMocks = userProfile.preparationStage === "doing_mocks";

    const p1MasteredCount = [bioCellStats, bioGenStats, sekEeStats].filter((s) => s.status === "mastered").length;

    // Sequential Unlock Logic
    const p2Unlocked = isStageStarted || isStagePreparing || isStageMocks || p1MasteredCount >= 1 || totalAnsweredCount >= 25;
    const p3Unlocked = isStagePreparing || isStageMocks || (p2Unlocked && (p1MasteredCount >= 2 || totalAnsweredCount >= 60));
    const p4Unlocked = isStageMocks || (p3Unlocked && totalAnsweredCount >= 100);
    const p5Unlocked = p4Unlocked && totalAnsweredCount >= 140;

    const buildUnits = (
      phaseId: string,
      stepId: string,
      stepTitle: string,
      unitDefs: { chapterId: string; title: string; questionTarget: number; estimatedMinutes: number }[],
      isPhaseUnlocked: boolean
    ): LearningUnit[] => {
      let foundFirstActive = false;
      return unitDefs.map((def, idx) => {
        const stats = getChapterStats(def.chapterId);
        const isMastered = stats.status === "mastered";
        let state: "done" | "active" | "locked" = "locked";

        if (!isPhaseUnlocked) {
          state = "locked";
        } else if (isMastered) {
          state = "done";
        } else if (!foundFirstActive) {
          state = "active";
          foundFirstActive = true;
        } else {
          state = "locked";
        }

        return {
          id: `${phaseId}-${stepId}-u${idx + 1}`,
          phaseId,
          stepId,
          stepTitle,
          unitNumber: idx + 1,
          chapterId: def.chapterId,
          title: def.title,
          questionTarget: def.questionTarget,
          estimatedMinutes: def.estimatedMinutes,
          state,
        };
      });
    };

    // PHASE 1
    let p1StepNum = 1;
    const p1Steps: LearningPhase["steps"] = [];

    if (wantBMS) {
      const sId = `s${p1StepNum}`;
      const sTitle = `Schritt ${p1StepNum} — Biologie Fundament`;
      p1Steps.push({
        id: sId,
        title: sTitle,
        units: [
          {
            id: `u1`,
            phaseId: "p1",
            stepId: sId,
            stepTitle: sTitle,
            unitNumber: 1,
            chapterId: "bio-01-zelle",
            title: "Die menschliche Zelle",
            questionTarget: 15,
            estimatedMinutes: 25,
            state: bioCellStats.status === "mastered" ? "done" : "active",
          },
          {
            id: `u2`,
            phaseId: "p1",
            stepId: sId,
            stepTitle: sTitle,
            unitNumber: 2,
            chapterId: "bio-04-genetik",
            title: "Genetik",
            questionTarget: 15,
            estimatedMinutes: 30,
            state:
              bioCellStats.status === "mastered"
                ? bioGenStats.status === "mastered"
                  ? "done"
                  : "active"
                : "locked",
          },
        ],
      });
      p1StepNum++;
    }

    if (wantKFF) {
      const sId = `s${p1StepNum}`;
      const sTitle = isMedATZ ? `Schritt ${p1StepNum} — Manuelle Fertigkeiten` : `Schritt ${p1StepNum} — Kognitive Fertigkeiten`;
      p1Steps.push({
        id: sId,
        title: sTitle,
        units: [
          {
            id: `u${wantBMS ? 3 : 1}`,
            phaseId: "p1",
            stepId: sId,
            stepTitle: sTitle,
            unitNumber: 1,
            chapterId: isMedATZ ? "mf-mirror-symm" : "kff-fig-l1",
            title: isMedATZ ? "Formen spiegeln — Achsensymmetrie" : "Figuren zusammensetzen — Schnittmuster",
            questionTarget: 15,
            estimatedMinutes: 20,
            state: wantBMS ? (bioGenStats.status === "mastered" ? "active" : "locked") : "active",
          },
        ],
      });
      p1StepNum++;
    }

    if (wantTV) {
      const sId = `s${p1StepNum}`;
      const sTitle = `Schritt ${p1StepNum} — Textverständnis`;
      p1Steps.push({
        id: sId,
        title: sTitle,
        units: [
          {
            id: `u${p1Steps.length + 1}`,
            phaseId: "p1",
            stepId: sId,
            stepTitle: sTitle,
            unitNumber: 1,
            chapterId: "tv-scipass",
            title: "Wissenschaftliche Texte strukturiert lesen",
            questionTarget: 12,
            estimatedMinutes: 35,
            state: "locked",
          },
        ],
      });
      p1StepNum++;
    }

    if (wantSEK) {
      const sId = `s${p1StepNum}`;
      const sTitle = `Schritt ${p1StepNum} — Soziale Kompetenzen`;
      p1Steps.push({
        id: sId,
        title: sTitle,
        units: [
          {
            id: `u${p1Steps.length + 1}`,
            phaseId: "p1",
            stepId: sId,
            stepTitle: sTitle,
            unitNumber: 1,
            chapterId: "sek-rec-face",
            title: "Emotionen erkennen — Mimik & Affekt",
            questionTarget: 10,
            estimatedMinutes: 15,
            state: "locked",
          },
        ],
      });
    }

    // PHASE 2
    let p2StepNum = 1;
    const p2Steps: LearningPhase["steps"] = [];

    if (wantBMS) {
      const sId = `p2-s${p2StepNum}`;
      const sTitle = `Schritt ${p2StepNum} — Stoffwechsel & Reaktionen`;
      p2Steps.push({
        id: sId,
        title: sTitle,
        units: buildUnits(
          "p2",
          sId,
          sTitle,
          [
            { chapterId: "bio-06-stoffwechsel", title: "Stoffwechsel & Enzyme", questionTarget: 15, estimatedMinutes: 25 },
            { chapterId: "chem-04-bindungen", title: "Chemische Bindungen", questionTarget: 15, estimatedMinutes: 25 },
          ],
          p2Unlocked
        ),
      });
      p2StepNum++;
    }

    if (wantKFF) {
      const sId = `p2-s${p2StepNum}`;
      const sTitle = isMedATZ ? `Schritt ${p2StepNum} — Drahtbiegen Präzision` : `Schritt ${p2StepNum} — Zahlenfolgen & Muster`;
      p2Steps.push({
        id: sId,
        title: sTitle,
        units: buildUnits(
          "p2",
          sId,
          sTitle,
          [
            {
              chapterId: isMedATZ ? "mf-wire-tech" : "kff-num-arith",
              title: isMedATZ ? "Drahtbiegen Grundlagen" : "Zahlenfolgen — Differenzen & Zyklen",
              questionTarget: 15,
              estimatedMinutes: 20,
            },
          ],
          p2Unlocked
        ),
      });
    }

    // PHASE 3
    let p3StepNum = 1;
    const p3Steps: LearningPhase["steps"] = [];

    if (wantBMS) {
      const sId = `p3-s${p3StepNum}`;
      const sTitle = `Schritt ${p3StepNum} — Physiologie & Organik`;
      p3Steps.push({
        id: sId,
        title: sTitle,
        units: buildUnits(
          "p3",
          sId,
          sTitle,
          [
            { chapterId: "bio-07-herzkreislauf", title: "Herz-Kreislauf-System", questionTarget: 15, estimatedMinutes: 25 },
            { chapterId: "chem-08-saeuren-basen", title: "Säuren, Basen & pH-Wert", questionTarget: 15, estimatedMinutes: 25 },
            { chapterId: "phys-02-mechanik", title: "Mechanik & Kräfte", questionTarget: 15, estimatedMinutes: 30 },
          ],
          p3Unlocked
        ),
      });
      p3StepNum++;
    }

    if (wantKFF) {
      const sId = `p3-s${p3StepNum}`;
      const sTitle = `Schritt ${p3StepNum} — Wortflüssigkeit & Gedächtnis`;
      p3Steps.push({
        id: sId,
        title: sTitle,
        units: buildUnits(
          "p3",
          sId,
          sTitle,
          [
            { chapterId: "kff-wf-basic", title: "Wortflüssigkeit Anagramme", questionTarget: 15, estimatedMinutes: 20 },
            { chapterId: "kff-mem-pass", title: "Gedächtnis — Allergiepässe", questionTarget: 8, estimatedMinutes: 25 },
          ],
          p3Unlocked
        ),
      });
    }

    // PHASE 4
    const p4Steps: LearningPhase["steps"] = [
      {
        id: "p4-s1",
        title: "Schritt 1 — Prüfungssimulation",
        units: buildUnits(
          "p4",
          "p4-s1",
          "Schritt 1 — Prüfungssimulation",
          [
            { chapterId: "chem-13-simulation", title: "BMS Gesamttest (Simulation)", questionTarget: 40, estimatedMinutes: 60 },
            { chapterId: wantSEK ? "sek-dec-ethics" : "kff-imp-syll", title: wantSEK ? "Soziales Entscheiden Dilemmata" : "Implikationen erkennen", questionTarget: 15, estimatedMinutes: 25 },
          ],
          p4Unlocked
        ),
      },
    ];

    // PHASE 5
    const p5Steps: LearningPhase["steps"] = [
      {
        id: "p5-s1",
        title: "Schritt 1 — Formelsammlung & Mathe-Sprint",
        units: buildUnits(
          "p5",
          "p5-s1",
          "Schritt 1 — Formelsammlung & Mathe-Sprint",
          [
            { chapterId: "math-01-zehnerpotenzen", title: "Zehnerpotenzen & Kopfrechnen", questionTarget: 15, estimatedMinutes: 15 },
            { chapterId: "phys-05-elektrizitaet", title: "Elektrizität & Stromkreise", questionTarget: 15, estimatedMinutes: 20 },
            { chapterId: "bio-09-nervensystem", title: "Nervensystem & Sinnesorgane", questionTarget: 15, estimatedMinutes: 25 },
          ],
          p5Unlocked
        ),
      },
    ];

    return [
      {
        id: "p1",
        title: "Fundament & Basisaufbau",
        dates: "Phase 1 · Grundlagen & Diagnostik",
        desc: "Sichere Beherrschung der Kernkapitel in Biologie und erste Vertrautheit mit den Untertests.",
        locked: false,
        steps: p1Steps,
      },
      {
        id: "p2",
        title: "Kognitive Methoden & Vertiefung",
        dates: "Phase 2 · KFF & Chemie-Fundament",
        desc: "Lösungsmuster für KFF-Untertests trainieren, Reaktionsmechanismen und Stöchiometrie meistern.",
        locked: !p2Unlocked,
        unlockHint: "Wird freigeschaltet, sobald mindestens 1 Kapitel gemeistert oder 25 Fragen beantwortet wurden.",
        steps: p2Steps,
      },
      {
        id: "p3",
        title: "Vernetzung, Physik & Zeitmanagement",
        dates: "Phase 3 · Querverbindungen & Tempo",
        desc: "Physikalisches Verständnis vertiefen, Textverständnis auf MedAT-Geschwindigkeit trimmen.",
        locked: !p3Unlocked,
        unlockHint: "Wird freigeschaltet, sobald Phase 2 aktiv ist und 2 Kapitel gemeistert wurden.",
        steps: p3Steps,
      },
      {
        id: "p4",
        title: "Generalproben & Simulationsphase",
        dates: "Phase 4 · Ernstfall-Simulationen",
        desc: "Vollständige Probetests unter realen Prüfungsbedingungen, Pausen-Management und Stresstests.",
        locked: !p4Unlocked,
        unlockHint: "Wird freigeschaltet, sobald die Vernetzungsphase absolviert ist.",
        steps: p4Steps,
      },
      {
        id: "p5",
        title: "Finaler Feinschliff & Peak Performance",
        dates: "Phase 5 · Höchstform am Testtag",
        desc: "Gezielte Schließung der letzten Wissenslücken, Formelsammlung-Drills, Fehlerausmerzungs-Sprint und Testtag-Strategie.",
        locked: !p5Unlocked,
        unlockHint: "Wird in den letzten Vorbereitungswochen zur Feinabstimmung freigeschaltet.",
        steps: p5Steps,
      },
    ];
  }

  /**
   * Identifies the current active learning unit across all unlocked phases.
   */
  public getActiveLearningUnit(
    userProfile: UserProfile,
    answers: Record<string, number>,
    getChapterStats: (chId: string) => ChapterStats,
    getActiveSetForChapter: (chId: string) => SetWithStatus
  ): LearningUnit & { activeSet: SetWithStatus } {
    const phases = this.getLearningPlanPhases(userProfile, answers, getChapterStats);
    const unlockedPhases = phases.filter((p) => !p.locked);

    let activeUnit: LearningUnit | undefined;
    for (const phase of unlockedPhases) {
      const u = phase.steps.flatMap((s) => s.units).find((item) => item.state === "active");
      if (u) {
        activeUnit = u;
        break;
      }
    }

    if (!activeUnit) {
      const allUnlockedUnits = unlockedPhases.flatMap((p) => p.steps.flatMap((s) => s.units));
      if (allUnlockedUnits.length > 0) {
        activeUnit = allUnlockedUnits[allUnlockedUnits.length - 1];
      }
    }

    if (!activeUnit) {
      const isMedATZ = userProfile.examType === "MEDAT-Z";
      const focusAreas = userProfile.focusAreas || [];
      const fallbackChapterId = focusAreas.includes("SEK")
        ? "sek-rec-face"
        : focusAreas.includes("TV")
        ? "tv-scipass"
        : focusAreas.includes("KFF")
        ? "kff-fig-l1"
        : isMedATZ
        ? "mf-mirror-symm"
        : "bio-01-zelle";
      const ch = CHAPTERS[fallbackChapterId];
      const activeSet = getActiveSetForChapter(fallbackChapterId);
      return {
        id: "fallback-u1",
        phaseId: "p1",
        stepId: "s1",
        stepTitle: "Schritt 1",
        unitNumber: 1,
        chapterId: fallbackChapterId,
        title: ch?.title || (focusAreas.includes("SEK") ? "Emotionen erkennen (EE)" : "Die menschliche Zelle"),
        questionTarget: 15,
        estimatedMinutes: 20,
        state: "active" as const,
        activeSet,
      };
    }

    const activeSet = getActiveSetForChapter(activeUnit.chapterId);
    return {
      ...activeUnit,
      activeSet,
    };
  }
}

export const journeyService = new JourneyService();
