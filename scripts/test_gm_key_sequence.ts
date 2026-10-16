// Find optimal GM key sequence
const keys = ["A", "B", "C", "D", "E"];

function isValid(seq: string[]): boolean {
  const counts: Record<string, number> = { A: 0, B: 0, C: 0, D: 0, E: 0 };
  seq.forEach(k => counts[k]++);
  for (const k of keys) {
    if (counts[k] !== 5) return false;
  }
  for (let i = 0; i < seq.length - 1; i++) {
    if (seq[i] === seq[i + 1]) return false;
  }
  for (let i = 0; i < seq.length; i++) {
    if (seq[i] === "E" && (i + 1) % 5 === 0) return false;
  }
  const trigrams = new Map<string, number>();
  for (let i = 0; i < seq.length - 2; i++) {
    const tri = seq.slice(i, i + 3).join("");
    const cnt = (trigrams.get(tri) || 0) + 1;
    if (cnt > 1) return false;
    trigrams.set(tri, cnt);
  }
  return true;
}

// Deterministic seed / permutation search
function findSeq(): string[] | null {
  const targetE = [3, 8, 12, 17, 22]; // 0-indexed positions for E (1-indexed: 4, 9, 13, 18, 23)
  const remainingSlots: number[] = [];
  for (let i = 0; i < 25; i++) {
    if (!targetE.includes(i)) remainingSlots.push(i);
  }

  // We need 5 of A, B, C, D in remaining 20 slots
  const nonE = [
    "A", "A", "A", "A", "A",
    "B", "B", "B", "B", "B",
    "C", "C", "C", "C", "C",
    "D", "D", "D", "D", "D",
  ];

  // Try some deterministic permutations
  for (let seed = 1; seed < 100000; seed++) {
    let arr = [...nonE];
    // simple shuffle with seed
    for (let i = arr.length - 1; i > 0; i--) {
      const j = (seed * 1103515245 + i * 12345) % (i + 1);
      const tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
    }

    const full = new Array<string>(25);
    targetE.forEach(idx => (full[idx] = "E"));
    let p = 0;
    remainingSlots.forEach(idx => (full[idx] = arr[p++]));

    if (isValid(full)) {
      return full;
    }
  }
  return null;
}

const res = findSeq();
if (res) {
  console.log("Found valid sequence:", JSON.stringify(res));
  console.log("Formatted:", res.map((k, i) => `Q${i + 1}: ${k}`).join(", "));
} else {
  console.log("No sequence found");
}
