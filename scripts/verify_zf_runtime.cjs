/**
 * Full End-to-End Runtime Integration Verification for MedAT ZF Simulations 1–6
 * Validates the loaded questions, set builders, simulation partitioning,
 * and workspace data compatibility.
 */

const path = require("path");
const fs = require("fs");

console.log("\n======================================================================");
console.log("🚀 STARTING DEEP RUNTIME VERIFICATION FOR ZF SIMULATIONS 1–6");
console.log("======================================================================\n");

// 1. Run validate_zf_all.cjs directly
const { execSync } = require("child_process");
console.log("Step 1: Running scripts/validate_zf_all.cjs...");
try {
  const out1 = execSync("node scripts/validate_zf_all.cjs", { cwd: path.join(__dirname, ".."), encoding: "utf8" });
  console.log(out1);
} catch (err) {
  console.error("❌ validate_zf_all.cjs failed:", err.stdout || err.message);
  process.exit(1);
}

// 2. Check practiceData.ts generateSetsForChapter definition for ZF
console.log("Step 2: Checking generateSetsForChapter in practiceData.ts...");
const practiceDataPath = path.join(__dirname, "../src/dashboard/practiceData.ts");
const practiceDataContent = fs.readFileSync(practiceDataPath, "utf8");

const zfSetsMatch = practiceDataContent.match(/chapterId === "kff-num"[\s\S]*?return (\[[\s\S]*?\]);\s*}/);
if (!zfSetsMatch) {
  console.error("❌ Could not find ZF sets in practiceData.ts!");
  process.exit(1);
}

let zfSets;
try {
  // Replace constants with mocks for eval
  const cleaned = zfSetsMatch[1]
    .replace(/CHAPTER_MASTERY_THRESHOLD/g, "0.8")
    .replace(/\${chapterId}/g, "kff-num-arith");
  const chapterId = "kff-num-arith";
  zfSets = eval(cleaned);
} catch (e) {
  console.error("❌ Failed to parse ZF sets:", e);
  process.exit(1);
}

console.log(`✅ Found ${zfSets.length} configured ZF simulation sets in practiceData.ts:`);
zfSets.forEach((s) => {
  console.log(`   • Set ${s.order}: "${s.title}" (${s.questionCount} Qs, mode=${s.mode})`);
});

if (zfSets.length < 11) {
  console.error(`❌ Expected at least 11 ZF simulation sets, found: ${zfSets.length}`);
  process.exit(1);
}

// 3. Check ZfSectionHub.tsx themes
console.log("\nStep 3: Checking ZF_SIMULATION_THEMES in ZfSectionHub.tsx...");
const zfHubPath = path.join(__dirname, "../src/dashboard/ZfSectionHub.tsx");
const zfHubContent = fs.readFileSync(zfHubPath, "utf8");

for (let i = 1; i <= 11; i++) {
  if (!zfHubContent.includes(`${i}: {`) || !zfHubContent.includes(`Simulation ${i}`)) {
    console.error(`❌ Missing theme for Simulation ${i} in ZfSectionHub.tsx`);
    process.exit(1);
  }
}
console.log("✅ All 11 simulation themes confirmed in ZfSectionHub.tsx.");

console.log("\n======================================================================");
console.log("🏆 ALL VERIFICATION CHECKS COMPLETED WITH 100% SUCCESS ACROSS 11 SETS!");
console.log("======================================================================\n");
