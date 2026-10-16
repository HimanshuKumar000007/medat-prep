/**
 * Official MedAT Figuren zusammensetzen (FZ) — Simulation 4
 * 15 Verified Geometric Spatial Reasoning Questions
 *
 * Theme: Mehrteilige Polygone & Ausschluss-Heuristik
 * Focus: Komplexe Zerlegungen aus 4–5 Teilstücken, schnelle Elimination falscher Optionen im 80s-Budget.
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

export const FZ_SIMULATION_4_QUESTIONS: FzQuestionData[] = [
  {
    "id": "fz-sim4-q01",
    "simulationId": "fz-sim4",
    "questionNumber": 1,
    "difficulty": "Leicht",
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
            80,
            0
          ],
          [
            80,
            30
          ],
          [
            0,
            30
          ]
        ],
        "canvasPoints": [
          [
            30,
            45
          ],
          [
            110,
            45
          ],
          [
            110,
            75
          ],
          [
            30,
            75
          ]
        ],
        "area": 2400
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
            30
          ],
          [
            0,
            30
          ]
        ],
        "canvasPoints": [
          [
            165,
            45
          ],
          [
            185,
            45
          ],
          [
            185,
            75
          ],
          [
            165,
            75
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
            265,
            45
          ],
          [
            265,
            65
          ],
          [
            235,
            65
          ],
          [
            235,
            45
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
          80,
          60
        ],
        [
          60,
          60
        ],
        [
          60,
          30
        ],
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
          60
        ]
      ],
      "viewBox": "-10 -10 100 80",
      "area": 3600
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
            60
          ],
          [
            0,
            60
          ]
        ],
        "viewBox": "-10 -10 80 80"
      },
      "B": {
        "key": "B",
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
            30
          ],
          [
            80,
            30
          ],
          [
            80,
            60
          ],
          [
            0,
            60
          ],
          [
            0,
            30
          ],
          [
            20,
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
            80,
            0
          ],
          [
            80,
            30
          ],
          [
            30,
            30
          ],
          [
            30,
            60
          ],
          [
            0,
            60
          ]
        ],
        "viewBox": "-10 -10 100 80"
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
            80,
            60
          ],
          [
            60,
            60
          ],
          [
            60,
            30
          ],
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
            60
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
          30
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: Teilstück 1 ist ein breites Rechteck von 80 × 30 (Fläche 2400). Die Teilstücke 2 und 3 sind zwei Pfeilerrechtecke von 20 × 30 (Fläche je 600). Werden die Pfeiler an den linken Rand bei (0, 30) und den rechten Rand bei (60, 30) aufgesetzt, entsteht ein symmetrisches U-förmiges Orthogonalpolygon mit einer lichten Aussparung von 40 × 30 in der Mitte. Gesamtfläche: 2400 + 600 + 600 = 3600 Einheiten. Dies entspricht exakt Figur D.\n\nAusschluss: Figur A ist ein massives 60 × 60 Quadrat ohne Aussparung. Figur B ist ein T-förmiges Polygon. Figur C ist ein asymmetrisches L-Polygon mit abweichender Fläche (3300).",
    "metadata": {
      "pieceCount": 3,
      "shapeFamily": "U-förmiges Orthogonalpolygon",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim4-q02",
    "simulationId": "fz-sim4",
    "questionNumber": 2,
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
            45,
            45
          ],
          [
            75,
            45
          ],
          [
            75,
            75
          ],
          [
            45,
            75
          ]
        ],
        "area": 900
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
            60
          ],
          [
            0,
            60
          ]
        ],
        "canvasPoints": [
          [
            160,
            45
          ],
          [
            160,
            75
          ],
          [
            100,
            75
          ],
          [
            100,
            45
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
            275,
            45
          ],
          [
            305,
            45
          ],
          [
            305,
            75
          ],
          [
            275,
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
          60,
          0
        ],
        [
          60,
          30
        ],
        [
          90,
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
          30,
          30
        ],
        [
          0,
          30
        ]
      ],
      "viewBox": "-10 -10 110 80",
      "area": 3600
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
            60
          ],
          [
            0,
            60
          ]
        ],
        "viewBox": "-10 -10 80 80"
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
            30
          ],
          [
            90,
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
            30,
            30
          ],
          [
            0,
            30
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
            90,
            0
          ],
          [
            90,
            30
          ],
          [
            30,
            30
          ],
          [
            30,
            60
          ],
          [
            0,
            60
          ]
        ],
        "viewBox": "-10 -10 110 80"
      },
      "D": {
        "key": "D",
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
            60,
            30
          ],
          [
            90,
            30
          ],
          [
            90,
            60
          ],
          [
            0,
            60
          ],
          [
            0,
            30
          ],
          [
            30,
            30
          ]
        ],
        "viewBox": "-10 -10 110 80"
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
          60,
          30
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: Teilstück 2 ist ein vertikales Rechteck von 30 × 60 (Fläche 1800), das das zentrale Verbindungsglied bildet. Teilstück 1 (30 × 30 Quadrat, Fläche 900) wird links unten bei (0, 0) angefügt. Teilstück 3 (30 × 30 Quadrat, Fläche 900) wird rechts oben bei (60, 30) angefügt. Es entsteht ein symmetrisches Z-förmiges Stufenpolygon mit Gesamtfläche 900 + 1800 + 900 = 3600 Einheiten. Dies entspricht exakt Figur B.\n\nAusschluss: Figur A ist ein einfaches Quadrat 60 × 60. Figur C ist ein L-förmiges Polygon (beide Quadrate auf derselben Seite). Figur D ist ein T-förmiges Polygon.",
    "metadata": {
      "pieceCount": 3,
      "shapeFamily": "Z-förmiges Stufenpolygon",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim4-q03",
    "simulationId": "fz-sim4",
    "questionNumber": 3,
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
            20,
            0
          ],
          [
            0,
            40
          ]
        ],
        "canvasPoints": [
          [
            110,
            30
          ],
          [
            110,
            50
          ],
          [
            70,
            30
          ]
        ],
        "area": 400
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
            60,
            20
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
            255,
            45
          ],
          [
            255,
            65
          ],
          [
            195,
            65
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
            60,
            0
          ],
          [
            60,
            20
          ],
          [
            0,
            20
          ]
        ],
        "canvasPoints": [
          [
            290,
            45
          ],
          [
            350,
            45
          ],
          [
            350,
            65
          ],
          [
            290,
            65
          ]
        ],
        "area": 1200
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
          80,
          40
        ],
        [
          20,
          40
        ]
      ],
      "viewBox": "-10 -10 120 60",
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
            100,
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
        "viewBox": "-10 -10 120 60"
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
          20,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p4",
        "rotationDeg": 0,
        "translation": [
          20,
          20
        ],
        "isReflection": false
      },
      {
        "pieceId": "p2",
        "rotationDeg": 0,
        "translation": [
          80,
          0
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: Die beiden Rechtecke 3 und 4 (60 × 20, Fläche je 1200) bilden übereinandergelegt einen zentralen 60 × 40 Block (Fläche 2400). Die Teilstücke 1 und 2 sind zwei Dreiecke mit Katheten 20 und 40 (Fläche je 400). Links und rechts angefügt bilden sie ein symmetrisches Trapez mit Grundseite 100 (20 + 60 + 20), Deckseite 60 und Höhe 40 (Gesamtfläche 3200). Dies entspricht exakt Figur A.\n\nAusschluss: Figur B ist ein rechtwinkliges Rechteck ohne Schrägen. Figur C ist ein Parallelogramm mit zwei gleichgerichteten Schrägen. Figur D ist ein rechtwinkliges Trapez mit Fläche 3600 (zu groß).",
    "metadata": {
      "pieceCount": 4,
      "shapeFamily": "Symmetrisches Trapez",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim4-q04",
    "simulationId": "fz-sim4",
    "questionNumber": 4,
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
            30,
            45
          ],
          [
            60,
            45
          ],
          [
            60,
            75
          ],
          [
            30,
            75
          ]
        ],
        "area": 900
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
            115,
            40
          ],
          [
            145,
            40
          ],
          [
            115,
            80
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
            0,
            40
          ]
        ],
        "canvasPoints": [
          [
            215,
            80
          ],
          [
            185,
            80
          ],
          [
            215,
            40
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
            35
          ]
        ],
        "canvasPoints": [
          [
            315,
            40
          ],
          [
            315,
            70
          ],
          [
            280,
            40
          ]
        ],
        "area": 525
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
      "C": {
        "key": "C",
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
            95,
            40
          ],
          [
            30,
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
            90,
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
        "viewBox": "-10 -10 110 60"
      },
      "E": {
        "key": "E",
        "polygon": null,
        "viewBox": "0 0 100 100",
        "isNone": true
      }
    },
    "explanation": "Geometrische Analyse: Die Summe der Einzelflächen beträgt: Quadrat 1 (900) + Dreieck 2 (600) + Dreieck 3 (600) + Dreieck 4 (525) = exakt 2625 Einheiten. Teilstück 4 besitzt Katheten von 30 und 35, während Teilstück 2 und 3 Katheten von 30 und 40 besitzen. Dadurch kann kein symmetrisches Trapez mit durchgehend gleichen Schenkellängen gebildet werden.\n\nAusschluss: Figur A (Trapez mit Fläche 2400) und Figur D (Fläche 2250) verletzen die Flächenerhaltung erheblich. Figur B (Rechteck 65 × 40 = 2600) und Figur C (Parallelogramm = 2600) sind ebenfalls flächenmäßig zu klein und erfordern zwei identische Dreiecke zur Rechtecksbildung. Keine der Optionen A–D ist konstruierbar. Korrekt ist Antwort E.",
    "metadata": {
      "pieceCount": 4,
      "shapeFamily": "Kantenlängen-Falle",
      "requiresRotation": true,
      "isEAnswer": true
    },
    "assembly": []
  },
  {
    "id": "fz-sim4-q05",
    "simulationId": "fz-sim4",
    "questionNumber": 5,
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
            40,
            0
          ],
          [
            40,
            25
          ],
          [
            0,
            25
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
            65,
            70
          ],
          [
            25,
            70
          ]
        ],
        "area": 1000
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
            25
          ],
          [
            0,
            25
          ]
        ],
        "canvasPoints": [
          [
            110,
            45
          ],
          [
            150,
            45
          ],
          [
            150,
            70
          ],
          [
            110,
            70
          ]
        ],
        "area": 1000
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
            20
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
            225,
            45
          ],
          [
            225,
            65
          ],
          [
            195,
            65
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
            30,
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
            35
          ],
          [
            295,
            65
          ],
          [
            275,
            65
          ],
          [
            275,
            35
          ]
        ],
        "area": 600
      }
    ],
    "targetFigure": {
      "polygon": [
        [
          25,
          0
        ],
        [
          55,
          0
        ],
        [
          55,
          40
        ],
        [
          80,
          40
        ],
        [
          80,
          65
        ],
        [
          0,
          65
        ],
        [
          0,
          40
        ],
        [
          25,
          40
        ]
      ],
      "viewBox": "-10 -10 100 85",
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
            80,
            0
          ],
          [
            80,
            25
          ],
          [
            30,
            25
          ],
          [
            30,
            65
          ],
          [
            0,
            65
          ]
        ],
        "viewBox": "-10 -10 100 85"
      },
      "C": {
        "key": "C",
        "polygon": [
          [
            25,
            0
          ],
          [
            55,
            0
          ],
          [
            55,
            40
          ],
          [
            80,
            40
          ],
          [
            80,
            65
          ],
          [
            0,
            65
          ],
          [
            0,
            40
          ],
          [
            25,
            40
          ]
        ],
        "viewBox": "-10 -10 100 85"
      },
      "D": {
        "key": "D",
        "polygon": [
          [
            25,
            0
          ],
          [
            55,
            0
          ],
          [
            55,
            25
          ],
          [
            80,
            25
          ],
          [
            80,
            50
          ],
          [
            55,
            50
          ],
          [
            55,
            75
          ],
          [
            25,
            75
          ],
          [
            25,
            50
          ],
          [
            0,
            50
          ],
          [
            0,
            25
          ],
          [
            25,
            25
          ]
        ],
        "viewBox": "-10 -10 100 95"
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
        "pieceId": "p1",
        "rotationDeg": 0,
        "translation": [
          0,
          40
        ],
        "isReflection": false
      },
      {
        "pieceId": "p2",
        "rotationDeg": 0,
        "translation": [
          40,
          40
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: Die beiden Rechtecke 1 und 2 (40 × 25, Fläche je 1000) bilden nebeneinandergelegt einen 80 × 25 Querbalken (Fläche 2000). Die Teilstücke 3 und 4 (30 × 20, Fläche je 600) bilden übereinandergelegt einen 30 × 40 Ständer (Fläche 1200). Wird der Ständer mittig unter den Querbalken gesetzt (Überhang links und rechts je 25), entsteht ein symmetrisches T-förmiges Orthogonalpolygon mit Gesamtfläche 3200 Einheiten. Dies entspricht exakt Figur C.\n\nAusschluss: Figur A ist ein einfaches Rechteck ohne Aussparungen. Figur B ist ein L-förmiges Polygon (Ständer an der Seite statt zentriert). Figur D ist ein Kreuzpolygon mit abweichender Fläche.",
    "metadata": {
      "pieceCount": 4,
      "shapeFamily": "T-förmiges Orthogonalpolygon",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim4-q06",
    "simulationId": "fz-sim4",
    "questionNumber": 6,
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
            80,
            0
          ],
          [
            60,
            20
          ],
          [
            20,
            20
          ]
        ],
        "canvasPoints": [
          [
            20,
            45
          ],
          [
            100,
            45
          ],
          [
            80,
            65
          ],
          [
            40,
            65
          ]
        ],
        "area": 1200
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
            130,
            35
          ],
          [
            170,
            35
          ],
          [
            170,
            75
          ],
          [
            130,
            75
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
            200,
            35
          ],
          [
            240,
            35
          ],
          [
            240,
            75
          ],
          [
            200,
            75
          ]
        ],
        "area": 1600
      },
      {
        "id": "p4",
        "points": [
          [
            0,
            0
          ],
          [
            80,
            0
          ],
          [
            60,
            20
          ],
          [
            20,
            20
          ]
        ],
        "canvasPoints": [
          [
            360,
            75
          ],
          [
            280,
            75
          ],
          [
            300,
            55
          ],
          [
            340,
            55
          ]
        ],
        "area": 1200
      }
    ],
    "targetFigure": {
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
      "area": 5600
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
            80
          ],
          [
            0,
            80
          ]
        ],
        "viewBox": "-10 -10 100 100"
      },
      "B": {
        "key": "B",
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
            60,
            80
          ],
          [
            20,
            80
          ],
          [
            0,
            40
          ]
        ],
        "viewBox": "-10 -10 100 100"
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
            80,
            65
          ],
          [
            0,
            65
          ]
        ],
        "viewBox": "-10 -10 100 85"
      },
      "D": {
        "key": "D",
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
        "viewBox": "-10 -10 100 100"
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
        "rotationDeg": 180,
        "translation": [
          80,
          20
        ],
        "isReflection": false
      },
      {
        "pieceId": "p2",
        "rotationDeg": 0,
        "translation": [
          0,
          20
        ],
        "isReflection": false
      },
      {
        "pieceId": "p3",
        "rotationDeg": 0,
        "translation": [
          40,
          20
        ],
        "isReflection": false
      },
      {
        "pieceId": "p4",
        "rotationDeg": 0,
        "translation": [
          0,
          60
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: Die beiden Quadrate 2 und 3 (40 × 40, Fläche je 1600) bilden zusammen den mittleren Rechteckblock von 80 × 40 (Fläche 3200). Die Teilstücke 1 und 4 sind zwei symmetrische Trapeze mit Grundseite 80, Deckseite 40 und Höhe 20 (Fläche je 1000). Unten und oben an den 80er-Kanten des mittleren Blocks angefügt, schließen sie die Figur zu einem symmetrischen Achteck mit 8 gleichmäßig abgeschrägten Ecken ab (Gesamtfläche 5200 Einheiten). Dies entspricht exakt Figur D.\n\nAusschluss: Figur A ist ein volles 80 × 80 Quadrat (Fläche 6400, zu groß). Figur B ist ein Sechseck mit nur 6 Kanten (Fläche 4800). Figur C ist ein Rechteck ohne Eckenabschrägungen.",
    "metadata": {
      "pieceCount": 4,
      "shapeFamily": "Symmetrisches Achteck",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim4-q07",
    "simulationId": "fz-sim4",
    "questionNumber": 7,
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
            20
          ],
          [
            0,
            20
          ]
        ],
        "canvasPoints": [
          [
            30,
            45
          ],
          [
            70,
            45
          ],
          [
            70,
            65
          ],
          [
            30,
            65
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
            20
          ],
          [
            0,
            20
          ]
        ],
        "canvasPoints": [
          [
            130,
            45
          ],
          [
            150,
            45
          ],
          [
            150,
            65
          ],
          [
            130,
            65
          ]
        ],
        "area": 400
      },
      {
        "id": "p3",
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
            20
          ],
          [
            0,
            20
          ]
        ],
        "canvasPoints": [
          [
            200,
            45
          ],
          [
            220,
            45
          ],
          [
            220,
            65
          ],
          [
            200,
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
            20,
            0
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
        "canvasPoints": [
          [
            270,
            45
          ],
          [
            290,
            45
          ],
          [
            290,
            65
          ],
          [
            270,
            65
          ]
        ],
        "area": 400
      }
    ],
    "targetFigure": {
      "polygon": [
        [
          20,
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
          60,
          20
        ],
        [
          60,
          40
        ],
        [
          40,
          40
        ],
        [
          40,
          60
        ],
        [
          20,
          60
        ],
        [
          20,
          40
        ],
        [
          0,
          40
        ],
        [
          0,
          20
        ],
        [
          20,
          20
        ]
      ],
      "viewBox": "-10 -10 80 80",
      "area": 2000
    },
    "options": {
      "A": {
        "key": "A",
        "polygon": [
          [
            20,
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
            60,
            20
          ],
          [
            60,
            40
          ],
          [
            0,
            40
          ],
          [
            0,
            20
          ],
          [
            20,
            20
          ]
        ],
        "viewBox": "-10 -10 80 60"
      },
      "B": {
        "key": "B",
        "polygon": [
          [
            20,
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
            60,
            20
          ],
          [
            60,
            40
          ],
          [
            40,
            40
          ],
          [
            40,
            60
          ],
          [
            20,
            60
          ],
          [
            20,
            40
          ],
          [
            0,
            40
          ],
          [
            0,
            20
          ],
          [
            20,
            20
          ]
        ],
        "viewBox": "-10 -10 80 80"
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
            60,
            20
          ],
          [
            20,
            20
          ],
          [
            20,
            60
          ],
          [
            0,
            60
          ]
        ],
        "viewBox": "-10 -10 80 80"
      },
      "D": {
        "key": "D",
        "polygon": [
          [
            0,
            0
          ],
          [
            45,
            0
          ],
          [
            45,
            45
          ],
          [
            0,
            45
          ]
        ],
        "viewBox": "-10 -10 65 65"
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
          20
        ],
        "isReflection": false
      },
      {
        "pieceId": "p2",
        "rotationDeg": 0,
        "translation": [
          40,
          20
        ],
        "isReflection": false
      },
      {
        "pieceId": "p3",
        "rotationDeg": 0,
        "translation": [
          20,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p4",
        "rotationDeg": 0,
        "translation": [
          20,
          40
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: Teilstück 1 ist ein Rechteck von 40 × 20 (entspricht zwei 20 × 20 Quadraten, Fläche 800). Die Teilstücke 2, 3 und 4 sind drei Quadrate von je 20 × 20 (Fläche je 400). Insgesamt stehen somit 5 modulare 20 × 20 Quadrate zur Verfügung (Gesamtfläche 2000). Teilstück 1 bildet den linken und mittleren Arm des Kreuzes. Quadrat 2 bildet den rechten Arm, Quadrat 3 den oberen Arm und Quadrat 4 den unteren Arm. Es entsteht ein symmetrisches griechisches Kreuzpolygon. Dies entspricht exakt Figur B.\n\nAusschluss: Figur A ist ein T-förmiges Polygon mit Fläche 1600 (zu klein). Figur C ist ein L-förmiges Polygon. Figur D ist ein Quadrat.",
    "metadata": {
      "pieceCount": 4,
      "shapeFamily": "Kreuzförmiges Orthogonalpolygon",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim4-q08",
    "simulationId": "fz-sim4",
    "questionNumber": 8,
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
            25
          ],
          [
            0,
            25
          ]
        ],
        "canvasPoints": [
          [
            25,
            45
          ],
          [
            85,
            45
          ],
          [
            85,
            70
          ],
          [
            25,
            70
          ]
        ],
        "area": 1500
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
            25
          ],
          [
            0,
            25
          ]
        ],
        "canvasPoints": [
          [
            115,
            45
          ],
          [
            175,
            45
          ],
          [
            175,
            70
          ],
          [
            115,
            70
          ]
        ],
        "area": 1500
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
            205,
            45
          ],
          [
            235,
            45
          ],
          [
            205,
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
            315,
            75
          ],
          [
            285,
            75
          ],
          [
            285,
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
          60,
          0
        ],
        [
          60,
          50
        ],
        [
          30,
          80
        ],
        [
          0,
          50
        ]
      ],
      "viewBox": "-10 -10 80 100",
      "area": 3900
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
            50
          ],
          [
            30,
            80
          ],
          [
            0,
            50
          ]
        ],
        "viewBox": "-10 -10 80 100"
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
            65
          ],
          [
            0,
            65
          ]
        ],
        "viewBox": "-10 -10 80 85"
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
            60,
            50
          ],
          [
            15,
            80
          ],
          [
            0,
            50
          ]
        ],
        "viewBox": "-10 -10 80 100"
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
            60,
            50
          ],
          [
            20,
            50
          ]
        ],
        "viewBox": "-10 -10 100 70"
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
          25
        ],
        "isReflection": false
      },
      {
        "pieceId": "p3",
        "rotationDeg": 0,
        "translation": [
          0,
          50
        ],
        "isReflection": false
      },
      {
        "pieceId": "p4",
        "rotationDeg": 180,
        "translation": [
          60,
          80
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: Die beiden Rechtecke 1 und 2 (60 × 25, Fläche je 1500) bilden übereinandergelegt den unteren rechteckigen Korpus von 60 × 50 (Fläche 3000). Die Teilstücke 3 und 4 sind zwei rechtwinklig-gleichschenklige Dreiecke mit Katheten 30 und 30 (Fläche je 450). An ihren vertikalen Katheten zusammengefügt bilden sie das symmetrische Giebeldach mit Basis 60 und Firsthöhe 30 (Fläche 900) mit Dachspitze bei (30, 80). Gesamtfläche: 3000 + 900 = 3900 Einheiten. Dies entspricht exakt Figur A.\n\nAusschluss: Figur B ist ein einfaches Rechteck mit Flachdach. Figur C besitzt eine nach links verschobene Dachspitze bei x = 15. Figur D ist ein Trapez mit unzureichender Fläche (3500).",
    "metadata": {
      "pieceCount": 4,
      "shapeFamily": "Hausform (Giebelpolygon)",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim4-q09",
    "simulationId": "fz-sim4",
    "questionNumber": 9,
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
            25,
            45
          ],
          [
            65,
            45
          ],
          [
            65,
            75
          ],
          [
            25,
            75
          ]
        ],
        "area": 1200
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
          ],
          [
            0,
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
            70
          ],
          [
            85,
            70
          ],
          [
            85,
            30
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
            185,
            45
          ],
          [
            215,
            45
          ],
          [
            185,
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
            0,
            25
          ]
        ],
        "canvasPoints": [
          [
            295,
            75
          ],
          [
            265,
            75
          ],
          [
            295,
            50
          ]
        ],
        "area": 375
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
            60,
            0
          ],
          [
            60,
            40
          ],
          [
            30,
            60
          ],
          [
            0,
            40
          ]
        ],
        "viewBox": "-10 -10 80 80"
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
            60,
            35
          ],
          [
            20,
            35
          ]
        ],
        "viewBox": "-10 -10 100 60"
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
            60,
            55
          ],
          [
            0,
            55
          ]
        ],
        "viewBox": "-10 -10 80 75"
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
            45
          ],
          [
            30,
            45
          ],
          [
            30,
            65
          ],
          [
            0,
            65
          ]
        ],
        "viewBox": "-10 -10 90 85"
      },
      "E": {
        "key": "E",
        "polygon": null,
        "viewBox": "0 0 100 100",
        "isNone": true
      }
    },
    "explanation": "Geometrische Analyse: Die Gesamtfläche der Teilstücke beträgt: Rechteck 1 (1200) + Rechteck 2 (1200) + Dreieck 3 (450) + Dreieck 4 (375) = exakt 3225 Einheiten. Dreieck 4 besitzt eine Kathete von nur 25 statt 30, wodurch es nicht bündig an Dreieck 3 (Kathete 30) oder die 30er- bzw. 40er-Kanten der Rechtecke anschließen kann.\n\nAusschluss: Figur A (Fläche 3000), Figur B (Fläche 2800) und Figur C (Fläche 3300) verletzen die Flächenerhaltung. Figur D (L-Polygon) hat zwar rechnerisch Fläche 3225, besteht aber ausschließlich aus 90°-Ecken, wodurch die beiden schrägen Dreiecke 3 und 4 nicht ohne unüberbrückbare Lücken integriert werden können. Keine der Figuren A–D ist bildbar. Korrekt ist Antwort E.",
    "metadata": {
      "pieceCount": 4,
      "shapeFamily": "Asymmetrie- & Flächenfalle",
      "requiresRotation": true,
      "isEAnswer": true
    },
    "assembly": []
  },
  {
    "id": "fz-sim4-q10",
    "simulationId": "fz-sim4",
    "questionNumber": 10,
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
            20,
            0
          ],
          [
            0,
            40
          ]
        ],
        "canvasPoints": [
          [
            115,
            80
          ],
          [
            95,
            80
          ],
          [
            115,
            40
          ]
        ],
        "area": 400
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
            160,
            40
          ],
          [
            200,
            40
          ],
          [
            200,
            80
          ],
          [
            160,
            80
          ]
        ],
        "area": 1600
      },
      {
        "id": "p4",
        "points": [
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
            40
          ],
          [
            0,
            40
          ]
        ],
        "canvasPoints": [
          [
            275,
            40
          ],
          [
            285,
            40
          ],
          [
            285,
            80
          ],
          [
            275,
            80
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
          70,
          0
        ],
        [
          90,
          40
        ],
        [
          20,
          40
        ]
      ],
      "viewBox": "-10 -10 110 60",
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
            70,
            40
          ],
          [
            20,
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
            70,
            0
          ],
          [
            90,
            40
          ],
          [
            20,
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
            70,
            0
          ],
          [
            110,
            40
          ],
          [
            40,
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
        "pieceId": "p3",
        "rotationDeg": 0,
        "translation": [
          20,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p4",
        "rotationDeg": 0,
        "translation": [
          60,
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
    "explanation": "Geometrische Analyse: Teilstück 3 (40 × 40 Quadrat, Fläche 1600) und Teilstück 4 (10 × 40 Streifen, Fläche 400) ergänzen sich zu einem zentralen Rechteck von 50 × 40 (Fläche 2000). Die Teilstücke 1 und 2 sind zwei Dreiecke mit Katheten 20 und 40 (Fläche je 400). In gleicher Neigungsrichtung links und rechts angefügt, bilden sie ein Parallelogramm mit Basis 70 (20 + 50), Höhe 40 und Neigungsüberhang 20 (Gesamtfläche 2800). Dies entspricht exakt Figur C.\n\nAusschluss: Figur A ist ein rechtwinkliges Rechteck ohne Schrägen. Figur B ist ein symmetrisches Trapez mit gegensinnigen Schrägen. Figur D ist ein Parallelogramm mit übertriebenem Überhang von 40 statt 20.",
    "metadata": {
      "pieceCount": 4,
      "shapeFamily": "Parallelogramm-Zerlegung",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim4-q11",
    "simulationId": "fz-sim4",
    "questionNumber": 11,
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
            90,
            0
          ],
          [
            90,
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
            110,
            45
          ],
          [
            110,
            75
          ],
          [
            20,
            75
          ]
        ],
        "area": 2700
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
            20
          ],
          [
            0,
            20
          ]
        ],
        "canvasPoints": [
          [
            135,
            45
          ],
          [
            155,
            45
          ],
          [
            155,
            65
          ],
          [
            135,
            65
          ]
        ],
        "area": 400
      },
      {
        "id": "p3",
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
            20
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
            205,
            45
          ],
          [
            205,
            65
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
            20,
            0
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
        "canvasPoints": [
          [
            235,
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
            235,
            65
          ]
        ],
        "area": 400
      },
      {
        "id": "p5",
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
            20
          ],
          [
            0,
            20
          ]
        ],
        "canvasPoints": [
          [
            285,
            45
          ],
          [
            305,
            45
          ],
          [
            305,
            65
          ],
          [
            285,
            65
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
          90,
          0
        ],
        [
          90,
          70
        ],
        [
          70,
          70
        ],
        [
          70,
          30
        ],
        [
          20,
          30
        ],
        [
          20,
          70
        ],
        [
          0,
          70
        ]
      ],
      "viewBox": "-10 -10 110 90",
      "area": 4300
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
            86,
            0
          ],
          [
            86,
            50
          ],
          [
            0,
            50
          ]
        ],
        "viewBox": "-10 -10 106 70"
      },
      "B": {
        "key": "B",
        "polygon": [
          [
            20,
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
            90,
            30
          ],
          [
            90,
            60
          ],
          [
            0,
            60
          ],
          [
            0,
            30
          ],
          [
            20,
            30
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
            90,
            0
          ],
          [
            90,
            70
          ],
          [
            60,
            70
          ],
          [
            60,
            30
          ],
          [
            10,
            30
          ],
          [
            10,
            70
          ],
          [
            0,
            70
          ]
        ],
        "viewBox": "-10 -10 110 90"
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
            70,
            70
          ],
          [
            70,
            30
          ],
          [
            20,
            30
          ],
          [
            20,
            70
          ],
          [
            0,
            70
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
          0,
          50
        ],
        "isReflection": false
      },
      {
        "pieceId": "p4",
        "rotationDeg": 0,
        "translation": [
          70,
          30
        ],
        "isReflection": false
      },
      {
        "pieceId": "p5",
        "rotationDeg": 0,
        "translation": [
          70,
          50
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: Teilstück 1 ist ein breiter Sockel von 90 × 30 (Fläche 2700). Die vier Quadrate 2, 3, 4 und 5 (je 20 × 20, Fläche je 400) bilden paarweise zwei vertikale Pfeiler der Abmessung 20 × 40 (Fläche je 800). Auf die linke Kante bei (0, 30) und die rechte Kante bei (70, 30) aufgesetzt, entsteht ein symmetrisches Portal-Polygon mit einer 50 × 40 breiten mittleren Öffnung und einer Gesamthöhe von 70 (Gesamtfläche 4300). Dies entspricht exakt Figur D.\n\nAusschluss: Figur A ist ein einfaches Rechteck. Figur B ist ein T-förmiges Polygon mit Fläche 4200. Figur C ist ein asymmetrisches U-Polygon mit ungleichen Pfeilerstärken (10 links, 30 rechts statt 20 und 20).",
    "metadata": {
      "pieceCount": 5,
      "shapeFamily": "U-förmiges Portalpolygon",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim4-q12",
    "simulationId": "fz-sim4",
    "questionNumber": 12,
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
            0,
            0
          ],
          [
            90,
            0
          ],
          [
            90,
            20
          ],
          [
            0,
            20
          ]
        ],
        "canvasPoints": [
          [
            20,
            50
          ],
          [
            110,
            50
          ],
          [
            110,
            70
          ],
          [
            20,
            70
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
            30,
            0
          ],
          [
            30,
            20
          ],
          [
            0,
            20
          ]
        ],
        "canvasPoints": [
          [
            130,
            50
          ],
          [
            160,
            50
          ],
          [
            160,
            70
          ],
          [
            130,
            70
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
            20
          ],
          [
            0,
            20
          ]
        ],
        "canvasPoints": [
          [
            180,
            50
          ],
          [
            210,
            50
          ],
          [
            210,
            70
          ],
          [
            180,
            70
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
            15,
            0
          ],
          [
            15,
            20
          ],
          [
            0,
            20
          ]
        ],
        "canvasPoints": [
          [
            230,
            50
          ],
          [
            245,
            50
          ],
          [
            245,
            70
          ],
          [
            230,
            70
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
            15,
            0
          ],
          [
            15,
            20
          ],
          [
            0,
            20
          ]
        ],
        "canvasPoints": [
          [
            265,
            50
          ],
          [
            280,
            50
          ],
          [
            280,
            70
          ],
          [
            265,
            70
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
          90,
          0
        ],
        [
          90,
          20
        ],
        [
          75,
          20
        ],
        [
          75,
          40
        ],
        [
          60,
          40
        ],
        [
          60,
          60
        ],
        [
          30,
          60
        ],
        [
          30,
          40
        ],
        [
          15,
          40
        ],
        [
          15,
          20
        ],
        [
          0,
          20
        ]
      ],
      "viewBox": "-10 -10 110 80",
      "area": 3600
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
            20
          ],
          [
            60,
            20
          ],
          [
            60,
            40
          ],
          [
            30,
            40
          ],
          [
            30,
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
            20
          ],
          [
            75,
            20
          ],
          [
            75,
            40
          ],
          [
            60,
            40
          ],
          [
            60,
            60
          ],
          [
            30,
            60
          ],
          [
            30,
            40
          ],
          [
            15,
            40
          ],
          [
            15,
            20
          ],
          [
            0,
            20
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
            60,
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
        "viewBox": "-10 -10 80 80"
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
        "rotationDeg": 0,
        "translation": [
          15,
          20
        ],
        "isReflection": false
      },
      {
        "pieceId": "p3",
        "rotationDeg": 0,
        "translation": [
          45,
          20
        ],
        "isReflection": false
      },
      {
        "pieceId": "p4",
        "rotationDeg": 0,
        "translation": [
          30,
          40
        ],
        "isReflection": false
      },
      {
        "pieceId": "p5",
        "rotationDeg": 0,
        "translation": [
          45,
          40
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: Teilstück 1 bildet die 90 × 20 breite Basisstufe (Fläche 1800). Die Teilstücke 2 und 3 (je 30 × 20, Fläche je 600) bilden zusammen die zentrierte Mittelstufe von 60 × 20 (Fläche 1200) mit symmetrischem Einzug von je 15 links und rechts. Die Teilstücke 4 und 5 (je 15 × 20, Fläche je 300) bilden zusammen die oberste Stufe von 30 × 20 (Fläche 600). Es entsteht eine dreistufige, achsensymmetrische Stufenpyramide mit Gesamtfläche 1800 + 1200 + 600 = 3600 Einheiten. Dies entspricht exakt Figur B.\n\nAusschluss: Figur A ist eine asymmetrische, einseitig ansteigende Treppe. Figur C ist ein einfaches Quadrat 60 × 60 ohne Stufung. Figur D ist ein Trapez mit Fläche 3000.",
    "metadata": {
      "pieceCount": 5,
      "shapeFamily": "Symmetrische Stufenpyramide",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim4-q13",
    "simulationId": "fz-sim4",
    "questionNumber": 13,
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
            50
          ],
          [
            0,
            50
          ]
        ],
        "canvasPoints": [
          [
            20,
            35
          ],
          [
            50,
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
        "area": 1500
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
          ],
          [
            0,
            30
          ]
        ],
        "canvasPoints": [
          [
            95,
            45
          ],
          [
            125,
            45
          ],
          [
            125,
            75
          ],
          [
            95,
            75
          ]
        ],
        "area": 900
      },
      {
        "id": "p3",
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
            30
          ],
          [
            0,
            30
          ]
        ],
        "canvasPoints": [
          [
            160,
            45
          ],
          [
            180,
            45
          ],
          [
            180,
            75
          ],
          [
            160,
            75
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
            230,
            35
          ],
          [
            230,
            55
          ],
          [
            200,
            55
          ],
          [
            200,
            35
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
            285,
            45
          ],
          [
            315,
            45
          ],
          [
            315,
            75
          ],
          [
            285,
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
          80,
          0
        ],
        [
          80,
          30
        ],
        [
          50,
          30
        ],
        [
          50,
          60
        ],
        [
          30,
          60
        ],
        [
          30,
          80
        ],
        [
          0,
          80
        ]
      ],
      "viewBox": "-10 -10 100 100",
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
            80,
            0
          ],
          [
            80,
            30
          ],
          [
            50,
            30
          ],
          [
            50,
            60
          ],
          [
            30,
            60
          ],
          [
            30,
            80
          ],
          [
            0,
            80
          ]
        ],
        "viewBox": "-10 -10 100 100"
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
            60
          ],
          [
            0,
            60
          ]
        ],
        "viewBox": "-10 -10 95 80"
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
            30
          ],
          [
            60,
            30
          ],
          [
            60,
            60
          ],
          [
            30,
            60
          ],
          [
            30,
            90
          ],
          [
            0,
            90
          ]
        ],
        "viewBox": "-10 -10 110 110"
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
            80,
            80
          ],
          [
            50,
            80
          ],
          [
            50,
            60
          ],
          [
            30,
            60
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
        "viewBox": "-10 -10 100 100"
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
          50
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
        "rotationDeg": 0,
        "translation": [
          30,
          30
        ],
        "isReflection": false
      },
      {
        "pieceId": "p5",
        "rotationDeg": 0,
        "translation": [
          50,
          0
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: Teilstück 1 (30 × 50 Rechteck, Fläche 1500) und Teilstück 2 (30 × 30 Quadrat, Fläche 900) bilden die linke Säule der Abmessung 30 × 80 (Fläche 2400). Die Teilstücke 3 und 4 (je 20 × 30 Rechteck, Fläche je 600) bilden die mittlere Säule der Abmessung 20 × 60 (Fläche 1200). Teilstück 5 (30 × 30 Quadrat, Fläche 900) bildet die rechte Stufe. Es entsteht eine dreistufige asymmetrische Treppe mit Stufenbreiten 30, 20 und 30 sowie Höhen 80, 60 und 30 (Gesamtfläche 4500). Dies entspricht exakt Figur A.\n\nAusschluss: Figur B ist ein Rechteck. Figur C ist eine reguläre Treppe mit Stufenbreiten 30/30/30 (Fläche 5400). Figur D ist die spiegelverkehrte Treppe, die nur durch unzulässiges Spiegeln gebildet werden könnte.",
    "metadata": {
      "pieceCount": 5,
      "shapeFamily": "Asymmetrisches Treppenpolygon",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim4-q14",
    "simulationId": "fz-sim4",
    "questionNumber": 14,
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
            20,
            45
          ],
          [
            60,
            45
          ],
          [
            60,
            75
          ],
          [
            20,
            75
          ]
        ],
        "area": 1200
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
          ],
          [
            0,
            30
          ]
        ],
        "canvasPoints": [
          [
            110,
            30
          ],
          [
            110,
            70
          ],
          [
            80,
            70
          ],
          [
            80,
            30
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
            175,
            40
          ],
          [
            205,
            40
          ],
          [
            175,
            80
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
            40
          ]
        ],
        "canvasPoints": [
          [
            275,
            80
          ],
          [
            245,
            80
          ],
          [
            275,
            40
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
            30,
            0
          ],
          [
            0,
            35
          ]
        ],
        "canvasPoints": [
          [
            345,
            40
          ],
          [
            345,
            70
          ],
          [
            310,
            40
          ]
        ],
        "area": 525
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
            60
          ],
          [
            30,
            60
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
            70,
            0
          ],
          [
            100,
            60
          ],
          [
            30,
            60
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
            70,
            0
          ],
          [
            70,
            60
          ],
          [
            0,
            60
          ]
        ],
        "viewBox": "-10 -10 90 80"
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
            70,
            45
          ],
          [
            20,
            45
          ]
        ],
        "viewBox": "-10 -10 110 65"
      },
      "E": {
        "key": "E",
        "polygon": null,
        "viewBox": "0 0 100 100",
        "isNone": true
      }
    },
    "explanation": "Geometrische Analyse: Die Summe aller Teilstücke beträgt: Rechteck 1 (1200) + Rechteck 2 (1200) + Dreieck 3 (600) + Dreieck 4 (600) + Dreieck 5 (525) = exakt 4125 Einheiten. Teilstück 5 besitzt eine Kathete von nur 35 statt 40, wodurch es nicht mit den 40er-Kanten der übrigen Dreiecke und Rechtecke bündig abschließen kann.\n\nAusschluss: Figur A (Trapez mit Fläche 3900) ist zu klein. Die Figuren B und C (Fläche je 4200) sind um 75 Einheiten zu groß für die gegebenen Teile. Figur D scheitert an den inkompatiblen Kantenlängen und Winkeln der Dreiecke. Keine der Figuren A–D lässt sich exakt aus den Teilen zusammensetzen. Korrekt ist daher Antwort E.",
    "metadata": {
      "pieceCount": 5,
      "shapeFamily": "Trapez-Kanten-Diskrepanz",
      "requiresRotation": true,
      "isEAnswer": true
    },
    "assembly": []
  },
  {
    "id": "fz-sim4-q15",
    "simulationId": "fz-sim4",
    "questionNumber": 15,
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
            40
          ],
          [
            0,
            40
          ]
        ],
        "canvasPoints": [
          [
            20,
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
            20,
            80
          ]
        ],
        "area": 2400
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
            0,
            40
          ]
        ],
        "canvasPoints": [
          [
            110,
            40
          ],
          [
            130,
            40
          ],
          [
            110,
            80
          ]
        ],
        "area": 400
      },
      {
        "id": "p3",
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
            180,
            80
          ],
          [
            160,
            80
          ],
          [
            160,
            40
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
            40
          ],
          [
            0,
            40
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
            80
          ],
          [
            220,
            80
          ]
        ],
        "area": 1600
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
            40
          ]
        ],
        "canvasPoints": [
          [
            290,
            40
          ],
          [
            350,
            40
          ],
          [
            320,
            80
          ]
        ],
        "area": 1200
      }
    ],
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
          40
        ],
        [
          70,
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
      "viewBox": "-10 -10 120 100",
      "area": 6000
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
            100,
            60
          ],
          [
            0,
            60
          ]
        ],
        "viewBox": "-10 -10 120 80"
      },
      "B": {
        "key": "B",
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
            60
          ],
          [
            80,
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
        "viewBox": "-10 -10 120 100"
      },
      "C": {
        "key": "C",
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
            40
          ],
          [
            70,
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
        "viewBox": "-10 -10 120 100"
      },
      "D": {
        "key": "D",
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
        "viewBox": "-10 -10 140 80"
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
        "pieceId": "p2",
        "rotationDeg": 0,
        "translation": [
          0,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p1",
        "rotationDeg": 0,
        "translation": [
          20,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p3",
        "rotationDeg": 180,
        "translation": [
          100,
          40
        ],
        "isReflection": false
      },
      {
        "pieceId": "p4",
        "rotationDeg": 0,
        "translation": [
          30,
          40
        ],
        "isReflection": false
      },
      {
        "pieceId": "p5",
        "rotationDeg": 0,
        "translation": [
          20,
          40
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: Teilstück 1 (60 × 40 Rechteck, Fläche 2400) und die beiden Dreiecke 2 und 3 (Katheten 20 und 40, Fläche je 400) bilden das untere breite Trapez mit Grundlinie 60 bei y = 0 und Decklinie 100 bei y = 40 (Fläche 3200). Der obere Bereich wird aus dem 40 × 40 Quadrat (Fläche 1600) und dem Dreieck 5 (Basis 60, Höhe 40, Fläche 1200) zusammengesetzt (Fläche 2800). Zusammen entsteht ein 6-eckiges Diagonaltrapez mit Gesamtfläche 3200 + 2800 = 6000 Einheiten. Dies entspricht exakt Figur C.\n\nAusschluss: Figur A ist ein einfaches Rechteck ohne Schrägen. Figur B ist ein 8-eckiges Polygon. Figur D ist ein symmetrisches Trapez mit Fläche 5400 (zu klein).",
    "metadata": {
      "pieceCount": 5,
      "shapeFamily": "Hexagonales Diagonaltrapez",
      "requiresRotation": true,
      "isEAnswer": false
    }
  }
];
