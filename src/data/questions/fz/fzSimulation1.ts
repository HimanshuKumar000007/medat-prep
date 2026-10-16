/**
 * Official MedAT Figuren zusammensetzen (FZ) — Simulation 1
 * 15 Verified Geometric Spatial Reasoning Questions
 *
 * Strict Compliance:
 * - 15 questions, 20 minutes (~80s per task)
 * - Static 2D SVG vector diagrams
 * - 0% interactive puzzle / 0% draggable / 0% rotatable UI
 * - 100% pure mental rotation without mirroring (det = +1)
 * - Balanced answer distribution: exactly 3 A, 3 B, 3 C, 3 D, 3 E
 * - 3 genuine E ("Keine") cases: Q04, Q09, Q14
 * - Difficulty: 4 Leicht (Q01-Q04), 6 Mittel (Q05-Q10), 5 Schwer (Q11-Q15)
 */

import type { FzQuestionData } from "./types";

export const FZ_SIMULATION_1_QUESTIONS: FzQuestionData[] = [
  {
    "id": "fz-sim1-q01",
    "simulationId": "fz-sim1",
    "questionNumber": 1,
    "difficulty": "Leicht",
    "correctAnswer": "A",
    "questionText": "Welche der folgenden Figuren lässt sich aus den gegebenen Teilen zusammensetzen?",
    "estimatedTimeSeconds": 80,
    "pieces": [
      {
        "id": "p1",
        "points": [
          [
            0,
            0
          ],
          [
            50,
            0
          ],
          [
            0,
            100
          ]
        ],
        "canvasPoints": [
          [
            135,
            45
          ],
          [
            135,
            95
          ],
          [
            35,
            45
          ]
        ],
        "area": 2500
      },
      {
        "id": "p2",
        "points": [
          [
            50,
            0
          ],
          [
            100,
            0
          ],
          [
            0,
            100
          ]
        ],
        "canvasPoints": [
          [
            220,
            120
          ],
          [
            170,
            120
          ],
          [
            270,
            20
          ]
        ],
        "area": 2500
      },
      {
        "id": "p3",
        "points": [
          [
            0,
            100
          ],
          [
            100,
            0
          ],
          [
            100,
            100
          ]
        ],
        "canvasPoints": [
          [
            305,
            120
          ],
          [
            405,
            20
          ],
          [
            405,
            120
          ]
        ],
        "area": 5000
      }
    ],
    "options": {
      "A": {
        "key": "A",
        "label": "Figur A",
        "polygon": [
          [
            0,
            0
          ],
          [
            100,
            0
          ],
          [
            100,
            100
          ],
          [
            0,
            100
          ]
        ],
        "viewBox": "-10 -10 120 120",
        "area": 10000,
        "isNone": false
      },
      "B": {
        "key": "B",
        "label": "Figur B",
        "polygon": [
          [
            0,
            0
          ],
          [
            125,
            0
          ],
          [
            125,
            80
          ],
          [
            0,
            80
          ]
        ],
        "viewBox": "-10 -10 145 100",
        "area": 10000,
        "isNone": false
      },
      "C": {
        "key": "C",
        "label": "Figur C",
        "polygon": [
          [
            0,
            0
          ],
          [
            120,
            0
          ],
          [
            90,
            80
          ],
          [
            30,
            80
          ]
        ],
        "viewBox": "-10 -10 140 100",
        "area": 7200,
        "isNone": false
      },
      "D": {
        "key": "D",
        "label": "Figur D",
        "polygon": [
          [
            0,
            0
          ],
          [
            100,
            0
          ],
          [
            130,
            100
          ],
          [
            30,
            100
          ]
        ],
        "viewBox": "-10 -10 150 120",
        "area": 10000,
        "isNone": false
      },
      "E": {
        "key": "E",
        "label": "Keine der Antwortmöglichkeiten ist richtig",
        "polygon": null,
        "viewBox": "0 0 100 100",
        "isNone": true
      }
    },
    "canvasViewBox": "0 0 440 140",
    "targetFigure": {
      "polygon": [
        [
          0,
          0
        ],
        [
          100,
          0
        ],
        [
          100,
          100
        ],
        [
          0,
          100
        ]
      ],
      "viewBox": "-10 -10 120 120",
      "area": 10000
    },
    "assembly": [
      {
        "pieceId": "p1",
        "rotationDeg": 0,
        "translation": [
          0,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p2",
        "rotationDeg": 0,
        "translation": [
          0,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p3",
        "rotationDeg": 0,
        "translation": [
          0,
          0
        ],
        "isReflection": false
      }
    ],
    "explanation": "Die drei Dreiecke setzen sich exakt zu einem Quadrat (Figur A) zusammen: Dreieck 3 bildet die rechte obere Hälfte (Diagonale von oben links nach unten rechts). Die verbleibende untere linke Hälfte wird durch Dreieck 1 (rechtwinklig, Katheten 50 und 100) und Dreieck 2 (Basis 50, Höhe 100) lückenlos ausgefüllt. Bei den Figuren B, C und D stimmen die Außenkanten bzw. Winkel nicht mit den Kathetenlängen überein.",
    "metadata": {
      "pieceCount": 3,
      "shapeFamily": "Quadrat",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim1-q02",
    "simulationId": "fz-sim1",
    "questionNumber": 2,
    "difficulty": "Leicht",
    "correctAnswer": "B",
    "questionText": "Welche der folgenden Figuren lässt sich aus den gegebenen Teilen zusammensetzen?",
    "estimatedTimeSeconds": 80,
    "pieces": [
      {
        "id": "p1",
        "points": [
          [
            0,
            0
          ],
          [
            60,
            0
          ],
          [
            90,
            60
          ]
        ],
        "canvasPoints": [
          [
            50,
            40
          ],
          [
            110,
            40
          ],
          [
            140,
            100
          ]
        ],
        "area": 1800
      },
      {
        "id": "p2",
        "points": [
          [
            60,
            0
          ],
          [
            120,
            0
          ],
          [
            90,
            60
          ]
        ],
        "canvasPoints": [
          [
            250,
            40
          ],
          [
            250,
            100
          ],
          [
            190,
            70
          ]
        ],
        "area": 1800
      },
      {
        "id": "p3",
        "points": [
          [
            0,
            0
          ],
          [
            90,
            60
          ],
          [
            30,
            60
          ]
        ],
        "canvasPoints": [
          [
            390,
            100
          ],
          [
            300,
            40
          ],
          [
            360,
            40
          ]
        ],
        "area": 1800
      }
    ],
    "options": {
      "A": {
        "key": "A",
        "label": "Figur A",
        "polygon": [
          [
            0,
            0
          ],
          [
            90,
            0
          ],
          [
            90,
            60
          ],
          [
            0,
            60
          ]
        ],
        "viewBox": "-10 -10 110 80",
        "area": 5400,
        "isNone": false
      },
      "B": {
        "key": "B",
        "label": "Figur B",
        "polygon": [
          [
            0,
            0
          ],
          [
            120,
            0
          ],
          [
            90,
            60
          ],
          [
            30,
            60
          ]
        ],
        "viewBox": "-10 -10 140 80",
        "area": 5400,
        "isNone": false
      },
      "C": {
        "key": "C",
        "label": "Figur C",
        "polygon": [
          [
            0,
            0
          ],
          [
            90,
            0
          ],
          [
            120,
            60
          ],
          [
            30,
            60
          ]
        ],
        "viewBox": "-10 -10 140 80",
        "area": 5400,
        "isNone": false
      },
      "D": {
        "key": "D",
        "label": "Figur D",
        "polygon": [
          [
            0,
            0
          ],
          [
            120,
            0
          ],
          [
            90,
            60
          ],
          [
            0,
            60
          ]
        ],
        "viewBox": "-10 -10 140 80",
        "area": 6300,
        "isNone": false
      },
      "E": {
        "key": "E",
        "label": "Keine der Antwortmöglichkeiten ist richtig",
        "polygon": null,
        "viewBox": "0 0 100 100",
        "isNone": true
      }
    },
    "canvasViewBox": "0 0 440 140",
    "targetFigure": {
      "polygon": [
        [
          0,
          0
        ],
        [
          120,
          0
        ],
        [
          90,
          60
        ],
        [
          30,
          60
        ]
      ],
      "viewBox": "-10 -10 140 80",
      "area": 5400
    },
    "assembly": [
      {
        "pieceId": "p1",
        "rotationDeg": 0,
        "translation": [
          0,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p2",
        "rotationDeg": 0,
        "translation": [
          0,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p3",
        "rotationDeg": 0,
        "translation": [
          0,
          0
        ],
        "isReflection": false
      }
    ],
    "explanation": "Die drei Dreiecke fügen sich lückenlos zu dem gleichschenkligen Trapez (Figur B) mit der langen Grundseite 120 und der kurzen Deckseite 60 zusammen. Die Dreiecke 1 und 2 bilden die untere Basis, während Dreieck 3 die obere Deckseite komplettiert. Figur A ist ein Rechteck mit falschem Flächenprofil; Figur C besitzt eine schräge Seitenneigung (Parallelogramm), die den symmetrischen Außenwinkeln widerspricht.",
    "metadata": {
      "pieceCount": 3,
      "shapeFamily": "Trapez",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim1-q03",
    "simulationId": "fz-sim1",
    "questionNumber": 3,
    "difficulty": "Leicht",
    "correctAnswer": "C",
    "questionText": "Welche der folgenden Figuren lässt sich aus den gegebenen Teilen zusammensetzen?",
    "estimatedTimeSeconds": 80,
    "pieces": [
      {
        "id": "p1",
        "points": [
          [
            0,
            0
          ],
          [
            50,
            0
          ],
          [
            0,
            50
          ]
        ],
        "canvasPoints": [
          [
            48,
            45
          ],
          [
            98,
            45
          ],
          [
            48,
            95
          ]
        ],
        "area": 1250
      },
      {
        "id": "p2",
        "points": [
          [
            50,
            0
          ],
          [
            100,
            0
          ],
          [
            50,
            50
          ]
        ],
        "canvasPoints": [
          [
            196,
            45
          ],
          [
            196,
            95
          ],
          [
            146,
            45
          ]
        ],
        "area": 1250
      },
      {
        "id": "p3",
        "points": [
          [
            0,
            50
          ],
          [
            50,
            50
          ],
          [
            0,
            100
          ]
        ],
        "canvasPoints": [
          [
            294,
            95
          ],
          [
            244,
            95
          ],
          [
            294,
            45
          ]
        ],
        "area": 1250
      },
      {
        "id": "p4",
        "points": [
          [
            50,
            0
          ],
          [
            50,
            50
          ],
          [
            0,
            50
          ]
        ],
        "canvasPoints": [
          [
            342,
            45
          ],
          [
            392,
            45
          ],
          [
            392,
            95
          ]
        ],
        "area": 1250
      }
    ],
    "options": {
      "A": {
        "key": "A",
        "label": "Figur A",
        "polygon": [
          [
            0,
            0
          ],
          [
            70.7,
            0
          ],
          [
            70.7,
            70.7
          ],
          [
            0,
            70.7
          ]
        ],
        "viewBox": "-10 -10 90 90",
        "area": 4998.490000000001,
        "isNone": false
      },
      "B": {
        "key": "B",
        "label": "Figur B",
        "polygon": [
          [
            0,
            0
          ],
          [
            100,
            0
          ],
          [
            50,
            86.6
          ]
        ],
        "viewBox": "-10 -10 120 106",
        "area": 4330,
        "isNone": false
      },
      "C": {
        "key": "C",
        "label": "Figur C",
        "polygon": [
          [
            0,
            0
          ],
          [
            100,
            0
          ],
          [
            0,
            100
          ]
        ],
        "viewBox": "-10 -10 120 120",
        "area": 5000,
        "isNone": false
      },
      "D": {
        "key": "D",
        "label": "Figur D",
        "polygon": [
          [
            0,
            0
          ],
          [
            100,
            0
          ],
          [
            100,
            50
          ],
          [
            0,
            50
          ]
        ],
        "viewBox": "-10 -10 120 70",
        "area": 5000,
        "isNone": false
      },
      "E": {
        "key": "E",
        "label": "Keine der Antwortmöglichkeiten ist richtig",
        "polygon": null,
        "viewBox": "0 0 100 100",
        "isNone": true
      }
    },
    "canvasViewBox": "0 0 440 140",
    "targetFigure": {
      "polygon": [
        [
          0,
          0
        ],
        [
          100,
          0
        ],
        [
          0,
          100
        ]
      ],
      "viewBox": "-10 -10 120 120",
      "area": 5000
    },
    "assembly": [
      {
        "pieceId": "p1",
        "rotationDeg": 0,
        "translation": [
          0,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p2",
        "rotationDeg": 0,
        "translation": [
          0,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p3",
        "rotationDeg": 0,
        "translation": [
          0,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p4",
        "rotationDeg": 0,
        "translation": [
          0,
          0
        ],
        "isReflection": false
      }
    ],
    "explanation": "Vier kongruente gleichschenklig-rechtwinklige Dreiecke lassen sich zu einem doppelt so großen gleichschenklig-rechtwinkligen Dreieck mit Kathetenlänge 100 (Figur C) anordnen (Drei Dreiecke bilden die Außenecken, das vierte das zentrale umgedrehte Innenfeld). Figur B hat Innenwinkel von 60° (gleichseitig), was mit den 90°/45°-Winkeln der Teile unmöglich ist.",
    "metadata": {
      "pieceCount": 4,
      "shapeFamily": "Dreieck",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim1-q04",
    "simulationId": "fz-sim1",
    "questionNumber": 4,
    "difficulty": "Leicht",
    "correctAnswer": "E",
    "questionText": "Welche der folgenden Figuren lässt sich aus den gegebenen Teilen zusammensetzen?",
    "estimatedTimeSeconds": 80,
    "pieces": [
      {
        "id": "p1",
        "points": [
          [
            0,
            0
          ],
          [
            60,
            0
          ],
          [
            60,
            30
          ],
          [
            0,
            30
          ]
        ],
        "canvasPoints": [
          [
            46,
            55
          ],
          [
            106,
            55
          ],
          [
            106,
            85
          ],
          [
            46,
            85
          ]
        ],
        "area": 1800
      },
      {
        "id": "p2",
        "points": [
          [
            0,
            0
          ],
          [
            60,
            0
          ],
          [
            60,
            30
          ],
          [
            0,
            30
          ]
        ],
        "canvasPoints": [
          [
            182,
            40
          ],
          [
            182,
            100
          ],
          [
            152,
            100
          ],
          [
            152,
            40
          ]
        ],
        "area": 1800
      },
      {
        "id": "p3",
        "points": [
          [
            0,
            0
          ],
          [
            60,
            0
          ],
          [
            0,
            30
          ]
        ],
        "canvasPoints": [
          [
            228,
            55
          ],
          [
            288,
            55
          ],
          [
            228,
            85
          ]
        ],
        "area": 900
      },
      {
        "id": "p4",
        "points": [
          [
            0,
            0
          ],
          [
            60,
            0
          ],
          [
            60,
            30
          ]
        ],
        "canvasPoints": [
          [
            394,
            85
          ],
          [
            334,
            85
          ],
          [
            334,
            55
          ]
        ],
        "area": 900
      }
    ],
    "options": {
      "A": {
        "key": "A",
        "label": "Figur A",
        "polygon": [
          [
            0,
            0
          ],
          [
            73.5,
            0
          ],
          [
            73.5,
            73.5
          ],
          [
            0,
            73.5
          ]
        ],
        "viewBox": "-10 -10 95 95",
        "area": 5402.25,
        "isNone": false
      },
      "B": {
        "key": "B",
        "label": "Figur B",
        "polygon": [
          [
            0,
            0
          ],
          [
            80,
            0
          ],
          [
            90,
            50
          ],
          [
            40,
            80
          ],
          [
            -10,
            50
          ]
        ],
        "viewBox": "-20 -10 120 100",
        "area": 6000,
        "isNone": false
      },
      "C": {
        "key": "C",
        "label": "Figur C",
        "polygon": [
          [
            0,
            0
          ],
          [
            100,
            0
          ],
          [
            70,
            60
          ],
          [
            30,
            60
          ]
        ],
        "viewBox": "-10 -10 120 80",
        "area": 4200,
        "isNone": false
      },
      "D": {
        "key": "D",
        "label": "Figur D",
        "polygon": [
          [
            0,
            0
          ],
          [
            80,
            0
          ],
          [
            100,
            40
          ],
          [
            60,
            60
          ],
          [
            0,
            60
          ]
        ],
        "viewBox": "-10 -10 120 80",
        "area": 5200,
        "isNone": false
      },
      "E": {
        "key": "E",
        "label": "Keine der Antwortmöglichkeiten ist richtig",
        "polygon": null,
        "viewBox": "0 0 100 100",
        "isNone": true
      }
    },
    "canvasViewBox": "0 0 440 140",
    "targetFigure": {
      "polygon": [
        [
          0,
          0
        ],
        [
          120,
          0
        ],
        [
          120,
          45
        ],
        [
          0,
          45
        ]
      ],
      "viewBox": "-10 -10 140 65",
      "area": 5400
    },
    "assembly": [
      {
        "pieceId": "p1",
        "rotationDeg": 0,
        "translation": [
          0,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p2",
        "rotationDeg": 0,
        "translation": [
          0,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p3",
        "rotationDeg": 0,
        "translation": [
          0,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p4",
        "rotationDeg": 0,
        "translation": [
          0,
          0
        ],
        "isReflection": false
      }
    ],
    "explanation": "Keine der Figuren A–D kann aus den 4 Teilen zusammengesetzt werden: Die beiden Rechtecke (60×30) und die beiden rechtwinkligen Dreiecke (Katheten 60 und 30) haben eine Gesamtfläche von 5400. Figur C hat eine Fläche von nur 3900 (Flächendefizit). Figur A ist ein Quadrat, dessen Seitenlänge (~73,5) nicht mit den Teillängen 30 oder 60 darstellbar ist. Figur B und D besitzen inkompatible Kantenwinkel. Daher ist Antwort E ('Keine der Antwortmöglichkeiten ist richtig') korrekt.",
    "metadata": {
      "pieceCount": 4,
      "shapeFamily": "Keine",
      "requiresRotation": true,
      "isEAnswer": true
    }
  },
  {
    "id": "fz-sim1-q05",
    "simulationId": "fz-sim1",
    "questionNumber": 5,
    "difficulty": "Mittel",
    "correctAnswer": "B",
    "questionText": "Welche der folgenden Figuren lässt sich aus den gegebenen Teilen zusammensetzen?",
    "estimatedTimeSeconds": 80,
    "pieces": [
      {
        "id": "p1",
        "points": [
          [
            0,
            0
          ],
          [
            30,
            0
          ],
          [
            30,
            60
          ]
        ],
        "canvasPoints": [
          [
            52,
            40
          ],
          [
            82,
            40
          ],
          [
            82,
            100
          ]
        ],
        "area": 900
      },
      {
        "id": "p2",
        "points": [
          [
            80,
            0
          ],
          [
            110,
            60
          ],
          [
            80,
            60
          ]
        ],
        "canvasPoints": [
          [
            164,
            100
          ],
          [
            134,
            40
          ],
          [
            164,
            40
          ]
        ],
        "area": 900
      },
      {
        "id": "p3",
        "points": [
          [
            30,
            0
          ],
          [
            80,
            0
          ],
          [
            80,
            60
          ]
        ],
        "canvasPoints": [
          [
            276,
            45
          ],
          [
            276,
            95
          ],
          [
            216,
            95
          ]
        ],
        "area": 1500
      },
      {
        "id": "p4",
        "points": [
          [
            30,
            0
          ],
          [
            80,
            60
          ],
          [
            30,
            60
          ]
        ],
        "canvasPoints": [
          [
            328,
            95
          ],
          [
            388,
            45
          ],
          [
            388,
            95
          ]
        ],
        "area": 1500
      }
    ],
    "options": {
      "A": {
        "key": "A",
        "label": "Figur A",
        "polygon": [
          [
            0,
            0
          ],
          [
            80,
            0
          ],
          [
            80,
            60
          ],
          [
            0,
            60
          ]
        ],
        "viewBox": "-10 -10 100 80",
        "area": 4800,
        "isNone": false
      },
      "B": {
        "key": "B",
        "label": "Figur B",
        "polygon": [
          [
            0,
            0
          ],
          [
            80,
            0
          ],
          [
            110,
            60
          ],
          [
            30,
            60
          ]
        ],
        "viewBox": "-10 -10 130 80",
        "area": 4800,
        "isNone": false
      },
      "C": {
        "key": "C",
        "label": "Figur C",
        "polygon": [
          [
            0,
            0
          ],
          [
            110,
            0
          ],
          [
            80,
            60
          ],
          [
            30,
            60
          ]
        ],
        "viewBox": "-10 -10 130 80",
        "area": 4800,
        "isNone": false
      },
      "D": {
        "key": "D",
        "label": "Figur D",
        "polygon": [
          [
            0,
            0
          ],
          [
            70,
            0
          ],
          [
            105,
            60
          ],
          [
            35,
            60
          ]
        ],
        "viewBox": "-10 -10 125 80",
        "area": 4200,
        "isNone": false
      },
      "E": {
        "key": "E",
        "label": "Keine der Antwortmöglichkeiten ist richtig",
        "polygon": null,
        "viewBox": "0 0 100 100",
        "isNone": true
      }
    },
    "canvasViewBox": "0 0 440 140",
    "targetFigure": {
      "polygon": [
        [
          0,
          0
        ],
        [
          80,
          0
        ],
        [
          110,
          60
        ],
        [
          30,
          60
        ]
      ],
      "viewBox": "-10 -10 130 80",
      "area": 4800
    },
    "assembly": [
      {
        "pieceId": "p1",
        "rotationDeg": 0,
        "translation": [
          0,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p2",
        "rotationDeg": 0,
        "translation": [
          0,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p3",
        "rotationDeg": 0,
        "translation": [
          0,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p4",
        "rotationDeg": 0,
        "translation": [
          0,
          0
        ],
        "isReflection": false
      }
    ],
    "explanation": "Die vier Dreiecke setzen sich zu dem Parallelogramm (Figur B) zusammen: Die beiden Dreiecke mit Katheten 50 und 60 bilden den mittleren 50×60-Rechteckbereich (entlang der Diagonale). An den Außenkanten ergänzen die beiden kleineren Dreiecke (Katheten 30 und 60) die schrägen parallelen Seitenflanken mit einem Versatz von 30 Einheiten. Bei Figur A (Rechteck) würden die schrägen Kanten nicht aufgehen; bei Figur C zeigt die Neigung nach innen.",
    "metadata": {
      "pieceCount": 4,
      "shapeFamily": "Parallelogramm",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim1-q06",
    "simulationId": "fz-sim1",
    "questionNumber": 6,
    "difficulty": "Mittel",
    "correctAnswer": "D",
    "questionText": "Welche der folgenden Figuren lässt sich aus den gegebenen Teilen zusammensetzen?",
    "estimatedTimeSeconds": 80,
    "pieces": [
      {
        "id": "p1",
        "points": [
          [
            0,
            0
          ],
          [
            40,
            0
          ],
          [
            40,
            40
          ],
          [
            0,
            40
          ]
        ],
        "canvasPoints": [
          [
            53,
            50
          ],
          [
            93,
            50
          ],
          [
            93,
            90
          ],
          [
            53,
            90
          ]
        ],
        "area": 1600
      },
      {
        "id": "p2",
        "points": [
          [
            40,
            0
          ],
          [
            80,
            0
          ],
          [
            80,
            40
          ],
          [
            40,
            40
          ]
        ],
        "canvasPoints": [
          [
            173.28,
            41
          ],
          [
            201.57,
            69.28
          ],
          [
            173.28,
            97.57
          ],
          [
            145,
            69.28
          ]
        ],
        "area": 1600
      },
      {
        "id": "p3",
        "points": [
          [
            0,
            40
          ],
          [
            40,
            40
          ],
          [
            40,
            80
          ]
        ],
        "canvasPoints": [
          [
            293.57,
            50
          ],
          [
            293.57,
            90
          ],
          [
            253.57,
            90
          ]
        ],
        "area": 800
      },
      {
        "id": "p4",
        "points": [
          [
            0,
            40
          ],
          [
            40,
            80
          ],
          [
            0,
            80
          ]
        ],
        "canvasPoints": [
          [
            385.57,
            90
          ],
          [
            345.57,
            50
          ],
          [
            385.57,
            50
          ]
        ],
        "area": 800
      }
    ],
    "options": {
      "A": {
        "key": "A",
        "label": "Figur A",
        "polygon": [
          [
            20,
            0
          ],
          [
            60,
            0
          ],
          [
            60,
            40
          ],
          [
            80,
            40
          ],
          [
            80,
            80
          ],
          [
            0,
            80
          ],
          [
            0,
            40
          ],
          [
            20,
            40
          ]
        ],
        "viewBox": "-10 -10 100 100",
        "area": 4800,
        "isNone": false
      },
      "B": {
        "key": "B",
        "label": "Figur B",
        "polygon": [
          [
            0,
            0
          ],
          [
            80,
            0
          ],
          [
            80,
            25
          ],
          [
            50,
            25
          ],
          [
            50,
            55
          ],
          [
            25,
            55
          ],
          [
            25,
            80
          ],
          [
            0,
            80
          ]
        ],
        "viewBox": "-10 -10 100 100",
        "area": 4125,
        "isNone": false
      },
      "C": {
        "key": "C",
        "label": "Figur C",
        "polygon": [
          [
            0,
            0
          ],
          [
            80,
            0
          ],
          [
            80,
            60
          ],
          [
            0,
            60
          ]
        ],
        "viewBox": "-10 -10 100 80",
        "area": 4800,
        "isNone": false
      },
      "D": {
        "key": "D",
        "label": "Figur D",
        "polygon": [
          [
            0,
            0
          ],
          [
            80,
            0
          ],
          [
            80,
            40
          ],
          [
            40,
            40
          ],
          [
            40,
            80
          ],
          [
            0,
            80
          ]
        ],
        "viewBox": "-10 -10 100 100",
        "area": 4800,
        "isNone": false
      },
      "E": {
        "key": "E",
        "label": "Keine der Antwortmöglichkeiten ist richtig",
        "polygon": null,
        "viewBox": "0 0 100 100",
        "isNone": true
      }
    },
    "canvasViewBox": "0 0 440 140",
    "targetFigure": {
      "polygon": [
        [
          0,
          0
        ],
        [
          80,
          0
        ],
        [
          80,
          40
        ],
        [
          40,
          40
        ],
        [
          40,
          80
        ],
        [
          0,
          80
        ]
      ],
      "viewBox": "-10 -10 100 100",
      "area": 4800
    },
    "assembly": [
      {
        "pieceId": "p1",
        "rotationDeg": 0,
        "translation": [
          0,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p2",
        "rotationDeg": 0,
        "translation": [
          0,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p3",
        "rotationDeg": 0,
        "translation": [
          0,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p4",
        "rotationDeg": 0,
        "translation": [
          0,
          0
        ],
        "isReflection": false
      }
    ],
    "explanation": "Die beiden Quadrate (40×40) und die beiden rechtwinkligen Dreiecke (Katheten 40) bilden exakt die L-förmige Figur (Figur D): Die beiden Dreiecke setzen sich an ihrer Hypotenuse zu einem dritten Quadrat (40×40) zusammen. Drei 40×40-Quadrate in L-Anordnung formen die typische 6-eckige Winkelgeometrie mit Schenkellängen 80 und Kantenbreite 40.",
    "metadata": {
      "pieceCount": 4,
      "shapeFamily": "L-Form / Vieleck",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim1-q07",
    "simulationId": "fz-sim1",
    "questionNumber": 7,
    "difficulty": "Mittel",
    "correctAnswer": "A",
    "questionText": "Welche der folgenden Figuren lässt sich aus den gegebenen Teilen zusammensetzen?",
    "estimatedTimeSeconds": 80,
    "pieces": [
      {
        "id": "p1",
        "points": [
          [
            0,
            0
          ],
          [
            50,
            0
          ],
          [
            50,
            50
          ],
          [
            0,
            50
          ]
        ],
        "canvasPoints": [
          [
            36,
            45
          ],
          [
            86,
            45
          ],
          [
            86,
            95
          ],
          [
            36,
            95
          ]
        ],
        "area": 2500
      },
      {
        "id": "p2",
        "points": [
          [
            50,
            50
          ],
          [
            100,
            50
          ],
          [
            100,
            100
          ],
          [
            50,
            100
          ]
        ],
        "canvasPoints": [
          [
            155.36,
            34
          ],
          [
            190.71,
            69.36
          ],
          [
            155.36,
            104.71
          ],
          [
            120,
            69.36
          ]
        ],
        "area": 2500
      },
      {
        "id": "p3",
        "points": [
          [
            0,
            50
          ],
          [
            50,
            50
          ],
          [
            50,
            100
          ],
          [
            0,
            100
          ]
        ],
        "canvasPoints": [
          [
            224.71,
            45
          ],
          [
            274.71,
            45
          ],
          [
            274.71,
            95
          ],
          [
            224.71,
            95
          ]
        ],
        "area": 2500
      },
      {
        "id": "p4",
        "points": [
          [
            50,
            0
          ],
          [
            100,
            0
          ],
          [
            50,
            50
          ]
        ],
        "canvasPoints": [
          [
            358.71,
            45
          ],
          [
            358.71,
            95
          ],
          [
            308.71,
            45
          ]
        ],
        "area": 1250
      },
      {
        "id": "p5",
        "points": [
          [
            100,
            0
          ],
          [
            100,
            50
          ],
          [
            50,
            50
          ]
        ],
        "canvasPoints": [
          [
            392.71,
            95
          ],
          [
            392.71,
            45
          ],
          [
            442.71,
            45
          ]
        ],
        "area": 1250
      }
    ],
    "options": {
      "A": {
        "key": "A",
        "label": "Figur A",
        "polygon": [
          [
            0,
            0
          ],
          [
            100,
            0
          ],
          [
            100,
            100
          ],
          [
            0,
            100
          ]
        ],
        "viewBox": "-10 -10 120 120",
        "area": 10000,
        "isNone": false
      },
      "B": {
        "key": "B",
        "label": "Figur B",
        "polygon": [
          [
            0,
            0
          ],
          [
            125,
            0
          ],
          [
            125,
            80
          ],
          [
            0,
            80
          ]
        ],
        "viewBox": "-10 -10 145 100",
        "area": 10000,
        "isNone": false
      },
      "C": {
        "key": "C",
        "label": "Figur C",
        "polygon": [
          [
            25,
            0
          ],
          [
            75,
            0
          ],
          [
            100,
            50
          ],
          [
            50,
            100
          ],
          [
            0,
            50
          ]
        ],
        "viewBox": "-10 -10 120 120",
        "area": 6250,
        "isNone": false
      },
      "D": {
        "key": "D",
        "label": "Figur D",
        "polygon": [
          [
            30,
            0
          ],
          [
            70,
            0
          ],
          [
            100,
            30
          ],
          [
            100,
            70
          ],
          [
            70,
            100
          ],
          [
            30,
            100
          ],
          [
            0,
            70
          ],
          [
            0,
            30
          ]
        ],
        "viewBox": "-10 -10 120 120",
        "area": 8200,
        "isNone": false
      },
      "E": {
        "key": "E",
        "label": "Keine der Antwortmöglichkeiten ist richtig",
        "polygon": null,
        "viewBox": "0 0 100 100",
        "isNone": true
      }
    },
    "canvasViewBox": "0 0 480 140",
    "targetFigure": {
      "polygon": [
        [
          0,
          0
        ],
        [
          100,
          0
        ],
        [
          100,
          100
        ],
        [
          0,
          100
        ]
      ],
      "viewBox": "-10 -10 120 120",
      "area": 10000
    },
    "assembly": [
      {
        "pieceId": "p1",
        "rotationDeg": 0,
        "translation": [
          0,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p2",
        "rotationDeg": 0,
        "translation": [
          0,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p3",
        "rotationDeg": 0,
        "translation": [
          0,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p4",
        "rotationDeg": 0,
        "translation": [
          0,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p5",
        "rotationDeg": 0,
        "translation": [
          0,
          0
        ],
        "isReflection": false
      }
    ],
    "explanation": "Drei Quadrate mit Kantenlänge 50 und zwei rechtwinklige Dreiecke mit Katheten 50 fügen sich exakt zu einem großen 100×100-Quadrat (Figur A) zusammen. Die beiden Dreiecke ergänzen sich an ihrer Hypotenuse lückenlos zum vierten 50×50-Quadranten. Zusammen mit den drei vorgegebenen Quadraten entsteht das 2×2-Raster des Gesamtquadrats.",
    "metadata": {
      "pieceCount": 5,
      "shapeFamily": "Quadrat",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim1-q08",
    "simulationId": "fz-sim1",
    "questionNumber": 8,
    "difficulty": "Mittel",
    "correctAnswer": "C",
    "questionText": "Welche der folgenden Figuren lässt sich aus den gegebenen Teilen zusammensetzen?",
    "estimatedTimeSeconds": 80,
    "pieces": [
      {
        "id": "p1",
        "points": [
          [
            0,
            0
          ],
          [
            40,
            0
          ],
          [
            40,
            30
          ],
          [
            0,
            30
          ]
        ],
        "canvasPoints": [
          [
            50,
            55
          ],
          [
            90,
            55
          ],
          [
            90,
            85
          ],
          [
            50,
            85
          ]
        ],
        "area": 1200
      },
      {
        "id": "p2",
        "points": [
          [
            0,
            30
          ],
          [
            40,
            30
          ],
          [
            40,
            60
          ],
          [
            0,
            60
          ]
        ],
        "canvasPoints": [
          [
            170,
            50
          ],
          [
            170,
            90
          ],
          [
            140,
            90
          ],
          [
            140,
            50
          ]
        ],
        "area": 1200
      },
      {
        "id": "p3",
        "points": [
          [
            40,
            0
          ],
          [
            80,
            0
          ],
          [
            80,
            60
          ],
          [
            40,
            60
          ]
        ],
        "canvasPoints": [
          [
            220,
            40
          ],
          [
            260,
            40
          ],
          [
            260,
            100
          ],
          [
            220,
            100
          ]
        ],
        "area": 2400
      },
      {
        "id": "p4",
        "points": [
          [
            0,
            60
          ],
          [
            40,
            60
          ],
          [
            40,
            90
          ]
        ],
        "canvasPoints": [
          [
            310,
            55
          ],
          [
            350,
            55
          ],
          [
            350,
            85
          ]
        ],
        "area": 600
      },
      {
        "id": "p5",
        "points": [
          [
            40,
            60
          ],
          [
            80,
            60
          ],
          [
            40,
            90
          ]
        ],
        "canvasPoints": [
          [
            430,
            50
          ],
          [
            430,
            90
          ],
          [
            400,
            50
          ]
        ],
        "area": 600
      }
    ],
    "options": {
      "A": {
        "key": "A",
        "label": "Figur A",
        "polygon": [
          [
            20,
            0
          ],
          [
            60,
            0
          ],
          [
            80,
            45
          ],
          [
            60,
            90
          ],
          [
            20,
            90
          ],
          [
            0,
            45
          ]
        ],
        "viewBox": "-10 -10 100 110",
        "area": 5400,
        "isNone": false
      },
      "B": {
        "key": "B",
        "label": "Figur B",
        "polygon": [
          [
            0,
            20
          ],
          [
            50,
            20
          ],
          [
            50,
            0
          ],
          [
            90,
            45
          ],
          [
            50,
            90
          ],
          [
            50,
            70
          ],
          [
            0,
            70
          ]
        ],
        "viewBox": "-10 -10 110 110",
        "area": 4300,
        "isNone": false
      },
      "C": {
        "key": "C",
        "label": "Figur C",
        "polygon": [
          [
            0,
            0
          ],
          [
            80,
            0
          ],
          [
            80,
            60
          ],
          [
            40,
            90
          ],
          [
            0,
            60
          ]
        ],
        "viewBox": "-10 -10 100 110",
        "area": 6000,
        "isNone": false
      },
      "D": {
        "key": "D",
        "label": "Figur D",
        "polygon": [
          [
            0,
            0
          ],
          [
            100,
            0
          ],
          [
            80,
            60
          ],
          [
            20,
            60
          ]
        ],
        "viewBox": "-10 -10 120 80",
        "area": 4800,
        "isNone": false
      },
      "E": {
        "key": "E",
        "label": "Keine der Antwortmöglichkeiten ist richtig",
        "polygon": null,
        "viewBox": "0 0 100 100",
        "isNone": true
      }
    },
    "canvasViewBox": "0 0 480 140",
    "targetFigure": {
      "polygon": [
        [
          0,
          0
        ],
        [
          80,
          0
        ],
        [
          80,
          60
        ],
        [
          40,
          90
        ],
        [
          0,
          60
        ]
      ],
      "viewBox": "-10 -10 100 110",
      "area": 6000
    },
    "assembly": [
      {
        "pieceId": "p1",
        "rotationDeg": 0,
        "translation": [
          0,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p2",
        "rotationDeg": 0,
        "translation": [
          0,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p3",
        "rotationDeg": 0,
        "translation": [
          0,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p4",
        "rotationDeg": 0,
        "translation": [
          0,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p5",
        "rotationDeg": 0,
        "translation": [
          0,
          0
        ],
        "isReflection": false
      }
    ],
    "explanation": "Die fünf Teile setzen sich zu dem Haus-Fünfeck (Figur C) zusammen: Die beiden 40×30-Rechtecke bilden übereinandergelegt die linke Hälfte des Unterbaus (40×60). Zusammen mit dem rechten 40×60-Rechteck entsteht der vollständige 80×60-Grundkörper. Die beiden rechtwinkligen Dreiecke (Katheten 40 und 30) treffen sich an der Mittelachse bei x = 40 und bilden die symmetrische Dachspitze mit Höhe 90.",
    "metadata": {
      "pieceCount": 5,
      "shapeFamily": "Fünfeck",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim1-q09",
    "simulationId": "fz-sim1",
    "questionNumber": 9,
    "difficulty": "Mittel",
    "correctAnswer": "E",
    "questionText": "Welche der folgenden Figuren lässt sich aus den gegebenen Teilen zusammensetzen?",
    "estimatedTimeSeconds": 80,
    "pieces": [
      {
        "id": "p1",
        "points": [
          [
            0,
            0
          ],
          [
            40,
            0
          ],
          [
            40,
            40
          ],
          [
            0,
            40
          ]
        ],
        "canvasPoints": [
          [
            46,
            50
          ],
          [
            86,
            50
          ],
          [
            86,
            90
          ],
          [
            46,
            90
          ]
        ],
        "area": 1600
      },
      {
        "id": "p2",
        "points": [
          [
            0,
            0
          ],
          [
            60,
            0
          ],
          [
            60,
            30
          ],
          [
            0,
            30
          ]
        ],
        "canvasPoints": [
          [
            162,
            40
          ],
          [
            162,
            100
          ],
          [
            132,
            100
          ],
          [
            132,
            40
          ]
        ],
        "area": 1800
      },
      {
        "id": "p3",
        "points": [
          [
            0,
            0
          ],
          [
            40,
            0
          ],
          [
            0,
            30
          ]
        ],
        "canvasPoints": [
          [
            208,
            55
          ],
          [
            248,
            55
          ],
          [
            208,
            85
          ]
        ],
        "area": 600
      },
      {
        "id": "p4",
        "points": [
          [
            0,
            0
          ],
          [
            30,
            0
          ],
          [
            0,
            30
          ]
        ],
        "canvasPoints": [
          [
            315.21,
            59
          ],
          [
            336.43,
            80.21
          ],
          [
            294,
            80.21
          ]
        ],
        "area": 450
      },
      {
        "id": "p5",
        "points": [
          [
            0,
            0
          ],
          [
            50,
            0
          ],
          [
            30,
            30
          ],
          [
            0,
            30
          ]
        ],
        "canvasPoints": [
          [
            432.43,
            85
          ],
          [
            382.43,
            85
          ],
          [
            402.43,
            55
          ],
          [
            432.43,
            55
          ]
        ],
        "area": 1200
      }
    ],
    "options": {
      "A": {
        "key": "A",
        "label": "Figur A",
        "polygon": [
          [
            25,
            0
          ],
          [
            75,
            0
          ],
          [
            100,
            43.3
          ],
          [
            75,
            86.6
          ],
          [
            25,
            86.6
          ],
          [
            0,
            43.3
          ]
        ],
        "viewBox": "-10 -10 120 105",
        "area": 6495,
        "isNone": false
      },
      "B": {
        "key": "B",
        "label": "Figur B",
        "polygon": [
          [
            0,
            0
          ],
          [
            90,
            0
          ],
          [
            90,
            62.8
          ],
          [
            0,
            62.8
          ]
        ],
        "viewBox": "-10 -10 110 85",
        "area": 5652,
        "isNone": false
      },
      "C": {
        "key": "C",
        "label": "Figur C",
        "polygon": [
          [
            20,
            0
          ],
          [
            60,
            0
          ],
          [
            80,
            20
          ],
          [
            80,
            60
          ],
          [
            60,
            80
          ],
          [
            20,
            80
          ],
          [
            0,
            60
          ],
          [
            0,
            20
          ]
        ],
        "viewBox": "-10 -10 100 100",
        "area": 5600,
        "isNone": false
      },
      "D": {
        "key": "D",
        "label": "Figur D",
        "polygon": [
          [
            0,
            0
          ],
          [
            70,
            0
          ],
          [
            90,
            50
          ],
          [
            20,
            50
          ]
        ],
        "viewBox": "-10 -10 110 70",
        "area": 3500,
        "isNone": false
      },
      "E": {
        "key": "E",
        "label": "Keine der Antwortmöglichkeiten ist richtig",
        "polygon": null,
        "viewBox": "0 0 100 100",
        "isNone": true
      }
    },
    "canvasViewBox": "0 0 480 140",
    "targetFigure": {
      "polygon": [
        [
          0,
          0
        ],
        [
          100,
          0
        ],
        [
          100,
          56.5
        ],
        [
          0,
          56.5
        ]
      ],
      "viewBox": "-10 -10 120 75",
      "area": 5650
    },
    "assembly": [
      {
        "pieceId": "p1",
        "rotationDeg": 0,
        "translation": [
          0,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p2",
        "rotationDeg": 0,
        "translation": [
          0,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p3",
        "rotationDeg": 0,
        "translation": [
          0,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p4",
        "rotationDeg": 0,
        "translation": [
          0,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p5",
        "rotationDeg": 0,
        "translation": [
          0,
          0
        ],
        "isReflection": false
      }
    ],
    "explanation": "Keine der Figuren A–D lässt sich aus den fünf Teilen ohne Spiegelung oder Überlappung zusammensetzen: Die Teile besitzen überwiegend 90°- und 45°-Winkel sowie eine Gesamtfläche von 5650. Figur A erfordert 120°-Innenwinkel, die mit den gegebenen Teilen unmöglich formbar sind. Figur D hat ein massives Flächendefizit (A = 3500 statt 5650). Bei Figur B und C verhindern die inkompatiblen Kantenlängen des Trapezes und des 30×30-Dreiecks eine lückenlose Kachelung. Daher ist Antwort E richtig.",
    "metadata": {
      "pieceCount": 5,
      "shapeFamily": "Keine",
      "requiresRotation": true,
      "isEAnswer": true
    }
  },
  {
    "id": "fz-sim1-q10",
    "simulationId": "fz-sim1",
    "questionNumber": 10,
    "difficulty": "Mittel",
    "correctAnswer": "B",
    "questionText": "Welche der folgenden Figuren lässt sich aus den gegebenen Teilen zusammensetzen?",
    "estimatedTimeSeconds": 80,
    "pieces": [
      {
        "id": "p1",
        "points": [
          [
            20,
            0
          ],
          [
            50,
            0
          ],
          [
            50,
            60
          ],
          [
            20,
            60
          ]
        ],
        "canvasPoints": [
          [
            49,
            40
          ],
          [
            79,
            40
          ],
          [
            79,
            100
          ],
          [
            49,
            100
          ]
        ],
        "area": 1800
      },
      {
        "id": "p2",
        "points": [
          [
            50,
            0
          ],
          [
            80,
            0
          ],
          [
            80,
            60
          ],
          [
            50,
            60
          ]
        ],
        "canvasPoints": [
          [
            187,
            55
          ],
          [
            187,
            85
          ],
          [
            127,
            85
          ],
          [
            127,
            55
          ]
        ],
        "area": 1800
      },
      {
        "id": "p3",
        "points": [
          [
            20,
            0
          ],
          [
            20,
            30
          ],
          [
            0,
            30
          ]
        ],
        "canvasPoints": [
          [
            255,
            55
          ],
          [
            255,
            85
          ],
          [
            235,
            85
          ]
        ],
        "area": 300
      },
      {
        "id": "p4",
        "points": [
          [
            20,
            30
          ],
          [
            20,
            60
          ],
          [
            0,
            30
          ]
        ],
        "canvasPoints": [
          [
            303,
            85
          ],
          [
            303,
            55
          ],
          [
            323,
            85
          ]
        ],
        "area": 300
      },
      {
        "id": "p5",
        "points": [
          [
            80,
            0
          ],
          [
            100,
            30
          ],
          [
            80,
            60
          ]
        ],
        "canvasPoints": [
          [
            431,
            60
          ],
          [
            401,
            80
          ],
          [
            371,
            60
          ]
        ],
        "area": 600
      }
    ],
    "options": {
      "A": {
        "key": "A",
        "label": "Figur A",
        "polygon": [
          [
            50,
            0
          ],
          [
            100,
            30
          ],
          [
            50,
            60
          ],
          [
            0,
            30
          ]
        ],
        "viewBox": "-10 -10 120 80",
        "area": 3000,
        "isNone": false
      },
      "B": {
        "key": "B",
        "label": "Figur B",
        "polygon": [
          [
            20,
            0
          ],
          [
            80,
            0
          ],
          [
            100,
            30
          ],
          [
            80,
            60
          ],
          [
            20,
            60
          ],
          [
            0,
            30
          ]
        ],
        "viewBox": "-10 -10 120 80",
        "area": 4800,
        "isNone": false
      },
      "C": {
        "key": "C",
        "label": "Figur C",
        "polygon": [
          [
            0,
            0
          ],
          [
            80,
            0
          ],
          [
            80,
            60
          ],
          [
            0,
            60
          ]
        ],
        "viewBox": "-10 -10 100 80",
        "area": 4800,
        "isNone": false
      },
      "D": {
        "key": "D",
        "label": "Figur D",
        "polygon": [
          [
            20,
            0
          ],
          [
            80,
            0
          ],
          [
            100,
            20
          ],
          [
            100,
            40
          ],
          [
            80,
            60
          ],
          [
            20,
            60
          ],
          [
            0,
            40
          ],
          [
            0,
            20
          ]
        ],
        "viewBox": "-10 -10 120 80",
        "area": 5200,
        "isNone": false
      },
      "E": {
        "key": "E",
        "label": "Keine der Antwortmöglichkeiten ist richtig",
        "polygon": null,
        "viewBox": "0 0 100 100",
        "isNone": true
      }
    },
    "canvasViewBox": "0 0 480 140",
    "targetFigure": {
      "polygon": [
        [
          20,
          0
        ],
        [
          80,
          0
        ],
        [
          100,
          30
        ],
        [
          80,
          60
        ],
        [
          20,
          60
        ],
        [
          0,
          30
        ]
      ],
      "viewBox": "-10 -10 120 80",
      "area": 4800
    },
    "assembly": [
      {
        "pieceId": "p1",
        "rotationDeg": 0,
        "translation": [
          0,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p2",
        "rotationDeg": 0,
        "translation": [
          0,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p3",
        "rotationDeg": 0,
        "translation": [
          0,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p4",
        "rotationDeg": 0,
        "translation": [
          0,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p5",
        "rotationDeg": 0,
        "translation": [
          0,
          0
        ],
        "isReflection": false
      }
    ],
    "explanation": "Die Teile fügen sich exakt zu dem gestreckten Sechseck (Figur B) zusammen: Die beiden 30×60-Rechtecke bilden den zentralen 60×60-Körper. An der rechten Flanke schließt das Dreieck (Basis 60, Höhe 20) die rechte Spitze ab. An der linken Flanke bilden die beiden 20×30-Dreiecke zusammen die spiegelgleiche linke Spitze.",
    "metadata": {
      "pieceCount": 5,
      "shapeFamily": "Sechseck",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim1-q11",
    "simulationId": "fz-sim1",
    "questionNumber": 11,
    "difficulty": "Schwer",
    "correctAnswer": "D",
    "questionText": "Welche der folgenden Figuren lässt sich aus den gegebenen Teilen zusammensetzen?",
    "estimatedTimeSeconds": 80,
    "pieces": [
      {
        "id": "p1",
        "points": [
          [
            40,
            40
          ],
          [
            120,
            40
          ],
          [
            120,
            80
          ],
          [
            40,
            80
          ]
        ],
        "canvasPoints": [
          [
            41,
            50
          ],
          [
            121,
            50
          ],
          [
            121,
            90
          ],
          [
            41,
            90
          ]
        ],
        "area": 3200
      },
      {
        "id": "p2",
        "points": [
          [
            40,
            0
          ],
          [
            80,
            0
          ],
          [
            80,
            40
          ],
          [
            40,
            40
          ]
        ],
        "canvasPoints": [
          [
            189.28,
            41
          ],
          [
            217.57,
            69.28
          ],
          [
            189.28,
            97.57
          ],
          [
            161,
            69.28
          ]
        ],
        "area": 1600
      },
      {
        "id": "p3",
        "points": [
          [
            40,
            80
          ],
          [
            80,
            80
          ],
          [
            80,
            120
          ],
          [
            40,
            120
          ]
        ],
        "canvasPoints": [
          [
            257.57,
            50
          ],
          [
            297.57,
            50
          ],
          [
            297.57,
            90
          ],
          [
            257.57,
            90
          ]
        ],
        "area": 1600
      },
      {
        "id": "p4",
        "points": [
          [
            0,
            40
          ],
          [
            40,
            40
          ],
          [
            40,
            80
          ]
        ],
        "canvasPoints": [
          [
            377.57,
            50
          ],
          [
            377.57,
            90
          ],
          [
            337.57,
            90
          ]
        ],
        "area": 800
      },
      {
        "id": "p5",
        "points": [
          [
            0,
            40
          ],
          [
            40,
            80
          ],
          [
            0,
            80
          ]
        ],
        "canvasPoints": [
          [
            457.57,
            90
          ],
          [
            417.57,
            50
          ],
          [
            457.57,
            50
          ]
        ],
        "area": 800
      }
    ],
    "options": {
      "A": {
        "key": "A",
        "label": "Figur A",
        "polygon": [
          [
            0,
            0
          ],
          [
            80,
            0
          ],
          [
            80,
            20
          ],
          [
            60,
            20
          ],
          [
            60,
            60
          ],
          [
            80,
            60
          ],
          [
            80,
            80
          ],
          [
            0,
            80
          ],
          [
            0,
            60
          ],
          [
            20,
            60
          ],
          [
            20,
            20
          ],
          [
            0,
            20
          ]
        ],
        "viewBox": "-10 -10 100 100",
        "area": 4800,
        "isNone": false
      },
      "B": {
        "key": "B",
        "label": "Figur B",
        "polygon": [
          [
            0,
            0
          ],
          [
            100,
            0
          ],
          [
            100,
            80
          ],
          [
            0,
            80
          ]
        ],
        "viewBox": "-10 -10 120 100",
        "area": 8000,
        "isNone": false
      },
      "C": {
        "key": "C",
        "label": "Figur C",
        "polygon": [
          [
            0,
            0
          ],
          [
            89.4,
            0
          ],
          [
            89.4,
            89.4
          ],
          [
            0,
            89.4
          ]
        ],
        "viewBox": "-10 -10 110 110",
        "area": 7992.360000000001,
        "isNone": false
      },
      "D": {
        "key": "D",
        "label": "Figur D",
        "polygon": [
          [
            40,
            0
          ],
          [
            80,
            0
          ],
          [
            80,
            40
          ],
          [
            120,
            40
          ],
          [
            120,
            80
          ],
          [
            80,
            80
          ],
          [
            80,
            120
          ],
          [
            40,
            120
          ],
          [
            40,
            80
          ],
          [
            0,
            80
          ],
          [
            0,
            40
          ],
          [
            40,
            40
          ]
        ],
        "viewBox": "-10 -10 140 140",
        "area": 8000,
        "isNone": false
      },
      "E": {
        "key": "E",
        "label": "Keine der Antwortmöglichkeiten ist richtig",
        "polygon": null,
        "viewBox": "0 0 100 100",
        "isNone": true
      }
    },
    "canvasViewBox": "0 0 500 140",
    "targetFigure": {
      "polygon": [
        [
          40,
          0
        ],
        [
          80,
          0
        ],
        [
          80,
          40
        ],
        [
          120,
          40
        ],
        [
          120,
          80
        ],
        [
          80,
          80
        ],
        [
          80,
          120
        ],
        [
          40,
          120
        ],
        [
          40,
          80
        ],
        [
          0,
          80
        ],
        [
          0,
          40
        ],
        [
          40,
          40
        ]
      ],
      "viewBox": "-10 -10 140 140",
      "area": 8000
    },
    "assembly": [
      {
        "pieceId": "p1",
        "rotationDeg": 0,
        "translation": [
          0,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p2",
        "rotationDeg": 0,
        "translation": [
          0,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p3",
        "rotationDeg": 0,
        "translation": [
          0,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p4",
        "rotationDeg": 0,
        "translation": [
          0,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p5",
        "rotationDeg": 0,
        "translation": [
          0,
          0
        ],
        "isReflection": false
      }
    ],
    "explanation": "Die fünf Teile bilden das 12-eckige griechische Kreuz (Figur D): Das 80×40-Rechteck bildet den horizontalen Querbalken (Zentrum + rechter Arm). Die beiden 40×40-Quadrate bilden den oberen und unteren Arm. Die beiden rechtwinkligen 40×40-Dreiecke setzen sich an ihrer Hypotenuse zum linken Arm (40×40) zusammen. Figur A und B haben inkompatible Kantenfolgen.",
    "metadata": {
      "pieceCount": 5,
      "shapeFamily": "Kreuz-Vieleck",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim1-q12",
    "simulationId": "fz-sim1",
    "questionNumber": 12,
    "difficulty": "Schwer",
    "correctAnswer": "D",
    "questionText": "Welche der folgenden Figuren lässt sich aus den gegebenen Teilen zusammensetzen?",
    "estimatedTimeSeconds": 80,
    "pieces": [
      {
        "id": "p1",
        "points": [
          [
            30,
            30
          ],
          [
            70,
            30
          ],
          [
            70,
            70
          ],
          [
            30,
            70
          ]
        ],
        "canvasPoints": [
          [
            47,
            50
          ],
          [
            87,
            50
          ],
          [
            87,
            90
          ],
          [
            47,
            90
          ]
        ],
        "area": 1600
      },
      {
        "id": "p2",
        "points": [
          [
            30,
            0
          ],
          [
            70,
            0
          ],
          [
            70,
            30
          ],
          [
            30,
            30
          ]
        ],
        "canvasPoints": [
          [
            162,
            50
          ],
          [
            162,
            90
          ],
          [
            132,
            90
          ],
          [
            132,
            50
          ]
        ],
        "area": 1200
      },
      {
        "id": "p3",
        "points": [
          [
            30,
            70
          ],
          [
            70,
            70
          ],
          [
            70,
            100
          ],
          [
            30,
            100
          ]
        ],
        "canvasPoints": [
          [
            207,
            55
          ],
          [
            247,
            55
          ],
          [
            247,
            85
          ],
          [
            207,
            85
          ]
        ],
        "area": 1200
      },
      {
        "id": "p4",
        "points": [
          [
            0,
            30
          ],
          [
            30,
            0
          ],
          [
            30,
            100
          ],
          [
            0,
            70
          ]
        ],
        "canvasPoints": [
          [
            292,
            50
          ],
          [
            322,
            20
          ],
          [
            322,
            120
          ],
          [
            292,
            90
          ]
        ],
        "area": 2100
      },
      {
        "id": "p5",
        "points": [
          [
            70,
            0
          ],
          [
            100,
            30
          ],
          [
            70,
            30
          ]
        ],
        "canvasPoints": [
          [
            397,
            55
          ],
          [
            367,
            85
          ],
          [
            367,
            55
          ]
        ],
        "area": 450
      },
      {
        "id": "p6",
        "points": [
          [
            70,
            30
          ],
          [
            100,
            30
          ],
          [
            100,
            70
          ],
          [
            70,
            100
          ]
        ],
        "canvasPoints": [
          [
            472,
            105
          ],
          [
            442,
            105
          ],
          [
            442,
            65
          ],
          [
            472,
            35
          ]
        ],
        "area": 1650
      }
    ],
    "options": {
      "A": {
        "key": "A",
        "label": "Figur A",
        "polygon": [
          [
            20,
            0
          ],
          [
            60,
            0
          ],
          [
            90,
            30
          ],
          [
            90,
            70
          ],
          [
            60,
            100
          ],
          [
            20,
            100
          ],
          [
            0,
            80
          ],
          [
            0,
            20
          ]
        ],
        "viewBox": "-10 -10 110 120",
        "area": 7700,
        "isNone": false
      },
      "B": {
        "key": "B",
        "label": "Figur B",
        "polygon": [
          [
            0,
            0
          ],
          [
            100,
            0
          ],
          [
            100,
            82
          ],
          [
            0,
            82
          ]
        ],
        "viewBox": "-10 -10 120 100",
        "area": 8200,
        "isNone": false
      },
      "C": {
        "key": "C",
        "label": "Figur C",
        "polygon": [
          [
            30,
            0
          ],
          [
            70,
            0
          ],
          [
            100,
            50
          ],
          [
            70,
            100
          ],
          [
            30,
            100
          ],
          [
            0,
            50
          ]
        ],
        "viewBox": "-10 -10 120 120",
        "area": 7000,
        "isNone": false
      },
      "D": {
        "key": "D",
        "label": "Figur D",
        "polygon": [
          [
            30,
            0
          ],
          [
            70,
            0
          ],
          [
            100,
            30
          ],
          [
            100,
            70
          ],
          [
            70,
            100
          ],
          [
            30,
            100
          ],
          [
            0,
            70
          ],
          [
            0,
            30
          ]
        ],
        "viewBox": "-10 -10 120 120",
        "area": 8200,
        "isNone": false
      },
      "E": {
        "key": "E",
        "label": "Keine der Antwortmöglichkeiten ist richtig",
        "polygon": null,
        "viewBox": "0 0 100 100",
        "isNone": true
      }
    },
    "canvasViewBox": "0 0 520 140",
    "targetFigure": {
      "polygon": [
        [
          30,
          0
        ],
        [
          70,
          0
        ],
        [
          100,
          30
        ],
        [
          100,
          70
        ],
        [
          70,
          100
        ],
        [
          30,
          100
        ],
        [
          0,
          70
        ],
        [
          0,
          30
        ]
      ],
      "viewBox": "-10 -10 120 120",
      "area": 8200
    },
    "assembly": [
      {
        "pieceId": "p1",
        "rotationDeg": 0,
        "translation": [
          0,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p2",
        "rotationDeg": 0,
        "translation": [
          0,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p3",
        "rotationDeg": 0,
        "translation": [
          0,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p4",
        "rotationDeg": 0,
        "translation": [
          0,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p5",
        "rotationDeg": 0,
        "translation": [
          0,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p6",
        "rotationDeg": 0,
        "translation": [
          0,
          0
        ],
        "isReflection": false
      }
    ],
    "explanation": "Die sechs Teile fügen sich lückenlos zu dem achsensymmetrischen Achteck (Figur D) zusammen: Das zentrale 40×40-Quadrat wird oben und unten durch die beiden 40×30-Rechtecke eingefasst. Das linke Flankenteil und die beiden rechten Polygone ergänzen die vier 45°-Eckabschrägungen mit Kantenlänge 30.",
    "metadata": {
      "pieceCount": 6,
      "shapeFamily": "Achteck",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim1-q13",
    "simulationId": "fz-sim1",
    "questionNumber": 13,
    "difficulty": "Schwer",
    "correctAnswer": "A",
    "questionText": "Welche der folgenden Figuren lässt sich aus den gegebenen Teilen zusammensetzen?",
    "estimatedTimeSeconds": 80,
    "pieces": [
      {
        "id": "p1",
        "points": [
          [
            0,
            25
          ],
          [
            25,
            25
          ],
          [
            25,
            55
          ],
          [
            0,
            55
          ]
        ],
        "canvasPoints": [
          [
            47,
            55
          ],
          [
            72,
            55
          ],
          [
            72,
            85
          ],
          [
            47,
            85
          ]
        ],
        "area": 750
      },
      {
        "id": "p2",
        "points": [
          [
            25,
            25
          ],
          [
            50,
            25
          ],
          [
            50,
            55
          ],
          [
            25,
            55
          ]
        ],
        "canvasPoints": [
          [
            148,
            57
          ],
          [
            148,
            82
          ],
          [
            118,
            82
          ],
          [
            118,
            57
          ]
        ],
        "area": 750
      },
      {
        "id": "p3",
        "points": [
          [
            50,
            0
          ],
          [
            90,
            40
          ],
          [
            70,
            40
          ]
        ],
        "canvasPoints": [
          [
            194,
            50
          ],
          [
            234,
            90
          ],
          [
            214,
            90
          ]
        ],
        "area": 400
      },
      {
        "id": "p4",
        "points": [
          [
            50,
            0
          ],
          [
            70,
            40
          ],
          [
            50,
            40
          ]
        ],
        "canvasPoints": [
          [
            320,
            60
          ],
          [
            280,
            80
          ],
          [
            280,
            60
          ]
        ],
        "area": 400
      },
      {
        "id": "p5",
        "points": [
          [
            50,
            40
          ],
          [
            70,
            40
          ],
          [
            50,
            80
          ]
        ],
        "canvasPoints": [
          [
            386,
            90
          ],
          [
            366,
            90
          ],
          [
            386,
            50
          ]
        ],
        "area": 400
      },
      {
        "id": "p6",
        "points": [
          [
            70,
            40
          ],
          [
            90,
            40
          ],
          [
            50,
            80
          ]
        ],
        "canvasPoints": [
          [
            432,
            70
          ],
          [
            432,
            50
          ],
          [
            472,
            90
          ]
        ],
        "area": 400
      }
    ],
    "options": {
      "A": {
        "key": "A",
        "label": "Figur A",
        "polygon": [
          [
            0,
            25
          ],
          [
            50,
            25
          ],
          [
            50,
            0
          ],
          [
            90,
            40
          ],
          [
            50,
            80
          ],
          [
            50,
            55
          ],
          [
            0,
            55
          ]
        ],
        "viewBox": "-10 -10 110 100",
        "area": 3100,
        "isNone": false
      },
      "B": {
        "key": "B",
        "label": "Figur B",
        "polygon": [
          [
            0,
            20
          ],
          [
            40,
            20
          ],
          [
            60,
            0
          ],
          [
            100,
            40
          ],
          [
            60,
            80
          ],
          [
            40,
            60
          ],
          [
            0,
            60
          ]
        ],
        "viewBox": "-10 -10 120 100",
        "area": 4400,
        "isNone": false
      },
      "C": {
        "key": "C",
        "label": "Figur C",
        "polygon": [
          [
            20,
            0
          ],
          [
            60,
            0
          ],
          [
            80,
            40
          ],
          [
            50,
            80
          ],
          [
            0,
            40
          ]
        ],
        "viewBox": "-10 -10 100 100",
        "area": 4000,
        "isNone": false
      },
      "D": {
        "key": "D",
        "label": "Figur D",
        "polygon": [
          [
            0,
            0
          ],
          [
            80,
            0
          ],
          [
            80,
            40
          ],
          [
            0,
            40
          ]
        ],
        "viewBox": "-10 -10 100 60",
        "area": 3200,
        "isNone": false
      },
      "E": {
        "key": "E",
        "label": "Keine der Antwortmöglichkeiten ist richtig",
        "polygon": null,
        "viewBox": "0 0 100 100",
        "isNone": true
      }
    },
    "canvasViewBox": "0 0 520 140",
    "targetFigure": {
      "polygon": [
        [
          0,
          25
        ],
        [
          50,
          25
        ],
        [
          50,
          0
        ],
        [
          90,
          40
        ],
        [
          50,
          80
        ],
        [
          50,
          55
        ],
        [
          0,
          55
        ]
      ],
      "viewBox": "-10 -10 110 100",
      "area": 3100
    },
    "assembly": [
      {
        "pieceId": "p1",
        "rotationDeg": 0,
        "translation": [
          0,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p2",
        "rotationDeg": 0,
        "translation": [
          0,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p3",
        "rotationDeg": 0,
        "translation": [
          0,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p4",
        "rotationDeg": 0,
        "translation": [
          0,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p5",
        "rotationDeg": 0,
        "translation": [
          0,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p6",
        "rotationDeg": 0,
        "translation": [
          0,
          0
        ],
        "isReflection": false
      }
    ],
    "explanation": "Die sechs Teile bilden zusammen den Pfeil (Figur A): Die beiden 25×30-Rechtecke bilden den Schaft der Gesamtlänge 50 und Höhe 30. Die vier Dreiecke der Pfeilspitze setzen sich symmetrisch zur horizontalen Achse y = 40 zusammen und formen den spitzen Pfeilkopf mit Spannweite 80 und Auskragung 40.",
    "metadata": {
      "pieceCount": 6,
      "shapeFamily": "Pfeil / Vieleck",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim1-q14",
    "simulationId": "fz-sim1",
    "questionNumber": 14,
    "difficulty": "Schwer",
    "correctAnswer": "E",
    "questionText": "Welche der folgenden Figuren lässt sich aus den gegebenen Teilen zusammensetzen?",
    "estimatedTimeSeconds": 80,
    "pieces": [
      {
        "id": "p1",
        "points": [
          [
            0,
            0
          ],
          [
            40,
            0
          ],
          [
            0,
            30
          ]
        ],
        "canvasPoints": [
          [
            38,
            55
          ],
          [
            78,
            55
          ],
          [
            38,
            85
          ]
        ],
        "area": 600
      },
      {
        "id": "p2",
        "points": [
          [
            0,
            0
          ],
          [
            40,
            0
          ],
          [
            40,
            30
          ]
        ],
        "canvasPoints": [
          [
            144,
            50
          ],
          [
            144,
            90
          ],
          [
            114,
            90
          ]
        ],
        "area": 600
      },
      {
        "id": "p3",
        "points": [
          [
            0,
            0
          ],
          [
            30,
            0
          ],
          [
            30,
            30
          ],
          [
            0,
            30
          ]
        ],
        "canvasPoints": [
          [
            180,
            55
          ],
          [
            210,
            55
          ],
          [
            210,
            85
          ],
          [
            180,
            85
          ]
        ],
        "area": 900
      },
      {
        "id": "p4",
        "points": [
          [
            0,
            0
          ],
          [
            30,
            0
          ],
          [
            30,
            30
          ],
          [
            0,
            30
          ]
        ],
        "canvasPoints": [
          [
            267.21,
            48
          ],
          [
            288.43,
            69.21
          ],
          [
            267.21,
            90.43
          ],
          [
            246,
            69.21
          ]
        ],
        "area": 900
      },
      {
        "id": "p5",
        "points": [
          [
            0,
            0
          ],
          [
            40,
            0
          ],
          [
            60,
            30
          ],
          [
            20,
            30
          ]
        ],
        "canvasPoints": [
          [
            324.43,
            55
          ],
          [
            364.43,
            55
          ],
          [
            384.43,
            85
          ],
          [
            344.43,
            85
          ]
        ],
        "area": 1200
      },
      {
        "id": "p6",
        "points": [
          [
            0,
            0
          ],
          [
            60,
            0
          ],
          [
            40,
            35
          ],
          [
            0,
            35
          ]
        ],
        "canvasPoints": [
          [
            480.43,
            87
          ],
          [
            420.43,
            87
          ],
          [
            440.43,
            52
          ],
          [
            480.43,
            52
          ]
        ],
        "area": 1750
      }
    ],
    "options": {
      "A": {
        "key": "A",
        "label": "Figur A",
        "polygon": [
          [
            30,
            0
          ],
          [
            70,
            0
          ],
          [
            100,
            30
          ],
          [
            100,
            70
          ],
          [
            70,
            100
          ],
          [
            30,
            100
          ],
          [
            0,
            70
          ],
          [
            0,
            30
          ]
        ],
        "viewBox": "-10 -10 120 120",
        "area": 8200,
        "isNone": false
      },
      "B": {
        "key": "B",
        "label": "Figur B",
        "polygon": [
          [
            25,
            0
          ],
          [
            75,
            0
          ],
          [
            100,
            43.3
          ],
          [
            75,
            86.6
          ],
          [
            25,
            86.6
          ],
          [
            0,
            43.3
          ]
        ],
        "viewBox": "-10 -10 120 105",
        "area": 6495,
        "isNone": false
      },
      "C": {
        "key": "C",
        "label": "Figur C",
        "polygon": [
          [
            0,
            0
          ],
          [
            100,
            0
          ],
          [
            75,
            56
          ],
          [
            25,
            56
          ]
        ],
        "viewBox": "-10 -10 120 75",
        "area": 4200,
        "isNone": false
      },
      "D": {
        "key": "D",
        "label": "Figur D",
        "polygon": [
          [
            30,
            0
          ],
          [
            60,
            0
          ],
          [
            80,
            40
          ],
          [
            60,
            80
          ],
          [
            30,
            80
          ],
          [
            0,
            40
          ]
        ],
        "viewBox": "-10 -10 100 100",
        "area": 4400,
        "isNone": false
      },
      "E": {
        "key": "E",
        "label": "Keine der Antwortmöglichkeiten ist richtig",
        "polygon": null,
        "viewBox": "0 0 100 100",
        "isNone": true
      }
    },
    "canvasViewBox": "0 0 520 140",
    "targetFigure": {
      "polygon": [
        [
          0,
          0
        ],
        [
          100,
          0
        ],
        [
          100,
          56
        ],
        [
          0,
          56
        ]
      ],
      "viewBox": "-10 -10 120 75",
      "area": 5600
    },
    "assembly": [
      {
        "pieceId": "p1",
        "rotationDeg": 0,
        "translation": [
          0,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p2",
        "rotationDeg": 0,
        "translation": [
          0,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p3",
        "rotationDeg": 0,
        "translation": [
          0,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p4",
        "rotationDeg": 0,
        "translation": [
          0,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p5",
        "rotationDeg": 0,
        "translation": [
          0,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p6",
        "rotationDeg": 0,
        "translation": [
          0,
          0
        ],
        "isReflection": false
      }
    ],
    "explanation": "Keine der Figuren A–D kann aus den sechs gegebenen Teilen zusammengesetzt werden: Die Gesamtfläche der Teile beträgt 5600. Figur A ist ein Achteck mit einer Fläche von 8200 (starkes Flächendefizit). Figur B erfordert 120°-Winkel, die aus den 90°-, 45°- und schrägen Kanten nicht konstruierbar sind. Figur C und D besitzen Kantenlängen, die mit den Seitenlängen des Parallelogramms und Trapezes nicht lückenlos abschließen. Somit ist Antwort E korrekt.",
    "metadata": {
      "pieceCount": 6,
      "shapeFamily": "Keine",
      "requiresRotation": true,
      "isEAnswer": true
    }
  },
  {
    "id": "fz-sim1-q15",
    "simulationId": "fz-sim1",
    "questionNumber": 15,
    "difficulty": "Schwer",
    "correctAnswer": "C",
    "questionText": "Welche der folgenden Figuren lässt sich aus den gegebenen Teilen zusammensetzen?",
    "estimatedTimeSeconds": 80,
    "pieces": [
      {
        "id": "p1",
        "points": [
          [
            0,
            0
          ],
          [
            100,
            0
          ],
          [
            50,
            50
          ]
        ],
        "canvasPoints": [
          [
            20,
            45
          ],
          [
            120,
            45
          ],
          [
            70,
            95
          ]
        ],
        "area": 2500
      },
      {
        "id": "p2",
        "points": [
          [
            0,
            0
          ],
          [
            50,
            50
          ],
          [
            0,
            100
          ]
        ],
        "canvasPoints": [
          [
            240,
            45
          ],
          [
            190,
            95
          ],
          [
            140,
            45
          ]
        ],
        "area": 2500
      },
      {
        "id": "p3",
        "points": [
          [
            50,
            100
          ],
          [
            100,
            100
          ],
          [
            100,
            50
          ]
        ],
        "canvasPoints": [
          [
            310,
            45
          ],
          [
            260,
            45
          ],
          [
            260,
            95
          ]
        ],
        "area": 1250
      },
      {
        "id": "p4",
        "points": [
          [
            50,
            50
          ],
          [
            75,
            75
          ],
          [
            50,
            100
          ]
        ],
        "canvasPoints": [
          [
            330,
            45
          ],
          [
            355,
            70
          ],
          [
            330,
            95
          ]
        ],
        "area": 625
      },
      {
        "id": "p5",
        "points": [
          [
            100,
            0
          ],
          [
            100,
            50
          ],
          [
            75,
            25
          ]
        ],
        "canvasPoints": [
          [
            375,
            57
          ],
          [
            425,
            57
          ],
          [
            400,
            82
          ]
        ],
        "area": 625
      },
      {
        "id": "p6",
        "points": [
          [
            50,
            50
          ],
          [
            75,
            25
          ],
          [
            100,
            50
          ],
          [
            75,
            75
          ]
        ],
        "canvasPoints": [
          [
            445,
            52
          ],
          [
            480.36,
            52
          ],
          [
            480.36,
            87.36
          ],
          [
            445,
            87.36
          ]
        ],
        "area": 1250
      },
      {
        "id": "p7",
        "points": [
          [
            0,
            100
          ],
          [
            25,
            75
          ],
          [
            50,
            100
          ],
          [
            25,
            125
          ]
        ],
        "canvasPoints": [
          [
            500.36,
            70
          ],
          [
            525.36,
            45
          ],
          [
            550.36,
            70
          ],
          [
            525.36,
            95
          ]
        ],
        "area": 1250
      }
    ],
    "options": {
      "A": {
        "key": "A",
        "label": "Figur A",
        "polygon": [
          [
            0,
            0
          ],
          [
            125,
            0
          ],
          [
            125,
            80
          ],
          [
            0,
            80
          ]
        ],
        "viewBox": "-10 -10 145 100",
        "area": 10000,
        "isNone": false
      },
      "B": {
        "key": "B",
        "label": "Figur B",
        "polygon": [
          [
            0,
            0
          ],
          [
            100,
            0
          ],
          [
            130,
            100
          ],
          [
            30,
            100
          ]
        ],
        "viewBox": "-10 -10 150 120",
        "area": 10000,
        "isNone": false
      },
      "C": {
        "key": "C",
        "label": "Figur C",
        "polygon": [
          [
            0,
            0
          ],
          [
            100,
            0
          ],
          [
            100,
            100
          ],
          [
            0,
            100
          ]
        ],
        "viewBox": "-10 -10 120 120",
        "area": 10000,
        "isNone": false
      },
      "D": {
        "key": "D",
        "label": "Figur D",
        "polygon": [
          [
            0,
            0
          ],
          [
            120,
            0
          ],
          [
            80,
            100
          ],
          [
            0,
            100
          ]
        ],
        "viewBox": "-10 -10 140 120",
        "area": 10000,
        "isNone": false
      },
      "E": {
        "key": "E",
        "label": "Keine der Antwortmöglichkeiten ist richtig",
        "polygon": null,
        "viewBox": "0 0 100 100",
        "isNone": true
      }
    },
    "canvasViewBox": "0 0 570.36 140",
    "targetFigure": {
      "polygon": [
        [
          0,
          0
        ],
        [
          100,
          0
        ],
        [
          100,
          100
        ],
        [
          0,
          100
        ]
      ],
      "viewBox": "-10 -10 120 120",
      "area": 10000
    },
    "assembly": [
      {
        "pieceId": "p1",
        "rotationDeg": 0,
        "translation": [
          0,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p2",
        "rotationDeg": 0,
        "translation": [
          0,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p3",
        "rotationDeg": 0,
        "translation": [
          0,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p4",
        "rotationDeg": 0,
        "translation": [
          0,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p5",
        "rotationDeg": 0,
        "translation": [
          0,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p6",
        "rotationDeg": 0,
        "translation": [
          0,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p7",
        "rotationDeg": 0,
        "translation": [
          0,
          0
        ],
        "isReflection": false
      }
    ],
    "explanation": "Die 7 klassischen Tangram-Teile (2 große Dreiecke, 1 mittleres Dreieck, 2 kleine Dreiecke, 1 Quadrat und 1 Parallelogramm) setzen sich exakt zu dem 100×100-Grundquadrat (Figur C) zusammen. Die beiden großen Dreiecke nehmen genau die linke und untere Hälfte der Gesamtfläche ein; die übrigen 5 Teile füllen die verbleibenden Quadranten lückenlos aus.",
    "metadata": {
      "pieceCount": 7,
      "shapeFamily": "Quadrat / Tangram",
      "requiresRotation": true,
      "isEAnswer": false
    }
  }
];
