function getLetterMultiset(str: string): Record<string, number> {
  const counts: Record<string, number> = {};
  const cleaned = str.toUpperCase().replace(/[^A-Z]/g, "");
  for (const char of cleaned) {
    counts[char] = (counts[char] || 0) + 1;
  }
  return counts;
}

function areMultisetsEqual(m1: Record<string, number>, m2: Record<string, number>): boolean {
  const keys1 = Object.keys(m1).sort();
  const keys2 = Object.keys(m2).sort();
  if (keys1.length !== keys2.length) return false;
  for (const k of keys1) {
    if (m1[k] !== m2[k]) return false;
  }
  return true;
}

const testWords = [
  { word: "KLINIK", letters: ["I", "K", "N", "L", "I", "K"], scramble: "I · K · N · L · I · K" },
  { word: "MAGNET", letters: ["G", "T", "A", "M", "E", "N"], scramble: "G · T · A · M · E · N" },
  { word: "PRISMA", letters: ["M", "R", "A", "S", "I", "P"], scramble: "M · R · A · S · I · P" },
  { word: "VAKUUM", letters: ["U", "K", "U", "M", "A", "V"], scramble: "U · K · U · M · A · V" },
  { word: "ALKOHOL", letters: ["O", "L", "H", "A", "K", "L", "O"], scramble: "O · L · H · A · K · L · O" },
  { word: "DIALYSE", letters: ["Y", "L", "E", "S", "I", "A", "D"], scramble: "Y · L · E · S · I · A · D" },
  { word: "KOLLAGEN", letters: ["L", "G", "A", "O", "N", "L", "E", "K"], scramble: "L · G · A · O · N · L · E · K" },
  { word: "EMULSION", letters: ["S", "N", "O", "M", "I", "L", "U", "E"], scramble: "S · N · O · M · I · L · U · E" },
  { word: "NEKROSE", letters: ["R", "E", "S", "O", "N", "E", "K"], scramble: "R · E · S · O · N · E · K" },
  { word: "SYNDROM", letters: ["R", "M", "O", "N", "Y", "D", "S"], scramble: "R · M · O · N · Y · D · S" },
  { word: "LIGAMENT", letters: ["M", "G", "T", "E", "N", "I", "A", "L"], scramble: "M · G · T · E · N · I · A · L" },
  { word: "VAKZINE", letters: ["Z", "E", "K", "A", "I", "N", "V"], scramble: "Z · E · K · A · I · N · V" },
  { word: "BIOETHIK", letters: ["T", "H", "I", "K", "O", "E", "I", "B"], scramble: "T · H · I · K · O · E · I · B" },
  { word: "HYPOTHESE", letters: ["P", "T", "E", "S", "Y", "E", "O", "H", "H"], scramble: "P · T · E · S · Y · E · O · H · H" },
  { word: "AUTONOMIE", letters: ["O", "N", "E", "T", "M", "I", "O", "U", "A"], scramble: "O · N · E · T · M · I · O · U · A" },
];

let failed = 0;
testWords.forEach((tw, idx) => {
  const mWord = getLetterMultiset(tw.word);
  const mLetters = getLetterMultiset(tw.letters.join(""));
  const mScramble = getLetterMultiset(tw.scramble);

  const eq1 = areMultisetsEqual(mWord, mLetters);
  const eq2 = areMultisetsEqual(mWord, mScramble);
  const notStartsWithTarget = tw.letters[0] !== tw.word[0];

  if (!eq1 || !eq2 || !notStartsWithTarget) {
    console.error(`FAIL: ${tw.word}`, { eq1, eq2, notStartsWithTarget });
    failed++;
  } else {
    console.log(`[PASS] Q${idx + 1} ${tw.word}: length=${tw.word.length}, scramble=${tw.scramble}`);
  }
});

console.log(`Total test failures: ${failed}`);
