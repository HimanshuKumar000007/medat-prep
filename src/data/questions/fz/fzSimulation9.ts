import type { FzQuestionData } from "./types";

export const FZ_SIMULATION_9_QUESTIONS: FzQuestionData[] = [
  {
    "id": "fz-sim9-q01",
    "simulationId": "fz-sim9",
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
            35,
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
            35,
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
          30,
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
            38
          ],
          [
            0,
            38
          ]
        ],
        "viewBox": "-10 -10 95 60"
      },
      "C": {
        "key": "C",
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
      }
    ],
    "explanation": "Geometrische Analyse: Teilstück p1 (Rechteck 50 × 30, Fläche 1500) und Teilstück p2 (Quadrat 30 × 30, Fläche 900) formen zusammen ein horizontales Basisband von 80 × 30 (Fläche 2400). Auf der linken Seite von x = 0 bis 30 schließt Teilstück p3 (Dreieck 30 × 30, Fläche 450) von y = 30 bis 60 an, dessen Hypotenuse von (0, 30) nach (30, 60) ansteigt. Gesamtfläche: 1500 + 900 + 450 = 2850 Einheiten. Dies entspricht exakt Figur A.\n\nAusschluss: Figur B ist ein einfaches Rechteck ohne Schräge. Figur C ist ein schiefes Trapez. Figur D ist ein rein rechtwinkliges L-Polygon.",
    "metadata": {
      "pieceCount": 3,
      "shapeFamily": "Eck-Trapez",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim9-q02",
    "simulationId": "fz-sim9",
    "questionNumber": 2,
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
            20,
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
            65
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
          80,
          30
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: Teilstück p1 (Rechteck 40 × 30, Fläche 1200) bildet den Mittelblock von x = 20 bis 60. Links wird Teilstück p2 (Dreieck 20 × 30, Fläche 300) angefügt, dessen Hypotenuse von (0, 0) nach (20, 30) verläuft. Rechts schließt Teilstück p3 (Dreieck 20 × 30, Fläche 300) um 180° rotiert an, dessen Hypotenuse von (60, 0) nach (80, 30) verläuft. Beide Seitenflanken verlaufen exakt parallel unter ~56,3°. Das Resultat ist ein Parallelogramm mit Grundseite 60, Deckseite 60 und Höhe 30. Gesamtfläche: 1200 + 300 + 300 = 1800 Einheiten. Dies entspricht exakt Figur C.\n\nAusschluss: Figur A ist ein Rechteck ohne Schrägen. Figur B ist ein symmetrisches Trapez mit gegensinnigen Schrägen. Figur D ist ein unproportioniertes Trapez.",
    "metadata": {
      "pieceCount": 3,
      "shapeFamily": "Rhomboid-Parallelogramm",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim9-q03",
    "simulationId": "fz-sim9",
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
            85,
            0
          ],
          [
            100,
            30
          ],
          [
            0,
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
            75,
            0
          ],
          [
            95,
            30
          ],
          [
            20,
            30
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
      "E": {
        "key": "E",
        "polygon": null,
        "viewBox": "0 0 100 100",
        "isNone": true
      }
    },
    "assembly": [],
    "explanation": "Geometrische Analyse: Die Summe der Einzelflächen beträgt exakt 900 + 1200 + 300 + 450 = 2850 Flächeneinheiten. Allerdings besitzen die beiden Dreiecke p3 und p4 inkompatible Katheten (20 vs. 30) und Schrägungswinkel (~56,3° vs. 45,0°).\n\nAusschlussverfahren:\n- Figur A ist ein symmetrisches Trapez mit Fläche 2850. Es erfordert zwei spiegelbildlich identische Dreiecke, die hier nicht vorhanden sind.\n- Figur B ist ein Parallelogramm, welches zwei Dreiecke mit exakt gleichem Neigungswinkel benötigt.\n- Figur C ist ein Rechteck von 70 × 40 mit Fläche 2800 Einheiten (Flächendefizit von 50 Einheiten).\n- Figur D ist ein L-Polygon mit einer Fläche von 3200 Einheiten.\n\nDa keine der Optionen A–D geometrisch bildbar ist, lautet die korrekte Antwort E.",
    "metadata": {
      "pieceCount": 4,
      "shapeFamily": "Ausschluss-Heuristik",
      "requiresRotation": true,
      "isEAnswer": true
    }
  },
  {
    "id": "fz-sim9-q04",
    "simulationId": "fz-sim9",
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
    "explanation": "Geometrische Analyse: Die drei kongruenten Quadrate p2, p3 und p4 (je 20 × 20, Fläche je 400) formen übereinandergestapelt den vertikalen Schaft von 20 × 60 (Fläche 1200) von y = 0 bis 60 zwischen x = 20 und 40. Oben schließt Teilstück p1 (Rechteck 60 × 20, Fläche 1200) zentriert als horizontaler Querbalken von y = 60 bis 80 an. Es entsteht ein symmetrisches T-förmiges Orthogonalpolygon mit Gesamtfläche 1200 + 1200 = 2400 Einheiten. Dies entspricht exakt Figur B.\n\nAusschluss: Figur A ist ein einfaches Rechteck ohne Aussparungen. Figur C ist ein asymmetrisches L-Polygon. Figur D besitzt einen verkürzten Schaft.",
    "metadata": {
      "pieceCount": 4,
      "shapeFamily": "Orthogonales T-Polygon",
      "requiresRotation": false,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim9-q05",
    "simulationId": "fz-sim9",
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
            195,
            45
          ],
          [
            195,
            85
          ],
          [
            165,
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
            290,
            75
          ],
          [
            250,
            75
          ],
          [
            290,
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
          0,
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
    "explanation": "Geometrische Analyse: Teilstück p1 (40 × 30, Fläche 1200) und p2 (40 × 30, Fläche 1200) bilden das 80 × 30 Basisrechteck von y = 0 bis 30 (Fläche 2400). Auf der Oberseite schließt links Teilstück p3 (Dreieck 40 × 30, Fläche 600) an, dessen Hypotenuse von (0, 30) nach (40, 60) ansteigt. Rechts schließt Teilstück p4 (Dreieck 40 × 30, Fläche 600) an, dessen Hypotenuse von (40, 60) nach (80, 30) abfällt. Zusammen bilden sie eine zeltförmige Giebelspitze mit Firstpunkt bei (40, 60). Gesamtfläche: 2400 + 1200 = 3600 Einheiten. Dies entspricht exakt Figur D.\n\nAusschluss: Figur A ist ein einfaches Quadrat ohne Dachspitze. Figur B ist ein Trapez. Figur C ist ein unregelmäßiges L-Polygon.",
    "metadata": {
      "pieceCount": 4,
      "shapeFamily": "Zelt-Pentagon",
      "requiresRotation": false,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim9-q06",
    "simulationId": "fz-sim9",
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
            195,
            75
          ],
          [
            165,
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
        ],
        [
          0,
          60
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
            10,
            0
          ],
          [
            90,
            0
          ],
          [
            80,
            35
          ],
          [
            20,
            35
          ]
        ],
        "viewBox": "0 -10 100 60"
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
          40,
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
    "explanation": "Geometrische Analyse: Teilstück p1 (40 × 30) und p2 (30 × 30) bilden den 70 × 30 Mittelblock von y = 0 bis 30. Rechts schließt Teilstück p3 (Dreieck 30 × 30, Fläche 450) von x = 70 bis 100 an, dessen Hypotenuse von (100, 0) nach (70, 30) abfällt. Links auf Teilstück p1 wird Teilstück p4 (Dreieck 30 × 30, Fläche 450) von x = 0 bis 30 und y = 30 bis 60 aufgesetzt, dessen Hypotenuse von (30, 30) nach (0, 60) ansteigt. Das Resultat ist ein gestuftes Polygon mit zwei Schrägkanten mit Gesamtfläche 1200 + 900 + 450 + 450 = 3000 Einheiten. Dies entspricht exakt Figur A.\n\nAusschluss: Figur B ist ein einfaches Rechteck ohne Schrägen. Figur C ist ein Trapez mit abweichender Fläche (2450). Figur D ist ein rechtwinkliges L-Polygon.",
    "metadata": {
      "pieceCount": 4,
      "shapeFamily": "Gestuftes Schräg-Polygon",
      "requiresRotation": false,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim9-q07",
    "simulationId": "fz-sim9",
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
          110,
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
      "viewBox": "-10 -10 130 60",
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
            110,
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
        "viewBox": "-10 -10 130 60"
      },
      "D": {
        "key": "D",
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
            35
          ],
          [
            20,
            35
          ]
        ],
        "viewBox": "0 -10 100 60"
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
    "explanation": "Geometrische Analyse: Teilstück p1 (40 × 30) und p2 (30 × 30) formen zusammen den 70 × 30 rechteckigen Kern von x = 20 bis 90 (Fläche 2100). Links fügt sich Teilstück p3 (Dreieck 20 × 30, Fläche 300) an, dessen Hypotenuse die linke Flanke von (0, 0) nach (20, 30) formt. Rechts fügt sich Teilstück p4 (Dreieck 20 × 30, Fläche 300) an, dessen Hypotenuse die rechte Flanke von (110, 0) nach (90, 30) formt. Das Ergebnis ist ein symmetrisches Trapez mit Grundseite 110, Deckseite 70 und Höhe 30. Gesamtfläche: 2100 + 300 + 300 = 2700 Einheiten. Dies entspricht exakt Figur C.\n\nAusschluss: Figur A ist ein einfaches Rechteck ohne Schrägen. Figur B ist ein Parallelogramm mit zwei gleichgerichteten Schrägen. Figur D ist ein unproportioniertes Trapez.",
    "metadata": {
      "pieceCount": 4,
      "shapeFamily": "Symmetrisches Großtrapez",
      "requiresRotation": false,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim9-q08",
    "simulationId": "fz-sim9",
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
            155,
            45
          ],
          [
            155,
            70
          ],
          [
            125,
            70
          ],
          [
            125,
            45
          ]
        ],
        "area": 750
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
            310,
            75
          ],
          [
            295,
            75
          ],
          [
            310,
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
            72,
            0
          ],
          [
            72,
            50
          ],
          [
            0,
            50
          ]
        ],
        "viewBox": "-10 -10 92 70"
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
        "viewBox": "-10 -10 110 80"
      },
      "E": {
        "key": "E",
        "polygon": null,
        "viewBox": "0 0 100 100",
        "isNone": true
      }
    },
    "assembly": [],
    "explanation": "Geometrische Analyse: Die Gesamtfläche der 5 Teilstücke beträgt exakt 1350 + 900 + 750 + 375 + 225 = 3600 Flächeneinheiten. Allerdings besitzen die beiden Dreiecke p4 und p5 inkompatible Katheten (25 vs. 15 bei Höhe 30) mit Hypotenusen von ~39,05 und ~33,54.\n\nAusschlussverfahren:\n- Figur A ist ein symmetrisches Trapez mit Fläche 3600. Es erfordert zwei kongruente Dreiecke mit identischer Kathetenlänge; p4 und p5 besitzen jedoch verschiedene Neigungswinkel (~50,2° vs. ~63,4°).\n- Figur B ist ein Parallelogramm, welches zwei Dreiecke mit identischem Schrägungswinkel benötigt (Fläche 2400).\n- Figur C ist ein Rechteck von 72 × 50 mit einer Fläche von 3600 Einheiten. Um die Dreiecke zu einem Rechteck von 20 × 30 zu verbinden, müssten ihre Hypotenusen übereinstimmen; dies ist geometrisch ausgeschlossen.\n- Figur D ist ein L-Polygon mit einer abweichenden Fläche von 4050 Einheiten.\n\nDa keine der Optionen A–D geometrisch bildbar ist, ist Antwort E zwingend richtig.",
    "metadata": {
      "pieceCount": 5,
      "shapeFamily": "Ausschluss-Heuristik",
      "requiresRotation": true,
      "isEAnswer": true
    }
  },
  {
    "id": "fz-sim9-q09",
    "simulationId": "fz-sim9",
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
            35
          ],
          [
            45,
            35
          ],
          [
            45,
            95
          ],
          [
            25,
            95
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
            60
          ],
          [
            0,
            60
          ]
        ],
        "canvasPoints": [
          [
            95,
            35
          ],
          [
            115,
            35
          ],
          [
            115,
            95
          ],
          [
            95,
            95
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
          20,
          0
        ],
        [
          20,
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
          0
        ],
        [
          100,
          60
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
            72,
            0
          ],
          [
            72,
            50
          ],
          [
            0,
            50
          ]
        ],
        "viewBox": "-10 -10 92 70"
      },
      "B": {
        "key": "B",
        "polygon": [
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
            80,
            20
          ],
          [
            80,
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
            80,
            60
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
            20,
            60
          ],
          [
            0,
            60
          ]
        ],
        "viewBox": "-10 -10 120 80"
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
            80,
            20
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
            0,
            60
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
          60,
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
    "explanation": "Geometrische Analyse: Teilstück p1 (20 × 60, Fläche 1200) bildet den linken vertikalen Pfeiler von x = 0 bis 20 und y = 0 bis 60. Teilstück p2 (20 × 60, Fläche 1200) bildet den rechten Pfeiler von x = 80 bis 100 und y = 0 bis 60. Dazwischen formen die drei Quadrate p3, p4 und p5 (je 20 × 20, Fläche je 400) den horizontalen Quersteg von 60 × 20 von x = 20 bis 80 und y = 20 bis 40 (Fläche 1200). Es entsteht ein perfekt spiegelsymmetrisches H-förmiges Orthogonalpolygon mit Gesamtfläche 1200 + 1200 + 1200 = 3600 Einheiten. Dies entspricht exakt Figur B.\n\nAusschluss: Figur A ist ein massives Rechteck. Figur C ist ein T-Polygon. Figur D ist ein L-Polygon.",
    "metadata": {
      "pieceCount": 5,
      "shapeFamily": "H-Polygon",
      "requiresRotation": false,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim9-q10",
    "simulationId": "fz-sim9",
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
          20
        ],
        "isReflection": false
      },
      {
        "pieceId": "p5",
        "rotationDeg": 0,
        "translation": [
          30,
          20
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: Die Teilstücke p1, p2 und p3 (je 30 × 20, Fläche je 600) formen die breite Basis von 90 × 20 von y = 0 bis 20 (Fläche 1800). Darauf werden linksbündig p4 und p5 (je 30 × 20, Fläche je 600) von x = 0 bis 60 und y = 20 bis 40 aufgesetzt (Fläche 1200). Das Resultat ist ein gestuftes Treppen-Polygon mit zwei Stufen und einer Gesamtfläche von 1800 + 1200 = 3000 Einheiten. Dies entspricht exakt Figur D.\n\nAusschluss: Figur A ist ein einfaches Rechteck ohne Stufe. Figur B ist ein schräges Trapez. Figur C ist ein punktsymmetrisches Z-Polygon.",
    "metadata": {
      "pieceCount": 5,
      "shapeFamily": "Treppen-Polygon",
      "requiresRotation": false,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim9-q11",
    "simulationId": "fz-sim9",
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
            95,
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
            95,
            75
          ]
        ],
        "area": 1350
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
            165,
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
            165,
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
          ]
        ],
        "canvasPoints": [
          [
            235,
            45
          ],
          [
            235,
            75
          ],
          [
            205,
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
            90,
            50
          ],
          [
            0,
            50
          ]
        ],
        "viewBox": "-10 -10 110 70"
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
      "C": {
        "key": "C",
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
            50
          ],
          [
            0,
            50
          ]
        ],
        "viewBox": "-10 -10 110 70"
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
          45,
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
          60,
          30
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: Teilstück p1 (45 × 30, Fläche 1350) und p2 (45 × 30, Fläche 1350) bilden das 90 × 30 Basisband von y = 0 bis 30 (Fläche 2700). Auf der Oberseite (y = 30 bis 60) bildet Teilstück p3 (Quadrat 30 × 30, Fläche 900) den mittleren Zinnenblock von x = 30 bis 60. Links schließt Teilstück p4 (Dreieck 30 × 30, Fläche 450) von x = 0 bis 30 an, dessen Hypotenuse von (0, 30) nach (30, 60) ansteigt. Rechts schließt Teilstück p5 (Dreieck 30 × 30, Fläche 450) von x = 60 bis 90 an, dessen Hypotenuse von (60, 60) nach (90, 30) abfällt. Gesamtfläche: 2700 + 900 + 450 + 450 = 4500 Einheiten. Dies entspricht exakt Figur B.\n\nAusschluss: Figur A ist ein einfaches Rechteck ohne Schrägen. Figur C ist ein rein glattes Trapez. Figur D ist ein unregelmäßiges L-Polygon.",
    "metadata": {
      "pieceCount": 5,
      "shapeFamily": "Bastions-Heptagon",
      "requiresRotation": false,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim9-q12",
    "simulationId": "fz-sim9",
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
            105,
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
            105,
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
            205,
            45
          ],
          [
            205,
            75
          ],
          [
            175,
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
          ]
        ],
        "canvasPoints": [
          [
            245,
            45
          ],
          [
            245,
            75
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
            320,
            75
          ],
          [
            300,
            75
          ],
          [
            320,
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
      "viewBox": "-10 -10 100 80",
      "area": 4050
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
        "viewBox": "-10 -10 100 90"
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
          60,
          30
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: Teilstück p1 (60 × 30, Fläche 1800) und p2 (20 × 30, Fläche 600) bilden die 80 × 30 Basis von y = 0 bis 30 (Fläche 2400). Auf der Oberseite (y = 30 bis 60) bildet Teilstück p3 (Quadrat 30 × 30, Fläche 900) den Turm von x = 30 bis 60. Links schließt Teilstück p4 (Dreieck 30 × 30, Fläche 450) von x = 0 bis 30 an, dessen Hypotenuse von (0, 30) nach (30, 60) ansteigt (Winkel 45°). Rechts schließt Teilstück p5 (Dreieck 20 × 30, Fläche 300) von x = 60 bis 80 an, dessen Hypotenuse von (60, 60) nach (80, 30) steiler abfällt (Winkel ~56,3°). Gesamtfläche: 2400 + 900 + 450 + 300 = 4050 Einheiten. Dies entspricht exakt Figur A.\n\nAusschluss: Figur B ist ein einfaches Rechteck ohne Dachaufbau. Figur C ist ein Trapez. Figur D ist ein unregelmäßiges L-Polygon.",
    "metadata": {
      "pieceCount": 5,
      "shapeFamily": "Asymmetrischer Turm",
      "requiresRotation": false,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim9-q13",
    "simulationId": "fz-sim9",
    "questionNumber": 13,
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
            85,
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
            85,
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
            40
          ],
          [
            0,
            40
          ]
        ],
        "canvasPoints": [
          [
            145,
            35
          ],
          [
            165,
            35
          ],
          [
            165,
            75
          ],
          [
            145,
            75
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
            215,
            35
          ],
          [
            235,
            35
          ],
          [
            235,
            75
          ],
          [
            215,
            75
          ]
        ],
        "area": 800
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
            325,
            45
          ],
          [
            325,
            65
          ],
          [
            285,
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
          120,
          0
        ],
        [
          120,
          60
        ],
        [
          100,
          60
        ],
        [
          100,
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
      "viewBox": "-10 -10 140 80",
      "area": 4000
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
            20,
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
            100,
            30
          ],
          [
            100,
            70
          ],
          [
            0,
            70
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
        "viewBox": "-10 -10 120 90"
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
            120,
            60
          ],
          [
            100,
            60
          ],
          [
            100,
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
        "viewBox": "-10 -10 140 80"
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
            50,
            30
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
          80,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p3",
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
          100,
          20
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: Teilstück p1, p5 und p2 (je 40 × 20, Fläche je 800) bilden nebeneinander das breite Basisband von 120 × 20 von y = 0 bis 20 (Fläche 2400). Links schließt Teilstück p3 (20 × 40, Fläche 800) als linker Pfeiler von y = 20 bis 60 an. Rechts schließt Teilstück p4 (20 × 40, Fläche 800) als rechter Pfeiler von y = 20 bis 60 an. In der Mitte zwischen x = 20 und 100 verbleibt ein breiter U-förmiger Kanal. Gesamtfläche: 2400 + 800 + 800 = 4000 Einheiten. Dies entspricht exakt Figur C.\n\nAusschluss: Figur A ist ein einfaches Rechteck ohne Kanal. Figur B ist ein symmetrisches T-Polygon. Figur D ist ein asymmetrisches L-Polygon mit abweichender Fläche.",
    "metadata": {
      "pieceCount": 5,
      "shapeFamily": "U-Kanal-Polygon",
      "requiresRotation": false,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim9-q14",
    "simulationId": "fz-sim9",
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
            30,
            0
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
            140,
            75
          ],
          [
            140,
            45
          ]
        ],
        "area": 750
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
            320,
            75
          ],
          [
            300,
            75
          ],
          [
            320,
            50
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
        "viewBox": "-10 -10 105 85"
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
    "explanation": "Geometrische Analyse: Die Gesamtfläche der 5 Teilstücke beträgt exakt 1500 + 900 + 750 + 375 + 250 = 3775 Flächeneinheiten. Zudem besitzen die beiden Dreiecke p4 und p5 inkompatible Hypotenusen (~39,05 vs. ~32,02).\n\nAusschlussverfahren:\n- Figur A ist ein Rechteck von 75 × 50 mit einer Fläche von 3750 Einheiten (Flächendefizit: 25 Einheiten).\n- Figur B ist ein Trapez mit Fläche 3600 Einheiten (-175 Einheiten).\n- Figur C ist ein L-Polygon mit Fläche 4000 Einheiten (+225 Einheiten).\n- Figur D ist ein symmetrisches Hexagon mit Fläche 3600 Einheiten.\n\nDa keine der Optionen A–D mit der exakten Gesamtfläche von 3775 Einheiten übereinstimmt, lautet die richtige Antwort E.",
    "metadata": {
      "pieceCount": 5,
      "shapeFamily": "Ausschluss-Heuristik",
      "requiresRotation": true,
      "isEAnswer": true
    }
  },
  {
    "id": "fz-sim9-q15",
    "simulationId": "fz-sim9",
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
    "explanation": "Geometrische Analyse: Die 6 Teilstücke formen einen zentralen rechteckigen Rumpf von 40 × 60 (p1 und p2 übereinander, Fläche 2400) von x = 20 bis 60. Links formen die Dreiecke p4 (um 180° rotiert) und p3 eine nach links vorspringende Spitze mit Scheitelpunkt bei (0, 30). Rechts formen die Dreiecke p5 (um 180° rotiert) und p6 eine identische, nach rechts vorspringende Spitze mit Scheitelpunkt bei (80, 30). Das Resultat ist ein punktsymmetrisches, horizontal gestrecktes Doppelspitz-Hexagon mit horizontalen Ober- und Unterkanten von 40 Einheiten. Gesamtfläche: 2400 + 4 × 300 = 3600 Einheiten. Dies entspricht exakt Figur D.\n\nAusschluss: Figur A ist ein einfaches Quadrat ohne Spitzen. Figur B ist ein einzelnes Trapez mit Fläche 3000. Figur C ist ein asymmetrisches Hexagon mit abweichender Fläche.",
    "metadata": {
      "pieceCount": 6,
      "shapeFamily": "Doppelspitz-Hexagon",
      "requiresRotation": true,
      "isEAnswer": false
    }
  }
];
