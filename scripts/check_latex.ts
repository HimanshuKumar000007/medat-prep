import { RAW_GENERALPROBE_3_CHEM_QUESTIONS } from "../src/data/generalprobe/generalprobe3ChemistryQuestions";

let count = 0;
RAW_GENERALPROBE_3_CHEM_QUESTIONS.forEach((q) => {
  const fields = [
    q.stem,
    q.options.A,
    q.options.B,
    q.options.C,
    q.options.D,
    q.options.E,
    q.explanation_correct,
    ...Object.values(q.explanations_incorrect),
  ];

  fields.forEach((f, fIdx) => {
    // Check if there is a tab character followed by ext{
    if (f.includes("\text{")) {
      console.log(`[WARN] ${q.id} field ${fIdx} contains TAB+ext{ ! Raw text snippet:`, f.substring(f.indexOf("\text{") - 10, f.indexOf("\text{") + 20));
      count++;
    }
    // Check for other common escape issues like \nu (\n u), \tau (\t au)
    if (f.includes("\nu")) {
      console.log(`[WARN] ${q.id} field ${fIdx} contains NEWLINE+u !`);
      count++;
    }
    // Check for malformed LaTeX patterns like $ without matching $
    const dollarCount = (f.match(/\$/g) || []).length;
    if (dollarCount % 2 !== 0) {
      console.log(`[WARN] ${q.id} field ${fIdx} has unmatched dollars (${dollarCount}):`, f);
      count++;
    }
  });
});

console.log(`Found ${count} LaTeX / string escaping issues.`);
