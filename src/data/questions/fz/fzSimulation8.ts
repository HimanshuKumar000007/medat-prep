import type { FzQuestionData } from "./types";

export const FZ_SIMULATION_8_QUESTIONS: FzQuestionData[] = [
  {
    "id": "fz-sim8-q01",
    "simulationId": "fz-sim8",
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
            35,
            40
          ],
          [
            85,
            40
          ],
          [
            85,
            80
          ],
          [
            35,
            80
          ]
        ],
        "area": 2000
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
            160,
            45
          ],
          [
            180,
            45
          ],
          [
            180,
            65
          ],
          [
            160,
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
            0,
            20
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
            245,
            45
          ]
        ],
        "area": 200
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
          70,
          20
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
      "viewBox": "-10 -10 90 60",
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
            70,
            0
          ],
          [
            50,
            40
          ],
          [
            10,
            40
          ]
        ],
        "viewBox": "-10 -10 90 60"
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
            20
          ],
          [
            35,
            20
          ],
          [
            35,
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
            70,
            0
          ],
          [
            70,
            20
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
          50,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p3",
        "rotationDeg": 0,
        "translation": [
          50,
          20
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: Teilstück p1 (Rechteck 50 × 40, Fläche 2000) bildet den linken massiven Hauptblock von x = 0 bis 50. Rechts schließt im unteren Bereich von x = 50 bis 70 Teilstück p2 (Quadrat 20 × 20, Fläche 400) von y = 0 bis 20 an. Darüber wird Teilstück p3 (Dreieck 20 × 20, Fläche 200) aufgesetzt, dessen Hypotenuse eine diagonale Abschrägung von (70, 20) nach (50, 40) bildet. Gesamtfläche: 2000 + 400 + 200 = 2600 Einheiten. Dies entspricht exakt Figur D.\n\nAusschluss: Figur A ist ein einfaches Rechteck ohne Schräge. Figur B ist ein Parallelogramm. Figur C ist ein rein rechtwinkliges L-Polygon ohne Schrägkante mit Flächendefizit.",
    "metadata": {
      "pieceCount": 3,
      "shapeFamily": "Abgetreppter Keil",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim8-q02",
    "simulationId": "fz-sim8",
    "questionNumber": 2,
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
            35,
            40
          ],
          [
            95,
            40
          ],
          [
            95,
            80
          ],
          [
            35,
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
            160,
            45
          ],
          [
            160,
            70
          ],
          [
            120,
            70
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
            15,
            0
          ],
          [
            0,
            40
          ]
        ],
        "canvasPoints": [
          [
            260,
            75
          ],
          [
            245,
            75
          ],
          [
            260,
            35
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
            0,
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
            85,
            40
          ],
          [
            15,
            40
          ]
        ],
        "viewBox": "-10 -10 105 60"
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
            40
          ],
          [
            0,
            40
          ]
        ],
        "viewBox": "-10 -10 100 60"
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
            75,
            30
          ],
          [
            35,
            30
          ],
          [
            35,
            60
          ],
          [
            0,
            60
          ]
        ],
        "viewBox": "-10 -10 95 80"
      },
      "E": {
        "key": "E",
        "polygon": null,
        "viewBox": "0 0 100 100",
        "isNone": true
      }
    },
    "assembly": [],
    "explanation": "Geometrische Analyse: Teilstück p1 ist ein Rechteck von 60 × 40 (Fläche 2400). Teilstück p2 ist ein Dreieck mit Katheten 25 und 40 (Fläche 500, Hypotenuse ~47,17). Teilstück p3 ist ein Dreieck mit Katheten 15 und 40 (Fläche 300, Hypotenuse ~42,72). Die Gesamtfläche beträgt 3200 Einheiten.\n\nAusschlussverfahren:\n- Figur A ist ein symmetrisches Trapez mit Fläche 3200. Ein solches erfordert zwei identische Schrägflanken; p2 und p3 besitzen jedoch völlig unterschiedliche Neigungswinkel (~58,0° vs. ~69,4°).\n- Figur B ist ein Parallelogramm, welches zwei kongruente Dreiecke voraussetzt.\n- Figur C ist ein Rechteck von 80 × 40 (Fläche 3200). Um ein Rechteck zu bilden, müssten p2 und p3 an ihren Hypotenusen zusammengefügt ein Rechteck von 20 × 40 ergeben. Da ihre Hypotenusen (47,17 vs. 42,72) ungleich sind, ist ein fugenloses Aneinanderlegen unmöglich.\n- Figur D besitzt eine abweichende Fläche von 3300 Einheiten.\n\nFolglich lässt sich keine der Figuren A–D bilden; Option E ist richtig.",
    "metadata": {
      "pieceCount": 3,
      "shapeFamily": "Ausschluss-Heuristik",
      "requiresRotation": true,
      "isEAnswer": true
    }
  },
  {
    "id": "fz-sim8-q03",
    "simulationId": "fz-sim8",
    "questionNumber": 3,
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
            30,
            45
          ],
          [
            50,
            45
          ],
          [
            50,
            75
          ],
          [
            30,
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
            110,
            45
          ],
          [
            130,
            45
          ],
          [
            130,
            75
          ],
          [
            110,
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
          ]
        ],
        "canvasPoints": [
          [
            195,
            45
          ],
          [
            195,
            65
          ],
          [
            165,
            65
          ]
        ],
        "area": 300
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
            0,
            30
          ]
        ],
        "canvasPoints": [
          [
            285,
            75
          ],
          [
            265,
            75
          ],
          [
            285,
            45
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
          80,
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
      "viewBox": "-10 -10 100 60",
      "area": 1800
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
            30
          ],
          [
            0,
            30
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
            80,
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
            80,
            30
          ],
          [
            20,
            30
          ]
        ],
        "viewBox": "-10 -10 100 60"
      },
      "D": {
        "key": "D",
        "polygon": [
          [
            10,
            0
          ],
          [
            70,
            0
          ],
          [
            80,
            35
          ],
          [
            0,
            35
          ]
        ],
        "viewBox": "-10 -10 100 60"
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
        "pieceId": "p1",
        "rotationDeg": 0,
        "translation": [
          20,
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
        "pieceId": "p4",
        "rotationDeg": 0,
        "translation": [
          60,
          0
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: Teilstück p1 (20 × 30) und p2 (20 × 30) bilden nebeneinander den 40 × 30 Mittelblock von x = 20 bis 60 (Fläche 1200). Links fügt sich Teilstück p3 (Dreieck 20 × 30, Fläche 300) an, dessen Hypotenuse die linke Flanke von (0, 0) nach (20, 30) bildet. Rechts schließt Teilstück p4 (Dreieck 20 × 30, Fläche 300) an, dessen Hypotenuse die rechte Flanke von (80, 0) nach (60, 30) formt. Das Ergebnis ist ein symmetrisches Trapez mit Grundseite 80, Deckseite 40 und Höhe 30. Gesamtfläche: 1200 + 300 + 300 = 1800 Einheiten. Dies entspricht exakt Figur B.\n\nAusschluss: Figur A ist ein einfaches Rechteck ohne Schrägen. Figur C ist ein Parallelogramm mit zwei gleichgerichteten Schrägen. Figur D ist ein unproportioniertes Trapez mit abweichender Fläche.",
    "metadata": {
      "pieceCount": 4,
      "shapeFamily": "Symmetrisches Trapez",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim8-q04",
    "simulationId": "fz-sim8",
    "questionNumber": 4,
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
            100,
            45
          ],
          [
            130,
            45
          ],
          [
            130,
            75
          ],
          [
            100,
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
            170,
            45
          ],
          [
            200,
            45
          ],
          [
            200,
            75
          ],
          [
            170,
            75
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
            240,
            45
          ],
          [
            270,
            45
          ],
          [
            270,
            75
          ],
          [
            240,
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
            60
          ],
          [
            0,
            60
          ]
        ],
        "viewBox": "-10 -10 80 80"
      },
      "C": {
        "key": "C",
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
            0,
            60
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
            90,
            40
          ],
          [
            0,
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
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p4",
        "rotationDeg": 0,
        "translation": [
          0,
          30
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: Alle 4 Teilstücke sind kongruente Quadrate von 30 × 30 (Fläche je 900). Drei Quadrate p1, p2 und p3 bilden den durchgehenden horizontalen Schenkel von 90 × 30 von y = 0 bis 30. Das vierte Quadrat p4 wird auf p1 bei x = 0 bis 30 aufgesetzt und formt den vertikalen Schenkel bis y = 60. Es entsteht ein rechtwinkliges L-Polygon mit Gesamtfläche 4 × 900 = 3600 Einheiten. Dies entspricht exakt Figur A.\n\nAusschluss: Figur B ist ein 2x2 Quadrat. Figur C ist ein T-Polygon mit abweichender Armgeometrie. Figur D ist ein einfaches Rechteck.",
    "metadata": {
      "pieceCount": 4,
      "shapeFamily": "Orthogonales L-Polygon",
      "requiresRotation": false,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim8-q05",
    "simulationId": "fz-sim8",
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
            70,
            45
          ],
          [
            70,
            75
          ],
          [
            30,
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
            115,
            45
          ],
          [
            135,
            45
          ],
          [
            135,
            75
          ],
          [
            115,
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
            195,
            45
          ],
          [
            195,
            75
          ],
          [
            165,
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
            30
          ]
        ],
        "canvasPoints": [
          [
            290,
            75
          ],
          [
            260,
            75
          ],
          [
            290,
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
          120,
          30
        ],
        [
          30,
          30
        ]
      ],
      "viewBox": "-10 -10 140 60",
      "area": 2700
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
            30
          ],
          [
            0,
            30
          ]
        ],
        "viewBox": "-10 -10 110 60"
      },
      "B": {
        "key": "B",
        "polygon": [
          [
            15,
            0
          ],
          [
            75,
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
            120,
            30
          ],
          [
            30,
            30
          ]
        ],
        "viewBox": "-10 -10 140 60"
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
            30,
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
          70,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p4",
        "rotationDeg": 270,
        "translation": [
          90,
          30
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: Teilstück p1 (40 × 30, Fläche 1200) und p2 (20 × 30, Fläche 600) formen zusammen einen rechteckigen Mittelblock von 60 × 30 (Fläche 1800) von x = 30 bis 90. Links schließt Teilstück p3 (Dreieck mit Katheten 30 und 30, Fläche 450) von x = 0 bis 30 an. Rechts fügt sich Teilstück p4 (Dreieck 30 × 30, Fläche 450) um 270° gedreht von x = 90 bis 120 an. Beide Schrägflanken verlaufen exakt parallel unter 45°. Das Resultat ist ein Parallelogramm mit Grundseite 90, Deckseite 90 und Höhe 30 mit einer Gesamtfläche von 450 + 1800 + 450 = 2700 Einheiten. Dies entspricht exakt Figur C.\n\nAusschluss: Figur A ist ein einfaches Rechteck ohne Schrägen. Figur B und D sind Trapeze mit gegensinnig geneigten Flanken.",
    "metadata": {
      "pieceCount": 4,
      "shapeFamily": "Rhomboid-Parallelogramm",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim8-q06",
    "simulationId": "fz-sim8",
    "questionNumber": 6,
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
            30,
            45
          ],
          [
            70,
            45
          ],
          [
            70,
            75
          ],
          [
            30,
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
            115,
            45
          ],
          [
            145,
            45
          ],
          [
            145,
            75
          ],
          [
            115,
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
          ]
        ],
        "canvasPoints": [
          [
            195,
            45
          ],
          [
            195,
            65
          ],
          [
            165,
            65
          ]
        ],
        "area": 300
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
            285,
            75
          ],
          [
            255,
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
          120,
          0
        ],
        [
          90,
          30
        ],
        [
          20,
          30
        ]
      ],
      "viewBox": "-10 -10 140 60",
      "area": 2850
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
            30
          ],
          [
            20,
            30
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
            95,
            0
          ],
          [
            95,
            30
          ],
          [
            0,
            30
          ]
        ],
        "viewBox": "-10 -10 115 60"
      },
      "C": {
        "key": "C",
        "polygon": [
          [
            10,
            0
          ],
          [
            100,
            0
          ],
          [
            90,
            30
          ],
          [
            20,
            30
          ]
        ],
        "viewBox": "0 -10 110 60"
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
            35
          ],
          [
            30,
            35
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
        "pieceId": "p3",
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
        "pieceId": "p2",
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
          90,
          0
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: Teilstück p1 (40 × 30, Fläche 1200) und Teilstück p2 (30 × 30, Fläche 900) formen zusammen einen rechteckigen Mittelblock von 70 × 30 von x = 20 bis 90. Links schließt Teilstück p3 (Dreieck 20 × 30, Fläche 300) an, dessen Hypotenuse die Flanke von (0, 0) nach (20, 30) bildet (Neigung ~56,3°). Rechts schließt Teilstück p4 (Dreieck 30 × 30, Fläche 450) an, dessen Hypotenuse die Flanke von (120, 0) nach (90, 30) formt (Neigung 45°). Das Resultat ist ein asymmetrisches Großtrapez mit Grundseite 120, Deckseite 70 und Höhe 30. Gesamtfläche: 300 + 1200 + 900 + 450 = 2850 Einheiten. Dies entspricht exakt Figur A.\n\nAusschluss: Figur B ist ein einfaches Rechteck ohne Schrägen. Figur C ist ein Parallelogramm mit abweichender Fläche. Figur D ist ein symmetrisches Trapez.",
    "metadata": {
      "pieceCount": 4,
      "shapeFamily": "Asymmetrisches Großtrapez",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim8-q07",
    "simulationId": "fz-sim8",
    "questionNumber": 7,
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
            35,
            0
          ],
          [
            35,
            35
          ],
          [
            0,
            35
          ]
        ],
        "canvasPoints": [
          [
            30,
            45
          ],
          [
            65,
            45
          ],
          [
            65,
            80
          ],
          [
            30,
            80
          ]
        ],
        "area": 1225
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
            35,
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
            145,
            45
          ],
          [
            145,
            70
          ],
          [
            110,
            70
          ]
        ],
        "area": 875
      },
      {
        "id": "p3",
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
            35
          ]
        ],
        "canvasPoints": [
          [
            195,
            45
          ],
          [
            195,
            70
          ],
          [
            160,
            45
          ]
        ],
        "area": 437.5
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
            0,
            35
          ]
        ],
        "canvasPoints": [
          [
            285,
            75
          ],
          [
            265,
            75
          ],
          [
            285,
            40
          ]
        ],
        "area": 350
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
            65,
            0
          ],
          [
            65,
            45
          ],
          [
            0,
            45
          ]
        ],
        "viewBox": "-10 -10 85 65"
      },
      "B": {
        "key": "B",
        "polygon": [
          [
            10,
            0
          ],
          [
            70,
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
            75,
            0
          ],
          [
            75,
            30
          ],
          [
            35,
            30
          ],
          [
            35,
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
            70,
            0
          ],
          [
            85,
            35
          ],
          [
            15,
            35
          ]
        ],
        "viewBox": "-10 -10 105 60"
      },
      "E": {
        "key": "E",
        "polygon": null,
        "viewBox": "0 0 100 100",
        "isNone": true
      }
    },
    "assembly": [],
    "explanation": "Geometrische Analyse: Die Gesamtfläche der 4 Teilstücke summiert sich exakt auf 1225 + 875 + 437,5 + 350 = 2887,5 Flächeneinheiten. Zudem besitzen die Dreiecke p3 und p4 inkompatible Hypotenusen (~43,01 vs. ~40,31).\n\nAusschlussverfahren:\n- Figur A ist ein Rechteck von 65 × 45 mit einer Fläche von 2925 Einheiten (Disparität: +37,5 Einheiten).\n- Figur B ist ein Trapez mit Fläche 2800 Einheiten (-87,5 Einheiten Defizit).\n- Figur C ist ein L-Polygon mit Fläche 3300 Einheiten.\n- Figur D ist ein Parallelogramm mit Fläche 2450 Einheiten.\n\nDa keine der Optionen A–D mit der mathematisch exakten Gesamtfläche von 2887,5 Einheiten übereinstimmt, ist Option E korrekt.",
    "metadata": {
      "pieceCount": 4,
      "shapeFamily": "Ausschluss-Heuristik",
      "requiresRotation": true,
      "isEAnswer": true
    }
  },
  {
    "id": "fz-sim8-q08",
    "simulationId": "fz-sim8",
    "questionNumber": 8,
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
            30,
            45
          ],
          [
            70,
            45
          ],
          [
            70,
            75
          ],
          [
            30,
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
            45
          ],
          [
            150,
            45
          ],
          [
            150,
            75
          ],
          [
            110,
            75
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
            20,
            0
          ],
          [
            20,
            30
          ]
        ],
        "canvasPoints": [
          [
            195,
            45
          ],
          [
            195,
            65
          ],
          [
            165,
            65
          ]
        ],
        "area": 300
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
            0,
            30
          ]
        ],
        "canvasPoints": [
          [
            285,
            75
          ],
          [
            265,
            75
          ],
          [
            285,
            45
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
          80,
          0
        ],
        [
          80,
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
          0,
          60
        ]
      ],
      "viewBox": "-10 -10 100 80",
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
            50
          ],
          [
            20,
            50
          ]
        ],
        "viewBox": "-10 -10 100 70"
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
            30
          ],
          [
            20,
            30
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
          40,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p4",
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
    "explanation": "Geometrische Analyse: Teilstück p1 (40 × 30, Fläche 1200) und p2 (40 × 30, Fläche 1200) formen zusammen das 80 × 30 Basisband von y = 0 bis 30 (Fläche 2400). Auf der linken Oberseite wird Teilstück p4 (Dreieck 20 × 30, Fläche 300) aufgesetzt, dessen Hypotenuse von (20, 30) nach (0, 60) ansteigt. Auf der rechten Oberseite wird Teilstück p3 (Dreieck 20 × 30, Fläche 300) aufgesetzt, dessen Hypotenuse von (60, 30) nach (80, 60) ansteigt. Zwischen x = 20 und 60 verbleibt ein v-förmig eingesenktes Tal. Gesamtfläche: 2400 + 300 + 300 = 3000 Einheiten. Dies entspricht exakt Figur D.\n\nAusschluss: Figur A ist ein einfaches Rechteck ohne Einbuchtung. Figur B ist ein konvexes Trapez. Figur C ist ein asymmetrisches L-Polygon mit Flächenüberschuss.",
    "metadata": {
      "pieceCount": 4,
      "shapeFamily": "Kerb-Heptagon",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim8-q09",
    "simulationId": "fz-sim8",
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
          ],
          [
            30,
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
            20
          ],
          [
            0,
            20
          ]
        ],
        "canvasPoints": [
          [
            100,
            45
          ],
          [
            120,
            45
          ],
          [
            120,
            65
          ],
          [
            100,
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
            165,
            45
          ],
          [
            185,
            45
          ],
          [
            185,
            65
          ],
          [
            165,
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
            230,
            45
          ],
          [
            250,
            45
          ],
          [
            250,
            65
          ],
          [
            230,
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
            295,
            45
          ],
          [
            315,
            45
          ],
          [
            315,
            65
          ],
          [
            295,
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
          30
        ],
        [
          60,
          30
        ],
        [
          60,
          50
        ],
        [
          40,
          50
        ],
        [
          40,
          80
        ],
        [
          20,
          80
        ],
        [
          20,
          50
        ],
        [
          0,
          50
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
      "viewBox": "-10 -10 80 100",
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
            20,
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
            60,
            30
          ],
          [
            60,
            50
          ],
          [
            40,
            50
          ],
          [
            40,
            80
          ],
          [
            20,
            80
          ],
          [
            20,
            50
          ],
          [
            0,
            50
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
        "viewBox": "-10 -10 80 100"
      },
      "C": {
        "key": "C",
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
            0,
            60
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
            80
          ],
          [
            0,
            80
          ]
        ],
        "viewBox": "-10 -10 80 100"
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
        "pieceId": "p5",
        "rotationDeg": 0,
        "translation": [
          20,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p1",
        "rotationDeg": 0,
        "translation": [
          20,
          20
        ],
        "isReflection": false
      },
      {
        "pieceId": "p4",
        "rotationDeg": 0,
        "translation": [
          20,
          60
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
          40,
          30
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: Teilstück p5 (20 × 20), p1 (20 × 40) und p4 (20 × 20) formen übereinandergestapelt den 20 × 80 Schaft von y = 0 bis 80 zwischen x = 20 und 40 (Fläche 1600). Links schließt Teilstück p2 (20 × 20, Fläche 400) von x = 0 bis 20 und y = 30 bis 50 an. Rechts schließt Teilstück p3 (20 × 20, Fläche 400) von x = 40 bis 60 und y = 30 bis 50 an. Es entsteht ein symmetrisches lateinisches Kreuz mit Gesamtfläche 1600 + 400 + 400 = 2400 Einheiten. Dies entspricht exakt Figur B.\n\nAusschluss: Figur A ist ein einfaches Rechteck ohne Kreuzarme. Figur C ist ein T-förmiges Polygon. Figur D ist ein L-Polygon.",
    "metadata": {
      "pieceCount": 5,
      "shapeFamily": "Lateinisches Kreuz",
      "requiresRotation": false,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim8-q10",
    "simulationId": "fz-sim8",
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
            25,
            45
          ],
          [
            55,
            45
          ],
          [
            55,
            65
          ],
          [
            25,
            65
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
            85,
            45
          ],
          [
            115,
            45
          ],
          [
            115,
            65
          ],
          [
            85,
            65
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
            155,
            45
          ],
          [
            155,
            75
          ],
          [
            135,
            75
          ],
          [
            135,
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
            220,
            45
          ],
          [
            250,
            45
          ],
          [
            250,
            65
          ],
          [
            220,
            65
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
            290,
            75
          ],
          [
            270,
            75
          ],
          [
            270,
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
          60,
          0
        ],
        [
          60,
          40
        ],
        [
          90,
          40
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
          20
        ],
        [
          0,
          20
        ]
      ],
      "viewBox": "-10 -10 110 80",
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
            40
          ],
          [
            90,
            40
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
            20
          ],
          [
            0,
            20
          ]
        ],
        "viewBox": "-10 -10 110 80"
      },
      "D": {
        "key": "D",
        "polygon": [
          [
            15,
            0
          ],
          [
            45,
            0
          ],
          [
            45,
            30
          ],
          [
            75,
            30
          ],
          [
            75,
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
            15,
            30
          ]
        ],
        "viewBox": "-10 -10 95 80"
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
          30,
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
          60,
          40
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: Teilstück p1 und p2 (je 30 × 20) formen den horizontalen Basisbalken von 60 × 20 von y = 0 bis 20 (Fläche 1200). Teilstück p3 (30 × 20) verbindet als vertikale Stufe von x = 30 bis 60 und y = 20 bis 40 (Fläche 600). Oben schließen p4 und p5 (je 30 × 20) von x = 30 bis 90 und y = 40 bis 60 als oberer horizontaler Balken an (Fläche 1200). Das Resultat ist ein doppelt gestuftes, punktsymmetrisches Z-förmiges Polygon mit Gesamtfläche 1200 + 600 + 1200 = 3000 Einheiten. Dies entspricht exakt Figur C.\n\nAusschluss: Figur A ist ein einfaches Rechteck ohne Versatz. Figur B ist eine einseitig abfallende Treppe mit abweichender Fläche. Figur D ist ein unregelmäßiges T-Polygon.",
    "metadata": {
      "pieceCount": 5,
      "shapeFamily": "Z-Treppen-Polygon",
      "requiresRotation": false,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim8-q11",
    "simulationId": "fz-sim8",
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
            25,
            45
          ],
          [
            55,
            45
          ],
          [
            55,
            75
          ],
          [
            25,
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
            30
          ],
          [
            0,
            30
          ]
        ],
        "canvasPoints": [
          [
            85,
            45
          ],
          [
            115,
            45
          ],
          [
            115,
            75
          ],
          [
            85,
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
          ]
        ],
        "canvasPoints": [
          [
            155,
            45
          ],
          [
            155,
            65
          ],
          [
            125,
            65
          ]
        ],
        "area": 300
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
            0,
            30
          ]
        ],
        "canvasPoints": [
          [
            220,
            45
          ],
          [
            240,
            45
          ],
          [
            220,
            75
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
            30
          ],
          [
            0,
            30
          ]
        ],
        "canvasPoints": [
          [
            290,
            45
          ],
          [
            330,
            45
          ],
          [
            330,
            75
          ],
          [
            290,
            75
          ]
        ],
        "area": 1200
      }
    ],
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
          70,
          30
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
        ],
        [
          30,
          30
        ]
      ],
      "viewBox": "-10 -10 120 80",
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
            80,
            0
          ],
          [
            80,
            45
          ],
          [
            0,
            45
          ]
        ],
        "viewBox": "-10 -10 100 65"
      },
      "B": {
        "key": "B",
        "polygon": [
          [
            10,
            0
          ],
          [
            90,
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
        "viewBox": "0 -10 100 60"
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
        "viewBox": "-10 -10 100 80"
      },
      "D": {
        "key": "D",
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
            70,
            30
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
          ],
          [
            30,
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
    "assembly": [
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
          0,
          30
        ],
        "isReflection": false
      },
      {
        "pieceId": "p1",
        "rotationDeg": 0,
        "translation": [
          20,
          30
        ],
        "isReflection": false
      },
      {
        "pieceId": "p2",
        "rotationDeg": 0,
        "translation": [
          50,
          30
        ],
        "isReflection": false
      },
      {
        "pieceId": "p4",
        "rotationDeg": 0,
        "translation": [
          80,
          30
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: Teilstück p5 (40 × 30, Fläche 1200) bildet den schmaleren zentralen Sockel von x = 30 bis 70 und y = 0 bis 30. Auf der Oberseite (y = 30 bis 60) ruht ein breiter Überhang von x = 0 bis 100, bestehend aus Teilstück p3 (Dreieck 20 × 30, Fläche 300) ganz links, den Quadraten p1 und p2 (je 30 × 30, Fläche je 900) in der Mitte und Teilstück p4 (Dreieck 20 × 30, Fläche 300) ganz rechts. Die beiden Dreiecke bilden die symmetrischen Schrägen von (0, 30) nach (20, 60) bzw. von (100, 30) nach (80, 60). Gesamtfläche: 1200 + 2400 = 3600 Einheiten. Dies entspricht exakt Figur D.\n\nAusschluss: Figur A ist ein einfaches Rechteck ohne Kragarm. Figur B ist ein einfaches Trapez. Figur C ist ein L-Polygon.",
    "metadata": {
      "pieceCount": 5,
      "shapeFamily": "Krag-Trapez",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim8-q12",
    "simulationId": "fz-sim8",
    "questionNumber": 12,
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
            50,
            0
          ],
          [
            50,
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
            75,
            45
          ],
          [
            75,
            75
          ],
          [
            25,
            75
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
            165,
            45
          ],
          [
            165,
            65
          ],
          [
            135,
            65
          ],
          [
            135,
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
            25,
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
            45
          ],
          [
            260,
            45
          ],
          [
            235,
            75
          ]
        ],
        "area": 375
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
            0,
            30
          ]
        ],
        "canvasPoints": [
          [
            320,
            75
          ],
          [
            305,
            75
          ],
          [
            320,
            45
          ]
        ],
        "area": 225
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
            20,
            0
          ],
          [
            100,
            0
          ],
          [
            120,
            30
          ],
          [
            0,
            30
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
            80,
            0
          ],
          [
            95,
            35
          ],
          [
            15,
            35
          ]
        ],
        "viewBox": "-10 -10 115 60"
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
            50
          ],
          [
            0,
            50
          ]
        ],
        "viewBox": "-10 -10 90 70"
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
            85,
            30
          ],
          [
            60,
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
        "viewBox": "-10 -10 105 80"
      },
      "E": {
        "key": "E",
        "polygon": null,
        "viewBox": "0 0 100 100",
        "isNone": true
      }
    },
    "assembly": [],
    "explanation": "Geometrische Analyse: Die Gesamtfläche der 5 Teilstücke beträgt exakt 1500 + 900 + 600 + 375 + 225 = 3600 Flächeneinheiten. Allerdings besitzen die beiden Dreiecke p4 und p5 inkompatible Katheten (25 und 15 bei Höhe 30) mit Hypotenusen von ~39,05 und ~33,54.\n\nAusschlussverfahren:\n- Figur A ist ein symmetrisches Trapez mit Fläche 3600. Es erfordert zwingend zwei kongruente Dreiecke mit identischer Kathetenlänge; p4 und p5 weisen jedoch verschiedene Neigungen (~50,2° vs. ~63,4°) auf.\n- Figur B ist ein Parallelogramm, welches zwei Dreiecke mit identischem Schrägungswinkel benötigt (Fläche 2800).\n- Figur C ist ein Rechteck von 70 × 50 mit einer Fläche von 3500 Einheiten (Flächendefizit: 100 Einheiten).\n- Figur D ist ein Sechseck mit einer Fläche von 3750 Einheiten (Überschuss: 150 Einheiten).\n\nDa keine der Optionen A–D gebildet werden kann, ist Option E korrekt.",
    "metadata": {
      "pieceCount": 5,
      "shapeFamily": "Ausschluss-Heuristik",
      "requiresRotation": true,
      "isEAnswer": true
    }
  },
  {
    "id": "fz-sim8-q13",
    "simulationId": "fz-sim8",
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
            50,
            0
          ],
          [
            50,
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
            75,
            45
          ],
          [
            75,
            75
          ],
          [
            25,
            75
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
            165,
            45
          ],
          [
            165,
            65
          ],
          [
            135,
            65
          ],
          [
            135,
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
            235,
            45
          ],
          [
            265,
            45
          ],
          [
            265,
            75
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
            20,
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
            75
          ],
          [
            295,
            75
          ],
          [
            315,
            45
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
          80,
          0
        ],
        [
          80,
          30
        ],
        [
          70,
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
          0,
          30
        ]
      ],
      "viewBox": "-10 -10 100 80",
      "area": 3750
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
            70,
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
            0,
            30
          ]
        ],
        "viewBox": "-10 -10 100 80"
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
            50
          ],
          [
            0,
            50
          ]
        ],
        "viewBox": "-10 -10 95 70"
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
            60,
            55
          ],
          [
            20,
            55
          ]
        ],
        "viewBox": "-10 -10 100 75"
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
            30
          ],
          [
            45,
            30
          ],
          [
            45,
            65
          ],
          [
            0,
            65
          ]
        ],
        "viewBox": "-10 -10 100 85"
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
          50,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p4",
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
          30
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: Teilstück p1 (50 × 30, Fläche 1500) und p2 (30 × 30, Fläche 900) formen zusammen die 80 × 30 Basis von y = 0 bis 30 (Fläche 2400). Auf der Oberseite (y = 30 bis 60) schließt links Teilstück p4 (Dreieck 30 × 30, Fläche 450) von x = 0 bis 30 an, dessen Hypotenuse von (0, 30) nach (30, 60) ansteigt. In der Mitte bildet Teilstück p3 (Rechteck 20 × 30, Fläche 600) den Turmkörper von x = 30 bis 50. Rechts schließt Teilstück p5 (Dreieck 20 × 30, Fläche 300) an, dessen Hypotenuse von (50, 60) nach (70, 30) abfällt. Die Kante von (70, 30) bis (80, 30) verbleibt als waagrechte Schulter. Gesamtfläche: 2400 + 450 + 600 + 300 = 3750 Einheiten. Dies entspricht exakt Figur A.\n\nAusschluss: Figur B ist ein einfaches Rechteck ohne Dachaufbau. Figur C ist ein rein symmetrisches Trapez. Figur D ist ein L-Polygon.",
    "metadata": {
      "pieceCount": 5,
      "shapeFamily": "Chalet-Polygon",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim8-q14",
    "simulationId": "fz-sim8",
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
            25,
            45
          ],
          [
            65,
            45
          ],
          [
            65,
            65
          ],
          [
            25,
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
            95,
            45
          ],
          [
            135,
            45
          ],
          [
            135,
            65
          ],
          [
            95,
            65
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
            165,
            45
          ],
          [
            185,
            45
          ],
          [
            185,
            65
          ],
          [
            165,
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
            230,
            45
          ],
          [
            250,
            45
          ],
          [
            250,
            65
          ],
          [
            230,
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
            295,
            45
          ],
          [
            315,
            45
          ],
          [
            315,
            65
          ],
          [
            295,
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
          40
        ],
        [
          50,
          40
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
          40
        ],
        [
          20,
          40
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
      "viewBox": "-10 -10 100 80",
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
            80,
            0
          ],
          [
            60,
            45
          ],
          [
            20,
            45
          ]
        ],
        "viewBox": "-10 -10 100 65"
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
            50,
            40
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
            40
          ],
          [
            20,
            40
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
            20
          ],
          [
            40,
            20
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
          40,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p3",
        "rotationDeg": 0,
        "translation": [
          20,
          20
        ],
        "isReflection": false
      },
      {
        "pieceId": "p4",
        "rotationDeg": 0,
        "translation": [
          40,
          20
        ],
        "isReflection": false
      },
      {
        "pieceId": "p5",
        "rotationDeg": 0,
        "translation": [
          30,
          40
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: Teilstück p1 (40 × 20) und p2 (40 × 20) bilden nebeneinander die 80 × 20 Basis von y = 0 bis 20 (Fläche 1600). Mittig darauf bilden p3 und p4 (je 20 × 20) die zweite Stufe von 40 × 20 von x = 20 bis 60 und y = 20 bis 40 (Fläche 800). Den Abschluss bildet p5 (Quadrat 20 × 20, Fläche 400) mittig zentriert von x = 30 bis 50 und y = 40 bis 60. Es entsteht eine vollkommen spiegelsymmetrische dreistufige Stufenpyramide mit Gesamtfläche 1600 + 800 + 400 = 2800 Einheiten. Dies entspricht exakt Figur C.\n\nAusschluss: Figur A ist ein einfaches Rechteck ohne Abstufungen. Figur B ist ein Trapez. Figur D ist ein unregelmäßiges L-Polygon.",
    "metadata": {
      "pieceCount": 5,
      "shapeFamily": "Dreistufige Zikkurat",
      "requiresRotation": false,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim8-q15",
    "simulationId": "fz-sim8",
    "questionNumber": 15,
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
            25,
            45
          ],
          [
            65,
            45
          ],
          [
            65,
            85
          ],
          [
            25,
            85
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
            95,
            45
          ],
          [
            135,
            45
          ],
          [
            135,
            65
          ],
          [
            95,
            65
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
            20,
            0
          ],
          [
            20,
            20
          ]
        ],
        "canvasPoints": [
          [
            165,
            45
          ],
          [
            165,
            65
          ],
          [
            145,
            65
          ]
        ],
        "area": 200
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
            0,
            20
          ]
        ],
        "canvasPoints": [
          [
            230,
            45
          ],
          [
            250,
            45
          ],
          [
            230,
            65
          ]
        ],
        "area": 200
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
          ]
        ],
        "canvasPoints": [
          [
            285,
            45
          ],
          [
            285,
            65
          ],
          [
            265,
            65
          ]
        ],
        "area": 200
      },
      {
        "id": "p6",
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
            20
          ]
        ],
        "canvasPoints": [
          [
            345,
            65
          ],
          [
            325,
            65
          ],
          [
            345,
            45
          ]
        ],
        "area": 200
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
          60,
          20
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
          60,
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
          20,
          40
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
      "viewBox": "-10 -10 100 80",
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
            60,
            20
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
            60,
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
            20,
            40
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
            60,
            45
          ],
          [
            20,
            45
          ]
        ],
        "viewBox": "-10 -10 100 65"
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
            30
          ],
          [
            60,
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
        "pieceId": "p2",
        "rotationDeg": 0,
        "translation": [
          20,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p1",
        "rotationDeg": 0,
        "translation": [
          20,
          20
        ],
        "isReflection": false
      },
      {
        "pieceId": "p3",
        "rotationDeg": 180,
        "translation": [
          40,
          20
        ],
        "isReflection": false
      },
      {
        "pieceId": "p4",
        "rotationDeg": 180,
        "translation": [
          20,
          40
        ],
        "isReflection": false
      },
      {
        "pieceId": "p5",
        "rotationDeg": 0,
        "translation": [
          60,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p6",
        "rotationDeg": 0,
        "translation": [
          60,
          40
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: Teilstück p2 (40 × 20) und p1 (40 × 40) formen übereinander den zentralen rechteckigen Kern von 40 × 60 (Fläche 2400) von x = 20 bis 60. An den vier äußeren Ecken schließen die vier rechtwinkligen Dreiecke p3, p4, p5 und p6 (je 20 × 20, Fläche je 200) an: zwei linksseitige Dreiecke mit Spitzen bei (0, 20) und (0, 40) sowie zwei rechtsseitige Dreiecke mit Spitzen bei (80, 20) und (80, 40). In der Taille verbleiben lichte Buchten. Gesamtfläche: 2400 + 4 × 200 = 3200 Einheiten. Dies entspricht exakt Figur B.\n\nAusschluss: Figur A ist ein einfaches Rechteck ohne Einkerbungen. Figur C ist ein Trapez. Figur D ist ein einfaches konvexes Sechseck.",
    "metadata": {
      "pieceCount": 6,
      "shapeFamily": "Diagonalschnitt-Oktagon",
      "requiresRotation": true,
      "isEAnswer": false
    }
  }
];
