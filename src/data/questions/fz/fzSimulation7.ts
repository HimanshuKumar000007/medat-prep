import type { FzQuestionData } from "./types";

export const FZ_SIMULATION_7_QUESTIONS: FzQuestionData[] = [
  {
    "id": "fz-sim7-q01",
    "simulationId": "fz-sim7",
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
            35,
            45
          ],
          [
            95,
            45
          ],
          [
            95,
            75
          ],
          [
            35,
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
            160,
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
            160,
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
            275,
            45
          ],
          [
            275,
            75
          ],
          [
            245,
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
          90,
          30
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
          0,
          30
        ]
      ],
      "viewBox": "-10 -10 110 80",
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
            75,
            0
          ],
          [
            75,
            42
          ],
          [
            0,
            42
          ]
        ],
        "viewBox": "-10 -10 95 62"
      },
      "B": {
        "key": "B",
        "polygon": [
          [
            10,
            0
          ],
          [
            80,
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
            60
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
        "viewBox": "-10 -10 110 80"
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
            35
          ],
          [
            50,
            35
          ],
          [
            50,
            60
          ],
          [
            0,
            60
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
          60,
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
    "explanation": "Geometrische Analyse: Teilstück p1 (Rechteck 60 × 30, Fläche 1800) und Teilstück p2 (Quadrat 30 × 30, Fläche 900) formen zusammen ein horizontales Basisrechteck von 90 × 30 (Fläche 2700). Auf der rechten Seite von x = 60 bis 90 schließt auf Teilstück p2 nach oben Teilstück p3 (rechtwinkliges Dreieck mit Katheten 30 und 30, Fläche 450) an, dessen schräge Hypotenuse von (60, 60) nach (90, 30) abfällt. Die Gesamtfläche summiert sich exakt auf 1800 + 900 + 450 = 3150 Flächeneinheiten. Dies entspricht exakt Figur C.\n\nAusschluss: Figur A ist ein einfaches Rechteck ohne Schräge. Figur B ist ein Trapez. Figur D ist ein rechtwinkliges L-Polygon mit abweichender Gesamtfläche.",
    "metadata": {
      "pieceCount": 3,
      "shapeFamily": "Pultdach-Polygon",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim7-q02",
    "simulationId": "fz-sim7",
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
            40,
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
            40,
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
      }
    ],
    "explanation": "Geometrische Analyse: Teilstück p1 (Rechteck 40 × 30, Fläche 1200) bildet den zentralen Block von x = 20 bis 60. Links wird Teilstück p2 (Dreieck 20 × 30, Fläche 300) angefügt, dessen Hypotenuse die linke Flanke von (0, 0) nach (20, 30) bildet. Rechts schließt Teilstück p3 (Dreieck 20 × 30, Fläche 300) spiegelbildlich an, dessen Hypotenuse die rechte Flanke von (80, 0) nach (60, 30) formt. Das Ergebnis ist ein symmetrisches Trapez mit Grundseite 80, Deckseite 40 und Höhe 30. Gesamtfläche: 1200 + 300 + 300 = 1800 Einheiten. Dies entspricht exakt Figur A.\n\nAusschluss: Figur B ist ein einfaches Rechteck ohne Schrägen. Figur C ist ein Parallelogramm mit gleichgerichteten Schrägen. Figur D ist ein asymmetrisches Trapez mit abweichender Höhe und Fläche.",
    "metadata": {
      "pieceCount": 3,
      "shapeFamily": "Symmetrisches Trapez",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim7-q03",
    "simulationId": "fz-sim7",
    "questionNumber": 3,
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
            35,
            40
          ],
          [
            75,
            40
          ],
          [
            75,
            80
          ],
          [
            35,
            80
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
            155,
            40
          ],
          [
            175,
            40
          ],
          [
            175,
            80
          ],
          [
            155,
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
          40,
          0
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
          80
        ],
        [
          0,
          80
        ]
      ],
      "viewBox": "-10 -10 60 100",
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
            50,
            0
          ],
          [
            50,
            52
          ],
          [
            0,
            52
          ]
        ],
        "viewBox": "-10 -10 70 72"
      },
      "C": {
        "key": "C",
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
        "viewBox": "-10 -10 70 90"
      },
      "D": {
        "key": "D",
        "polygon": [
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
            20,
            60
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
        "viewBox": "-10 -10 60 100"
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
          20,
          40
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: Teilstück p1 (Quadrat 40 × 40, Fläche 1600) bildet den unteren Basisblock. Darauf wird linksbündig Teilstück p2 (Rechteck 20 × 40, Fläche 800) von y = 40 bis 80 aufgesetzt. In der verbleibenden Innenecke schließt Teilstück p3 (rechtwinkliges Dreieck 20 × 20, Fläche 200) von (20, 40) bis (40, 40) an, dessen Hypotenuse eine diagonale Abkantung von (40, 40) nach (20, 60) bildet. Gesamtfläche: 1600 + 800 + 200 = 2600 Einheiten. Dies entspricht exakt Figur D.\n\nAusschluss: Figur A und B sind einfache Rechtecke ohne Innenecke und Schräge. Figur C ist ein rein rechtwinkliges L-Polygon ohne Schrägkante mit abweichender Fläche.",
    "metadata": {
      "pieceCount": 3,
      "shapeFamily": "Chamfered L-Polygon",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim7-q04",
    "simulationId": "fz-sim7",
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
            105,
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
            105,
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
            35,
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
            255,
            75
          ],
          [
            290,
            45
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
            80,
            0
          ],
          [
            80,
            25
          ],
          [
            40,
            25
          ],
          [
            40,
            55
          ],
          [
            0,
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
            70,
            0
          ],
          [
            90,
            35
          ],
          [
            20,
            35
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
    "assembly": [],
    "explanation": "Geometrische Analyse: Die Summe der Einzelflächen beträgt exakt 900 + 1200 + 300 + 525 = 2925 Flächeneinheiten. Zudem besitzt Teilstück p4 eine asymmetrische Kathetenlänge von 35 Einheiten (Hypotenuse ~46,1).\n\nAusschlussverfahren:\n- Figur A ist ein Rechteck von 60 × 50 mit einer Fläche von 3000 Einheiten (Flächendisparität von +75 Einheiten).\n- Figur B ist ein Trapez mit Fläche 2800 Einheiten (-125 Einheiten).\n- Figur C ist ein L-Polygon mit Fläche 3200 Einheiten (+275 Einheiten).\n- Figur D ist ein Parallelogramm mit Fläche 2450 Einheiten.\n\nDa keine der Optionen A–D mit der exakten Gesamtfläche von 2925 Einheiten übereinstimmt, lautet die richtige Antwort E.",
    "metadata": {
      "pieceCount": 4,
      "shapeFamily": "Ausschluss-Heuristik",
      "requiresRotation": true,
      "isEAnswer": true
    }
  },
  {
    "id": "fz-sim7-q05",
    "simulationId": "fz-sim7",
    "questionNumber": 5,
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
            30,
            0
          ],
          [
            30,
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
            60,
            40
          ],
          [
            60,
            80
          ],
          [
            30,
            80
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
            40
          ],
          [
            0,
            40
          ]
        ],
        "canvasPoints": [
          [
            105,
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
            105,
            80
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
            30,
            40
          ]
        ],
        "canvasPoints": [
          [
            195,
            40
          ],
          [
            195,
            70
          ],
          [
            155,
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
            75
          ],
          [
            260,
            75
          ],
          [
            290,
            35
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
          30,
          80
        ],
        [
          0,
          40
        ]
      ],
      "viewBox": "-10 -10 80 100",
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
            40
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
            0,
            0
          ],
          [
            70,
            0
          ],
          [
            70,
            35
          ],
          [
            35,
            35
          ],
          [
            35,
            70
          ],
          [
            0,
            70
          ]
        ],
        "viewBox": "-10 -10 90 90"
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
      }
    ],
    "explanation": "Geometrische Analyse: Teilstück p1 (30 × 40) und p2 (30 × 40) formen zusammen den rechteckigen Rumpf von 60 × 40 (Fläche 2400) von y = 0 bis 40. Auf der Oberseite schließt Teilstück p3 (rechtwinkliges Dreieck 30 × 40, Fläche 600) links von (0, 40) bis (30, 80) an, während Teilstück p4 (Dreieck 30 × 40, Fläche 600) rechts von (30, 80) nach (60, 40) abfällt. Zusammen bilden sie eine symmetrische Dachspitze mit Firsthöhe 80. Gesamtfläche: 2400 + 1200 = 3600 Einheiten. Dies entspricht exakt Figur B.\n\nAusschluss: Figur A ist ein einfaches Quadrat ohne Giebelspitze. Figur C ist ein Trapez. Figur D ist ein unregelmäßiges L-Polygon.",
    "metadata": {
      "pieceCount": 4,
      "shapeFamily": "Haus-Pentagon",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim7-q06",
    "simulationId": "fz-sim7",
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
            25,
            0
          ],
          [
            25,
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
            55,
            45
          ],
          [
            55,
            75
          ],
          [
            30,
            75
          ]
        ],
        "area": 750
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
            115,
            45
          ],
          [
            115,
            75
          ],
          [
            100,
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
            175,
            45
          ],
          [
            175,
            65
          ],
          [
            145,
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
          70,
          30
        ],
        [
          30,
          30
        ]
      ],
      "viewBox": "-10 -10 110 60",
      "area": 1950
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
            30
          ],
          [
            0,
            30
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
            85,
            30
          ],
          [
            20,
            30
          ]
        ],
        "viewBox": "-10 -10 105 60"
      },
      "C": {
        "key": "C",
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
            60,
            30
          ],
          [
            20,
            30
          ]
        ],
        "viewBox": "0 -10 80 60"
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
          55,
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
    "explanation": "Geometrische Analyse: Teilstück p1 (25 × 30, Fläche 750) und Teilstück p2 (15 × 30, Fläche 450) bilden den zentralen 40 × 30 Mittelblock von x = 30 bis 70 (Fläche 1200). Links fügt sich Teilstück p4 (Dreieck 30 × 30, Fläche 450) an, dessen Hypotenuse die Flanke von (0, 0) nach (30, 30) bildet (Neigung 45°). Rechts schließt Teilstück p3 (Dreieck 20 × 30, Fläche 300) an, dessen Hypotenuse die Flanke von (90, 0) nach (70, 30) formt (steilere Neigung ~56,3°). Das Resultat ist ein asymmetrisches Trapez mit Grundseite 90, Deckseite 40 und Höhe 30. Gesamtfläche: 450 + 1200 + 300 = 1950 Einheiten. Dies entspricht exakt Figur D.\n\nAusschluss: Figur A ist ein einfaches Rechteck ohne Schrägen. Figur B ist ein Parallelogramm mit identischen Neigungswinkeln. Figur C besitzt abweichende Kantenmaße und Fläche.",
    "metadata": {
      "pieceCount": 4,
      "shapeFamily": "Asymmetrisches Trapez",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim7-q07",
    "simulationId": "fz-sim7",
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
            90,
            45
          ],
          [
            90,
            65
          ],
          [
            30,
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
            260,
            45
          ],
          [
            280,
            45
          ],
          [
            280,
            65
          ],
          [
            260,
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
          60
        ],
        [
          60,
          60
        ],
        [
          60,
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
            20,
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
            60,
            60
          ],
          [
            60,
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
            70
          ],
          [
            0,
            70
          ]
        ],
        "viewBox": "-10 -10 80 90"
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
          20,
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
        "pieceId": "p2",
        "rotationDeg": 0,
        "translation": [
          20,
          40
        ],
        "isReflection": false
      },
      {
        "pieceId": "p1",
        "rotationDeg": 0,
        "translation": [
          0,
          60
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: Die drei kongruenten Quadrate p2, p3 und p4 (je 20 × 20, Fläche je 400) werden übereinandergestapelt und bilden den vertikalen Schaft von 20 × 60 (Fläche 1200) von y = 0 bis 60 zwischen x = 20 und 40. Oben schließt Teilstück p1 (Rechteck 60 × 20, Fläche 1200) symmetrisch zentriert als horizontaler Querbalken von y = 60 bis 80 an. Es entsteht ein spiegelsymmetrisches T-förmiges Orthogonalpolygon mit Gesamtfläche 1200 + 1200 = 2400 Einheiten. Dies entspricht exakt Figur A.\n\nAusschluss: Figur B ist ein einfaches Rechteck ohne Auskragungen. Figur C ist ein asymmetrisches L-Polygon. Figur D besitzt einen verkürzten Schaft mit Flächendefizit.",
    "metadata": {
      "pieceCount": 4,
      "shapeFamily": "Orthogonales T-Polygon",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim7-q08",
    "simulationId": "fz-sim7",
    "questionNumber": 8,
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
          30
        ],
        [
          50,
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
      "viewBox": "-10 -10 100 80",
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
            70,
            0
          ],
          [
            70,
            45
          ],
          [
            0,
            45
          ]
        ],
        "viewBox": "-10 -10 90 65"
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
            20,
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
            80,
            30
          ],
          [
            50,
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
          0,
          30
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
      }
    ],
    "explanation": "Geometrische Analyse: Teilstück p1 (50 × 30) und p2 (30 × 30) bilden zusammen das Basisband von 80 × 30 (Fläche 2400). Auf der linken Oberseite (x = 0 bis 50) schließen Teilstück p3 (Dreieck 30 × 30, Fläche 450) und Teilstück p4 (Dreieck 20 × 30, Fläche 300) aneinander an und formen ein asymmetrisches Satteldach mit Firstpunkt bei (30, 60). Von (30, 60) fällt die Kante nach (50, 30) ab, worauf die Oberkante von p2 von x = 50 bis 80 als waagrechte Schulter verläuft. Gesamtfläche: 2400 + 450 + 300 = 3150 Einheiten. Dies entspricht exakt Figur C.\n\nAusschluss: Figur A ist ein einfaches Rechteck ohne First. Figur B ist ein symmetrisches Trapez. Figur D ist ein rechtwinkliges L-Polygon ohne Schrägkanten.",
    "metadata": {
      "pieceCount": 4,
      "shapeFamily": "Asymmetrisches Giebel-Polygon",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim7-q09",
    "simulationId": "fz-sim7",
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
            220,
            45
          ],
          [
            245,
            45
          ],
          [
            220,
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
            20,
            0
          ],
          [
            0,
            25
          ]
        ],
        "canvasPoints": [
          [
            290,
            45
          ],
          [
            290,
            65
          ],
          [
            265,
            45
          ]
        ],
        "area": 250
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
      "B": {
        "key": "B",
        "polygon": [
          [
            10,
            0
          ],
          [
            80,
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
      "C": {
        "key": "C",
        "polygon": [
          [
            0,
            0
          ],
          [
            85,
            0
          ],
          [
            85,
            30
          ],
          [
            45,
            30
          ],
          [
            45,
            55
          ],
          [
            0,
            55
          ]
        ],
        "viewBox": "-10 -10 105 75"
      },
      "D": {
        "key": "D",
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
      "E": {
        "key": "E",
        "polygon": null,
        "viewBox": "0 0 100 100",
        "isNone": true
      }
    },
    "assembly": [],
    "explanation": "Geometrische Analyse: Die Gesamtfläche der 5 Teilstücke beträgt exakt 1200 + 900 + 600 + 375 + 250 = 3325 Flächeneinheiten. Zudem besitzen die Dreiecke p4 und p5 inkompatible Hypotenusenlängen von ~39,05 und ~32,02.\n\nAusschlussverfahren:\n- Figur A ist ein Rechteck von 70 × 50 mit einer Fläche von 3500 Einheiten (+175 Einheiten Disparität).\n- Figur B ist ein Trapez mit Fläche 3200 Einheiten (-125 Einheiten Defizit).\n- Figur C ist ein L-Polygon mit Fläche 3675 Einheiten.\n- Figur D ist ein Sechseck mit Fläche 3300 Einheiten (-25 Einheiten).\n\nDa keine der Optionen A–D mit der mathematisch exakten Gesamtfläche von 3325 Einheiten übereinstimmt, lautet die korrekte Antwort E.",
    "metadata": {
      "pieceCount": 5,
      "shapeFamily": "Ausschluss-Heuristik",
      "requiresRotation": true,
      "isEAnswer": true
    }
  },
  {
    "id": "fz-sim7-q10",
    "simulationId": "fz-sim7",
    "questionNumber": 10,
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
      "viewBox": "-10 -10 110 60",
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
            75,
            20
          ],
          [
            75,
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
            25
          ],
          [
            30,
            25
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
          15,
          20
        ],
        "isReflection": false
      },
      {
        "pieceId": "p5",
        "rotationDeg": 0,
        "translation": [
          45,
          20
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: Alle 5 Teilstücke sind vollkommen kongruente Rechtecke von 30 × 20 (Fläche je 600). Die Teilstücke p1, p2 und p3 liegen nebeneinander und bilden eine 90 × 20 Basis (Fläche 1800) von y = 0 bis 20. Mittig darauf werden p4 und p5 von x = 15 bis 75 nebeneinander aufgesetzt (Breite 60, Höhe 20, Fläche 1200). Das Resultat ist eine spiegelsymmetrische zweistufige Pyramide mit Gesamtfläche 1800 + 1200 = 3000 Einheiten. Dies entspricht exakt Figur B.\n\nAusschluss: Figur A ist ein einfaches Rechteck ohne Stufen. Figur C ist ein schräges Trapez. Figur D ist ein asymmetrisches L-Polygon.",
    "metadata": {
      "pieceCount": 5,
      "shapeFamily": "Symmetrische Stufenpyramide",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim7-q11",
    "simulationId": "fz-sim7",
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
            160,
            65
          ],
          [
            130,
            65
          ],
          [
            130,
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
          ],
          [
            0,
            30
          ]
        ],
        "canvasPoints": [
          [
            225,
            45
          ],
          [
            255,
            45
          ],
          [
            255,
            75
          ],
          [
            225,
            75
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
            315,
            75
          ],
          [
            285,
            75
          ],
          [
            315,
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
          90,
          60
        ],
        [
          60,
          90
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
      "viewBox": "-10 -10 110 110",
      "area": 4650
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
            60,
            90
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
        "viewBox": "-10 -10 110 110"
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
            52
          ],
          [
            0,
            52
          ]
        ],
        "viewBox": "-10 -10 110 72"
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
            70,
            60
          ],
          [
            20,
            60
          ]
        ],
        "viewBox": "-10 -10 110 80"
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
            50,
            40
          ],
          [
            50,
            80
          ],
          [
            0,
            80
          ]
        ],
        "viewBox": "-10 -10 110 100"
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
          0,
          30
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
        "rotationDeg": 0,
        "translation": [
          60,
          60
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: Teilstück p1 (50 × 30) und p2 (40 × 30) bilden zusammen das Basisband von 90 × 30 (Fläche 2700). Auf der linken Seite schließt Teilstück p3 (20 × 30, Fläche 600) als linker Turm von y = 30 bis 60 an. Auf der rechten Seite schließt Teilstück p4 (Quadrat 30 × 30, Fläche 900) von x = 60 bis 90 an, worauf Teilstück p5 (Dreieck 30 × 30, Fläche 450) von y = 60 bis 90 aufgesetzt wird, dessen Hypotenuse von (60, 90) nach (90, 60) abfällt. In der Mitte zwischen x = 20 und 60 verbleibt ein 40 × 30 Einschnitt. Gesamtfläche: 2700 + 600 + 900 + 450 = 4650 Einheiten. Dies entspricht exakt Figur A.\n\nAusschluss: Figur B ist ein massives Rechteck ohne Zinnen. Figur C ist ein einfaches Trapez. Figur D ist ein unregelmäßiges L-Polygon ohne Schräge.",
    "metadata": {
      "pieceCount": 5,
      "shapeFamily": "Asymmetrisches Zinnen-Heptagon",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim7-q12",
    "simulationId": "fz-sim7",
    "questionNumber": 12,
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
            95,
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
            95,
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
            235,
            45
          ],
          [
            255,
            45
          ],
          [
            235,
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
            60
          ],
          [
            0,
            60
          ]
        ],
        "canvasPoints": [
          [
            315,
            35
          ],
          [
            315,
            55
          ],
          [
            255,
            55
          ],
          [
            255,
            35
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
          100,
          30
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
          40,
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
      "viewBox": "-10 -10 120 80",
      "area": 4200
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
            42
          ],
          [
            0,
            42
          ]
        ],
        "viewBox": "-10 -10 120 62"
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
            45
          ],
          [
            0,
            45
          ]
        ],
        "viewBox": "-10 -10 120 65"
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
            100,
            30
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
            40,
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
            90,
            45
          ],
          [
            45,
            45
          ],
          [
            45,
            75
          ],
          [
            0,
            75
          ]
        ],
        "viewBox": "-10 -10 110 95"
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
          60,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p3",
        "rotationDeg": 0,
        "translation": [
          20,
          30
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
      }
    ],
    "explanation": "Geometrische Analyse: Teilstück p5 (Rechteck 20 × 60, Fläche 1200) bildet den zentralen Rumpf von x = 40 bis 60 und y = 0 bis 60. Flankierend bilden p1 (40 × 30, Fläche 1200) und p2 (40 × 30, Fläche 1200) die linken und rechten Tragflächen von y = 0 bis 30. Darüber schließen Teilstück p3 (Dreieck 20 × 30, Fläche 300) und p4 (Dreieck 20 × 30, Fläche 300) an, deren Hypotenusen symmetrisch von den Außenflügeln nach innen zum Rumpfkopf bei y = 60 ansteigen. Das Resultat ist ein vollkommen spiegelsymmetrisches Flugzeug-Polygon mit Gesamtfläche 1200 + 1200 + 1200 + 300 + 300 = 4200 Einheiten. Dies entspricht exakt Figur C.\n\nAusschluss: Figur A ist ein einfaches Rechteck ohne Flügelkontur. Figur B ist ein Trapez. Figur D ist ein asymmetrisches L-Polygon mit Flächenüberschuss.",
    "metadata": {
      "pieceCount": 5,
      "shapeFamily": "Tragflächen-Polygon",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim7-q13",
    "simulationId": "fz-sim7",
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
            45,
            0
          ],
          [
            45,
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
            70,
            45
          ],
          [
            70,
            75
          ],
          [
            25,
            75
          ]
        ],
        "area": 1350
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
            165,
            45
          ],
          [
            165,
            75
          ],
          [
            145,
            75
          ],
          [
            145,
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
            30
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
            235,
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
            320,
            75
          ],
          [
            295,
            75
          ],
          [
            320,
            45
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
      "B": {
        "key": "B",
        "polygon": [
          [
            10,
            0
          ],
          [
            80,
            0
          ],
          [
            90,
            45
          ],
          [
            0,
            45
          ]
        ],
        "viewBox": "-10 -10 110 65"
      },
      "C": {
        "key": "C",
        "polygon": [
          [
            0,
            0
          ],
          [
            85,
            0
          ],
          [
            85,
            25
          ],
          [
            45,
            25
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
        "viewBox": "-10 -10 105 80"
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
    "assembly": [],
    "explanation": "Geometrische Analyse: Die Gesamtfläche der 5 Teilstücke beträgt exakt 1350 + 900 + 600 + 300 + 375 = 3525 Flächeneinheiten. Zudem sind die Flankenneigungswinkel der beiden Dreiecke p4 (Katheten 20 und 30, Winkel ~56,3°) und p5 (Katheten 25 und 30, Winkel ~50,2°) inkompatibel.\n\nAusschlussverfahren:\n- Figur A ist ein Rechteck von 70 × 50 mit einer Fläche von 3500 Einheiten (-25 Einheiten Defizit).\n- Figur B ist ein Trapez mit Fläche 3600 Einheiten (+75 Einheiten Überschuss).\n- Figur C ist ein L-Polygon mit Fläche 3700 Einheiten.\n- Figur D ist ein symmetrisches Hexagon mit Fläche 3600 Einheiten.\n\nDa keine der Optionen A–D mit der mathematisch exakten Gesamtfläche von 3525 Einheiten übereinstimmt, lautet die korrekte Antwort E.",
    "metadata": {
      "pieceCount": 5,
      "shapeFamily": "Ausschluss-Heuristik",
      "requiresRotation": true,
      "isEAnswer": true
    }
  },
  {
    "id": "fz-sim7-q14",
    "simulationId": "fz-sim7",
    "questionNumber": 14,
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
            95,
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
            95,
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
            235,
            45
          ],
          [
            255,
            45
          ],
          [
            235,
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
          80,
          0
        ],
        [
          80,
          30
        ],
        [
          75,
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
          5,
          30
        ],
        [
          0,
          30
        ]
      ],
      "viewBox": "-10 -10 100 80",
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
            78,
            0
          ],
          [
            78,
            50
          ],
          [
            0,
            50
          ]
        ],
        "viewBox": "-10 -10 98 70"
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
            55
          ],
          [
            20,
            55
          ]
        ],
        "viewBox": "-10 -10 100 75"
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
            50,
            30
          ],
          [
            50,
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
            75,
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
            5,
            30
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
          5,
          30
        ],
        "isReflection": false
      },
      {
        "pieceId": "p5",
        "rotationDeg": 0,
        "translation": [
          25,
          30
        ],
        "isReflection": false
      },
      {
        "pieceId": "p4",
        "rotationDeg": 0,
        "translation": [
          55,
          30
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: Teilstück p1 (40 × 30, Fläche 1200) und p2 (40 × 30, Fläche 1200) bilden zusammen das Basisband von 80 × 30 (Fläche 2400). Auf der Oberseite bildet Teilstück p5 (Quadrat 30 × 30, Fläche 900) den zentralen Turm von x = 25 bis 55 (y = 30 bis 60). Links schließt Teilstück p3 (Dreieck 20 × 30, Fläche 300) von x = 5 bis 25 an, dessen Hypotenuse von (5, 30) nach (25, 60) ansteigt. Rechts schließt Teilstück p4 (Dreieck 20 × 30, Fläche 300) von x = 55 bis 75 an, dessen Hypotenuse von (55, 60) nach (75, 30) abfällt. Die Außenabschnitte von x = 0 bis 5 und x = 75 bis 80 verbleiben als waagrechte Schultern. Gesamtfläche: 2400 + 900 + 300 + 300 = 3900 Einheiten. Dies entspricht exakt Figur D.\n\nAusschluss: Figur A ist ein einfaches Rechteck ohne Aufbau. Figur B ist ein reines Trapez. Figur C ist ein asymmetrisches L-Polygon.",
    "metadata": {
      "pieceCount": 5,
      "shapeFamily": "Stufenmonument mit Schrägdach",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim7-q15",
    "simulationId": "fz-sim7",
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
            85,
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
            85,
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
            280,
            45
          ],
          [
            280,
            65
          ],
          [
            250,
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
            0,
            0
          ],
          [
            80,
            0
          ],
          [
            60,
            60
          ],
          [
            20,
            60
          ]
        ],
        "viewBox": "-10 -10 100 80"
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
            90,
            30
          ],
          [
            70,
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
        "pieceId": "p4",
        "rotationDeg": 180,
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
          30
        ],
        "isReflection": false
      },
      {
        "pieceId": "p5",
        "rotationDeg": 180,
        "translation": [
          60,
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
    "explanation": "Geometrische Analyse: Die 6 Teilstücke bilden einen zentralen rechteckigen Rumpf von 40 × 60 (p1 und p2 übereinander, Fläche 2400) von x = 20 bis 60. Links formen die Dreiecke p4 (um 180° rotiert) und p3 eine nach links vorspringende Spitze mit Scheitelpunkt bei (0, 30). Rechts formen die Dreiecke p5 (um 180° rotiert) und p6 eine identische, nach rechts vorspringende Spitze mit Scheitelpunkt bei (80, 30). Das Resultat ist ein punktsymmetrisches, horizontal gestrecktes Doppelspitz-Hexagon mit horizontalen Ober- und Unterkanten von 40 Einheiten. Gesamtfläche: 2400 + 4 × 300 = 3600 Einheiten. Dies entspricht exakt Figur B.\n\nAusschluss: Figur A ist ein einfaches Quadrat ohne Spitzen. Figur C ist ein einzelnes Trapez mit Fläche 3000. Figur D ist ein asymmetrisches Hexagon mit abweichender Fläche.",
    "metadata": {
      "pieceCount": 6,
      "shapeFamily": "Doppelspitz-Hexagon",
      "requiresRotation": true,
      "isEAnswer": false
    }
  }
];
