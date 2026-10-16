import type { FzQuestionData } from "./types";

export const FZ_SIMULATION_6_QUESTIONS: FzQuestionData[] = [
  {
    "id": "fz-sim6-q01",
    "simulationId": "fz-sim6",
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
            30,
            45
          ],
          [
            90,
            45
          ],
          [
            60,
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
            160,
            40
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
            270,
            75
          ],
          [
            240,
            75
          ],
          [
            270,
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
          30,
          40
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
            30,
            40
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
      "D": {
        "key": "D",
        "polygon": [
          [
            30,
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
        "pieceId": "p3",
        "rotationDeg": 0,
        "translation": [
          30,
          0
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
      }
    ],
    "explanation": "Geometrische Analyse: Teilstück p1 bildet die pfeilförmige Dachspitze mit Basis 60 und Firsthöhe 40 (Fläche 1200). Die Teilstücke p2 und p3 sind zwei rechtwinklige Dreiecke (Katheten 30 und 40, Fläche je 600). Werden sie an die Unterseite von p1 angefügt, erzeugen sie eine dreieckige Einbuchtung von (0, 0) über (30, 40) nach (60, 0). Das Resultat ist ein konkaver Chevron-Pfeil mit Gesamtfläche 1200 + 600 + 600 = 2400 Einheiten. Dies entspricht exakt Figur B.\n\nAusschluss: Figur A ist ein einfaches Rechteck ohne Einbuchtung. Figur C ist ein schiefes Trapez. Figur D ist ein geschlossener Rhombus.",
    "metadata": {
      "pieceCount": 3,
      "shapeFamily": "Konkaver Chevron-Pfeil",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim6-q02",
    "simulationId": "fz-sim6",
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
            0,
            30
          ]
        ],
        "canvasPoints": [
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
          0,
          60
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
            0,
            60
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
    "explanation": "Geometrische Analyse: Teilstück p1 (Rechteck 50 × 30) und Teilstück p2 (Quadrat 30 × 30) bilden nebeneinander ein durchgehendes Basisrechteck von 80 × 30 (Fläche 2400). Oben links auf Teilstück p1 wird Teilstück p3 (rechtwinkliges Dreieck mit Katheten 30 und 30, Fläche 450) von x = 0 bis 30 aufgesetzt. Dadurch entsteht eine schräge Außenkante von (0, 60) nach (30, 30). Die Gesamtfläche beträgt 1500 + 900 + 450 = 2850 Einheiten. Dies entspricht exakt Figur A.\n\nAusschluss: Figur B ist ein einfaches Rechteck. Figur C ist ein symmetrisches Trapez. Figur D ist ein rechtwinkliges L-Polygon ohne schräge Kante mit abweichender Fläche.",
    "metadata": {
      "pieceCount": 3,
      "shapeFamily": "Trapezoidales L-Polygon",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim6-q03",
    "simulationId": "fz-sim6",
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
            40,
            40
          ],
          [
            100,
            40
          ],
          [
            100,
            80
          ],
          [
            40,
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
            275,
            75
          ],
          [
            245,
            75
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
            40
          ],
          [
            0,
            40
          ]
        ],
        "viewBox": "-10 -10 105 60"
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
            30,
            65
          ],
          [
            0,
            40
          ]
        ],
        "viewBox": "-10 -10 80 85"
      },
      "E": {
        "key": "E",
        "polygon": null,
        "viewBox": "0 0 100 100",
        "isNone": true
      }
    },
    "assembly": [],
    "explanation": "Geometrische Analyse: Teilstück p1 ist ein Rechteck von 60 × 40 (Fläche 2400). Teilstück p2 ist ein rechtwinkliges Dreieck mit Katheten 20 und 40 (Hypotenuse ~44,7, Winkel ~63,4°). Teilstück p3 ist ein rechtwinkliges Dreieck mit Katheten 30 und 40 (Hypotenuse 50, Winkel ~53,1°). Gesamtfläche: 3400 Einheiten.\n\nAusschlussverfahren:\n- Figur A ist ein symmetrisches Trapez mit zwei identischen 20er-Flanken (Fläche 3200 statt 3400).\n- Figur B ist ein Parallelogramm, welches zwei kongruente Dreiecke mit identischem Schrägungswinkel erfordert.\n- Figur C ist ein Rechteck von 85 × 40 (Fläche 3400). Um ein Rechteck zu bilden, müssten die beiden Dreiecke p2 und p3 lückenlos aneinandergefügt ein Rechteck von 25 × 40 ergeben. Da ihre Hypotenusen (44,7 vs. 50) und Winkel völlig inkompatibel sind, ist die Bildung einer geschlossenen rechteckigen Kante geometrisch unmöglich.\n- Figur D besitzt eine abweichende Fläche von 3150 Einheiten.\n\nFolglich kann keine der Figuren A–D zusammengesetzt werden; Option E ist korrekt.",
    "metadata": {
      "pieceCount": 3,
      "shapeFamily": "Ausschluss-Heuristik",
      "requiresRotation": true,
      "isEAnswer": true
    }
  },
  {
    "id": "fz-sim6-q04",
    "simulationId": "fz-sim6",
    "questionNumber": 4,
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
            190,
            45
          ],
          [
            190,
            65
          ],
          [
            160,
            65
          ],
          [
            160,
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
            275,
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
            275,
            65
          ]
        ],
        "area": 600
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
          70,
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
            60,
            0
          ],
          [
            60,
            45
          ],
          [
            0,
            45
          ]
        ],
        "viewBox": "-10 -10 80 65"
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
        "viewBox": "-10 -10 90 70"
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
        "pieceId": "p4",
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
          0,
          20
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
          50,
          20
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: Teilstück p1 ist ein zentrales Quadrat von 30 × 30 (Fläche 900), das von (20, 20) bis (50, 50) platziert wird. Links wird Teilstück p2 (20 × 30, Fläche 600) angefügt. Rechts wird Teilstück p3 (20 × 30, Fläche 600) angefügt. Unten schließt mittig Teilstück p4 (30 × 20, Fläche 600) von (20, 0) bis (50, 20) an. Die obere Seite von p1 bleibt als ebene Begrenzung frei. Es entsteht ein T-förmiges Dreiflügel-Kreuz mit Gesamtfläche 900 + 600 + 600 + 600 = 2700 Einheiten. Dies entspricht exakt Figur C.\n\nAusschluss: Figur A ist ein einfaches Rechteck ohne Aussparungen. Figur B besitzt abweichende Armproportionen. Figur D ist ein einfaches L-Polygon.",
    "metadata": {
      "pieceCount": 4,
      "shapeFamily": "Gestuftes 3-Arm-Kreuz",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim6-q05",
    "simulationId": "fz-sim6",
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
            115,
            45
          ],
          [
            155,
            45
          ],
          [
            155,
            75
          ],
          [
            115,
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
            210,
            45
          ],
          [
            210,
            65
          ],
          [
            180,
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
            300,
            75
          ],
          [
            280,
            75
          ],
          [
            300,
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
          60,
          60
        ],
        [
          20,
          60
        ],
        [
          20,
          30
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
            10,
            0
          ],
          [
            70,
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
            50
          ],
          [
            20,
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
            80,
            0
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
            20,
            60
          ],
          [
            20,
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
          20,
          30
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: In der unteren Ebene (y = 0 bis 30) bilden p3 (Dreieck 20 × 30, Fläche 300), p1 (Rechteck 40 × 30, Fläche 1200) und p4 (Dreieck 20 × 30, Fläche 300) ein symmetrisches Trapez mit Basis 80 unten und 40 oben. In der oberen Ebene (y = 30 bis 60) schließt Teilstück p2 (Rechteck 40 × 30, Fläche 1200) exakt auf der 40er-Oberkante von x = 20 bis 60 an. Dadurch entsteht ein gestufter Flaschenkörper mit Gesamtfläche 300 + 1200 + 300 + 1200 = 3000 Einheiten. Dies entspricht exakt Figur D.\n\nAusschluss: Figur A ist ein einfaches Rechteck ohne Schrägen. Figur B und C sind reine Trapeze ohne rechteckigen Turmansatz.",
    "metadata": {
      "pieceCount": 4,
      "shapeFamily": "Gestuftes Flaschen-Polygon",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim6-q06",
    "simulationId": "fz-sim6",
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
          100,
          0
        ],
        [
          130,
          30
        ],
        [
          30,
          30
        ]
      ],
      "viewBox": "-10 -10 150 60",
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
            130,
            30
          ],
          [
            30,
            30
          ]
        ],
        "viewBox": "-10 -10 150 60"
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
            30
          ],
          [
            20,
            30
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
          100,
          30
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: Teilstück p1 (Rechteck 40 × 30, Fläche 1200) und Teilstück p2 (Quadrat 30 × 30, Fläche 900) bilden zusammen einen zentralen rechteckigen Block von 70 × 30 (Fläche 2100) von x = 30 bis 100. Links schließt Teilstück p3 (Dreieck mit Katheten 30 und 30, Fläche 450) von x = 0 bis 30 an. Rechts fügt sich Teilstück p4 (Dreieck 30 × 30, Fläche 450) um 270° gedreht von x = 100 bis 130 an. Beide Schrägflanken verlaufen exakt parallel unter 45°. Das Resultat ist ein Parallelogramm mit Grundseite 100, Deckseite 100 und Höhe 30 mit einer Gesamtfläche von 450 + 2100 + 450 = 3000 Einheiten. Dies entspricht exakt Figur A.\n\nAusschluss: Figur B ist ein rechtwinkliges Rechteck ohne Schrägen. Figur C und D sind Trapeze mit gegensinnig geneigten Flanken.",
    "metadata": {
      "pieceCount": 4,
      "shapeFamily": "Rhomboid-Parallelogramm",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim6-q07",
    "simulationId": "fz-sim6",
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
            70,
            40
          ],
          [
            70,
            80
          ],
          [
            30,
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
            195,
            45
          ],
          [
            195,
            65
          ],
          [
            175,
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
          ],
          [
            0,
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
          ],
          [
            275,
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
          40
        ],
        [
          0,
          40
        ]
      ],
      "viewBox": "-10 -10 100 60",
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
            80,
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
            40
          ],
          [
            0,
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
          20
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: Teilstück p1 (Quadrat 40 × 40, Fläche 1600) bildet den linken massiven Block von x = 0 bis 40. Daneben liegt von x = 40 bis 60 Teilstück p2 (Rechteck 20 × 40, Fläche 800). Im rechten unteren Bereich von x = 60 bis 80 und y = 0 bis 20 schließt Teilstück p4 (Quadrat 20 × 20, Fläche 400) an. Darüber wird Teilstück p3 (Dreieck mit Katheten 20 und 20, Fläche 200) von (60, 20) bis (80, 20) aufgesetzt, dessen schräge Hypotenuse von (80, 20) nach (60, 40) verläuft. Die Gesamthöhe beträgt 40, die Gesamtbreite 80. Gesamtfläche: 1600 + 800 + 400 + 200 = 3000 Einheiten. Dies entspricht exakt Figur B.\n\nAusschluss: Figur A ist ein einfaches Rechteck ohne Schrägung. Figur C ist ein rein glattes Trapez mit abweichender Fläche (2600). Figur D ist ein rechtwinkliges L-Polygon.",
    "metadata": {
      "pieceCount": 4,
      "shapeFamily": "Abgetrepptes Schrägtrapez",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim6-q08",
    "simulationId": "fz-sim6",
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
            30,
            45
          ],
          [
            90,
            45
          ],
          [
            90,
            75
          ],
          [
            30,
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
            195,
            75
          ],
          [
            175,
            75
          ],
          [
            175,
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
            280,
            75
          ],
          [
            255,
            75
          ],
          [
            280,
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
          ],
          [
            50,
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
            50
          ],
          [
            0,
            50
          ]
        ],
        "viewBox": "-10 -10 90 70"
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
        "viewBox": "-10 -10 110 80"
      },
      "D": {
        "key": "D",
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
      "E": {
        "key": "E",
        "polygon": null,
        "viewBox": "0 0 100 100",
        "isNone": true
      }
    },
    "assembly": [],
    "explanation": "Geometrische Analyse: Die Summe der Einzelflächen beträgt exakt 1800 + 900 + 600 + 375 = 3675 Flächeneinheiten. Zudem besitzt Teilstück p4 eine Kathetenlänge von 25 und eine Hypotenuse von ~39,05.\n\nAusschlussverfahren:\n- Figur A besitzt eine Gesamtfläche von 3600 Einheiten (Flächendefizit von 75 Einheiten).\n- Figur B ist ein Rechteck von 70 × 50 mit einer Fläche von 3500 Einheiten (Defizit von 175 Einheiten).\n- Figur C ist ein L-Polygon mit Fläche 3900 (zu groß).\n- Figur D ist ein Trapez mit Fläche 3600 Einheiten.\n\nDa keine der Optionen A–D mit der Gesamtfläche von 3675 Einheiten übereinstimmt und die Schrägkante von p4 nicht kompensiert werden kann, ist Antwort E zwingend richtig.",
    "metadata": {
      "pieceCount": 4,
      "shapeFamily": "Ausschluss-Heuristik",
      "requiresRotation": true,
      "isEAnswer": true
    }
  },
  {
    "id": "fz-sim6-q09",
    "simulationId": "fz-sim6",
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
            25,
            0
          ],
          [
            25,
            25
          ],
          [
            0,
            25
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
            70
          ],
          [
            30,
            70
          ]
        ],
        "area": 625
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
            25
          ],
          [
            0,
            25
          ]
        ],
        "canvasPoints": [
          [
            95,
            45
          ],
          [
            120,
            45
          ],
          [
            120,
            70
          ],
          [
            95,
            70
          ]
        ],
        "area": 625
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
            25
          ],
          [
            0,
            25
          ]
        ],
        "canvasPoints": [
          [
            160,
            45
          ],
          [
            185,
            45
          ],
          [
            185,
            70
          ],
          [
            160,
            70
          ]
        ],
        "area": 625
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
            25,
            25
          ],
          [
            0,
            25
          ]
        ],
        "canvasPoints": [
          [
            225,
            45
          ],
          [
            250,
            45
          ],
          [
            250,
            70
          ],
          [
            225,
            70
          ]
        ],
        "area": 625
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
            25,
            25
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
            315,
            45
          ],
          [
            315,
            70
          ],
          [
            290,
            70
          ]
        ],
        "area": 625
      }
    ],
    "targetFigure": {
      "polygon": [
        [
          25,
          0
        ],
        [
          50,
          0
        ],
        [
          50,
          25
        ],
        [
          75,
          25
        ],
        [
          75,
          50
        ],
        [
          50,
          50
        ],
        [
          50,
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
      "viewBox": "-10 -10 95 95",
      "area": 3125
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
            55,
            0
          ],
          [
            55,
            55
          ],
          [
            0,
            55
          ]
        ],
        "viewBox": "-10 -10 75 75"
      },
      "B": {
        "key": "B",
        "polygon": [
          [
            25,
            0
          ],
          [
            50,
            0
          ],
          [
            50,
            35
          ],
          [
            75,
            35
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
            35
          ],
          [
            25,
            35
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
            75,
            0
          ],
          [
            75,
            25
          ],
          [
            25,
            25
          ],
          [
            25,
            75
          ],
          [
            0,
            75
          ]
        ],
        "viewBox": "-10 -10 95 95"
      },
      "D": {
        "key": "D",
        "polygon": [
          [
            25,
            0
          ],
          [
            50,
            0
          ],
          [
            50,
            25
          ],
          [
            75,
            25
          ],
          [
            75,
            50
          ],
          [
            50,
            50
          ],
          [
            50,
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
        "viewBox": "-10 -10 95 95"
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
          25,
          25
        ],
        "isReflection": false
      },
      {
        "pieceId": "p2",
        "rotationDeg": 0,
        "translation": [
          25,
          50
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
          0,
          25
        ],
        "isReflection": false
      },
      {
        "pieceId": "p5",
        "rotationDeg": 0,
        "translation": [
          50,
          25
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: Alle 5 Teilstücke sind vollkommen kongruente Quadrate von 25 × 25 (Fläche je 625). Werden vier dieser Quadrate kreuzförmig an die vier Kanten des zentralen Quadrats p1 angefügt, entsteht ein exakt spiegelsymmetrisches griechisches Kreuz mit 12 Kanten à 25 Einheiten. Gesamtfläche: 5 × 625 = 3125 Einheiten. Dies entspricht exakt Figur D.\n\nAusschluss: Figur A ist ein einfaches Quadrat mit Fläche 3025 (zu klein). Figur B ist ein T-förmiges Polygon. Figur C ist ein asymmetrisches L-Polygon.",
    "metadata": {
      "pieceCount": 5,
      "shapeFamily": "Griechisches Kreuz",
      "requiresRotation": false,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim6-q10",
    "simulationId": "fz-sim6",
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
            25,
            0
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
        "canvasPoints": [
          [
            30,
            35
          ],
          [
            55,
            35
          ],
          [
            55,
            85
          ],
          [
            30,
            85
          ]
        ],
        "area": 1250
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
            25
          ],
          [
            0,
            25
          ]
        ],
        "canvasPoints": [
          [
            95,
            45
          ],
          [
            120,
            45
          ],
          [
            120,
            70
          ],
          [
            95,
            70
          ]
        ],
        "area": 625
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
            25
          ],
          [
            0,
            25
          ]
        ],
        "canvasPoints": [
          [
            160,
            45
          ],
          [
            185,
            45
          ],
          [
            185,
            70
          ],
          [
            160,
            70
          ]
        ],
        "area": 625
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
            25,
            25
          ],
          [
            0,
            25
          ]
        ],
        "canvasPoints": [
          [
            225,
            45
          ],
          [
            250,
            45
          ],
          [
            250,
            70
          ],
          [
            225,
            70
          ]
        ],
        "area": 625
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
            25,
            25
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
            315,
            45
          ],
          [
            315,
            70
          ],
          [
            290,
            70
          ]
        ],
        "area": 625
      }
    ],
    "targetFigure": {
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
          75
        ],
        [
          75,
          75
        ],
        [
          75,
          100
        ],
        [
          25,
          100
        ],
        [
          25,
          25
        ],
        [
          0,
          25
        ]
      ],
      "viewBox": "-10 -10 95 120",
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
            0,
            0
          ],
          [
            75,
            0
          ],
          [
            75,
            25
          ],
          [
            50,
            25
          ],
          [
            50,
            75
          ],
          [
            25,
            75
          ],
          [
            25,
            100
          ],
          [
            0,
            100
          ]
        ],
        "viewBox": "-10 -10 95 120"
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
            75
          ],
          [
            75,
            75
          ],
          [
            75,
            100
          ],
          [
            25,
            100
          ],
          [
            25,
            25
          ],
          [
            0,
            25
          ]
        ],
        "viewBox": "-10 -10 95 120"
      },
      "D": {
        "key": "D",
        "polygon": [
          [
            25,
            0
          ],
          [
            50,
            0
          ],
          [
            50,
            35
          ],
          [
            75,
            35
          ],
          [
            75,
            65
          ],
          [
            0,
            65
          ],
          [
            0,
            35
          ],
          [
            25,
            35
          ]
        ],
        "viewBox": "-10 -10 95 85"
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
        "pieceId": "p3",
        "rotationDeg": 0,
        "translation": [
          25,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p1",
        "rotationDeg": 0,
        "translation": [
          25,
          25
        ],
        "isReflection": false
      },
      {
        "pieceId": "p4",
        "rotationDeg": 0,
        "translation": [
          25,
          75
        ],
        "isReflection": false
      },
      {
        "pieceId": "p5",
        "rotationDeg": 0,
        "translation": [
          50,
          75
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: Teilstück p1 ist ein zentrales vertikales Rechteck von 25 × 50 (Fläche 1250) von (25, 25) bis (50, 75). Unten links schließen p2 und p3 nebeneinander als horizontaler Balken von 50 × 25 an. Oben rechts schließen p4 und p5 als horizontaler Balken von 50 × 25 an. Das Resultat ist ein punktsymmetrisches, zweifach gestuftes Z-förmiges Polygon mit Gesamtfläche 1250 + 4 × 625 = 3750 Einheiten. Dies entspricht exakt Figur C.\n\nAusschluss: Figur A ist ein einfaches Rechteck ohne Versatz. Figur B ist ein einseitig offener Stufenkörper. Figur D ist ein T-förmiges Polygon.",
    "metadata": {
      "pieceCount": 5,
      "shapeFamily": "Doppelt gestuftes Z-Polygon",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim6-q11",
    "simulationId": "fz-sim6",
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
            35,
            0
          ],
          [
            35,
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
            65,
            45
          ],
          [
            65,
            75
          ],
          [
            30,
            75
          ]
        ],
        "area": 1050
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
            135,
            45
          ],
          [
            135,
            75
          ],
          [
            100,
            75
          ]
        ],
        "area": 1050
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
            175,
            65
          ],
          [
            145,
            65
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
            245,
            45
          ],
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
            30,
            30
          ]
        ],
        "canvasPoints": [
          [
            335,
            75
          ],
          [
            305,
            75
          ],
          [
            305,
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
          30,
          30
        ],
        [
          0,
          30
        ]
      ],
      "viewBox": "-10 -10 110 80",
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
            15,
            0
          ],
          [
            75,
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
            90,
            0
          ],
          [
            90,
            60
          ],
          [
            45,
            60
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
          35,
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
    "explanation": "Geometrische Analyse: Die drei Rechtecke p1 (35 × 30), p2 (35 × 30) und p3 (20 × 30) bilden zusammen das breite Basisrechteck von 90 × 30 (Fläche 2700). Auf der Oberseite schließt von x = 30 bis 60 Teilstück p4 (Quadrat 30 × 30, Fläche 900) an. Direkt rechts daneben wird Teilstück p5 (Dreieck 30 × 30, Fläche 450) von x = 60 bis 90 aufgesetzt, dessen schräge Hypotenuse von (60, 60) nach (90, 30) abfällt. Es entsteht ein asymmetrisches Heptagon mit Turm- und Schrägkante mit Gesamtfläche 2700 + 900 + 450 = 4050 Einheiten. Dies entspricht exakt Figur A.\n\nAusschluss: Figur B ist ein massives Rechteck ohne Schräge. Figur C ist ein Trapez mit abweichender Fläche (3375). Figur D ist ein rein rechtwinkliges L-Polygon ohne Schrägkante.",
    "metadata": {
      "pieceCount": 5,
      "shapeFamily": "Asymmetrisches Kronen-Heptagon",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim6-q12",
    "simulationId": "fz-sim6",
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
            180,
            45
          ],
          [
            180,
            65
          ],
          [
            150,
            65
          ],
          [
            150,
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
            45
          ],
          [
            275,
            45
          ],
          [
            275,
            75
          ],
          [
            255,
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
            330,
            35
          ],
          [
            330,
            55
          ],
          [
            270,
            55
          ],
          [
            270,
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
          80,
          0
        ],
        [
          80,
          80
        ],
        [
          60,
          80
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
      "viewBox": "-10 -10 100 100",
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
        "viewBox": "-10 -10 100 90"
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
            80
          ],
          [
            60,
            80
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
        "viewBox": "-10 -10 100 100"
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
            80
          ],
          [
            0,
            80
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
          40,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p5",
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
          60,
          20
        ],
        "isReflection": false
      },
      {
        "pieceId": "p4",
        "rotationDeg": 0,
        "translation": [
          60,
          50
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: Teilstück p1 (40 × 20) und p2 (40 × 20) bilden zusammen das Basisband von 80 × 20 (Fläche 1600). Links schließt Teilstück p5 (20 × 60, Fläche 1200) als durchgehender linker Pfeiler bis zur Gesamthöhe 80 an. Rechts bilden p3 (20 × 30, Fläche 600) und p4 (20 × 30, Fläche 600) übereinandergesetzt den rechten Pfeiler von 20 × 60. In der Mitte entsteht eine lichte Aussparung von 40 × 60. Es entsteht ein symmetrisches U-förmiges Orthogonalpolygon mit Gesamtfläche 1600 + 1200 + 1200 = 4000 Einheiten. Dies entspricht exakt Figur C.\n\nAusschluss: Figur A ist ein massives Rechteck. Figur B ist ein symmetrisches T-Polygon. Figur D ist ein asymmetrisches L-Polygon.",
    "metadata": {
      "pieceCount": 5,
      "shapeFamily": "Symmetrisches U-Polygon",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim6-q13",
    "simulationId": "fz-sim6",
    "questionNumber": 13,
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
            110,
            40
          ],
          [
            110,
            70
          ],
          [
            70,
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
            190,
            45
          ],
          [
            230,
            45
          ],
          [
            230,
            65
          ],
          [
            190,
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
            320,
            45
          ],
          [
            320,
            65
          ],
          [
            300,
            65
          ],
          [
            300,
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
            10,
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
            40,
            40
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
        "pieceId": "p4",
        "rotationDeg": 0,
        "translation": [
          30,
          20
        ],
        "isReflection": false
      },
      {
        "pieceId": "p5",
        "rotationDeg": 0,
        "translation": [
          50,
          20
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
    "explanation": "Geometrische Analyse: Teilstück p3 (40 × 20, Fläche 800) bildet zusammen mit den zwei Quadraten p4 und p5 (je 20 × 20, Fläche je 400) einen zentralen rechteckigen Kern von 40 × 40 (Fläche 1600) zwischen x = 30 und x = 70. Links wird Teilstück p1 (Dreieck 30 × 40, Fläche 600) angefügt, welches die linke Schräge von (0, 0) nach (30, 40) formt. Rechts wird das kongruente Dreieck p2 (Fläche 600) angefügt, welches die rechte Schräge von (100, 0) nach (70, 40) formt. Es entsteht ein symmetrisches Trapez mit Grundseite 100, Deckseite 40 und Höhe 40. Gesamtfläche: 600 + 1600 + 600 = 2800 Einheiten. Dies entspricht exakt Figur D.\n\nAusschluss: Figur A ist ein einfaches Rechteck ohne Schrägen. Figur B ist ein Parallelogramm mit zwei gleichgerichteten Schrägen. Figur C besitzt abweichende Kantenmaße und Fläche.",
    "metadata": {
      "pieceCount": 5,
      "shapeFamily": "Symmetrisches Großtrapez",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim6-q14",
    "simulationId": "fz-sim6",
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
            30,
            20
          ],
          [
            10,
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
            55,
            65
          ],
          [
            35,
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
            25,
            0
          ],
          [
            25,
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
            240,
            45
          ],
          [
            240,
            65
          ],
          [
            215,
            65
          ]
        ],
        "area": 500
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
            20
          ]
        ],
        "canvasPoints": [
          [
            280,
            45
          ],
          [
            280,
            70
          ],
          [
            260,
            45
          ]
        ],
        "area": 250
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
            20,
            0
          ],
          [
            60,
            0
          ],
          [
            80,
            25
          ],
          [
            60,
            50
          ],
          [
            20,
            50
          ],
          [
            0,
            25
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
    "assembly": [],
    "explanation": "Geometrische Analyse: Die Gesamtfläche der 6 Teilstücke summiert sich auf exakt 500 + 900 + 600 + 500 + 250 + 200 = 2950 Flächeneinheiten.\n\nAusschlussverfahren:\n- Figur A ist ein Rechteck von 60 × 50 mit einer Fläche von 3000 Einheiten (Flächendisparität: +50 Einheiten).\n- Figur B ist ein Trapez mit Fläche 2800 Einheiten (-150 Einheiten).\n- Figur C ist ein L-Polygon mit Fläche 3200 Einheiten (+250 Einheiten).\n- Figur D ist ein Sechseck mit Fläche 3000 Einheiten (+50 Einheiten).\n\nDa keine der Optionen A–D mit der mathematisch exakten Gesamtfläche von 2950 Einheiten übereinstimmt, lautet die korrekte Antwort E.",
    "metadata": {
      "pieceCount": 6,
      "shapeFamily": "Ausschluss-Heuristik",
      "requiresRotation": true,
      "isEAnswer": true
    }
  },
  {
    "id": "fz-sim6-q15",
    "simulationId": "fz-sim6",
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
            25,
            45
          ],
          [
            45,
            45
          ],
          [
            45,
            75
          ]
        ],
        "area": 300
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
            65
          ],
          [
            125,
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
            240,
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
            280,
            45
          ],
          [
            280,
            85
          ],
          [
            250,
            85
          ],
          [
            250,
            45
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
        "rotationDeg": 180,
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
          0,
          30
        ],
        "isReflection": false
      },
      {
        "pieceId": "p5",
        "rotationDeg": 0,
        "translation": [
          20,
          30
        ],
        "isReflection": false
      },
      {
        "pieceId": "p6",
        "rotationDeg": 180,
        "translation": [
          80,
          60
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: Die 6 Teilstücke gliedern sich in zwei symmetrische Hälften:\n1. Untere Hälfte (y = 0 bis 30): Teilstück p2 (Rechteck 40 × 30, Fläche 1200) mit den Flankendreiecken p1 (20 × 30, Fläche 300) und p3 (20 × 30, Fläche 300) bildet ein sich nach oben erweiterndes Trapez mit Basen 40 unten und 80 auf Mittelebene y = 30.\n2. Obere Hälfte (y = 30 bis 60): Teilstück p5 (Rechteck 40 × 30, Fläche 1200) mit den Dreiecken p4 (Fläche 300) und p6 (Fläche 300) verjüngt sich symmetrisch wieder von Breite 80 auf Breite 40 bei y = 60.\nDas Resultat ist ein vollkommen spiegelsymmetrisches Sechseck mit einer Gesamtfläche von 2 × 1800 = 3600 Einheiten. Dies entspricht exakt Figur B.\n\nAusschluss: Figur A ist ein einfaches Quadrat ohne Schrägen. Figur C ist ein einzelnes Trapez mit Fläche 3000. Figur D ist ein asymmetrisches Sechseck mit abweichender Fläche (3300).",
    "metadata": {
      "pieceCount": 6,
      "shapeFamily": "Großes Symmetrisches Hexagon",
      "requiresRotation": true,
      "isEAnswer": false
    }
  }
];
