import type { FzQuestionData } from "./types";

export const FZ_SIMULATION_11_QUESTIONS: FzQuestionData[] = [
  {
    "id": "fz-sim11-q01",
    "simulationId": "fz-sim11",
    "questionNumber": 1,
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
            35,
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
            35,
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
            125,
            75
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
            280,
            75
          ],
          [
            250,
            75
          ],
          [
            250,
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
          70,
          0
        ],
        [
          100,
          30
        ],
        [
          30,
          30
        ]
      ],
      "viewBox": "-10 -10 120 60",
      "area": 2100
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
            100,
            30
          ],
          [
            30,
            30
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
            30
          ],
          [
            30,
            30
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
            30
          ],
          [
            0,
            30
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
            60,
            0
          ],
          [
            60,
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
        "viewBox": "-10 -10 80 80"
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
          30,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p3",
        "rotationDeg": 180,
        "translation": [
          100,
          30
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: Teilstück p1 (Rechteck 40 × 30, Fläche 1200) bildet das Zentrum von x = 30 bis 70. Links schließt Teilstück p2 (Dreieck 30 × 30, Fläche 450) an, dessen Hypotenuse von (0, 0) nach (30, 30) ansteigt. Rechts schließt Teilstück p3 (Dreieck 30 × 30, Fläche 450) um 180° rotiert an, dessen Hypotenuse parallel von (70, 0) nach (100, 30) verläuft. Beide Schrägkanten sind gleichsinnig 45° geneigt. Das Resultat ist ein Parallelogramm mit Grundseite 70 und Höhe 30. Gesamtfläche: 1200 + 450 + 450 = 2100 Einheiten. Dies entspricht exakt Figur A.\n\nAusschluss: Figur B ist ein symmetrisches Trapez mit gegensinnigen Schrägen. Figur C ist ein schlichtes Rechteck. Figur D ist ein rechtwinkliges L-Polygon.",
    "metadata": {
      "pieceCount": 3,
      "shapeFamily": "Parallelogramm",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim11-q02",
    "simulationId": "fz-sim11",
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
            140,
            45
          ],
          [
            140,
            75
          ],
          [
            100,
            45
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
            0,
            30
          ]
        ],
        "canvasPoints": [
          [
            250,
            45
          ],
          [
            270,
            45
          ],
          [
            250,
            75
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
      "B": {
        "key": "B",
        "polygon": [
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
            30
          ],
          [
            20,
            30
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
            30,
            20
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
        "viewBox": "-10 -10 80 70"
      },
      "E": {
        "key": "E",
        "polygon": null,
        "viewBox": "0 0 100 100",
        "isNone": true
      }
    },
    "assembly": [],
    "explanation": "Geometrische Analyse: Die Summe der Einzelflächen beträgt 900 + 600 + 300 = 1800 Einheiten. Teilstück p2 besitzt Katheten von 30 und 40. Figur C besitzt zwar dieselbe Fläche (60 × 30 = 1800), verlangt jedoch eine Maximalhöhe von 30 Einheiten: Teilstück p2 ragt mit seiner 40er-Kathete unweigerlich über das Rechteck hinaus oder lässt bei Rotation Lücken mit dem Quadrat 30 × 30 offen. Figuren A und D verlangen eine Fläche von 2100, Figur B von 1500. Keine der Antwortfiguren A–D lässt sich exakt und lückenlos bilden. Option E ist zwingend richtig.\n\nAusschluss: A (2100 ≠ 1800), B (1500 ≠ 1800), C (Höhenüberhang 40 > 30), D (2100 ≠ 1800).",
    "metadata": {
      "pieceCount": 3,
      "shapeFamily": "Fangfrage",
      "requiresRotation": true,
      "isEAnswer": true
    }
  },
  {
    "id": "fz-sim11-q03",
    "simulationId": "fz-sim11",
    "questionNumber": 3,
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
            25,
            45
          ],
          [
            85,
            45
          ],
          [
            85,
            75
          ],
          [
            25,
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
            150,
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
            150,
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
            0,
            30
          ]
        ],
        "canvasPoints": [
          [
            260,
            45
          ],
          [
            260,
            75
          ],
          [
            230,
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
          0,
          30
        ]
      ],
      "viewBox": "-10 -10 140 60",
      "area": 3150
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
            105,
            0
          ],
          [
            105,
            30
          ],
          [
            0,
            30
          ]
        ],
        "viewBox": "-10 -10 125 60"
      },
      "B": {
        "key": "B",
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
            105,
            30
          ],
          [
            15,
            30
          ]
        ],
        "viewBox": "-10 -10 140 60"
      },
      "C": {
        "key": "C",
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
            0,
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
            90,
            25
          ],
          [
            45,
            25
          ],
          [
            45,
            50
          ],
          [
            0,
            50
          ]
        ],
        "viewBox": "-10 -10 110 70"
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
          60,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p3",
        "rotationDeg": 0,
        "translation": [
          90,
          0
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: Teilstück p1 (Rechteck 60 × 30, Fläche 1800) und Teilstück p2 (Quadrat 30 × 30, Fläche 900) formen zusammen einen rechteckigen Grundkörper von 90 × 30 (Fläche 2700) von x = 0 bis 90. Rechts schließt Teilstück p3 (Dreieck 30 × 30, Fläche 450) an, dessen Kathete von (90, 0) bis (120, 0) reicht und dessen Hypotenuse von (90, 30) nach (120, 0) abfällt. Gesamtfläche: (120 + 90) / 2 × 30 = 3150 Einheiten. Dies entspricht exakt Figur C.\n\nAusschluss: Figur A ist ein einfaches Rechteck ohne Schräge. Figur B ist beidseitig symmetrisch abgeschrägt. Figur D ist eine stufenförmige Zikkurat.",
    "metadata": {
      "pieceCount": 3,
      "shapeFamily": "Keil-Trapez",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim11-q04",
    "simulationId": "fz-sim11",
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
            120,
            45
          ],
          [
            140,
            45
          ],
          [
            140,
            85
          ],
          [
            120,
            85
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
            295,
            65
          ],
          [
            275,
            65
          ],
          [
            295,
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
          80,
          0
        ],
        [
          80,
          40
        ],
        [
          20,
          40
        ],
        [
          0,
          20
        ]
      ],
      "viewBox": "-10 -10 100 60",
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
            20,
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
            20,
            40
          ],
          [
            0,
            20
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
            65,
            40
          ],
          [
            15,
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
            20
          ],
          [
            30,
            0
          ],
          [
            30,
            10
          ],
          [
            80,
            10
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
            40
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
          0,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p3",
        "rotationDeg": 180,
        "translation": [
          20,
          40
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: Teilstück p1 (Quadrat 40 × 40, Fläche 1600) und Teilstück p2 (Rechteck 20 × 40, Fläche 800) bilden einen rechteckigen Block von 60 × 40 (Fläche 2400) von x = 20 bis 80. Links setzen sich die beiden Dreiecke p3 und p4 (je 200 Fläche) zu einer nach links vorspringenden Dreiecksspitze mit Scheitelpunkt bei (0, 20) zusammen. Resultat ist ein horizontales Pentagon. Gesamtfläche: 2400 + 400 = 2800 Einheiten. Dies entspricht exakt Figur B.\n\nAusschluss: Figur A ist ein Rechteck ohne Spitze. Figur C ist ein beidseitig abgeschrägtes Trapez. Figur D ist ein klassischer Pfeil mit separatem Schaft.",
    "metadata": {
      "pieceCount": 4,
      "shapeFamily": "Pfeilspitzen-Pentagon",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim11-q05",
    "simulationId": "fz-sim11",
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
            25,
            50
          ],
          [
            85,
            50
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
            130,
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
            130,
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
            0,
            20
          ]
        ],
        "canvasPoints": [
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
            45
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
            20,
            20
          ]
        ],
        "canvasPoints": [
          [
            285,
            65
          ],
          [
            265,
            65
          ],
          [
            265,
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
          40,
          0
        ],
        [
          40,
          10
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
          0,
          50
        ],
        [
          0,
          30
        ],
        [
          20,
          10
        ]
      ],
      "viewBox": "-10 -10 80 70",
      "area": 2200
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
        "viewBox": "-10 -10 80 70"
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
            40
          ],
          [
            40,
            40
          ],
          [
            40,
            20
          ],
          [
            20,
            20
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
        "viewBox": "-10 -10 80 60"
      },
      "C": {
        "key": "C",
        "polygon": [
          [
            10,
            0
          ],
          [
            50,
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
      "D": {
        "key": "D",
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
            10
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
            0,
            50
          ],
          [
            0,
            30
          ],
          [
            20,
            10
          ]
        ],
        "viewBox": "-10 -10 80 70"
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
          0,
          30
        ],
        "isReflection": false
      },
      {
        "pieceId": "p4",
        "rotationDeg": 0,
        "translation": [
          0,
          10
        ],
        "isReflection": false
      },
      {
        "pieceId": "p3",
        "rotationDeg": 180,
        "translation": [
          60,
          30
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: Teilstück p2 (Rechteck 20 × 30, Fläche 600) bildet den zentralen vertikalen Pfosten von x = 20 bis 40 (y = 0 bis 30). Oben schließt Teilstück p1 (Rechteck 60 × 20, Fläche 1200) als durchgehender Querbalken von y = 30 bis 50 an. Die Dreiecke p3 und p4 (je 200 Fläche) sitzen beidseitig unter dem Querbalken als diagonale Versteifungskeile mit 45°-Schrägen von (0, 30) nach (20, 10) bzw. von (60, 30) nach (40, 10). Gesamtfläche: 1200 + 600 + 200 + 200 = 2200 Einheiten. Dies entspricht exakt Figur D.\n\nAusschluss: Figur A ist ein rein rechtwinkliges T-Polygon ohne Versteifungsschrägen. Figur B ist ein nach oben offener U-Kanal. Figur C ist ein simples Trapez.",
    "metadata": {
      "pieceCount": 4,
      "shapeFamily": "T-Träger",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim11-q06",
    "simulationId": "fz-sim11",
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
            110,
            45
          ],
          [
            140,
            45
          ],
          [
            140,
            75
          ],
          [
            110,
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
            20
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
            175,
            75
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
            20
          ]
        ],
        "canvasPoints": [
          [
            275,
            50
          ],
          [
            305,
            50
          ],
          [
            275,
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
          70,
          0
        ],
        [
          70,
          30
        ],
        [
          40,
          50
        ],
        [
          10,
          30
        ],
        [
          0,
          30
        ]
      ],
      "viewBox": "-10 -10 90 70",
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
            70,
            0
          ],
          [
            70,
            30
          ],
          [
            40,
            50
          ],
          [
            10,
            30
          ],
          [
            0,
            30
          ]
        ],
        "viewBox": "-10 -10 90 70"
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
            30
          ],
          [
            35,
            55
          ],
          [
            0,
            30
          ]
        ],
        "viewBox": "-10 -10 90 75"
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
            40
          ],
          [
            10,
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
        "viewBox": "-10 -10 90 80"
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
          10,
          30
        ],
        "isReflection": false
      },
      {
        "pieceId": "p4",
        "rotationDeg": 0,
        "translation": [
          40,
          30
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: Teilstück p1 (Rechteck 40 × 30, Fläche 1200) und Teilstück p2 (Quadrat 30 × 30, Fläche 900) formen zusammen das rechteckige Fundament von 70 × 30 (Fläche 2100). Auf der Oberkante bei y = 30 sitzt von x = 10 bis 70 ein Giebeldach mit Breite 60 und Höhe 20, gebildet aus den beiden Dreiecken p3 und p4 (je 300 Fläche), mit Dachfirst bei (40, 50). Links bleibt eine Flachdach-Schulter von x = 0 bis 10 frei. Gesamtfläche: 2100 + 600 = 2700 Einheiten. Dies entspricht exakt Figur A.\n\nAusschluss: Figur B ist ein vollständig symmetrisches Haus ohne Schulter. Figur C ist ein einzelnes Großtrapez. Figur D ist ein rein rechtwinkliges L-Polygon.",
    "metadata": {
      "pieceCount": 4,
      "shapeFamily": "Kirchen-Polygon",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim11-q07",
    "simulationId": "fz-sim11",
    "questionNumber": 7,
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
            120,
            45
          ],
          [
            140,
            45
          ],
          [
            140,
            65
          ],
          [
            120,
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
            30,
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
            195,
            75
          ],
          [
            175,
            45
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
            20,
            20
          ]
        ],
        "canvasPoints": [
          [
            275,
            45
          ],
          [
            295,
            45
          ],
          [
            295,
            65
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
          80,
          0
        ],
        [
          50,
          20
        ],
        [
          50,
          30
        ],
        [
          40,
          30
        ],
        [
          20,
          50
        ],
        [
          0,
          50
        ]
      ],
      "viewBox": "-10 -10 100 70",
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
            70,
            0
          ],
          [
            60,
            30
          ],
          [
            45,
            50
          ],
          [
            25,
            50
          ],
          [
            10,
            30
          ]
        ],
        "viewBox": "-10 -10 90 70"
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
            40
          ],
          [
            15,
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
            50,
            20
          ],
          [
            50,
            30
          ],
          [
            40,
            30
          ],
          [
            20,
            50
          ],
          [
            0,
            50
          ]
        ],
        "viewBox": "-10 -10 100 70"
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
            20
          ],
          [
            50,
            35
          ],
          [
            25,
            35
          ],
          [
            25,
            50
          ],
          [
            0,
            50
          ]
        ],
        "viewBox": "-10 -10 90 70"
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
        "pieceId": "p4",
        "rotationDeg": 180,
        "translation": [
          40,
          50
        ],
        "isReflection": false
      },
      {
        "pieceId": "p3",
        "rotationDeg": 0,
        "translation": [
          50,
          0
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: Teilstück p1 (Rechteck 50 × 30, Fläche 1500) bildet den Rumpf von (0, 0) bis (50, 30). Oben links sitzt Quadrat p2 (20 × 20, Fläche 400) von y = 30 bis 50, ergänzt durch Dreieck p4 (20 × 20, Fläche 200) mit Schräge von (20, 50) nach (40, 30). Rechts am Rumpf schließt Dreieck p3 (30 × 20, Fläche 300) von x = 50 bis 80 mit Schräge von (50, 20) nach (80, 0) an, während darüber bei y = 20 bis 30 eine Stufe zurückbleibt. Gesamtfläche: 1500 + 400 + 200 + 300 = 2400 Einheiten. Dies entspricht exakt Figur C.\n\nAusschluss: Figur A ist ein symmetrisches Monument. Figur B ist ein einfaches Großtrapez. Figur D ist ein stufenförmiges Polygon ohne Schrägen.",
    "metadata": {
      "pieceCount": 4,
      "shapeFamily": "Pultdach-Monument",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim11-q08",
    "simulationId": "fz-sim11",
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
            100,
            45
          ],
          [
            130,
            45
          ],
          [
            130,
            65
          ],
          [
            100,
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
            0,
            20
          ]
        ],
        "canvasPoints": [
          [
            175,
            45
          ],
          [
            175,
            75
          ],
          [
            155,
            45
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
            20,
            20
          ]
        ],
        "canvasPoints": [
          [
            250,
            50
          ],
          [
            270,
            50
          ],
          [
            270,
            70
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
            330,
            65
          ],
          [
            290,
            65
          ],
          [
            330,
            45
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
            70,
            35
          ],
          [
            20,
            35
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
            60,
            0
          ],
          [
            80,
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
            15,
            0
          ],
          [
            65,
            0
          ],
          [
            80,
            30
          ],
          [
            65,
            60
          ],
          [
            15,
            60
          ],
          [
            0,
            30
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
            70,
            0
          ],
          [
            70,
            25
          ],
          [
            45,
            25
          ],
          [
            45,
            50
          ],
          [
            0,
            50
          ]
        ],
        "viewBox": "-10 -10 90 70"
      },
      "E": {
        "key": "E",
        "polygon": null,
        "viewBox": "0 0 100 100",
        "isNone": true
      }
    },
    "assembly": [],
    "explanation": "Geometrische Analyse: Die Summe der Einzelflächen beträgt 1200 + 600 + 300 + 200 + 400 = 2700 Einheiten. Figur B besitzt zwar dieselbe Fläche (60 × 45 = 2700), erfordert als Parallelogramm jedoch zwingend zwei identische gegenseitige Neigungswinkel an den Flanken. Die vorhandenen drei Dreiecke besitzen aber drei grundverschiedene Flankensteigungen: p3 = 20/30 (33,7°), p4 = 20/20 (45,0°) und p5 = 20/40 (26,6°). Es existiert kein zweites Teilstück mit identischer Schräge, um parallele Seitenkanten zu schließen. Figuren A, C und D weichen flächenmäßig ab (2800, 3000, 2375). Daher ist Option E zwingend richtig.\n\nAusschluss: A (2800 ≠ 2700), B (Winkelfalle: keine identischen Flankenschrägen vorhanden), C (3000 ≠ 2700), D (2375 ≠ 2700).",
    "metadata": {
      "pieceCount": 5,
      "shapeFamily": "Fangfrage",
      "requiresRotation": true,
      "isEAnswer": true
    }
  },
  {
    "id": "fz-sim11-q09",
    "simulationId": "fz-sim11",
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
            175,
            45
          ],
          [
            175,
            65
          ],
          [
            145,
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
            245,
            45
          ],
          [
            265,
            45
          ],
          [
            245,
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
            30,
            0
          ],
          [
            15,
            20
          ]
        ],
        "canvasPoints": [
          [
            315,
            50
          ],
          [
            345,
            50
          ],
          [
            330,
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
          110,
          0
        ],
        [
          90,
          30
        ],
        [
          70,
          30
        ],
        [
          55,
          50
        ],
        [
          40,
          30
        ],
        [
          20,
          30
        ]
      ],
      "viewBox": "-10 -10 130 70",
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
            100,
            0
          ],
          [
            100,
            30
          ],
          [
            50,
            55
          ],
          [
            0,
            30
          ]
        ],
        "viewBox": "-10 -10 120 75"
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
            90,
            30
          ],
          [
            70,
            30
          ],
          [
            55,
            50
          ],
          [
            40,
            30
          ],
          [
            20,
            30
          ]
        ],
        "viewBox": "-10 -10 130 70"
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
            90,
            0
          ],
          [
            90,
            25
          ],
          [
            60,
            25
          ],
          [
            60,
            45
          ],
          [
            30,
            45
          ],
          [
            30,
            25
          ],
          [
            0,
            25
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
    "assembly": [
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
        "pieceId": "p3",
        "rotationDeg": 0,
        "translation": [
          90,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p5",
        "rotationDeg": 0,
        "translation": [
          40,
          30
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: Teilstück p4 (Dreieck 20 × 30), p1 (Rechteck 40 × 30), p2 (Quadrat 30 × 30) und p3 (Dreieck 20 × 30) bilden zusammen ein symmetrisches Großtrapez mit Grundseite 110, Deckseite 70 und Höhe 30 (Fläche 2700). Auf der oberen Deckseite sitzt zentriert von x = 40 bis 70 das Dreieck p5 (30 × 20, Fläche 300) mit Firstspitze bei (55, 50). Gesamtfläche: 2700 + 300 = 3000 Einheiten. Dies entspricht exakt Figur B.\n\nAusschluss: Figur A ist ein Haus mit geraden Außenwänden ohne basale Schrägen. Figur C ist ein Trapez ohne Dachaufbau. Figur D ist ein treppenförmiges Monument.",
    "metadata": {
      "pieceCount": 5,
      "shapeFamily": "Giebel-Heptagon",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim11-q10",
    "simulationId": "fz-sim11",
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
            20,
            45
          ],
          [
            60,
            45
          ],
          [
            60,
            65
          ],
          [
            20,
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
            105,
            45
          ],
          [
            145,
            45
          ],
          [
            145,
            65
          ],
          [
            105,
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
            195,
            45
          ],
          [
            215,
            45
          ],
          [
            215,
            65
          ],
          [
            195,
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
            335,
            65
          ],
          [
            315,
            65
          ],
          [
            315,
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
          20
        ],
        [
          80,
          20
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
          80,
          40
        ],
        [
          0,
          40
        ]
      ],
      "viewBox": "-10 -10 120 80",
      "area": 2400
    },
    "options": {
      "A": {
        "key": "A",
        "polygon": [
          [
            0,
            20
          ],
          [
            70,
            20
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
            70,
            60
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
        "viewBox": "-10 -10 120 80"
      },
      "B": {
        "key": "B",
        "polygon": [
          [
            0,
            10
          ],
          [
            40,
            10
          ],
          [
            60,
            0
          ],
          [
            80,
            10
          ],
          [
            80,
            50
          ],
          [
            60,
            60
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
            60,
            20
          ],
          [
            40,
            20
          ],
          [
            40,
            40
          ],
          [
            20,
            40
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
            20
          ],
          [
            80,
            20
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
            80,
            40
          ],
          [
            0,
            40
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
          80,
          20
        ],
        "isReflection": false
      },
      {
        "pieceId": "p5",
        "rotationDeg": 0,
        "translation": [
          80,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p4",
        "rotationDeg": 180,
        "translation": [
          100,
          60
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: Teilstück p1 und p2 (je 40 × 20, Fläche je 800) bilden zusammen einen Pfeilschaft von 80 × 20 (Fläche 1600) von x = 0 bis 80 (y = 20 bis 40). Rechts schließt der Pfeilkopf an: Quadrat p3 (20 × 20, Fläche 400) bildet den Kern von x = 80 bis 100. Darunter sitzt Dreieck p5 (Fläche 200) mit Schräge von (80, 0) nach (100, 20), darüber Dreieck p4 (Fläche 200) mit Schräge von (80, 60) nach (100, 40). Die vorderste Spitze bildet eine vertikale Kante von 20 Einheiten Länge bei x = 100 (Meißel-Kopf). Gesamtfläche: 1600 + 400 + 200 + 200 = 2400 Einheiten. Dies entspricht exakt Figur D.\n\nAusschluss: Figur A läuft vorne in einer einzigen spitzen Ecke bei (100, 30) aus. Figur B ist ein symmetrisches Doppeltrapez. Figur C ist eine treppenförmige Zikkurat.",
    "metadata": {
      "pieceCount": 5,
      "shapeFamily": "Meißel-Pfeil",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim11-q11",
    "simulationId": "fz-sim11",
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
            0,
            0
          ],
          [
            40,
            0
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
            25,
            30
          ],
          [
            65,
            30
          ],
          [
            65,
            90
          ],
          [
            25,
            90
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
            110,
            75
          ]
        ],
        "area": 300
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
            175,
            45
          ],
          [
            175,
            65
          ],
          [
            145,
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
            245,
            45
          ],
          [
            265,
            45
          ],
          [
            245,
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
            325,
            65
          ],
          [
            305,
            65
          ],
          [
            305,
            35
          ]
        ],
        "area": 300
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
          90,
          30
        ],
        [
          70,
          60
        ],
        [
          30,
          60
        ],
        [
          10,
          30
        ]
      ],
      "viewBox": "0 -10 100 80",
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
            30,
            0
          ],
          [
            70,
            0
          ],
          [
            90,
            30
          ],
          [
            70,
            60
          ],
          [
            30,
            60
          ],
          [
            10,
            30
          ]
        ],
        "viewBox": "0 -10 100 80"
      },
      "C": {
        "key": "C",
        "polygon": [
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
            10,
            45
          ]
        ],
        "viewBox": "0 -10 100 110"
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
            90,
            35
          ],
          [
            60,
            60
          ],
          [
            10,
            60
          ],
          [
            0,
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
          30,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p3",
        "rotationDeg": 0,
        "translation": [
          10,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p2",
        "rotationDeg": 180,
        "translation": [
          30,
          60
        ],
        "isReflection": false
      },
      {
        "pieceId": "p4",
        "rotationDeg": 0,
        "translation": [
          70,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p5",
        "rotationDeg": 180,
        "translation": [
          90,
          60
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: Teilstück p1 (Rechteck 40 × 60, Fläche 2400) bildet das massive Zentrum von x = 30 bis 70 (y = 0 bis 60). Links formen die Dreiecke p2 und p3 (je 300 Fläche) eine nach links zeigende Spitze bei (10, 30). Rechts formen die Dreiecke p4 und p5 (je 300 Fläche) eine nach rechts zeigende Spitze bei (90, 30). Das Resultat ist ein punktsymmetrisches Doppelspitz-Hexagon mit horizontalen Kanten oben und unten von 40 Einheiten Länge. Gesamtfläche: 2400 + 600 + 600 = 3600 Einheiten. Dies entspricht exakt Figur B.\n\nAusschluss: Figur A ist ein einfaches Quadrat ohne Spitzen. Figur C ist eine geneigte Raute ohne horizontale Grund- und Deckkanten. Figur D ist ein asymmetrisches Heptagon.",
    "metadata": {
      "pieceCount": 5,
      "shapeFamily": "Doppelspitz-Hexagon",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim11-q12",
    "simulationId": "fz-sim11",
    "questionNumber": 12,
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
            20,
            50
          ],
          [
            80,
            50
          ],
          [
            80,
            70
          ],
          [
            20,
            70
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
          ],
          [
            0,
            30
          ]
        ],
        "canvasPoints": [
          [
            175,
            45
          ],
          [
            195,
            45
          ],
          [
            195,
            75
          ],
          [
            175,
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
            10,
            20
          ]
        ],
        "canvasPoints": [
          [
            245,
            50
          ],
          [
            265,
            50
          ],
          [
            255,
            70
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
            10,
            20
          ]
        ],
        "canvasPoints": [
          [
            315,
            50
          ],
          [
            335,
            50
          ],
          [
            325,
            70
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
          60,
          0
        ],
        [
          60,
          50
        ],
        [
          50,
          70
        ],
        [
          40,
          50
        ],
        [
          40,
          20
        ],
        [
          20,
          20
        ],
        [
          20,
          50
        ],
        [
          10,
          70
        ],
        [
          0,
          50
        ]
      ],
      "viewBox": "-10 -10 80 90",
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
            60,
            0
          ],
          [
            60,
            50
          ],
          [
            50,
            70
          ],
          [
            40,
            50
          ],
          [
            40,
            20
          ],
          [
            20,
            20
          ],
          [
            20,
            50
          ],
          [
            10,
            70
          ],
          [
            0,
            50
          ]
        ],
        "viewBox": "-10 -10 80 90"
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
            40,
            30
          ],
          [
            40,
            60
          ],
          [
            30,
            80
          ],
          [
            20,
            60
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
        "viewBox": "-10 -10 80 100"
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
            65,
            45
          ],
          [
            15,
            45
          ]
        ],
        "viewBox": "-10 -10 100 65"
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
            50
          ],
          [
            40,
            50
          ],
          [
            40,
            20
          ],
          [
            20,
            20
          ],
          [
            20,
            50
          ],
          [
            0,
            50
          ]
        ],
        "viewBox": "-10 -10 80 70"
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
          50
        ],
        "isReflection": false
      },
      {
        "pieceId": "p5",
        "rotationDeg": 0,
        "translation": [
          40,
          50
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: Teilstück p1 (Rechteck 60 × 20, Fläche 1200) bildet das durchgehende Fundament. Links sitzt der Turmschaft p2 (20 × 30, Fläche 600) bekrönt von Dreieck p4 (20 × 20, Fläche 200) mit Firstspitze bei (10, 70). Rechts sitzt spiegelbildlich der Turmschaft p3 (20 × 30, Fläche 600) bekrönt von Dreieck p5 (20 × 20, Fläche 200) mit Firstspitze bei (50, 70). Dazwischen liegt von x = 20 bis 40 auf Höhe y = 20 ein vertiefter Burghof. Gesamtfläche: 1200 + 2 × 600 + 2 × 200 = 2800 Einheiten. Dies entspricht exakt Figur A.\n\nAusschluss: Figur B besitzt nur einen einzelnen Mittelturm. Figur C ist ein schlichtes Großtrapez. Figur D ist ein U-Kanal ohne spitze Turmdächer.",
    "metadata": {
      "pieceCount": 5,
      "shapeFamily": "Burg-Monument",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim11-q13",
    "simulationId": "fz-sim11",
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
            20,
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
            20,
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
            90,
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
            90,
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
            180,
            45
          ],
          [
            180,
            60
          ],
          [
            150,
            45
          ]
        ],
        "area": 225
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
            245,
            45
          ],
          [
            270,
            45
          ],
          [
            245,
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
            30,
            0
          ],
          [
            0,
            20
          ]
        ],
        "canvasPoints": [
          [
            325,
            65
          ],
          [
            295,
            65
          ],
          [
            325,
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
            35
          ],
          [
            20,
            35
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
            70,
            0
          ],
          [
            70,
            30
          ],
          [
            45,
            30
          ],
          [
            45,
            60
          ],
          [
            0,
            60
          ]
        ],
        "viewBox": "-10 -10 90 80"
      },
      "E": {
        "key": "E",
        "polygon": null,
        "viewBox": "0 0 100 100",
        "isNone": true
      }
    },
    "assembly": [],
    "explanation": "Geometrische Analyse: Die Summe der Einzelflächen beträgt 900 + 1200 + 225 + 375 + 300 = 3000 Einheiten. Das Parallelogramm in Figur C besitzt zwar dieselbe Fläche (75 × 40 = 3000), verlangt jedoch an beiden Flanken identische Neigungswinkel mit Steigung 2,0 (Höhe 40 auf 20 horizontalen Versatz). Unter den Teilstücken existiert mit p3 (30/15 = 2,0) nur ein einziges Teilstück mit diesem Steigungsverhältnis; die anderen beiden Dreiecke p4 (30/25 = 1,2) und p5 (20/30 = 0,67) besitzen völlig inkompatible Winkel. Ein Parallelogramm lässt sich daher geometrisch unmöglich schließen. Figuren A (3600), B (2800) und D (3450) scheiden über die Fläche aus. Option E ist die einzig korrekte Antwort.\n\nAusschluss: A (3600 ≠ 3000), B (2800 ≠ 3000), C (Winkelinkompatibilität: Parallelogrammflanken verlangen zweimal Steigung 2,0), D (3450 ≠ 3000).",
    "metadata": {
      "pieceCount": 5,
      "shapeFamily": "Fangfrage",
      "requiresRotation": true,
      "isEAnswer": true
    }
  },
  {
    "id": "fz-sim11-q14",
    "simulationId": "fz-sim11",
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
            20,
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
            20,
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
            20
          ],
          [
            0,
            20
          ]
        ],
        "canvasPoints": [
          [
            80,
            45
          ],
          [
            110,
            45
          ],
          [
            110,
            65
          ],
          [
            80,
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
            140,
            45
          ],
          [
            170,
            45
          ],
          [
            170,
            65
          ],
          [
            140,
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
            200,
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
            200,
            75
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
            260,
            45
          ],
          [
            260,
            65
          ],
          [
            230,
            45
          ]
        ],
        "area": 300
      },
      {
        "id": "p6",
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
            20
          ]
        ],
        "canvasPoints": [
          [
            330,
            65
          ],
          [
            300,
            65
          ],
          [
            330,
            45
          ]
        ],
        "area": 300
      }
    ],
    "targetFigure": {
      "polygon": [
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
          20
        ],
        [
          70,
          20
        ],
        [
          50,
          50
        ],
        [
          50,
          70
        ],
        [
          20,
          90
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
          20
        ],
        [
          20,
          20
        ]
      ],
      "viewBox": "-10 -10 90 110",
      "area": 3300
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
            50,
            0
          ],
          [
            50,
            20
          ],
          [
            70,
            20
          ],
          [
            70,
            50
          ],
          [
            50,
            50
          ],
          [
            50,
            70
          ],
          [
            20,
            70
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
            20
          ],
          [
            20,
            20
          ]
        ],
        "viewBox": "-10 -10 90 90"
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
            20,
            60
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
        "viewBox": "-10 -10 90 80"
      },
      "C": {
        "key": "C",
        "polygon": [
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
            20
          ],
          [
            70,
            20
          ],
          [
            50,
            50
          ],
          [
            50,
            70
          ],
          [
            20,
            90
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
            20
          ],
          [
            20,
            20
          ]
        ],
        "viewBox": "-10 -10 90 110"
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
            15,
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
        "rotationDeg": 0,
        "translation": [
          20,
          50
        ],
        "isReflection": false
      },
      {
        "pieceId": "p4",
        "rotationDeg": 0,
        "translation": [
          0,
          20
        ],
        "isReflection": false
      },
      {
        "pieceId": "p5",
        "rotationDeg": 180,
        "translation": [
          70,
          50
        ],
        "isReflection": false
      },
      {
        "pieceId": "p6",
        "rotationDeg": 0,
        "translation": [
          20,
          70
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: Das vertikale Mittelschiff wird aus p2 (30 × 20), p1 (30 × 30) und p3 (30 × 20) zu einer Säule von 30 × 70 (Fläche 2100) von x = 20 bis 50 zusammengesetzt. Links ragt das rechteckige Querschiff p4 (20 × 30, Fläche 600) von x = 0 bis 20 hervor. Rechts bildet Dreieck p5 (20 × 30, Fläche 300) eine schräge Stützflanke von (70, 20) nach (50, 50). Oben schließt Dreieck p6 (30 × 20, Fläche 300) als Pultdachspitze mit Scheitelpunkt bei (20, 90) ab. Gesamtfläche: 2100 + 600 + 300 + 300 = 3300 Einheiten. Dies entspricht exakt Figur C.\n\nAusschluss: Figur A ist ein rein rechtwinkliges Kreuz ohne Schrägkanten. Figur B ist ein Stufenturm. Figur D ist ein einzelnes Großtrapez.",
    "metadata": {
      "pieceCount": 6,
      "shapeFamily": "Kathedralen-Polygon",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim11-q15",
    "simulationId": "fz-sim11",
    "questionNumber": 15,
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
            20,
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
            20,
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
            75,
            45
          ],
          [
            105,
            45
          ],
          [
            105,
            75
          ],
          [
            75,
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
          ]
        ],
        "canvasPoints": [
          [
            140,
            45
          ],
          [
            140,
            75
          ],
          [
            110,
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
          ]
        ],
        "canvasPoints": [
          [
            275,
            45
          ],
          [
            275,
            75
          ],
          [
            245,
            75
          ]
        ],
        "area": 450
      },
      {
        "id": "p6",
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
            345,
            65
          ],
          [
            315,
            65
          ],
          [
            345,
            35
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
          60,
          60
        ]
      ],
      "viewBox": "-10 -10 140 80",
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
            120,
            0
          ],
          [
            60,
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
        "pieceId": "p4",
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
          60,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p6",
        "rotationDeg": 0,
        "translation": [
          90,
          0
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
        "rotationDeg": 180,
        "translation": [
          90,
          60
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: Die 6 Teilstücke formen ein großes gleichschenkliges Dreieck mit Grundlinie 120 (von x = 0 bis 120 auf y = 0) und Scheitelhöhe 60 bei (60, 60). Das zentrale Basisband bilden die Quadrate p1 und p2 (je 900 Fläche) von x = 30 bis 90. Links schließt Dreieck p4 (Fläche 450) von (0, 0) bis (30, 30) an, rechts Dreieck p6 (Fläche 450) von (90, 30) bis (120, 0). Den oberen First von y = 30 bis 60 formen die Dreiecke p3 und p5 (je 450 Fläche). Die beiden Seitenflanken verlaufen als perfekte, durchgehende 45°-Geraden von (0, 0) nach (60, 60) bzw. von (60, 60) nach (120, 0). Gesamtfläche: 120 × 60 / 2 = 3600 Einheiten. Dies entspricht exakt Figur D.\n\nAusschluss: Figur A ist ein Quadrat ohne Dreiecksspitze. Figur B ist ein symmetrisches Trapez mit abgestumpfter Deckfläche. Figur C ist ein schräges Parallelogramm.",
    "metadata": {
      "pieceCount": 6,
      "shapeFamily": "Großdreieck",
      "requiresRotation": true,
      "isEAnswer": false
    }
  }
];
