import { RAW_GENERALPROBE_2_BIO_QUESTIONS } from "../src/data/generalprobe/generalprobe2BiologyQuestions";

RAW_GENERALPROBE_2_BIO_QUESTIONS.forEach((q, idx) => {
  console.log(`### Frage ${idx + 1}: ${q.id} (${q.primary_topic} · ${q.subtopic})`);
  console.log(`*Niveau: ${q.difficulty} | Lösung: ${q.correct_answer}*\n`);
  console.log(`**Fragetext:** ${q.stem}\n`);
  console.log(`- **A:** ${q.options.A}`);
  console.log(`- **B:** ${q.options.B}`);
  console.log(`- **C:** ${q.options.C}`);
  console.log(`- **D:** ${q.options.D}`);
  console.log(`- **E:** ${q.options.E}\n`);
  console.log(`**Erklärung:** ${q.explanation_correct}\n`);
  console.log("---\n");
});
