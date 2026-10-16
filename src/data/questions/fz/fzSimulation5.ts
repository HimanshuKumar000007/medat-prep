import type { FzQuestionData } from "./types";

export const FZ_SIMULATION_5_QUESTIONS: FzQuestionData[] = [
  {
    "id": "fz-sim5-q01",
    "simulationId": "fz-sim5",
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
            40
          ],
          [
            0,
            40
          ]
        ],
        "canvasPoints": [
          [
            45,
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
            45,
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
            20
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
            140,
            60
          ],
          [
            120,
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
            20,
            20
          ],
          [
            0,
            40
          ]
        ],
        "canvasPoints": [
          [
            260,
            60
          ],
          [
            240,
            40
          ],
          [
            260,
            20
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
          60,
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
          20,
          40
        ],
        [
          0,
          20
        ]
      ],
      "viewBox": "-10 -10 100 60",
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
            60,
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
        "rotationDeg": 180,
        "translation": [
          20,
          40
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
    "explanation": "Geometrische Analyse: Teilstück 1 ist ein zentrales Quadrat von 40 × 40 (Fläche 1600). Die Teilstücke 2 und 3 sind zwei kongruente gleichschenklige Dreiecke mit Basis 40 und Höhe 20 (Fläche je 400). Werden die Dreiecke an die linke und rechte Kante des Quadrats angefügt, entsteht ein spiegelsymmetrisches Sechseck mit einer Gesamtfläche von 1600 + 400 + 400 = 2400 Einheiten. Dies entspricht exakt Figur A.\n\nAusschluss: Figur B ist ein Parallelogramm. Figur C ist ein unsymmetrisches Trapez. Figur D ist eine Raute mit abweichenden Spitzenwinkeln.",
    "metadata": {
      "pieceCount": 3,
      "shapeFamily": "Symmetrisches Sechseck",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim5-q02",
    "simulationId": "fz-sim5",
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
            160,
            45
          ],
          [
            160,
            85
          ],
          [
            130,
            85
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
            260,
            45
          ],
          [
            280,
            45
          ],
          [
            280,
            75
          ],
          [
            260,
            75
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
          70
        ],
        [
          40,
          70
        ],
        [
          0,
          40
        ]
      ],
      "viewBox": "-10 -10 80 90",
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
            50,
            60
          ],
          [
            10,
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
            70
          ],
          [
            40,
            70
          ],
          [
            0,
            40
          ]
        ],
        "viewBox": "-10 -10 80 90"
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
            30,
            70
          ],
          [
            0,
            50
          ]
        ],
        "viewBox": "-10 -10 80 90"
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
          40,
          40
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: Teilstück 1 bildet die rechteckige Basis von 60 × 40 (Fläche 2400). Auf der Oberseite bei y = 40 wird Teilstück 2 (rechtwinkliges Dreieck mit Katheten 40 und 30, Fläche 600) links von x = 0 bis 40 aufgesetzt, wodurch die schräge Dachkante von (0, 40) nach (40, 70) entsteht. Teilstück 3 (Rechteck 20 × 30, Fläche 600) schließt rechts von x = 40 bis 60 bündig an. Gesamtfläche: 2400 + 600 + 600 = 3600 Einheiten. Dies entspricht exakt Figur C.\n\nAusschluss: Figur A ist ein einfaches Quadrat ohne Schräge. Figur B ist ein symmetrisches Trapez. Figur D ist ein symmetrisches Haus-Pentagon mit mittiger Dachspitze statt einseitigem Pultdach.",
    "metadata": {
      "pieceCount": 3,
      "shapeFamily": "Pultdach-Fünfeck",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim5-q03",
    "simulationId": "fz-sim5",
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
            170,
            40
          ],
          [
            170,
            70
          ],
          [
            140,
            70
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
            270,
            70
          ],
          [
            240,
            70
          ],
          [
            270,
            40
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
      "viewBox": "-10 -10 80 90",
      "area": 3300
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
            55
          ],
          [
            0,
            55
          ]
        ],
        "viewBox": "-10 -10 80 75"
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
            70
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
        "viewBox": "-10 -10 80 90"
      },
      "D": {
        "key": "D",
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
          30,
          40
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: Teilstück 1 ist der rechteckige Rumpf von 60 × 40 (Fläche 2400). Die Teilstücke 2 und 3 sind zwei zueinander spiegelsymmetrische rechtwinklige Dreiecke mit Katheten 30 und 30 (Fläche je 450). Werden sie mit den 30er-Kathete aufeinander gesetzt, treffen sich die Hypotenusen im gemeinsamen Dachfirst bei (30, 70). Es entsteht ein klassisches Haus-Fünfeck mit Gesamtfläche 2400 + 450 + 450 = 3300 Einheiten. Dies entspricht exakt Figur B.\n\nAusschluss: Figur A ist ein einfaches Rechteck ohne Dachspitze. Figur C besitzt eine einseitig versetzte Pultdach-Kante. Figur D ist ein Trapez.",
    "metadata": {
      "pieceCount": 3,
      "shapeFamily": "Haus-Fünfeck",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim5-q04",
    "simulationId": "fz-sim5",
    "questionNumber": 4,
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
            110,
            40
          ],
          [
            130,
            40
          ],
          [
            130,
            80
          ],
          [
            110,
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
            190,
            40
          ],
          [
            190,
            60
          ],
          [
            150,
            60
          ],
          [
            150,
            40
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
            0,
            40
          ]
        ],
        "canvasPoints": [
          [
            300,
            80
          ],
          [
            280,
            80
          ],
          [
            300,
            40
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
          80,
          40
        ],
        [
          20,
          40
        ]
      ],
      "viewBox": "-10 -10 100 60",
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
    "explanation": "Geometrische Analyse: Die zwei Rechtecke (p2 und p3) bilden zusammen einen zentralen rechteckigen Block von 40 × 40 (Fläche 1600). Links wird das rechtwinklige Dreieck p1 mit Katheten 20 und 40 angefügt, rechts das kongruente rechtwinklige Dreieck p4 in gleicher Neigungsrichtung. Dadurch entsteht ein Parallelogramm mit Grundseite 60, Höhe 40 und Kantenversatz 20. Gesamtfläche: 400 + 800 + 800 + 400 = 2400 Einheiten. Dies entspricht exakt Figur D.\n\nAusschluss: Figur A ist ein einfaches Rechteck ohne Schrägung. Figur B und C sind Trapeze, bei denen die Flankenneigungen gegensinnig verlaufen.",
    "metadata": {
      "pieceCount": 4,
      "shapeFamily": "Parallelogramm",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim5-q05",
    "simulationId": "fz-sim5",
    "questionNumber": 5,
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
            50,
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
            85,
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
            75
          ],
          [
            130,
            45
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
            240,
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
            240,
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
            310,
            65
          ],
          [
            330,
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
            35
          ],
          [
            10,
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
            15,
            0
          ],
          [
            65,
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
      "E": {
        "key": "E",
        "polygon": null,
        "viewBox": "0 0 100 100",
        "isNone": true
      }
    },
    "assembly": [],
    "explanation": "Geometrische Analyse: Die Gesamtfläche der 4 Teilstücke beträgt 1350 + 450 + 800 + 200 = 2800 Flächeneinheiten.\n\nAusschlussverfahren:\n- Figur A ist ein rechtwinkliges Rechteck von 70 × 40 (Fläche 2800). Allerdings besitzt Teilstück 1 eine schräge Kante von (50, 0) nach (40, 30) mit Steigung dx = 10, dy = 30 (Winkel ~71,6°). Weder Teilstück 2 (Winkel 45°) noch Teilstück 4 (Winkel 45°) können diese Kante zu einer geraden 90°-Außenkante ergänzen.\n- Figur B besitzt eine abweichende Fläche von 2450 Einheiten.\n- Figur C besitzt eine abweichende Fläche von 3000 Einheiten.\n- Figur D besitzt eine abweichende Fläche von 2600 Einheiten.\n\nDa keine der Figuren A–D exakt und ohne Überlappung bildbar ist, lautet die korrekte Antwort E.",
    "metadata": {
      "pieceCount": 4,
      "shapeFamily": "Ausschluss-Heuristik",
      "requiresRotation": true,
      "isEAnswer": true
    }
  },
  {
    "id": "fz-sim5-q06",
    "simulationId": "fz-sim5",
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
            75
          ],
          [
            170,
            75
          ],
          [
            170,
            45
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
            50
          ],
          [
            320,
            50
          ],
          [
            320,
            70
          ],
          [
            290,
            70
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
            0,
            60
          ],
          [
            0,
            40
          ],
          [
            30,
            40
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
          30
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
        "pieceId": "p4",
        "rotationDeg": 0,
        "translation": [
          60,
          0
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: Die Teilstücke p2 (Quadrat 30 × 30) und p3 (Quadrat 30 × 30) bilden zusammen die linke Säule von 30 × 60 (Fläche 1800). Teilstück p1 (Rechteck 30 × 40, Fläche 1200) bildet die mittlere Stufe von x = 30 bis 60 mit Höhe 40. Teilstück p4 (Rechteck 30 × 20, Fläche 600) bildet die rechte Stufe von x = 60 bis 90 mit Höhe 20. Es entsteht eine dreistufige Treppe mit Breiten je 30 und Höhen 60, 40, 20. Gesamtfläche: 900 + 900 + 1200 + 600 = 3600 Einheiten. Dies entspricht exakt Figur A.\n\nAusschluss: Figur B ist ein massives Quadrat ohne Stufen. Figur C ist ein glattes Rechteck. Figur D ist ein symmetrisches T-Polygon.",
    "metadata": {
      "pieceCount": 4,
      "shapeFamily": "Treppenförmiges Sechseck",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim5-q07",
    "simulationId": "fz-sim5",
    "questionNumber": 7,
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
            30,
            35
          ],
          [
            110,
            35
          ],
          [
            90,
            55
          ],
          [
            50,
            55
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
            160,
            75
          ],
          [
            80,
            75
          ],
          [
            100,
            55
          ],
          [
            140,
            55
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
            80,
            0
          ],
          [
            80,
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
            35
          ],
          [
            270,
            35
          ],
          [
            270,
            55
          ],
          [
            190,
            55
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
            80,
            20
          ],
          [
            0,
            20
          ]
        ],
        "canvasPoints": [
          [
            310,
            35
          ],
          [
            310,
            115
          ],
          [
            290,
            115
          ],
          [
            290,
            35
          ]
        ],
        "area": 1600
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
            70
          ],
          [
            0,
            70
          ]
        ],
        "viewBox": "-10 -10 100 90"
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
            70,
            80
          ],
          [
            10,
            80
          ]
        ],
        "viewBox": "-10 -10 100 100"
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
          0,
          40
        ],
        "isReflection": false
      },
      {
        "pieceId": "p2",
        "rotationDeg": 0,
        "translation": [
          0,
          60
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: Die beiden Rechtecke p3 und p4 (je 80 × 20, Fläche je 1600) bilden den zentralen 80 × 40 Rumpf von y = 20 bis 60. An die Unterseite bei y = 20 wird das Trapez p1 (um 180° rotiert) angefügt, wodurch die untere Verjüngung auf Breite 40 entsteht. An die Oberseite bei y = 60 wird das Trapez p2 aufgesetzt, wodurch die obere Verjüngung auf Breite 40 entsteht. Es entsteht ein symmetrisches Achteck mit Gesamtfläche 1200 + 1200 + 1600 + 1600 = 5600 Einheiten. Dies entspricht exakt Figur D.\n\nAusschluss: Figur A ist ein einfaches Rechteck ohne Eckabschrägungen. Figur B ist ein Trapez. Figur C ist ein Sechseck mit nur 6 Kanten und abweichender Fläche.",
    "metadata": {
      "pieceCount": 4,
      "shapeFamily": "Abgeschrägtes Achteck",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim5-q08",
    "simulationId": "fz-sim5",
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
            80,
            45
          ],
          [
            80,
            70
          ],
          [
            30,
            70
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
            115,
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
            115,
            70
          ]
        ],
        "area": 750
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
          ],
          [
            165,
            45
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
            20
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
            310,
            45
          ],
          [
            310,
            65
          ],
          [
            280,
            65
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
          50
        ],
        [
          80,
          50
        ],
        [
          80,
          75
        ],
        [
          0,
          75
        ],
        [
          0,
          50
        ],
        [
          25,
          50
        ]
      ],
      "viewBox": "-10 -10 100 95",
      "area": 3500
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
            55,
            25
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
            25
          ],
          [
            0,
            25
          ]
        ],
        "viewBox": "-10 -10 100 95"
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
            50
          ],
          [
            80,
            50
          ],
          [
            80,
            75
          ],
          [
            0,
            75
          ],
          [
            0,
            50
          ],
          [
            25,
            50
          ]
        ],
        "viewBox": "-10 -10 100 95"
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
            35
          ],
          [
            40,
            35
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
        "pieceId": "p4",
        "rotationDeg": 0,
        "translation": [
          25,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p3",
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
          0,
          50
        ],
        "isReflection": false
      },
      {
        "pieceId": "p1",
        "rotationDeg": 0,
        "translation": [
          30,
          50
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: Teilstück p4 (30 × 20) und Teilstück p3 (30 × 30) bilden zusammen den vertikalen Schaft von 30 × 50 (Breite 30 von x = 25 bis 55, Höhe 50). Oben darauf werden Teilstück p2 (30 × 25) und Teilstück p1 (50 × 25) nebeneinander zu einem durchgehenden Querbalken von 80 × 25 montiert. Es entsteht ein T-förmiges Orthogonalpolygon mit Gesamtfläche 1250 + 750 + 900 + 600 = 3500 Einheiten. Dies entspricht exakt Figur C.\n\nAusschluss: Figur A ist ein einfaches Rechteck. Figur B ist kopfüber orientiert mit abweichenden Kantenproportionen. Figur D ist ein L-Polygon.",
    "metadata": {
      "pieceCount": 4,
      "shapeFamily": "T-förmiges Orthogonalpolygon",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim5-q09",
    "simulationId": "fz-sim5",
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
            15,
            0
          ],
          [
            15,
            40
          ]
        ],
        "canvasPoints": [
          [
            35,
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
            110,
            40
          ],
          [
            110,
            55
          ],
          [
            70,
            40
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
            190,
            40
          ],
          [
            220,
            40
          ],
          [
            220,
            80
          ],
          [
            190,
            80
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
            290,
            40
          ],
          [
            290,
            70
          ],
          [
            250,
            70
          ],
          [
            250,
            40
          ]
        ],
        "area": 1200
      }
    ],
    "targetFigure": {
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
            15,
            0
          ],
          [
            75,
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
            60,
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
          15,
          40
        ],
        "isReflection": false
      },
      {
        "pieceId": "p3",
        "rotationDeg": 0,
        "translation": [
          15,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p4",
        "rotationDeg": 0,
        "translation": [
          45,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p2",
        "rotationDeg": 0,
        "translation": [
          75,
          0
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: Die beiden Rechtecke p3 und p4 (je 30 × 40, Fläche je 1200) bilden den zentralen 60 × 40 Block von x = 15 bis 75. Links wird das rechtwinklige Dreieck p1 (Katheten 15 und 40, um 180° gedreht) angefügt, wodurch die linke Flanke von (15, 0) nach (0, 40) entsteht. Rechts wird das kongruente Dreieck p2 angefügt, wodurch die rechte Flanke von (75, 0) nach (90, 40) entsteht. Das resultierende symmetrische Trapez besitzt die Grundlinie 60 unten, 90 oben und Höhe 40. Gesamtfläche: 300 + 1200 + 1200 + 300 = 3000 Einheiten. Dies entspricht exakt Figur B.\n\nAusschluss: Figur A ist ein einfaches Rechteck ohne Schrägen. Figur C ist ein Parallelogramm mit abweichender Fläche (2400). Figur D ist um 180° gekippt mit schmaler Oberseite.",
    "metadata": {
      "pieceCount": 4,
      "shapeFamily": "Gleichschenkliges Trapez",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim5-q10",
    "simulationId": "fz-sim5",
    "questionNumber": 10,
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
            100,
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
            100,
            75
          ]
        ],
        "area": 750
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
            175,
            45
          ],
          [
            175,
            70
          ],
          [
            145,
            70
          ],
          [
            145,
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
            245,
            45
          ],
          [
            265,
            45
          ],
          [
            265,
            75
          ],
          [
            245,
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
            30
          ],
          [
            0,
            30
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
            290,
            65
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
            55
          ],
          [
            55,
            55
          ],
          [
            55,
            80
          ],
          [
            25,
            80
          ],
          [
            25,
            55
          ],
          [
            0,
            55
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
    "explanation": "Geometrische Analyse: Teilstück p1 ist ein zentrales Quadrat von 30 × 30 (Fläche 900). Die Teilstücke p2 und p3 sind zwei Rechtecke von 25 × 30 (Länge 25). Die Teilstücke p4 und p5 sind zwei Rechtecke von 20 × 30 (Länge 20).\n\nAusschlussverfahren:\n- Figur A zeigt ein vollkommen spiegelsymmetrisches griechisches Kreuz, dessen vier auskragende Arme alle eine identische Länge von 25 Einheiten besitzen. Dies würde vier kongruente Rechtecke von 25 × 30 erfordern. Vorhanden sind jedoch zwei Arme mit Länge 25 und zwei Arme mit Länge 20, was zwingend ein asymmetrisches Kreuz mit zwei kürzeren Flügeln erzeugt.\n- Figur B ist ein massives Quadrat 60 × 60 ohne Kreuzarme.\n- Figur C ist ein einfaches Rechteck von 90 × 40.\n- Figur D hat eine abweichende Gesamtfläche von 3500 Einheiten.\n\nDa keine der Figuren A–D exakt aus den Teilen gebildet werden kann, ist Option E korrekt.",
    "metadata": {
      "pieceCount": 5,
      "shapeFamily": "Ausschluss-Heuristik",
      "requiresRotation": true,
      "isEAnswer": true
    }
  },
  {
    "id": "fz-sim5-q11",
    "simulationId": "fz-sim5",
    "questionNumber": 11,
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
            120,
            45
          ],
          [
            120,
            75
          ],
          [
            95,
            75
          ]
        ],
        "area": 750
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
            50
          ],
          [
            0,
            50
          ]
        ],
        "canvasPoints": [
          [
            160,
            40
          ],
          [
            160,
            65
          ],
          [
            110,
            65
          ],
          [
            110,
            40
          ]
        ],
        "area": 1250
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
            265,
            45
          ],
          [
            265,
            75
          ],
          [
            240,
            75
          ]
        ],
        "area": 750
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
            305,
            45
          ],
          [
            335,
            45
          ],
          [
            335,
            75
          ],
          [
            305,
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
          25,
          0
        ],
        [
          25,
          25
        ],
        [
          55,
          25
        ],
        [
          55,
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
          55,
          80
        ],
        [
          55,
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
      "B": {
        "key": "B",
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
            30
          ],
          [
            80,
            30
          ],
          [
            80,
            55
          ],
          [
            0,
            55
          ],
          [
            0,
            30
          ],
          [
            25,
            30
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
            25,
            0
          ],
          [
            25,
            25
          ],
          [
            55,
            25
          ],
          [
            55,
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
            55,
            80
          ],
          [
            55,
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
            30
          ],
          [
            55,
            30
          ],
          [
            55,
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
          0,
          50
        ],
        "isReflection": false
      },
      {
        "pieceId": "p5",
        "rotationDeg": 0,
        "translation": [
          25,
          25
        ],
        "isReflection": false
      },
      {
        "pieceId": "p3",
        "rotationDeg": 0,
        "translation": [
          55,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p4",
        "rotationDeg": 0,
        "translation": [
          55,
          50
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: Teilstück p1 (25 × 50) und p2 (25 × 30) bilden zusammen die linke vertikale Säule von 25 × 80 (Fläche 2000). Ebenso bilden p3 (25 × 50) und p4 (25 × 30) die rechte vertikale Säule von 25 × 80 (Fläche 2000). Teilstück p5 ist ein Quadrat von 30 × 30 (Fläche 900), das mittig zwischen y = 25 und y = 55 als Quersteg eingesetzt wird. Das Resultat ist ein symmetrisches H-Polygon mit Gesamtfläche 2000 + 900 + 2000 = 4900 Einheiten. Dies entspricht exakt Figur C.\n\nAusschluss: Figur A ist ein einfaches Quadrat ohne Einbuchtungen. Figur B ist ein T-förmiges Polygon. Figur D ist ein einseitig offenes U-Polygon.",
    "metadata": {
      "pieceCount": 5,
      "shapeFamily": "Symmetrisches H-Polygon",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim5-q12",
    "simulationId": "fz-sim5",
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
            105,
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
            105,
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
            20,
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
            45
          ],
          [
            325,
            65
          ],
          [
            305,
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
          100,
          0
        ],
        [
          80,
          20
        ],
        [
          70,
          20
        ],
        [
          70,
          40
        ],
        [
          30,
          40
        ],
        [
          30,
          20
        ],
        [
          20,
          20
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
            100,
            0
          ],
          [
            80,
            20
          ],
          [
            70,
            20
          ],
          [
            70,
            40
          ],
          [
            30,
            40
          ],
          [
            30,
            20
          ],
          [
            20,
            20
          ]
        ],
        "viewBox": "-10 -10 120 60"
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
            70,
            40
          ],
          [
            30,
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
            0,
            30
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
          50,
          0
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
        "pieceId": "p1",
        "rotationDeg": 0,
        "translation": [
          30,
          20
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: In der unteren Ebene (y = 0 bis 20) formen p4 (Dreieck 20 × 20), p2 (Rechteck 30 × 20), p3 (Rechteck 30 × 20) und p5 (Dreieck 20 × 20) ein Trapezoid mit Basislänge 100 unten und 60 oben (von x = 20 bis 80). In der oberen Ebene (y = 20 bis 40) sitzt zentriert Teilstück p1 (Rechteck 40 × 20 von x = 30 bis 70). Dadurch bleiben links und rechts jeweils 10 Einheiten Schulterbreite als horizontale Stufen frei. Gesamtfläche: 200 + 600 + 600 + 200 + 800 = 2400 Einheiten. Dies entspricht exakt Figur A.\n\nAusschluss: Figur B ist ein glattes Trapez ohne Schulterstufen. Figur C ist ein einfaches Rechteck. Figur D ist ein umgekehrtes Trapez.",
    "metadata": {
      "pieceCount": 5,
      "shapeFamily": "Gestufter Trapezkörper",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim5-q13",
    "simulationId": "fz-sim5",
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
            100,
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
            100,
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
            170,
            45
          ],
          [
            170,
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
            245,
            45
          ],
          [
            265,
            45
          ],
          [
            265,
            75
          ],
          [
            245,
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
            335,
            75
          ],
          [
            305,
            75
          ],
          [
            335,
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
      "viewBox": "-10 -10 100 80",
      "area": 3450
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
            43
          ],
          [
            0,
            43
          ]
        ],
        "viewBox": "-10 -10 100 63"
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
            60
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
          50,
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
          30
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: Die Teilstücke p1 (30 × 30), p2 (20 × 30) und p3 (30 × 30) bilden zusammen das Basisrechteck von 80 × 30 (Fläche 2400). Auf der oberen Kante bei y = 30 wird Teilstück p4 (Rechteck 20 × 30, Fläche 600) von x = 30 bis 50 aufgesetzt. Direkt rechts daneben wird Teilstück p5 (Dreieck mit Katheten 30 und 30, Fläche 450) von x = 50 bis 80 angefügt, dessen Hypotenuse die Schräge von (80, 30) nach (50, 60) bildet. Es entsteht ein asymmetrisches Heptagon mit Gesamtfläche 2400 + 600 + 450 = 3450 Einheiten. Dies entspricht exakt Figur D.\n\nAusschluss: Figur A ist ein einfaches Rechteck ohne Turmaufbau. Figur B ist ein symmetrisches Trapez. Figur C ist ein L-Polygon ohne schräge Kante.",
    "metadata": {
      "pieceCount": 5,
      "shapeFamily": "Asymmetrisches Kronen-Heptagon",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim5-q14",
    "simulationId": "fz-sim5",
    "questionNumber": 14,
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
            25,
            0
          ],
          [
            25,
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
            0,
            50
          ]
        ],
        "canvasPoints": [
          [
            105,
            35
          ],
          [
            105,
            60
          ],
          [
            55,
            35
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
            35,
            0
          ],
          [
            35,
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
            180,
            65
          ]
        ],
        "area": 700
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
            35,
            15
          ],
          [
            0,
            15
          ]
        ],
        "canvasPoints": [
          [
            255,
            45
          ],
          [
            290,
            45
          ],
          [
            290,
            60
          ],
          [
            255,
            60
          ]
        ],
        "area": 525
      },
      {
        "id": "p5",
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
            15
          ],
          [
            0,
            15
          ]
        ],
        "canvasPoints": [
          [
            330,
            45
          ],
          [
            330,
            80
          ],
          [
            315,
            80
          ],
          [
            315,
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
          60,
          0
        ],
        [
          85,
          50
        ],
        [
          25,
          50
        ]
      ],
      "viewBox": "-10 -10 105 70",
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
            85,
            50
          ],
          [
            25,
            50
          ]
        ],
        "viewBox": "-10 -10 105 70"
      },
      "C": {
        "key": "C",
        "polygon": [
          [
            12,
            0
          ],
          [
            72,
            0
          ],
          [
            85,
            50
          ],
          [
            0,
            50
          ]
        ],
        "viewBox": "-10 -10 105 70"
      },
      "D": {
        "key": "D",
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
            60,
            50
          ],
          [
            25,
            50
          ]
        ],
        "viewBox": "-10 -10 105 70"
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
        "pieceId": "p5",
        "rotationDeg": 0,
        "translation": [
          25,
          35
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
      }
    ],
    "explanation": "Geometrische Analyse: Die drei Rechtecke p3 (35 × 20), p4 (35 × 15) und p5 (35 × 15) stapeln sich vertikal zu einem zentralen Block von 35 × 50 (Fläche 1750, zwischen x = 25 und x = 60). Links schließt Teilstück p1 (rechtwinkliges Dreieck mit Katheten 25 und 50, Fläche 625) an, wodurch die linke Flanke von (0, 0) nach (25, 50) entsteht. Rechts schließt Teilstück p2 (Dreieck 25 × 50, Fläche 625) an, wodurch die rechte Flanke von (60, 0) nach (85, 50) entsteht. Beide Flanken verlaufen exakt parallel. Es entsteht ein schlankes Parallelogramm mit Grundlinie 60 und Höhe 50. Gesamtfläche: 625 + 1750 + 625 = 3000 Einheiten. Dies entspricht exakt Figur B.\n\nAusschluss: Figur A ist ein einfaches Rechteck ohne Schrägung. Figur C und D sind Trapeze mit gegensinnig verlaufenden Flankenneigungen.",
    "metadata": {
      "pieceCount": 5,
      "shapeFamily": "Gestrecktes Parallelogramm",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim5-q15",
    "simulationId": "fz-sim5",
    "questionNumber": 15,
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
            55
          ],
          [
            0,
            55
          ]
        ],
        "viewBox": "-10 -10 80 75"
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
            45
          ],
          [
            0,
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
        "viewBox": "-10 -10 100 80"
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
            80,
            50
          ],
          [
            60,
            75
          ],
          [
            20,
            75
          ],
          [
            0,
            50
          ],
          [
            0,
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
    "assembly": [],
    "explanation": "Geometrische Analyse: Die Gesamtfläche der 6 Teilstücke beträgt 800 + 900 + 600 + 600 + 200 + 200 = 3300 Flächeneinheiten.\n\nAusschlussverfahren:\n- Figur A ist ein einfaches Rechteck von 60 × 55 (Fläche 3300). Die Teilstücke p5 und p6 sind zwei rechtwinklige Dreiecke mit Katheten 20 und 20 (Hypotenuse ~28,28). Da kein anderes Teil eine Hypotenuse oder Schrägkante dieser Dimension besitzt und kein Rechteck mit 20er-Kante zum lückenlosen Ausgleich passt, verbleibt an der Außenkante zwingend eine 45°-Schräge. Ein vollkommen rechtwinkliges Rechteck kann daher geometrisch unmöglich zusammengesetzt werden.\n- Figur B besitzt eine abweichende Fläche von 3150 Einheiten.\n- Figur C besitzt eine abweichende Fläche von 3550 Einheiten.\n- Figur D ist ein Achteck mit abweichender Fläche von 3800 Einheiten.\n\nDa keine der Figuren A–D exakt gebildet werden kann, ist Option E die einzig korrekte Antwort.",
    "metadata": {
      "pieceCount": 6,
      "shapeFamily": "Ausschluss-Heuristik",
      "requiresRotation": true,
      "isEAnswer": true
    }
  }
];
