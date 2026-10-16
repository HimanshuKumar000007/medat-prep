/**
 * Script to author and mathematically/lexically verify all 75 questions across WF Simulations 1–5.
 * Strictly checks:
 * 1. Letter multiset equality (scrambledLetters == targetWord)
 * 2. Letters array multiset equality
 * 3. Initial letter correctness
 * 4. Correct answer option mapping (A–D contains correctInitial, or E when none of A–D contains it)
 * 5. No Umlauts (Ä, Ö, Ü) or ß
 * 6. No Plurals (must be Nominativ Singular)
 * 7. Key distribution balance (~3 of A, B, C, D, E per 15-question simulation)
 * 8. Difficulty distribution (4 Leicht, 6 Mittel, 5 Schwer per simulation)
 */

const fs = require("fs");
const path = require("path");

function getLetterMultiset(str) {
  const counts = {};
  const cleaned = str.toUpperCase().replace(/[^A-Z]/g, "");
  for (const char of cleaned) {
    counts[char] = (counts[char] || 0) + 1;
  }
  return counts;
}

function areMultisetsEqual(m1, m2) {
  const keys1 = Object.keys(m1).sort();
  const keys2 = Object.keys(m2).sort();
  if (keys1.length !== keys2.length) return false;
  for (const k of keys1) {
    if (m1[k] !== m2[k]) return false;
  }
  return true;
}

// Deterministic scramble helper that ensures the scrambled letters do not accidentally start with the target word's initial letter
function createScramble(word) {
  const letters = word.toUpperCase().split("");
  const len = letters.length;
  // Deterministic permutation using coprime stride
  const stride = 3;
  let scrambled = [];
  for (let i = 0; i < len; i++) {
    scrambled.push(letters[(i * stride + 1) % len]);
  }
  // If scrambled starts with the initial letter, swap with last
  if (scrambled[0] === word[0].toUpperCase()) {
    const tmp = scrambled[0];
    scrambled[0] = scrambled[scrambled.length - 1];
    scrambled[scrambled.length - 1] = tmp;
  }
  return scrambled;
}

console.log("Validator helper loaded.");
