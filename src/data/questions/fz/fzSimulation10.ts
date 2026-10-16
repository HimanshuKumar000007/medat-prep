import type { FzQuestionData } from "./types";

export const FZ_SIMULATION_10_QUESTIONS: FzQuestionData[] = [
  {
    "id": "fz-sim10-q01",
    "simulationId": "fz-sim10",
    "questionNumber": 1,
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
            0,
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
            280,
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
            30
          ],
          [
            20,
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
          0,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p3",
        "rotationDeg": 0,
        "translation": [
          70,
          0
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: Teilstück p1 (Rechteck 40 × 30, Fläche 1200) bildet das Zentrum von x = 30 bis 70. Links schließt Teilstück p2 (Dreieck 30 × 30, Fläche 450) mit Hypotenuse von (0, 0) bis (30, 30) an. Rechts schließt Teilstück p3 (Dreieck 30 × 30, Fläche 450) mit Hypotenuse von (70, 30) bis (100, 0) an. Das Resultat ist ein symmetrisches Trapez mit Grundseite 100, Deckseite 40 und Höhe 30. Gesamtfläche: 1200 + 450 + 450 = 2100 Einheiten. Dies entspricht exakt Figur B.\n\nAusschluss: Figur A ist ein einfaches Rechteck ohne Schrägen. Figur C ist ein Parallelogramm mit zwei gleichgerichteten Schrägen. Figur D ist asymmetrisch.",
    "metadata": {
      "pieceCount": 3,
      "shapeFamily": "Symmetrisches Trapez",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim10-q02",
    "simulationId": "fz-sim10",
    "questionNumber": 2,
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
            35,
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
            35,
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
            140,
            45
          ],
          [
            190,
            45
          ],
          [
            190,
            75
          ],
          [
            140,
            75
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
            275,
            45
          ],
          [
            275,
            65
          ],
          [
            245,
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
          100,
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
      "viewBox": "-10 -10 120 60",
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
            0,
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
            10,
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
            100,
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
    "explanation": "Geometrische Analyse: Teilstück p1 (Quadrat 30 × 30, Fläche 900) und Teilstück p2 (Rechteck 50 × 30, Fläche 1500) bilden zusammen einen rechteckigen Block von 80 × 30 (Fläche 2400) von x = 0 bis 80. Rechts schließt Teilstück p3 (Dreieck 20 × 30, Fläche 300) an, dessen Kathete von (80, 0) bis (100, 0) reicht und dessen Hypotenuse von (80, 30) nach (100, 0) abfällt. Gesamtfläche: 900 + 1500 + 300 = 2700 Einheiten. Dies entspricht exakt Figur D.\n\nAusschluss: Figur A besitzt keine Schräge. Figur B ist beidseitig symmetrisch abgeschrägt. Figur C ist ein gestuftes Polygon ohne Diagonalkante.",
    "metadata": {
      "pieceCount": 3,
      "shapeFamily": "Keil-Trapez",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim10-q03",
    "simulationId": "fz-sim10",
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
            30,
            45
          ],
          [
            70,
            45
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
            150,
            45
          ],
          [
            150,
            85
          ],
          [
            120,
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
            50,
            0
          ],
          [
            50,
            20
          ],
          [
            0,
            20
          ]
        ],
        "canvasPoints": [
          [
            250,
            50
          ],
          [
            300,
            50
          ],
          [
            300,
            70
          ],
          [
            250,
            70
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
            80,
            30
          ],
          [
            20,
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
            80,
            0
          ],
          [
            100,
            30
          ],
          [
            20,
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
            60,
            0
          ],
          [
            60,
            30
          ],
          [
            30,
            50
          ],
          [
            0,
            30
          ]
        ],
        "viewBox": "-10 -10 80 70"
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
            0,
            15
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
    "assembly": [],
    "explanation": "Geometrische Analyse: Die Summe der Einzelflächen beträgt 600 + 600 + 1000 = 2200 Einheiten. Die beiden Dreiecke besitzen die Katheten 40 und 30 sowie eine Hypotenuse von 50. Figur A erfordert eine Fläche von 2700, Figur B 2400, Figur C 2100 und Figur D 1800. Keine der Antwortfiguren A–D besitzt die exakte Fläche von 2200 Einheiten oder kompatible Kantenlängen, um die Teile lückenlos und überlappungsfrei aufzunehmen. Daher ist Option E zwingend richtig.\n\nAusschluss: A (2700 ≠ 2200), B (2400 ≠ 2200), C (2100 ≠ 2200), D (1800 ≠ 2200).",
    "metadata": {
      "pieceCount": 3,
      "shapeFamily": "Fangfrage",
      "requiresRotation": true,
      "isEAnswer": true
    }
  },
  {
    "id": "fz-sim10-q04",
    "simulationId": "fz-sim10",
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
            215,
            45
          ],
          [
            215,
            75
          ],
          [
            185,
            45
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
            320,
            75
          ],
          [
            290,
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
      "viewBox": "-10 -10 90 80",
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
      "B": {
        "key": "B",
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
            30
          ],
          [
            70,
            30
          ],
          [
            70,
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
        "viewBox": "-10 -10 90 80"
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
            0,
            50
          ]
        ],
        "viewBox": "-10 -10 80 70"
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
          0,
          30
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
      }
    ],
    "explanation": "Geometrische Analyse: Teilstück p1 (Quadrat 30 × 30, Fläche 900) bildet die untere Ecke. Nach rechts schließt Teilstück p2 (Rechteck 40 × 30, Fläche 1200) an, was einen horizontalen Schenkel von 70 × 30 (Fläche 2100) ergibt. Nach oben schließen die beiden Dreiecke p3 und p4 (je 450 Fläche) zusammengefügt als Quadrat 30 × 30 von y = 30 bis 60 an. Resultat ist ein rechtwinkliger L-Winkel mit den Außenkanten 70 × 60. Gesamtfläche: 900 + 1200 + 450 + 450 = 3000 Einheiten. Dies entspricht exakt Figur A.\n\nAusschluss: Figur B ist ein T-Polygon. Figur C ist ein kompaktes Rechteck. Figur D ist ein U-förmiger Kanal.",
    "metadata": {
      "pieceCount": 4,
      "shapeFamily": "L-Winkel",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim10-q05",
    "simulationId": "fz-sim10",
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
            150,
            50
          ],
          [
            150,
            70
          ],
          [
            130,
            70
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
            195,
            50
          ],
          [
            215,
            50
          ],
          [
            215,
            70
          ],
          [
            195,
            70
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
            30
          ],
          [
            0,
            30
          ]
        ],
        "canvasPoints": [
          [
            280,
            50
          ],
          [
            280,
            70
          ],
          [
            250,
            70
          ],
          [
            250,
            50
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
          40,
          40
        ],
        [
          40,
          50
        ],
        [
          20,
          50
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
      "viewBox": "-10 -10 80 70",
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
            40,
            40
          ],
          [
            40,
            50
          ],
          [
            20,
            50
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
        "viewBox": "-10 -10 80 70"
      },
      "D": {
        "key": "D",
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
          20,
          20
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: Teilstück p1 (Rechteck 60 × 20, Fläche 1200) bildet das durchgehende Fundament von y = 0 bis 20. Darauf sitzen drei vertikale Aufbauten: Links Quadrat p2 (20 × 20, Höhe bis y = 40), rechts Quadrat p3 (20 × 20, Höhe bis y = 40) und in der Mitte das höhere Rechteck p4 (20 × 30, Höhe bis y = 50). Dies formt eine symmetrische Dreizinnen-Krone mit erhöhtem Mittelturm. Gesamtfläche: 1200 + 400 + 400 + 600 = 2600 Einheiten. Dies entspricht exakt Figur C.\n\nAusschluss: Figur A ist ein nach oben offener U-Kanal mit vertiefter Mitte. Figur B ist eine einseitig ansteigende 3-Stufen-Treppe. Figur D ist ein einfaches Rechteck ohne Zinnen.",
    "metadata": {
      "pieceCount": 4,
      "shapeFamily": "Stufenkrone",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim10-q06",
    "simulationId": "fz-sim10",
    "questionNumber": 6,
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
            30,
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
            30,
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
            25,
            0
          ],
          [
            25,
            30
          ]
        ],
        "canvasPoints": [
          [
            130,
            45
          ],
          [
            155,
            45
          ],
          [
            155,
            75
          ]
        ],
        "area": 375
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
            30
          ]
        ],
        "canvasPoints": [
          [
            200,
            45
          ],
          [
            200,
            70
          ],
          [
            170,
            45
          ]
        ],
        "area": 375
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
            25,
            20
          ]
        ],
        "canvasPoints": [
          [
            280,
            50
          ],
          [
            330,
            50
          ],
          [
            305,
            70
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
          75,
          0
        ],
        [
          75,
          30
        ],
        [
          50,
          30
        ],
        [
          25,
          50
        ],
        [
          0,
          30
        ]
      ],
      "viewBox": "-10 -10 95 70",
      "area": 2750
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
            35,
            50
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
            75,
            0
          ],
          [
            75,
            30
          ],
          [
            50,
            30
          ],
          [
            25,
            50
          ],
          [
            0,
            30
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
        "rotationDeg": 180,
        "translation": [
          75,
          30
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
    "explanation": "Geometrische Analyse: Teilstück p1 (50 × 30, Fläche 1500) bildet den linken Rumpf. Rechts fügen sich p2 und p3 (je 375 Fläche) zu einem Rechteck von 25 × 30 zusammen, sodass ein Basisblock von 75 × 30 (Fläche 2250) entsteht. Auf der linken Seite von x = 0 bis 50 sitzt oben Teilstück p4 (Dreieck 50 × 20, Fläche 500) mit Firstspitze bei (25, 50). Von x = 50 bis 75 schließt das Flachdach auf Höhe y = 30 ab. Gesamtfläche: 1500 + 375 + 375 + 500 = 2750 Einheiten. Dies entspricht exakt Figur B.\n\nAusschluss: Figur A ist ein symmetrisches Haus. Figur C ist ein rein diagonales Trapez. Figur D ist ein L-Polygon ohne Dachschräge.",
    "metadata": {
      "pieceCount": 4,
      "shapeFamily": "Kirchen-Polygon",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim10-q07",
    "simulationId": "fz-sim10",
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
            140,
            75
          ],
          [
            120,
            45
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
            240,
            65
          ],
          [
            210,
            65
          ],
          [
            240,
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
          ],
          [
            0,
            20
          ]
        ],
        "canvasPoints": [
          [
            320,
            50
          ],
          [
            340,
            50
          ],
          [
            340,
            70
          ],
          [
            320,
            70
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
            15,
            0
          ],
          [
            45,
            0
          ],
          [
            60,
            25
          ],
          [
            45,
            50
          ],
          [
            15,
            50
          ],
          [
            0,
            25
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
            70,
            0
          ],
          [
            55,
            30
          ],
          [
            15,
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
            75,
            35
          ],
          [
            15,
            35
          ]
        ],
        "viewBox": "-10 -10 95 60"
      },
      "D": {
        "key": "D",
        "polygon": [
          [
            15,
            0
          ],
          [
            35,
            0
          ],
          [
            35,
            15
          ],
          [
            50,
            15
          ],
          [
            50,
            35
          ],
          [
            35,
            35
          ],
          [
            35,
            50
          ],
          [
            15,
            50
          ],
          [
            15,
            35
          ],
          [
            0,
            35
          ],
          [
            0,
            15
          ],
          [
            15,
            15
          ]
        ],
        "viewBox": "-10 -10 70 70"
      },
      "E": {
        "key": "E",
        "polygon": null,
        "viewBox": "0 0 100 100",
        "isNone": true
      }
    },
    "assembly": [],
    "explanation": "Geometrische Analyse: Die Summe der Einzelflächen beträgt 1200 + 300 + 300 + 400 = 2200 Einheiten. Die Dreiecke p2 und p3 besitzen die Katheten 30 und 20. Figur A erfordert eine Fläche von 2250 und symmetrische 25-Höhen-Flanken, die mit den 20er-Katheten nicht gebildet werden können. Figur B besitzt Fläche 1875, Figur C Fläche 2100 und Figur D Fläche 2000. Keine der Antwortfiguren A–D lässt sich exakt und ohne Überlappung aus den Teilen bilden. Daher ist Option E zwingend richtig.\n\nAusschluss: A (2250 ≠ 2200), B (1875 ≠ 2200), C (2100 ≠ 2200), D (2000 ≠ 2200).",
    "metadata": {
      "pieceCount": 4,
      "shapeFamily": "Fangfrage",
      "requiresRotation": true,
      "isEAnswer": true
    }
  },
  {
    "id": "fz-sim10-q08",
    "simulationId": "fz-sim10",
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
            335,
            75
          ],
          [
            315,
            75
          ],
          [
            335,
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
          60,
          0
        ],
        [
          80,
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
      "viewBox": "-10 -10 100 80",
      "area": 3150
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
        "viewBox": "-10 -10 100 80"
      },
      "B": {
        "key": "B",
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
            55,
            60
          ],
          [
            25,
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
            90,
            0
          ],
          [
            75,
            40
          ],
          [
            15,
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
            70,
            30
          ],
          [
            50,
            30
          ],
          [
            50,
            50
          ],
          [
            20,
            50
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
        "pieceId": "p5",
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
          20,
          30
        ],
        "isReflection": false
      },
      {
        "pieceId": "p4",
        "rotationDeg": 180,
        "translation": [
          80,
          60
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: Der untere Rumpf wird aus Teilstück p3 (Dreieck 20 × 30), Teilstück p1 (Rechteck 40 × 30) und Teilstück p5 (Dreieck 20 × 30) als symmetrisches Trapez von (0, 30) bis (80, 30) gebildet (Fläche 1800). Auf dem Deck sitzt von x = 20 bis 50 das Quadrat p2 (30 × 30, Fläche 900) und rechts davon das Dreieck p4 (30 × 30, Fläche 450), dessen Schräge von (50, 60) nach (80, 30) abfällt. Links bleibt das Deck von x = 0 bis 20 frei. Gesamtfläche: 1800 + 900 + 450 = 3150 Einheiten. Dies entspricht exakt Figur A.\n\nAusschluss: Figur B besitzt einen zentrierten symmetrischen Aufbau. Figur C ist ein schlichtes Großtrapez. Figur D ist ein stufenförmiger Turm ohne 45°-Schräge.",
    "metadata": {
      "pieceCount": 5,
      "shapeFamily": "Schiff-Polygon",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim10-q09",
    "simulationId": "fz-sim10",
    "questionNumber": 9,
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
            45
          ],
          [
            60,
            45
          ],
          [
            60,
            85
          ],
          [
            20,
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
            0,
            40
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
            85
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
            175,
            45
          ],
          [
            175,
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
            325,
            70
          ],
          [
            305,
            70
          ],
          [
            325,
            50
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
          60,
          40
        ],
        [
          60,
          60
        ],
        [
          40,
          40
        ],
        [
          20,
          60
        ],
        [
          20,
          40
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
            80,
            0
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
            40,
            40
          ],
          [
            20,
            60
          ],
          [
            0,
            40
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
      "C": {
        "key": "C",
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
            40,
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
            40
          ],
          [
            60,
            60
          ],
          [
            40,
            40
          ],
          [
            20,
            60
          ],
          [
            20,
            40
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
          20,
          40
        ],
        "isReflection": false
      },
      {
        "pieceId": "p5",
        "rotationDeg": 0,
        "translation": [
          40,
          40
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: Teilstück p1 (Quadrat 40 × 40, Fläche 1600) bildet zusammen mit Teilstück p2 (links, Fläche 400) und Teilstück p3 (rechts, Fläche 400) ein symmetrisches Basis-Trapez mit Grundseite 80, Deckseite 40 und Höhe 40 (Fläche 2400). Auf der oberen Kante sitzen die beiden Dreiecke p4 und p5 (je 200 Fläche) als nach oben zeigende 'Ohren': links von x = 20 bis 40 mit Spitze bei (20, 60), rechts von x = 40 bis 60 mit Spitze bei (60, 60), dazwischen ein V-Einschnitt bis (40, 40). Gesamtfläche: 1600 + 400 + 400 + 200 + 200 = 2800 Einheiten. Dies entspricht exakt Figur D.\n\nAusschluss: Figur A besitzt drei Spitzen mit vertikalen Außenkanten. Figur B ist ein geschlossenes Trapez ohne Ohren. Figur C ist ein klassischer Pfeil mit anderer Flächenverteilung.",
    "metadata": {
      "pieceCount": 5,
      "shapeFamily": "Schwalbenschwanz",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim10-q10",
    "simulationId": "fz-sim10",
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
            30
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
            195,
            65
          ],
          [
            165,
            65
          ],
          [
            165,
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
            285,
            45
          ],
          [
            265,
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
          20,
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
          100,
          50
        ],
        [
          80,
          70
        ],
        [
          40,
          70
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
      "viewBox": "-10 -10 120 90",
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
            50,
            0
          ],
          [
            50,
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
      "C": {
        "key": "C",
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
            50
          ],
          [
            100,
            50
          ],
          [
            80,
            70
          ],
          [
            40,
            70
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
            70,
            0
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
            25
          ],
          [
            20,
            25
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
        "pieceId": "p3",
        "rotationDeg": 0,
        "translation": [
          40,
          20
        ],
        "isReflection": false
      },
      {
        "pieceId": "p2",
        "rotationDeg": 0,
        "translation": [
          40,
          50
        ],
        "isReflection": false
      },
      {
        "pieceId": "p5",
        "rotationDeg": 180,
        "translation": [
          100,
          70
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: Teilstück p1 (40 × 20, Fläche 800) bildet den unteren Schenkel von x = 20 bis 60, abgeschlossen durch Dreieck p4 (Fläche 200) mit Schräge von (0, 20) nach (20, 0). Der vertikale Steg p3 (20 × 30, Fläche 600) verbindet von y = 20 bis 50 bei x = 40 bis 60 mit dem oberen Schenkel p2 (40 × 20, Fläche 800) von x = 40 bis 80. Das Dreieck p5 (Fläche 200) schließt den oberen Schenkel mit einer Schräge von (80, 70) nach (100, 50) ab. Gesamtfläche: 800 + 800 + 600 + 200 + 200 = 2600 Einheiten. Dies entspricht exakt Figur C.\n\nAusschluss: Figur A ist ein rein rechtwinkliges Z-Polygon ohne Gehrungsenden. Figur B ist eine abfallende Treppe. Figur D ist ein U-Kanal.",
    "metadata": {
      "pieceCount": 5,
      "shapeFamily": "Z-Polygon",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim10-q11",
    "simulationId": "fz-sim10",
    "questionNumber": 11,
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
            85,
            45
          ],
          [
            85,
            85
          ],
          [
            25,
            85
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
            15,
            0
          ],
          [
            15,
            20
          ]
        ],
        "canvasPoints": [
          [
            130,
            45
          ],
          [
            145,
            45
          ],
          [
            145,
            65
          ]
        ],
        "area": 150
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
            20
          ]
        ],
        "canvasPoints": [
          [
            185,
            45
          ],
          [
            185,
            60
          ],
          [
            165,
            45
          ]
        ],
        "area": 150
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
          ]
        ],
        "canvasPoints": [
          [
            250,
            45
          ],
          [
            265,
            45
          ],
          [
            265,
            65
          ]
        ],
        "area": 150
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
            20
          ]
        ],
        "canvasPoints": [
          [
            320,
            65
          ],
          [
            305,
            65
          ],
          [
            320,
            45
          ]
        ],
        "area": 150
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
          45,
          60
        ],
        [
          30,
          40
        ],
        [
          15,
          60
        ],
        [
          0,
          40
        ]
      ],
      "viewBox": "-10 -10 80 80",
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
            60,
            0
          ],
          [
            60,
            40
          ],
          [
            45,
            60
          ],
          [
            30,
            40
          ],
          [
            15,
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
            60,
            0
          ],
          [
            60,
            40
          ],
          [
            30,
            70
          ],
          [
            0,
            40
          ]
        ],
        "viewBox": "-10 -10 80 90"
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
            45,
            30
          ],
          [
            30,
            60
          ],
          [
            15,
            30
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
          40
        ],
        "isReflection": false
      },
      {
        "pieceId": "p3",
        "rotationDeg": 0,
        "translation": [
          15,
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
          45,
          40
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: Teilstück p1 (Rechteck 60 × 40, Fläche 2400) bildet das massive Fundament. Auf der Oberkante bei y = 40 sitzen zwei identische Giebeldächer mit je 30 Breite und 20 Höhe: Der linke Giebel wird von p2 und p3 (je 150 Fläche) mit First bei (15, 60) gebildet, der rechte Giebel von p4 und p5 (je 150 Fläche) mit First bei (45, 60). Dazwischen liegt die Kehle bei (30, 40). Gesamtfläche: 2400 + 4 × 150 = 3000 Einheiten. Dies entspricht exakt Figur A.\n\nAusschluss: Figur B ist ein einfaches Haus mit nur einem zentralen Dachfirst. Figur C ist eine M-förmige Krone mit invertierten Zinnen. Figur D ist ein einzelnes Großtrapez ohne Giebel.",
    "metadata": {
      "pieceCount": 5,
      "shapeFamily": "Doppelgiebel",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim10-q12",
    "simulationId": "fz-sim10",
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
            105,
            45
          ],
          [
            125,
            45
          ],
          [
            125,
            65
          ],
          [
            105,
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
            15
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
            50
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
            15,
            0
          ],
          [
            55,
            0
          ],
          [
            70,
            30
          ],
          [
            55,
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
        "viewBox": "-10 -10 90 80"
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
            50,
            50
          ],
          [
            10,
            50
          ],
          [
            0,
            30
          ]
        ],
        "viewBox": "-10 -10 80 70"
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
            20,
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
    "assembly": [],
    "explanation": "Geometrische Analyse: Die Summe der Einzelflächen beträgt 1200 + 400 + 300 + 200 + 300 = 2400 Einheiten. Die Schrägkanten weisen drei völlig inkompatible Steigungen auf: p4 hat Steigung 1.0 (20/20), p3 hat Steigung 0.67 (20/30) und p5 hat Steigung 0.375 (15/40). Das Parallelogramm in Figur C verlangt identische gegenüberliegende Flankensteigungen von 2.0 (Höhe 40 auf 20 Versatz), was mit den drei unterschiedlichen Flachkeilen unmöglich ohne Lücken oder Überlappung darstellbar ist. Figur A hat Fläche 2700, Figur B 2200 und Figur D 2000. Folglich ist Option E die einzig korrekte Lösung.\n\nAusschluss: A (2700 ≠ 2400), B (2200 ≠ 2400), C (Winkel-/Steigungsdisparität der Flanken), D (2000 ≠ 2400).",
    "metadata": {
      "pieceCount": 5,
      "shapeFamily": "Fangfrage",
      "requiresRotation": true,
      "isEAnswer": true
    }
  },
  {
    "id": "fz-sim10-q13",
    "simulationId": "fz-sim10",
    "questionNumber": 13,
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
            80,
            45
          ],
          [
            120,
            45
          ],
          [
            120,
            75
          ],
          [
            80,
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
            150,
            45
          ],
          [
            150,
            65
          ],
          [
            120,
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
            215,
            45
          ],
          [
            235,
            45
          ],
          [
            215,
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
            275,
            45
          ],
          [
            275,
            65
          ],
          [
            245,
            65
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
            345,
            65
          ],
          [
            325,
            65
          ],
          [
            345,
            35
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
      "C": {
        "key": "C",
        "polygon": [
          [
            40,
            0
          ],
          [
            80,
            45
          ],
          [
            40,
            90
          ],
          [
            0,
            45
          ]
        ],
        "viewBox": "-10 -10 100 110"
      },
      "D": {
        "key": "D",
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
            80,
            30
          ],
          [
            50,
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
          20,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p2",
        "rotationDeg": 0,
        "translation": [
          20,
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
          20,
          60
        ],
        "isReflection": false
      },
      {
        "pieceId": "p5",
        "rotationDeg": 180,
        "translation": [
          80,
          30
        ],
        "isReflection": false
      },
      {
        "pieceId": "p6",
        "rotationDeg": 0,
        "translation": [
          60,
          30
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: Die beiden Rechtecke p1 und p2 (je 40 × 30, Fläche je 1200) bilden übereinander gestapelt einen zentralen Rumpf von 40 × 60 (Fläche 2400) von x = 20 bis 60. An den Flanken formen die Dreiecke p3 und p4 links eine nach links weisende Spitze bei (0, 30) (Fläche 600) und die Dreiecke p5 und p6 rechts eine symmetrische Spitze bei (80, 30) (Fläche 600). Das Resultat ist ein punktsymmetrisches, horizontal gestrecktes Doppelspitz-Hexagon mit horizontalen Kanten oben und unten von 40 Einheiten Länge. Gesamtfläche: 2400 + 600 + 600 = 3600 Einheiten. Dies entspricht exakt Figur B.\n\nAusschluss: Figur A ist ein einfaches Quadrat ohne Spitzen. Figur C ist eine Raute mit 45°-Seitenkanten ohne horizontale Deckflächen. Figur D ist asymmetrisch.",
    "metadata": {
      "pieceCount": 6,
      "shapeFamily": "Doppelspitz-Hexagon",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim10-q14",
    "simulationId": "fz-sim10",
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
            215,
            45
          ],
          [
            245,
            45
          ],
          [
            215,
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
            280,
            45
          ],
          [
            280,
            75
          ],
          [
            250,
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
            350,
            65
          ],
          [
            320,
            65
          ],
          [
            350,
            35
          ]
        ],
        "area": 450
      }
    ],
    "targetFigure": {
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
          90,
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
            90,
            0
          ],
          [
            75,
            45
          ],
          [
            15,
            45
          ]
        ],
        "viewBox": "-10 -10 110 65"
      },
      "C": {
        "key": "C",
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
            90,
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
            0,
            30
          ]
        ],
        "viewBox": "-10 -10 110 80"
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
            55,
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
        "rotationDeg": 180,
        "translation": [
          90,
          30
        ],
        "isReflection": false
      },
      {
        "pieceId": "p6",
        "rotationDeg": 0,
        "translation": [
          60,
          30
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: Die beiden Quadrate p1 und p2 (je 30 × 30, Fläche je 900) formen eine vertikale Säule von 30 × 60 (Fläche 1800) von x = 30 bis 60. Links formen die Dreiecke p3 und p4 (je 450 Fläche) zusammen ein nach links gerichtetes Dreieck mit Spitze bei (0, 30). Rechts formen die Dreiecke p5 und p6 (je 450 Fläche) ein identisches Dreieck mit Spitze bei (90, 30). Das Resultat ist ein punktsymmetrisches Doppelspitz-Hexagon mit horizontalen Ober- und Unterkanten von 30 Einheiten Länge. Gesamtfläche: 1800 + 900 + 900 = 3600 Einheiten. Dies entspricht exakt Figur C.\n\nAusschluss: Figur A ist ein einfaches Quadrat ohne Spitzen. Figur B ist ein symmetrisches Trapez mit abweichender Fläche (3375). Figur D ist ein asymmetrisches Sechseck.",
    "metadata": {
      "pieceCount": 6,
      "shapeFamily": "Doppelspitz-Hexagon",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim10-q15",
    "simulationId": "fz-sim10",
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
            100,
            50
          ],
          [
            140,
            50
          ],
          [
            140,
            70
          ],
          [
            100,
            70
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
            160,
            50
          ],
          [
            180,
            50
          ],
          [
            180,
            70
          ],
          [
            160,
            70
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
            215,
            50
          ],
          [
            215,
            70
          ],
          [
            195,
            50
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
            295,
            50
          ],
          [
            275,
            70
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
            70
          ],
          [
            325,
            70
          ],
          [
            345,
            50
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
          20
        ],
        [
          0,
          80
        ]
      ],
      "viewBox": "-10 -10 80 100",
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
            25
          ],
          [
            40,
            25
          ],
          [
            40,
            50
          ],
          [
            20,
            50
          ],
          [
            20,
            75
          ],
          [
            0,
            75
          ]
        ],
        "viewBox": "-10 -10 80 95"
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
            25
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
            60,
            0
          ],
          [
            60,
            20
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
        "pieceId": "p4",
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
          0,
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
      },
      {
        "pieceId": "p6",
        "rotationDeg": 0,
        "translation": [
          0,
          60
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: Die Teilstücke fügen sich zu einem rechtwinkligen Trapez mit vertikaler Basiskante von 80 Einheiten (x = 0 von y = 0 bis 80), horizontaler Unterkante von 60 Einheiten (y = 0 von x = 0 bis 60) und rechter Kante von 20 Einheiten (x = 60 von y = 0 bis 20). Teilstück p1 (60 × 20, Fläche 1200) bildet das Fundament. Darüber liegt p2 (40 × 20, Fläche 800) ergänzt durch Dreieck p4 (20 × 20, Fläche 200). Darüber liegt p3 (20 × 20, Fläche 400) ergänzt durch Dreieck p5 (20 × 20, Fläche 200). Die Spitze wird durch Dreieck p6 (20 × 20, Fläche 200) abgeschlossen. Die drei Dreiecke p4, p5, p6 bilden zusammen eine exakt geradlinige, kontinuierliche 45°-Schräge von (60, 20) bis (0, 80). Gesamtfläche: (80 + 20) / 2 × 60 = 3000 Einheiten. Dies entspricht exakt Figur D.\n\nAusschluss: Figur A ist ein einfaches Rechteck ohne Schräge. Figur B ist eine abgetreppte Zikkurat ohne geschlossene Schrägkante. Figur C ist ein Fünfeck mit gebrochener Dachlinie.",
    "metadata": {
      "pieceCount": 6,
      "shapeFamily": "Großtrapez",
      "requiresRotation": true,
      "isEAnswer": false
    }
  }
];
