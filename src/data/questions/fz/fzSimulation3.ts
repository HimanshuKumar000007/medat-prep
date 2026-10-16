/**
 * Official MedAT Figuren zusammensetzen (FZ) — Simulation 3
 * 15 Verified Geometric Spatial Reasoning Questions
 *
 * Theme: Trapeze, Vierecke & Parallelogramme
 * Focus: Schiefe Schnittkanten, symmetrische Trapeze und Erhaltung der Gesamtfläche unter Zeitdruck.
 *
 * Strict Compliance:
 * - 15 questions, 20 minutes (~80s per task)
 * - Static 2D SVG vector diagrams
 * - 0% interactive puzzle / 0% draggable / 0% rotatable UI
 * - 100% pure mental rotation without mirroring (det = +1)
 * - Balanced answer distribution: exactly 3 A, 3 B, 3 C, 3 D, 3 E
 * - 3 genuine E ("Keine") cases: Q03, Q08, Q13
 * - Difficulty: 4 Leicht (Q01-Q04), 6 Mittel (Q05-Q10), 5 Schwer (Q11-Q15)
 */

import type { FzQuestionData } from "./types";

export const FZ_SIMULATION_3_QUESTIONS: FzQuestionData[] = [
  {
    "id": "fz-sim3-q01",
    "simulationId": "fz-sim3",
    "questionNumber": 1,
    "difficulty": "Leicht",
    "correctAnswer": "C",
    "questionText": "Welche der folgenden Figuren lässt sich aus den gegebenen Teilen zusammensetzen?",
    "estimatedTimeSeconds": 80,
    "canvasViewBox": "0 0 380 120",
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
            40
          ]
        ],
        "canvasPoints": [
          [
            35,
            40
          ],
          [
            65,
            40
          ],
          [
            65,
            80
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
            50,
            0
          ],
          [
            50,
            40
          ],
          [
            0,
            40
          ]
        ],
        "canvasPoints": [
          [
            130,
            40
          ],
          [
            180,
            40
          ],
          [
            180,
            80
          ],
          [
            130,
            80
          ]
        ],
        "area": 2000
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
            0,
            40
          ]
        ],
        "canvasPoints": [
          [
            290,
            80
          ],
          [
            260,
            80
          ],
          [
            290,
            40
          ]
        ],
        "area": 600
      }
    ],
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
          40
        ],
        [
          30,
          40
        ]
      ],
      "viewBox": "-10 -10 130 60",
      "area": 3200
    },
    "options": {
      "A": {
        "key": "A",
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
        "viewBox": "-10 -10 100 60"
      },
      "B": {
        "key": "B",
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
            40
          ],
          [
            30,
            40
          ]
        ],
        "viewBox": "-10 -10 130 60"
      },
      "C": {
        "key": "C",
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
            40
          ],
          [
            30,
            40
          ]
        ],
        "viewBox": "-10 -10 130 60"
      },
      "D": {
        "key": "D",
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
            130,
            40
          ],
          [
            50,
            40
          ]
        ],
        "viewBox": "-10 -10 150 60"
      },
      "E": {
        "key": "E",
        "polygon": null,
        "viewBox": "0 0 100 100",
        "isNone": true
      }
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
          30,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p3",
        "rotationDeg": 0,
        "translation": [
          80,
          0
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: Teilstück 2 ist ein Rechteck mit Abmessungen 50 × 40 (Fläche 2000). Die Teilstücke 1 und 3 sind zwei kongruente rechtwinklige Dreiecke mit Katheten 30 und 40 (Fläche je 600). Wird Dreieck 1 links mit seiner vertikalen Kathete an das Rechteck angefügt, entsteht die linke Schrägkante mit Überhang 30. Dreieck 3 wird rechts in gleicher Orientierung angelegt, sodass ein Parallelogramm mit Grundseite 80 und Höhe 40 (Gesamtfläche 3200) entsteht. Dies entspricht exakt Figur C.\n\nAusschluss: Figur A ist ein rechtwinkliges Rechteck ohne Schrägkanten. Figur B ist ein symmetrisches Trapez (erfordert gegensinnige Schrägen). Figur D hat einen übertriebenen Überhang von 50 statt 30.",
    "metadata": {
      "pieceCount": 3,
      "shapeFamily": "Parallelogramm-Zerlegung",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim3-q02",
    "simulationId": "fz-sim3",
    "questionNumber": 2,
    "difficulty": "Leicht",
    "correctAnswer": "A",
    "questionText": "Welche der folgenden Figuren lässt sich aus den gegebenen Teilen zusammensetzen?",
    "estimatedTimeSeconds": 80,
    "canvasViewBox": "0 0 380 120",
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
            40
          ]
        ],
        "canvasPoints": [
          [
            35,
            40
          ],
          [
            65,
            40
          ],
          [
            65,
            80
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
            30,
            0
          ],
          [
            0,
            40
          ]
        ],
        "canvasPoints": [
          [
            140,
            30
          ],
          [
            140,
            60
          ],
          [
            100,
            30
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
            240,
            40
          ],
          [
            280,
            40
          ],
          [
            280,
            80
          ],
          [
            240,
            80
          ]
        ],
        "area": 1600
      }
    ],
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
          70,
          40
        ],
        [
          30,
          40
        ]
      ],
      "viewBox": "-10 -10 120 60",
      "area": 2800
    },
    "options": {
      "A": {
        "key": "A",
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
            40
          ],
          [
            30,
            40
          ]
        ],
        "viewBox": "-10 -10 120 60"
      },
      "B": {
        "key": "B",
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
            40
          ],
          [
            0,
            40
          ]
        ],
        "viewBox": "-10 -10 120 60"
      },
      "C": {
        "key": "C",
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
            100,
            40
          ],
          [
            30,
            40
          ]
        ],
        "viewBox": "-10 -10 120 60"
      },
      "D": {
        "key": "D",
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
            56
          ]
        ],
        "viewBox": "-10 -10 120 76"
      },
      "E": {
        "key": "E",
        "polygon": null,
        "viewBox": "0 0 100 100",
        "isNone": true
      }
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
        "pieceId": "p3",
        "rotationDeg": 0,
        "translation": [
          30,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p2",
        "rotationDeg": 0,
        "translation": [
          70,
          0
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: Teilstück 3 ist ein 40 × 40 Quadrat (Fläche 1600). Die Teilstücke 1 und 2 sind zwei rechtwinklige Dreiecke mit Katheten 30 und 40 (Fläche je 600). An die linke und rechte 40er-Kante des Quadrats angefügt, bilden sie ein symmetrisches Trapez mit Grundseite 100 (30 + 40 + 30), Deckseite 40 und Höhe 40 (Gesamtfläche 2800). Dies entspricht exakt Figur A.\n\nAusschluss: Figur B ist ein rechtwinkliges Trapez mit Fläche 3400 (zu groß). Figur C ist ein Parallelogramm mit gleichsinnigen Schrägkanten. Figur D ist ein großes Dreieck.",
    "metadata": {
      "pieceCount": 3,
      "shapeFamily": "Symmetrisches Trapez",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim3-q03",
    "simulationId": "fz-sim3",
    "questionNumber": 3,
    "difficulty": "Leicht",
    "correctAnswer": "E",
    "questionText": "Welche der folgenden Figuren lässt sich aus den gegebenen Teilen zusammensetzen?",
    "estimatedTimeSeconds": 80,
    "canvasViewBox": "0 0 380 120",
    "pieces": [
      {
        "id": "p1",
        "points": [
          [
            0,
            0
          ],
          [
            25,
            0
          ],
          [
            25,
            40
          ]
        ],
        "canvasPoints": [
          [
            35,
            40
          ],
          [
            60,
            40
          ],
          [
            60,
            80
          ]
        ],
        "area": 500
      },
      {
        "id": "p2",
        "points": [
          [
            0,
            0
          ],
          [
            35,
            0
          ],
          [
            0,
            40
          ]
        ],
        "canvasPoints": [
          [
            175,
            80
          ],
          [
            140,
            80
          ],
          [
            175,
            40
          ]
        ],
        "area": 700
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
            240,
            40
          ],
          [
            280,
            40
          ],
          [
            280,
            80
          ],
          [
            240,
            80
          ]
        ],
        "area": 1600
      }
    ],
    "targetFigure": {
      "polygon": [
        [
          0,
          0
        ],
        [
          10,
          0
        ],
        [
          10,
          10
        ],
        [
          0,
          10
        ]
      ],
      "viewBox": "-10 -10 60 60",
      "area": 100
    },
    "options": {
      "A": {
        "key": "A",
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
            40
          ],
          [
            30,
            40
          ]
        ],
        "viewBox": "-10 -10 120 60"
      },
      "B": {
        "key": "B",
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
            100,
            40
          ],
          [
            30,
            40
          ]
        ],
        "viewBox": "-10 -10 120 60"
      },
      "C": {
        "key": "C",
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
            70,
            40
          ],
          [
            0,
            40
          ]
        ],
        "viewBox": "-10 -10 90 60"
      },
      "D": {
        "key": "D",
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
            60,
            50
          ],
          [
            20,
            50
          ]
        ],
        "viewBox": "-10 -10 120 70"
      },
      "E": {
        "key": "E",
        "polygon": null,
        "viewBox": "0 0 100 100",
        "isNone": true
      }
    },
    "explanation": "Geometrische Analyse: Teilstück 3 ist ein Quadrat mit Kantenlänge 40 (Fläche 1600). Die Teilstücke 1 und 2 sind zwei Dreiecke mit gemeinsamer Höhe 40, jedoch unterschiedlichen Basislängen: 25 und 35 (Fläche 500 und 700). Die Gesamtfläche beträgt exakt 2800 Einheiten.\n\nAusschluss: Figur A ist ein symmetrisches Trapez mit Überhang 30 an beiden Flanken. Da die gegebenen Dreiecke jedoch Basen von 25 und 35 besitzen, kann kein symmetrisches Trapez gebildet werden. Figur B (Parallelogramm) und Figur C (Rechteck) erfordern zwei kongruente Dreiecke mit gleicher Basislänge. Figur D hat eine Höhe von 50 und Fläche 3000 (zu groß). Keine der Optionen A–D ist exakt bildbar. Antwort E ist korrekt.",
    "metadata": {
      "pieceCount": 3,
      "shapeFamily": "Trapez-Asymmetrie-Falle",
      "requiresRotation": true,
      "isEAnswer": true
    },
    "assembly": []
  },
  {
    "id": "fz-sim3-q04",
    "simulationId": "fz-sim3",
    "questionNumber": 4,
    "difficulty": "Leicht",
    "correctAnswer": "B",
    "questionText": "Welche der folgenden Figuren lässt sich aus den gegebenen Teilen zusammensetzen?",
    "estimatedTimeSeconds": 80,
    "canvasViewBox": "0 0 380 120",
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
            25,
            45
          ],
          [
            65,
            45
          ],
          [
            25,
            75
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
            0,
            30
          ]
        ],
        "canvasPoints": [
          [
            130,
            25
          ],
          [
            130,
            65
          ],
          [
            100,
            25
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
            235,
            75
          ],
          [
            195,
            75
          ],
          [
            235,
            45
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
            315,
            95
          ],
          [
            315,
            55
          ],
          [
            345,
            95
          ]
        ],
        "area": 600
      }
    ],
    "targetFigure": {
      "polygon": [
        [
          40,
          0
        ],
        [
          80,
          30
        ],
        [
          40,
          60
        ],
        [
          0,
          30
        ]
      ],
      "viewBox": "-10 -10 100 80",
      "area": 2400
    },
    "options": {
      "A": {
        "key": "A",
        "polygon": [
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
            40
          ],
          [
            0,
            40
          ]
        ],
        "viewBox": "-10 -10 80 60"
      },
      "B": {
        "key": "B",
        "polygon": [
          [
            40,
            0
          ],
          [
            80,
            30
          ],
          [
            40,
            60
          ],
          [
            0,
            30
          ]
        ],
        "viewBox": "-10 -10 100 80"
      },
      "C": {
        "key": "C",
        "polygon": [
          [
            0,
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
            20,
            40
          ]
        ],
        "viewBox": "-10 -10 100 60"
      },
      "D": {
        "key": "D",
        "polygon": [
          [
            20,
            0
          ],
          [
            80,
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
        "viewBox": "-10 -10 100 80"
      },
      "E": {
        "key": "E",
        "polygon": null,
        "viewBox": "0 0 100 100",
        "isNone": true
      }
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
        "rotationDeg": 90,
        "translation": [
          40,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p3",
        "rotationDeg": 180,
        "translation": [
          40,
          30
        ],
        "isReflection": false
      },
      {
        "pieceId": "p4",
        "rotationDeg": 270,
        "translation": [
          0,
          30
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: Gegeben sind vier kongruente rechtwinklige Dreiecke mit Katheten 40 und 30 (Fläche je 600 Einheiten, Gesamtfläche 2400 Einheiten). Werden ihre 90°-Ecken in einem gemeinsamen Mittelpunkt bei (40, 30) zusammengelegt, bilden ihre Hypotenusen (Länge je 50) die vier gleich langen Außenkanten einer symmetrischen Raute (Rhombus) mit horizontaler Diagonale 80 und vertikaler Diagonale 60. Dies entspricht exakt Figur B.\n\nAusschluss: Figur A ist ein Rechteck mit orthogonalen Außenkanten (ohne Schrägen). Figur C ist ein Parallelogramm mit ungleichen Winkeln. Figur D ist ein asymmetrisches Deltoid, dessen Schnittpunkt bei x = 20 statt x = 40 liegt.",
    "metadata": {
      "pieceCount": 4,
      "shapeFamily": "Rhombus-Zerlegung",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim3-q05",
    "simulationId": "fz-sim3",
    "questionNumber": 5,
    "difficulty": "Mittel",
    "correctAnswer": "D",
    "questionText": "Welche der folgenden Figuren lässt sich aus den gegebenen Teilen zusammensetzen?",
    "estimatedTimeSeconds": 80,
    "canvasViewBox": "0 0 380 120",
    "pieces": [
      {
        "id": "p1",
        "points": [
          [
            0,
            0
          ],
          [
            20,
            0
          ],
          [
            20,
            40
          ]
        ],
        "canvasPoints": [
          [
            30,
            40
          ],
          [
            50,
            40
          ],
          [
            50,
            80
          ]
        ],
        "area": 400
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
            40
          ],
          [
            0,
            40
          ]
        ],
        "canvasPoints": [
          [
            100,
            40
          ],
          [
            140,
            40
          ],
          [
            140,
            80
          ],
          [
            100,
            80
          ]
        ],
        "area": 1600
      },
      {
        "id": "p3",
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
            20
          ]
        ],
        "canvasPoints": [
          [
            195,
            45
          ],
          [
            245,
            45
          ],
          [
            195,
            65
          ]
        ],
        "area": 500
      },
      {
        "id": "p4",
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
            20
          ]
        ],
        "canvasPoints": [
          [
            335,
            75
          ],
          [
            285,
            75
          ],
          [
            285,
            55
          ]
        ],
        "area": 500
      }
    ],
    "targetFigure": {
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
          60,
          40
        ],
        [
          20,
          40
        ]
      ],
      "viewBox": "-10 -10 130 60",
      "area": 3000
    },
    "options": {
      "A": {
        "key": "A",
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
            75,
            40
          ],
          [
            35,
            40
          ]
        ],
        "viewBox": "-10 -10 130 60"
      },
      "B": {
        "key": "B",
        "polygon": [
          [
            0,
            0
          ],
          [
            75,
            0
          ],
          [
            75,
            40
          ],
          [
            0,
            40
          ]
        ],
        "viewBox": "-10 -10 95 60"
      },
      "C": {
        "key": "C",
        "polygon": [
          [
            0,
            0
          ],
          [
            75,
            0
          ],
          [
            95,
            40
          ],
          [
            20,
            40
          ]
        ],
        "viewBox": "-10 -10 115 60"
      },
      "D": {
        "key": "D",
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
            60,
            40
          ],
          [
            20,
            40
          ]
        ],
        "viewBox": "-10 -10 130 60"
      },
      "E": {
        "key": "E",
        "polygon": null,
        "viewBox": "0 0 100 100",
        "isNone": true
      }
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
          20,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p3",
        "rotationDeg": 0,
        "translation": [
          60,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p4",
        "rotationDeg": 180,
        "translation": [
          110,
          20
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: Teilstück 2 ist ein 40 × 40 Quadrat (Fläche 1600). Teilstück 1 ist ein rechtwinkliges Dreieck mit Katheten 20 und 40 (Fläche 400), das links angefügt wird. Die beiden Dreiecke 3 und 4 mit Katheten 50 und 20 (Fläche je 500) ergänzen sich zu einem Dreieck mit Katheten 50 und 40 (Fläche 1000) an der rechten Flanke. Es entsteht ein asymmetrisches Trapez mit Grundseite 110 (20 + 40 + 50), Deckseite 40 und Höhe 40 (Gesamtfläche 3000). Dies entspricht exakt Figur D.\n\nAusschluss: Figur A ist ein symmetrisches Trapez (erfordert gleiche Neigungswinkel an beiden Schenkeln). Figur B ist ein rechtwinkliges Rechteck. Figur C ist ein Parallelogramm.",
    "metadata": {
      "pieceCount": 4,
      "shapeFamily": "Asymmetrisches Trapez",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim3-q06",
    "simulationId": "fz-sim3",
    "questionNumber": 6,
    "difficulty": "Mittel",
    "correctAnswer": "C",
    "questionText": "Welche der folgenden Figuren lässt sich aus den gegebenen Teilen zusammensetzen?",
    "estimatedTimeSeconds": 80,
    "canvasViewBox": "0 0 380 120",
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
            0,
            30
          ]
        ],
        "canvasPoints": [
          [
            25,
            45
          ],
          [
            55,
            45
          ],
          [
            25,
            75
          ]
        ],
        "area": 450
      },
      {
        "id": "p2",
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
          ]
        ],
        "canvasPoints": [
          [
            115,
            30
          ],
          [
            115,
            60
          ],
          [
            85,
            60
          ]
        ],
        "area": 450
      },
      {
        "id": "p3",
        "points": [
          [
            0,
            0
          ],
          [
            70,
            0
          ],
          [
            0,
            30
          ]
        ],
        "canvasPoints": [
          [
            185,
            45
          ],
          [
            255,
            45
          ],
          [
            185,
            75
          ]
        ],
        "area": 1050
      },
      {
        "id": "p4",
        "points": [
          [
            0,
            0
          ],
          [
            70,
            0
          ],
          [
            70,
            30
          ]
        ],
        "canvasPoints": [
          [
            345,
            75
          ],
          [
            275,
            75
          ],
          [
            275,
            45
          ]
        ],
        "area": 1050
      }
    ],
    "targetFigure": {
      "polygon": [
        [
          30,
          0
        ],
        [
          100,
          30
        ],
        [
          30,
          60
        ],
        [
          0,
          30
        ]
      ],
      "viewBox": "-10 -10 120 80",
      "area": 3000
    },
    "options": {
      "A": {
        "key": "A",
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
        "viewBox": "-10 -10 120 80"
      },
      "B": {
        "key": "B",
        "polygon": [
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
            50
          ],
          [
            0,
            50
          ]
        ],
        "viewBox": "-10 -10 80 70"
      },
      "C": {
        "key": "C",
        "polygon": [
          [
            30,
            0
          ],
          [
            100,
            30
          ],
          [
            30,
            60
          ],
          [
            0,
            30
          ]
        ],
        "viewBox": "-10 -10 120 80"
      },
      "D": {
        "key": "D",
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
            60,
            40
          ],
          [
            30,
            40
          ]
        ],
        "viewBox": "-10 -10 110 60"
      },
      "E": {
        "key": "E",
        "polygon": null,
        "viewBox": "0 0 100 100",
        "isNone": true
      }
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
        "rotationDeg": 90,
        "translation": [
          30,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p3",
        "rotationDeg": 0,
        "translation": [
          30,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p4",
        "rotationDeg": 180,
        "translation": [
          100,
          30
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: Die beiden kleineren Dreiecke 1 und 2 (Katheten 30 und 30, Fläche je 450) bilden zusammen die linke, kurze Spitze eines Drachenvierecks (Deltoid). Die beiden größeren Dreiecke 3 und 4 (Katheten 70 und 30, Fläche je 1050) bilden die langgestreckte rechte Spitze. Die vier Dreiecke treffen sich an ihren 30er-Katheten entlang der horizontalen Hauptdiagonale. Es entsteht ein Deltoid mit Gesamtfläche 450 + 450 + 1050 + 1050 = 3000 Einheiten. Dies entspricht exakt Figur C.\n\nAusschluss: Figur A ist eine gleichseitige Raute mit Symmetrieachse bei x = 50 (erfordert 4 kongruente Dreiecke). Figur B ist ein Rechteck. Figur D ist ein Trapez mit unzureichender Fläche (2400).",
    "metadata": {
      "pieceCount": 4,
      "shapeFamily": "Drachenviereck (Deltoid)",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim3-q07",
    "simulationId": "fz-sim3",
    "questionNumber": 7,
    "difficulty": "Mittel",
    "correctAnswer": "A",
    "questionText": "Welche der folgenden Figuren lässt sich aus den gegebenen Teilen zusammensetzen?",
    "estimatedTimeSeconds": 80,
    "canvasViewBox": "0 0 380 120",
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
            20,
            45
          ],
          [
            80,
            45
          ],
          [
            80,
            75
          ],
          [
            20,
            75
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
            130,
            25
          ],
          [
            130,
            85
          ],
          [
            100,
            85
          ],
          [
            100,
            25
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
            210,
            45
          ],
          [
            240,
            45
          ],
          [
            210,
            75
          ]
        ],
        "area": 450
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
          ]
        ],
        "canvasPoints": [
          [
            325,
            75
          ],
          [
            295,
            75
          ],
          [
            295,
            45
          ]
        ],
        "area": 450
      }
    ],
    "targetFigure": {
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
          60,
          60
        ],
        [
          0,
          60
        ]
      ],
      "viewBox": "-10 -10 110 80",
      "area": 4500
    },
    "options": {
      "A": {
        "key": "A",
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
            60,
            60
          ],
          [
            0,
            60
          ]
        ],
        "viewBox": "-10 -10 110 80"
      },
      "B": {
        "key": "B",
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
            75,
            60
          ],
          [
            15,
            60
          ]
        ],
        "viewBox": "-10 -10 110 80"
      },
      "C": {
        "key": "C",
        "polygon": [
          [
            0,
            0
          ],
          [
            75,
            0
          ],
          [
            75,
            60
          ],
          [
            0,
            60
          ]
        ],
        "viewBox": "-10 -10 95 80"
      },
      "D": {
        "key": "D",
        "polygon": [
          [
            0,
            0
          ],
          [
            75,
            0
          ],
          [
            95,
            60
          ],
          [
            20,
            60
          ]
        ],
        "viewBox": "-10 -10 115 80"
      },
      "E": {
        "key": "E",
        "polygon": null,
        "viewBox": "0 0 100 100",
        "isNone": true
      }
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
          30
        ],
        "isReflection": false
      },
      {
        "pieceId": "p3",
        "rotationDeg": 0,
        "translation": [
          60,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p4",
        "rotationDeg": 180,
        "translation": [
          90,
          30
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: Die beiden Rechtecke 1 und 2 (60 × 30, Fläche je 1800) bilden übereinander gestapelt ein 60 × 60 Quadrat (Fläche 3600). Die beiden Dreiecke 3 und 4 (Katheten 30 und 30, Fläche je 450) ergänzen sich zu einem rechtwinkligen Dreieck mit Katheten 30 und 60 (Fläche 900) an der rechten Seite. Zusammen entsteht ein rechtwinkliges Trapez mit Grundseite 90, Deckseite 60 und Höhe 60 (Gesamtfläche 4500). Dies entspricht exakt Figur A.\n\nAusschluss: Figur B ist ein symmetrisches Trapez (erfordert zwei Schrägen mit je 15 Einheiten Überhang). Figur C ist ein Rechteck (keine Schrägen). Figur D ist ein Parallelogramm mit zwei gleichgerichteten Schrägen.",
    "metadata": {
      "pieceCount": 4,
      "shapeFamily": "Rechtwinkliges Trapez",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim3-q08",
    "simulationId": "fz-sim3",
    "questionNumber": 8,
    "difficulty": "Mittel",
    "correctAnswer": "E",
    "questionText": "Welche der folgenden Figuren lässt sich aus den gegebenen Teilen zusammensetzen?",
    "estimatedTimeSeconds": 80,
    "canvasViewBox": "0 0 380 120",
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
            0,
            40
          ]
        ],
        "canvasPoints": [
          [
            30,
            40
          ],
          [
            60,
            40
          ],
          [
            30,
            80
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
            30,
            0
          ],
          [
            0,
            40
          ]
        ],
        "canvasPoints": [
          [
            125,
            80
          ],
          [
            95,
            80
          ],
          [
            125,
            40
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
            50,
            0
          ],
          [
            70,
            40
          ],
          [
            20,
            40
          ]
        ],
        "canvasPoints": [
          [
            180,
            40
          ],
          [
            230,
            40
          ],
          [
            250,
            80
          ],
          [
            200,
            80
          ]
        ],
        "area": 2000
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
            295,
            45
          ],
          [
            325,
            45
          ],
          [
            325,
            75
          ],
          [
            295,
            75
          ]
        ],
        "area": 900
      }
    ],
    "targetFigure": {
      "polygon": [
        [
          0,
          0
        ],
        [
          10,
          0
        ],
        [
          10,
          10
        ],
        [
          0,
          10
        ]
      ],
      "viewBox": "-10 -10 60 60",
      "area": 100
    },
    "options": {
      "A": {
        "key": "A",
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
            50
          ],
          [
            0,
            50
          ]
        ],
        "viewBox": "-10 -10 100 70"
      },
      "B": {
        "key": "B",
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
            50
          ],
          [
            20,
            50
          ]
        ],
        "viewBox": "-10 -10 120 70"
      },
      "C": {
        "key": "C",
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
            50
          ],
          [
            30,
            50
          ]
        ],
        "viewBox": "-10 -10 130 70"
      },
      "D": {
        "key": "D",
        "polygon": [
          [
            0,
            0
          ],
          [
            82,
            0
          ],
          [
            102,
            45
          ],
          [
            20,
            45
          ]
        ],
        "viewBox": "-10 -10 122 65"
      },
      "E": {
        "key": "E",
        "polygon": null,
        "viewBox": "0 0 100 100",
        "isNone": true
      }
    },
    "explanation": "Geometrische Analyse: Die Summe der Einzelflächen beträgt: Dreieck 1 (600) + Dreieck 2 (600) + Parallelogramm 3 (2000) + Quadrat 4 (900) = exakt 4100 Einheiten. Teilstück 3 besitzt eine Neigung mit Überhang 20 bei Höhe 40. Die beiden Dreiecke 1 und 2 besitzen Katheten 30 und 40 (Überhang 30). Die Schrägwinkel von Teilstück 3 (arctan(40/20) = 63.4°) und den Dreiecken (arctan(40/30) = 53.1°) sind inkompatibel und können an keiner Schrägkante bündig aneinandergefügt werden.\n\nAusschluss: Die Figuren A, B und C besitzen jeweils eine Fläche von 4000 Einheiten und verletzen die Flächenerhaltung (100 Einheiten zu klein). Figur D scheitert an den inkompatiblen Innenwinkeln zwischen Parallelogramm und Dreiecken. Keine der Optionen A–D ist bildbar. Korrekt ist Antwort E.",
    "metadata": {
      "pieceCount": 4,
      "shapeFamily": "Winkelkollision & Flächenfalle",
      "requiresRotation": true,
      "isEAnswer": true
    },
    "assembly": []
  },
  {
    "id": "fz-sim3-q09",
    "simulationId": "fz-sim3",
    "questionNumber": 9,
    "difficulty": "Mittel",
    "correctAnswer": "B",
    "questionText": "Welche der folgenden Figuren lässt sich aus den gegebenen Teilen zusammensetzen?",
    "estimatedTimeSeconds": 80,
    "canvasViewBox": "0 0 380 120",
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
          ]
        ],
        "canvasPoints": [
          [
            30,
            40
          ],
          [
            70,
            40
          ],
          [
            70,
            80
          ]
        ],
        "area": 800
      },
      {
        "id": "p2",
        "points": [
          [
            0,
            0
          ],
          [
            20,
            0
          ],
          [
            20,
            40
          ],
          [
            0,
            40
          ]
        ],
        "canvasPoints": [
          [
            115,
            40
          ],
          [
            135,
            40
          ],
          [
            135,
            80
          ],
          [
            115,
            80
          ]
        ],
        "area": 800
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
            20
          ]
        ],
        "canvasPoints": [
          [
            185,
            45
          ],
          [
            225,
            45
          ],
          [
            185,
            65
          ]
        ],
        "area": 400
      },
      {
        "id": "p4",
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
            20
          ]
        ],
        "canvasPoints": [
          [
            320,
            75
          ],
          [
            280,
            75
          ],
          [
            280,
            55
          ]
        ],
        "area": 400
      }
    ],
    "targetFigure": {
      "polygon": [
        [
          0,
          0
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
          40,
          40
        ]
      ],
      "viewBox": "-10 -10 120 60",
      "area": 2400
    },
    "options": {
      "A": {
        "key": "A",
        "polygon": [
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
            40
          ],
          [
            0,
            40
          ]
        ],
        "viewBox": "-10 -10 80 60"
      },
      "B": {
        "key": "B",
        "polygon": [
          [
            0,
            0
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
            40,
            40
          ]
        ],
        "viewBox": "-10 -10 120 60"
      },
      "C": {
        "key": "C",
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
            40
          ],
          [
            20,
            40
          ]
        ],
        "viewBox": "-10 -10 120 60"
      },
      "D": {
        "key": "D",
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
            70,
            34
          ],
          [
            0,
            34
          ]
        ],
        "viewBox": "-10 -10 90 60"
      },
      "E": {
        "key": "E",
        "polygon": null,
        "viewBox": "0 0 100 100",
        "isNone": true
      }
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
          40,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p3",
        "rotationDeg": 0,
        "translation": [
          60,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p4",
        "rotationDeg": 180,
        "translation": [
          100,
          20
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: Teilstück 1 ist ein rechtwinklig-gleichschenkliges Dreieck mit Katheten 40 und 40 (Fläche 800). Teilstück 2 ist ein 20 × 40 Rechteck (Fläche 800). Die beiden Dreiecke 3 und 4 (Katheten 40 und 20, Fläche je 400) bilden zusammen ein Dreieck mit Katheten 40 und 40 (Fläche 800) an der rechten Seite. Aneinandergefügt entsteht ein Parallelogramm mit Basis 60, Höhe 40 und 45°-Schrägen (Überhang 40). Gesamtfläche: 2400 Einheiten. Dies entspricht exakt Figur B.\n\nAusschluss: Figur A ist ein rechtwinkliges Rechteck ohne Schrägen. Figur C ist ein symmetrisches Trapez. Figur D besitzt eine unpassende Höhe von 34.",
    "metadata": {
      "pieceCount": 4,
      "shapeFamily": "45-Grad Parallelogramm",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim3-q10",
    "simulationId": "fz-sim3",
    "questionNumber": 10,
    "difficulty": "Mittel",
    "correctAnswer": "D",
    "questionText": "Welche der folgenden Figuren lässt sich aus den gegebenen Teilen zusammensetzen?",
    "estimatedTimeSeconds": 80,
    "canvasViewBox": "0 0 380 120",
    "pieces": [
      {
        "id": "p1",
        "points": [
          [
            0,
            0
          ],
          [
            25,
            0
          ],
          [
            25,
            40
          ]
        ],
        "canvasPoints": [
          [
            35,
            40
          ],
          [
            60,
            40
          ],
          [
            60,
            80
          ]
        ],
        "area": 500
      },
      {
        "id": "p2",
        "points": [
          [
            0,
            0
          ],
          [
            25,
            0
          ],
          [
            0,
            40
          ]
        ],
        "canvasPoints": [
          [
            130,
            30
          ],
          [
            130,
            55
          ],
          [
            90,
            30
          ]
        ],
        "area": 500
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
            40,
            20
          ],
          [
            0,
            20
          ]
        ],
        "canvasPoints": [
          [
            215,
            45
          ],
          [
            255,
            45
          ],
          [
            255,
            65
          ],
          [
            215,
            65
          ]
        ],
        "area": 800
      },
      {
        "id": "p4",
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
            20
          ],
          [
            0,
            20
          ]
        ],
        "canvasPoints": [
          [
            295,
            45
          ],
          [
            335,
            45
          ],
          [
            335,
            65
          ],
          [
            295,
            65
          ]
        ],
        "area": 800
      }
    ],
    "targetFigure": {
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
          65,
          40
        ],
        [
          25,
          40
        ]
      ],
      "viewBox": "-10 -10 110 60",
      "area": 2600
    },
    "options": {
      "A": {
        "key": "A",
        "polygon": [
          [
            0,
            0
          ],
          [
            65,
            0
          ],
          [
            65,
            40
          ],
          [
            0,
            40
          ]
        ],
        "viewBox": "-10 -10 85 60"
      },
      "B": {
        "key": "B",
        "polygon": [
          [
            0,
            0
          ],
          [
            65,
            0
          ],
          [
            90,
            40
          ],
          [
            25,
            40
          ]
        ],
        "viewBox": "-10 -10 110 60"
      },
      "C": {
        "key": "C",
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
            65,
            40
          ],
          [
            0,
            40
          ]
        ],
        "viewBox": "-10 -10 110 60"
      },
      "D": {
        "key": "D",
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
            65,
            40
          ],
          [
            25,
            40
          ]
        ],
        "viewBox": "-10 -10 110 60"
      },
      "E": {
        "key": "E",
        "polygon": null,
        "viewBox": "0 0 100 100",
        "isNone": true
      }
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
        "pieceId": "p3",
        "rotationDeg": 0,
        "translation": [
          25,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p4",
        "rotationDeg": 0,
        "translation": [
          25,
          20
        ],
        "isReflection": false
      },
      {
        "pieceId": "p2",
        "rotationDeg": 0,
        "translation": [
          65,
          0
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: Die beiden Rechtecke 3 und 4 (40 × 20, Fläche je 800) bilden übereinandergelegt einen zentralen 40 × 40 Block (Fläche 1600). Die Teilstücke 1 und 2 sind zwei kongruente Dreiecke mit Katheten 25 und 40 (Fläche je 500). Links und rechts angefügt bilden sie ein symmetrisches Trapez mit Grundseite 90 (25 + 40 + 25), Deckseite 40 und Höhe 40 (Gesamtfläche 2600). Dies entspricht exakt Figur D.\n\nAusschluss: Figur A ist ein Rechteck (keine Schrägen). Figur B ist ein Parallelogramm mit gleichgerichteten Schrägen. Figur C ist ein rechtwinkliges Trapez mit Fläche 3100 (zu groß).",
    "metadata": {
      "pieceCount": 4,
      "shapeFamily": "Symmetrisches Trapez",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim3-q11",
    "simulationId": "fz-sim3",
    "questionNumber": 11,
    "difficulty": "Schwer",
    "correctAnswer": "B",
    "questionText": "Welche der folgenden Figuren lässt sich aus den gegebenen Teilen zusammensetzen?",
    "estimatedTimeSeconds": 80,
    "canvasViewBox": "0 0 380 120",
    "pieces": [
      {
        "id": "p1",
        "points": [
          [
            40,
            40
          ],
          [
            90,
            40
          ],
          [
            40,
            70
          ]
        ],
        "canvasPoints": [
          [
            20,
            35
          ],
          [
            50,
            85
          ],
          [
            20,
            85
          ]
        ],
        "area": 750
      },
      {
        "id": "p2",
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
            70
          ],
          [
            0,
            70
          ]
        ],
        "canvasPoints": [
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
            70
          ],
          [
            80,
            70
          ]
        ],
        "area": 1200
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
            150,
            35
          ],
          [
            190,
            35
          ],
          [
            190,
            75
          ],
          [
            150,
            75
          ]
        ],
        "area": 1600
      },
      {
        "id": "p4",
        "points": [
          [
            40,
            0
          ],
          [
            90,
            0
          ],
          [
            90,
            40
          ]
        ],
        "canvasPoints": [
          [
            225,
            40
          ],
          [
            265,
            40
          ],
          [
            225,
            90
          ]
        ],
        "area": 1000
      },
      {
        "id": "p5",
        "points": [
          [
            40,
            0
          ],
          [
            90,
            40
          ],
          [
            40,
            40
          ]
        ],
        "canvasPoints": [
          [
            310,
            40
          ],
          [
            360,
            40
          ],
          [
            310,
            80
          ]
        ],
        "area": 1000
      }
    ],
    "targetFigure": {
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
          40
        ],
        [
          40,
          70
        ],
        [
          0,
          70
        ]
      ],
      "viewBox": "-10 -10 110 90",
      "area": 5550
    },
    "options": {
      "A": {
        "key": "A",
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
        "viewBox": "-10 -10 110 80"
      },
      "B": {
        "key": "B",
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
            40
          ],
          [
            40,
            70
          ],
          [
            0,
            70
          ]
        ],
        "viewBox": "-10 -10 110 90"
      },
      "C": {
        "key": "C",
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
            45
          ],
          [
            45,
            75
          ],
          [
            0,
            45
          ]
        ],
        "viewBox": "-10 -10 110 95"
      },
      "D": {
        "key": "D",
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
            70
          ],
          [
            50,
            70
          ],
          [
            0,
            40
          ]
        ],
        "viewBox": "-10 -10 110 90"
      },
      "E": {
        "key": "E",
        "polygon": null,
        "viewBox": "0 0 100 100",
        "isNone": true
      }
    },
    "assembly": [
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
          40,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p5",
        "rotationDeg": 0,
        "translation": [
          40,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p2",
        "rotationDeg": 0,
        "translation": [
          0,
          40
        ],
        "isReflection": false
      },
      {
        "pieceId": "p1",
        "rotationDeg": 0,
        "translation": [
          40,
          40
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: Das 40 × 40 Quadrat 3 (Fläche 1600) und die beiden rechtwinkligen Dreiecke 4 und 5 (Katheten 50 und 40, Fläche je 1000) fügen sich nahtlos zu einem Basisrechteck von 90 × 40 (Fläche 3600) im unteren Bereich zusammen. Im oberen Bereich schließt das 40 × 30 Rechteck 2 (Fläche 1200) linksbündig an (0 bis 40 in x, 40 bis 70 in y). Das rechtwinklige Dreieck 1 mit Katheten 50 und 30 (Fläche 750) bildet das schräge Pultdach von (40, 70) abfallend nach (90, 40). Die 5 Teile ergeben exakt das asymmetrische Pultdach-Fünfeck mit Gesamtfläche 5550 FE. Dies entspricht exakt Figur B.\n\nAusschluss: Figur A ist ein einfaches rechtwinkliges Rechteck ohne Dachschräge (Fläche 5400 FE). Figur C ist ein symmetrisches Haus-Fünfeck mit First in der Mitte (Fläche 5400 FE). Figur D besitzt eine nach links abfallende Schräge statt nach rechts (Chiralitätsfehler).",
    "metadata": {
      "pieceCount": 5,
      "shapeFamily": "Asymmetrisches Pultdach-Fünfeck",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim3-q12",
    "simulationId": "fz-sim3",
    "questionNumber": 12,
    "difficulty": "Schwer",
    "correctAnswer": "D",
    "questionText": "Welche der folgenden Figuren lässt sich aus den gegebenen Teilen zusammensetzen?",
    "estimatedTimeSeconds": 80,
    "canvasViewBox": "0 0 380 120",
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
            20,
            45
          ],
          [
            80,
            45
          ],
          [
            80,
            75
          ],
          [
            20,
            75
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
            120,
            25
          ],
          [
            120,
            85
          ],
          [
            90,
            85
          ],
          [
            90,
            25
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
            180,
            45
          ],
          [
            220,
            45
          ],
          [
            220,
            75
          ],
          [
            180,
            75
          ]
        ],
        "area": 1200
      },
      {
        "id": "p4",
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
            15
          ]
        ],
        "canvasPoints": [
          [
            260,
            35
          ],
          [
            300,
            35
          ],
          [
            260,
            50
          ]
        ],
        "area": 300
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
            40,
            15
          ]
        ],
        "canvasPoints": [
          [
            350,
            75
          ],
          [
            310,
            75
          ],
          [
            310,
            60
          ]
        ],
        "area": 300
      }
    ],
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
          30
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
      "area": 5400
    },
    "options": {
      "A": {
        "key": "A",
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
        "viewBox": "-10 -10 110 80"
      },
      "B": {
        "key": "B",
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
            60
          ],
          [
            40,
            60
          ],
          [
            0,
            30
          ]
        ],
        "viewBox": "-10 -10 120 80"
      },
      "C": {
        "key": "C",
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
        "viewBox": "-10 -10 120 80"
      },
      "D": {
        "key": "D",
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
            30
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
        "viewBox": "-10 -10 120 80"
      },
      "E": {
        "key": "E",
        "polygon": null,
        "viewBox": "0 0 100 100",
        "isNone": true
      }
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
          30
        ],
        "isReflection": false
      },
      {
        "pieceId": "p3",
        "rotationDeg": 0,
        "translation": [
          60,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p4",
        "rotationDeg": 0,
        "translation": [
          60,
          30
        ],
        "isReflection": false
      },
      {
        "pieceId": "p5",
        "rotationDeg": 180,
        "translation": [
          100,
          45
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: Die beiden Rechtecke 1 und 2 bilden die linke 60 × 60 Säule (Fläche 3600). Teilstück 3 (40 × 30 Rechteck, Fläche 1200) liegt rechts unten bei (60, 0). Die Teilstücke 4 und 5 (Dreiecke mit Katheten 40 und 15, Fläche je 300) ergänzen sich zu einem rechtwinkligen Dreieck mit Katheten 40 und 30 (Fläche 600) bei (60, 30), dessen Hypotenuse die Schrägkante von (100, 30) nach (60, 60) bildet. Es entsteht ein Fünfeck mit Schräge an der rechten Flanke und Gesamtfläche 5400 Einheiten. Dies entspricht exakt Figur D.\n\nAusschluss: Figur A ist ein einfaches Rechteck ohne Schräge. Figur B besitzt die Schrägkante links und erfordert eine im MedAT unzulässige Spiegelung. Figur C ist ein symmetrisches Trapez.",
    "metadata": {
      "pieceCount": 5,
      "shapeFamily": "Fünfeck mit Schrägkante",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim3-q13",
    "simulationId": "fz-sim3",
    "questionNumber": 13,
    "difficulty": "Schwer",
    "correctAnswer": "E",
    "questionText": "Welche der folgenden Figuren lässt sich aus den gegebenen Teilen zusammensetzen?",
    "estimatedTimeSeconds": 80,
    "canvasViewBox": "0 0 380 120",
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
            25,
            45
          ],
          [
            65,
            45
          ],
          [
            25,
            75
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
            0,
            30
          ]
        ],
        "canvasPoints": [
          [
            110,
            25
          ],
          [
            110,
            65
          ],
          [
            80,
            25
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
            195,
            75
          ],
          [
            155,
            75
          ],
          [
            195,
            45
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
            250,
            85
          ],
          [
            250,
            45
          ],
          [
            280,
            85
          ]
        ],
        "area": 600
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
            40,
            50
          ],
          [
            0,
            50
          ]
        ],
        "canvasPoints": [
          [
            310,
            35
          ],
          [
            350,
            35
          ],
          [
            350,
            85
          ],
          [
            310,
            85
          ]
        ],
        "area": 2000
      }
    ],
    "targetFigure": {
      "polygon": [
        [
          0,
          0
        ],
        [
          10,
          0
        ],
        [
          10,
          10
        ],
        [
          0,
          10
        ]
      ],
      "viewBox": "-10 -10 60 60",
      "area": 100
    },
    "options": {
      "A": {
        "key": "A",
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
            40
          ],
          [
            30,
            40
          ]
        ],
        "viewBox": "-10 -10 140 60"
      },
      "B": {
        "key": "B",
        "polygon": [
          [
            0,
            0
          ],
          [
            88,
            0
          ],
          [
            88,
            50
          ],
          [
            0,
            50
          ]
        ],
        "viewBox": "-10 -10 108 70"
      },
      "C": {
        "key": "C",
        "polygon": [
          [
            0,
            0
          ],
          [
            88,
            0
          ],
          [
            118,
            50
          ],
          [
            30,
            50
          ]
        ],
        "viewBox": "-10 -10 138 70"
      },
      "D": {
        "key": "D",
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
        "viewBox": "-10 -10 120 80"
      },
      "E": {
        "key": "E",
        "polygon": null,
        "viewBox": "0 0 100 100",
        "isNone": true
      }
    },
    "explanation": "Geometrische Analyse: Vier kongruente rechtwinklige Dreiecke mit Katheten 40 und 30 (Fläche je 600) und ein 40 × 50 Rechteck (Fläche 2000) ergeben eine Gesamtfläche von exakt 4400 Einheiten. Werden die vier Dreiecke paarweise an ihren Hypotenusen zusammengelegt, entstehen zwei Rechtecke der Abmessung 40 × 30 (Fläche je 1200). Zusammen mit dem 40 × 50 Rechteck könnte theoretisch ein Rechteck der Abmessung 40 × 110 gebildet werden – eine solche Figur steht jedoch nicht zur Auswahl.\n\nAusschluss: Figur A (Trapez mit Fläche 3600) und Figur D (Sechseck mit Fläche 4800) verletzen drastisch die Flächenerhaltung. Figur B (Rechteck 88 × 50) und Figur C (Parallelogramm) erfordern Kantenlängen von 88 Einheiten, die aus den Kanten 40, 30 und 50 nicht zusammengesetzt werden können. Keine der Figuren A–D ist bildbar. Korrekt ist daher Antwort E.",
    "metadata": {
      "pieceCount": 5,
      "shapeFamily": "Kanten-Inkompatibilität",
      "requiresRotation": true,
      "isEAnswer": true
    },
    "assembly": []
  },
  {
    "id": "fz-sim3-q14",
    "simulationId": "fz-sim3",
    "questionNumber": 14,
    "difficulty": "Schwer",
    "correctAnswer": "C",
    "questionText": "Welche der folgenden Figuren lässt sich aus den gegebenen Teilen zusammensetzen?",
    "estimatedTimeSeconds": 80,
    "canvasViewBox": "0 0 380 120",
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
            20,
            45
          ],
          [
            80,
            45
          ],
          [
            80,
            75
          ],
          [
            20,
            75
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
            130,
            25
          ],
          [
            130,
            85
          ],
          [
            100,
            85
          ],
          [
            100,
            25
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
            195,
            45
          ],
          [
            225,
            45
          ],
          [
            195,
            75
          ]
        ],
        "area": 450
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
          ]
        ],
        "canvasPoints": [
          [
            275,
            75
          ],
          [
            245,
            75
          ],
          [
            245,
            45
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
            60,
            0
          ],
          [
            30,
            30
          ]
        ],
        "canvasPoints": [
          [
            305,
            45
          ],
          [
            365,
            45
          ],
          [
            335,
            75
          ]
        ],
        "area": 900
      }
    ],
    "targetFigure": {
      "polygon": [
        [
          30,
          0
        ],
        [
          90,
          0
        ],
        [
          120,
          30
        ],
        [
          90,
          60
        ],
        [
          30,
          60
        ],
        [
          0,
          30
        ]
      ],
      "viewBox": "-10 -10 140 80",
      "area": 5400
    },
    "options": {
      "A": {
        "key": "A",
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
        "viewBox": "-10 -10 110 80"
      },
      "B": {
        "key": "B",
        "polygon": [
          [
            30,
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
            30,
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
        "viewBox": "-10 -10 120 80"
      },
      "C": {
        "key": "C",
        "polygon": [
          [
            30,
            0
          ],
          [
            90,
            0
          ],
          [
            120,
            30
          ],
          [
            90,
            60
          ],
          [
            30,
            60
          ],
          [
            0,
            30
          ]
        ],
        "viewBox": "-10 -10 140 80"
      },
      "D": {
        "key": "D",
        "polygon": [
          [
            0,
            30
          ],
          [
            30,
            0
          ],
          [
            60,
            30
          ],
          [
            60,
            90
          ],
          [
            30,
            120
          ],
          [
            0,
            90
          ]
        ],
        "viewBox": "-10 -10 80 140"
      },
      "E": {
        "key": "E",
        "polygon": null,
        "viewBox": "0 0 100 100",
        "isNone": true
      }
    },
    "assembly": [
      {
        "pieceId": "p1",
        "rotationDeg": 0,
        "translation": [
          30,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p2",
        "rotationDeg": 0,
        "translation": [
          30,
          30
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
        "rotationDeg": 180,
        "translation": [
          30,
          60
        ],
        "isReflection": false
      },
      {
        "pieceId": "p5",
        "rotationDeg": 90,
        "translation": [
          90,
          0
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: Die beiden Rechtecke 1 und 2 bilden einen zentralen quadratischen Block von 60 × 60 (Fläche 3600). Die Teilstücke 3 und 4 (Katheten 30 und 30, Fläche je 450) bilden zusammen die linke Dreiecksspitze (Basis 60, Höhe 30, Fläche 900) mit Spitze bei (0, 30). Teilstück 5 ist ein gleichschenkliges Dreieck mit Basis 60 und Höhe 30 (Fläche 900), das um 90° rotiert die rechte Spitze bei (120, 30) bildet. Es entsteht ein symmetrisches gestrecktes Sechseck (Gesamtfläche 5400). Dies entspricht exakt Figur C.\n\nAusschluss: Figur A ist ein einfaches Rechteck ohne Spitzen. Figur B ist ein Achteck. Figur D ist ein vertikal ausgerichtetes Sechseck mit Höhe 120 und Breite 60.",
    "metadata": {
      "pieceCount": 5,
      "shapeFamily": "Gestrecktes Sechseck",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim3-q15",
    "simulationId": "fz-sim3",
    "questionNumber": 15,
    "difficulty": "Schwer",
    "correctAnswer": "A",
    "questionText": "Welche der folgenden Figuren lässt sich aus den gegebenen Teilen zusammensetzen?",
    "estimatedTimeSeconds": 80,
    "canvasViewBox": "0 0 380 120",
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
            70
          ]
        ],
        "canvasPoints": [
          [
            20,
            25
          ],
          [
            50,
            25
          ],
          [
            50,
            95
          ]
        ],
        "area": 1050
      },
      {
        "id": "p2",
        "points": [
          [
            70,
            0
          ],
          [
            100,
            0
          ],
          [
            70,
            70
          ]
        ],
        "canvasPoints": [
          [
            140,
            25
          ],
          [
            140,
            55
          ],
          [
            70,
            55
          ]
        ],
        "area": 1050
      },
      {
        "id": "p3",
        "points": [
          [
            30,
            35
          ],
          [
            70,
            35
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
            170,
            40
          ],
          [
            210,
            40
          ],
          [
            210,
            75
          ],
          [
            170,
            75
          ]
        ],
        "area": 1400
      },
      {
        "id": "p4",
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
            35
          ]
        ],
        "canvasPoints": [
          [
            240,
            40
          ],
          [
            280,
            40
          ],
          [
            280,
            75
          ]
        ],
        "area": 700
      },
      {
        "id": "p5",
        "points": [
          [
            30,
            0
          ],
          [
            70,
            35
          ],
          [
            30,
            35
          ]
        ],
        "canvasPoints": [
          [
            315,
            40
          ],
          [
            355,
            75
          ],
          [
            315,
            75
          ]
        ],
        "area": 700
      }
    ],
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
          70,
          70
        ],
        [
          30,
          70
        ]
      ],
      "viewBox": "-10 -10 120 90",
      "area": 4900
    },
    "options": {
      "A": {
        "key": "A",
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
            70
          ],
          [
            30,
            70
          ]
        ],
        "viewBox": "-10 -10 120 90"
      },
      "B": {
        "key": "B",
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
            70,
            70
          ],
          [
            0,
            70
          ]
        ],
        "viewBox": "-10 -10 90 90"
      },
      "C": {
        "key": "C",
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
            70
          ],
          [
            20,
            70
          ]
        ],
        "viewBox": "-10 -10 120 90"
      },
      "D": {
        "key": "D",
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
            70
          ],
          [
            0,
            70
          ]
        ],
        "viewBox": "-10 -10 120 90"
      },
      "E": {
        "key": "E",
        "polygon": null,
        "viewBox": "0 0 100 100",
        "isNone": true
      }
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
        "pieceId": "p4",
        "rotationDeg": 0,
        "translation": [
          30,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p5",
        "rotationDeg": 0,
        "translation": [
          30,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p3",
        "rotationDeg": 0,
        "translation": [
          30,
          35
        ],
        "isReflection": false
      },
      {
        "pieceId": "p2",
        "rotationDeg": 0,
        "translation": [
          70,
          0
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: Das Rechteck 3 (40 × 35, Fläche 1400) und die beiden rechtwinkligen Dreiecke 4 und 5 (Katheten 40 und 35, Fläche je 700) bilden zusammen einen zentralen Block von 40 × 70 (Fläche 2800). Die beiden Dreiecke 1 und 2 mit Katheten 30 und 70 (Fläche je 1050) schließen links und rechts symmetrisch an. Es entsteht ein symmetrisches Steiltrapez mit Grundseite 100, Deckseite 40 und Höhe 70 (Gesamtfläche 4900 FE). Dies entspricht exakt Figur A.\n\nAusschluss: Figur B ist ein reines Quadrat ohne Schrägen (Fläche 4900 FE). Figur C ist ein Parallelogramm mit zwei gleichgerichteten Schrägen. Figur D ist ein einseitig rechtwinkliges Trapez mit falschem linken Flankenwinkel.",
    "metadata": {
      "pieceCount": 5,
      "shapeFamily": "Symmetrisches Steiltrapez",
      "requiresRotation": true,
      "isEAnswer": false
    }
  }
];
