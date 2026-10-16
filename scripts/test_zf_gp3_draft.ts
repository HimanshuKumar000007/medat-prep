// Verification script for ZF GP3 draft
const testQuestions = [
  {
    id: "KFF-ZF-GP3-001",
    seq: [8, 17, 26, 35, 44, 53, 62],
    expected: [71, 80],
    options: {
      A: [70, 79],
      B: [71, 79],
      C: [71, 80],
      D: [72, 81],
      E: null,
    },
    key: "C",
  },
  {
    id: "KFF-ZF-GP3-002",
    seq: [59, 53, 47, 41, 35, 29, 23],
    expected: [17, 11],
    options: {
      A: [17, 12],
      B: [17, 11],
      C: [16, 10],
      D: [18, 12],
      E: null,
    },
    key: "B",
  },
  {
    id: "KFF-ZF-GP3-003",
    seq: [4, 7, 13, 22, 34, 49, 67],
    expected: [88, 112],
    options: {
      A: [85, 106],
      B: [88, 109],
      C: [87, 111],
      D: [89, 115],
      E: null,
    },
    key: "E",
  },
  {
    id: "KFF-ZF-GP3-004",
    seq: [6, 12, 9, 18, 15, 30, 27],
    expected: [54, 51],
    options: {
      A: [54, 51],
      B: [51, 54],
      C: [54, 108],
      D: [52, 49],
      E: null,
    },
    key: "A",
  },
  {
    id: "KFF-ZF-GP3-005",
    seq: [92, 75, 60, 47, 36, 27, 20],
    expected: [15, 12],
    options: {
      A: [13, 10],
      B: [15, 10],
      C: [16, 13],
      D: [15, 12],
      E: null,
    },
    key: "D",
  },
  {
    id: "KFF-ZF-GP3-006",
    seq: [14, 22, 17, 25, 20, 28, 23],
    expected: [31, 26],
    options: {
      A: [26, 31],
      B: [31, 26],
      C: [31, 25],
      D: [30, 25],
      E: null,
    },
    key: "B",
  },
  {
    id: "KFF-ZF-GP3-007",
    seq: [1, 4, 5, 9, 14, 23, 37],
    expected: [60, 97],
    options: {
      A: [60, 97],
      B: [60, 96],
      C: [59, 96],
      D: [61, 98],
      E: null,
    },
    key: "A",
  },
  {
    id: "KFF-ZF-GP3-008",
    seq: [6, 5, 14, 10, 22, 20, 30],
    expected: [40, 38],
    options: {
      A: [38, 40],
      B: [40, 36],
      C: [30, 38],
      D: [40, 40],
      E: null,
    },
    key: "E",
  },
  {
    id: "KFF-ZF-GP3-009",
    seq: [3, 8, 16, 13, 18, 36, 33],
    expected: [38, 76],
    options: {
      A: [38, 73],
      B: [35, 70],
      C: [38, 76],
      D: [76, 73],
      E: null,
    },
    key: "C",
  },
  {
    id: "KFF-ZF-GP3-010",
    seq: [64, 7, 32, 20, 16, 33, 8],
    expected: [46, 4],
    options: {
      A: [4, 46],
      B: [46, 2],
      C: [45, 4],
      D: [46, 4],
      E: null,
    },
    key: "D",
  },
];

let ok = true;
testQuestions.forEach((q, idx) => {
  const qNum = idx + 1;
  const optKeys = ["A", "B", "C", "D"];
  const correctMatch = optKeys.find(k => {
    const opt = q.options[k];
    return opt && opt[0] === q.expected[0] && opt[1] === q.expected[1];
  });

  if (q.key === "E") {
    if (correctMatch) {
      console.error(`FAIL: Q${qNum} keyed to E, but option ${correctMatch} matches expected!`);
      ok = false;
    } else {
      console.log(`PASS: Q${qNum} keyed to E, none of A-D matches [${q.expected}]`);
    }
  } else {
    if (correctMatch !== q.key) {
      console.error(`FAIL: Q${qNum} keyed to ${q.key}, but matched ${correctMatch}!`);
      ok = false;
    } else {
      console.log(`PASS: Q${qNum} keyed to ${q.key}, correctly matched option ${q.key} [${q.expected}]`);
    }
  }
});

console.log("Overall test:", ok ? "ALL PASS" : "FAIL");
