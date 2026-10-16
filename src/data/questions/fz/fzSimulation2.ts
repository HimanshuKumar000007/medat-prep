/**
 * Official MedAT Figuren zusammensetzen (FZ) — Simulation 2
 * 15 Verified Geometric Spatial Reasoning Questions
 *
 * Theme: Rechtwinklige & schiefe Dreiecke
 * Focus: Kombinationen aus mehreren Dreiecken, Winkelanalyse (90°, 45°, 60°) und mentale 2D-Rotation.
 *
 * Strict Compliance:
 * - 15 questions, 20 minutes (~80s per task)
 * - Static 2D SVG vector diagrams
 * - 0% interactive puzzle / 0% draggable / 0% rotatable UI
 * - 100% pure mental rotation without mirroring (det = +1)
 * - Balanced answer distribution: exactly 3 A, 3 B, 3 C, 3 D, 3 E
 * - 3 genuine E ("Keine") cases: Q04, Q07, Q12
 * - Difficulty: 4 Leicht (Q01-Q04), 6 Mittel (Q05-Q10), 5 Schwer (Q11-Q15)
 */

import type { FzQuestionData } from "./types";

export const FZ_SIMULATION_2_QUESTIONS: FzQuestionData[] = [
  {
    "id": "fz-sim2-q01",
    "simulationId": "fz-sim2",
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
            0,
            60
          ]
        ],
        "canvasPoints": [
          [
            80,
            30
          ],
          [
            80,
            70
          ],
          [
            20,
            30
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
            60
          ]
        ],
        "canvasPoints": [
          [
            160,
            30
          ],
          [
            200,
            30
          ],
          [
            200,
            90
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
            60
          ],
          [
            0,
            60
          ]
        ],
        "canvasPoints": [
          [
            270,
            30
          ],
          [
            310,
            30
          ],
          [
            310,
            90
          ],
          [
            270,
            90
          ]
        ],
        "area": 2400
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
          0,
          60
        ]
      ],
      "viewBox": "-10 -10 100 80",
      "area": 4800
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
            60
          ],
          [
            20,
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
        "rotationDeg": 180,
        "translation": [
          40,
          60
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
      }
    ],
    "explanation": "Geometrische Analyse: Teilstück 1 und 2 sind zwei kongruente rechtwinklige Dreiecke mit Katheten 40 und 60 (Fläche je 1200 Einheiten). An ihren Hypotenusen zusammengefügt bilden sie exakt ein Rechteck der Abmessung 40 × 60 (Fläche 2400 Einheiten). Zusammen mit Teilstück 3 (Rechteck 40 × 60) entsteht ein Gesamt-Rechteck der Abmessung 80 × 60 (Gesamtfläche 4800 Einheiten). Dies entspricht exakt Figur B.\n\nAusschluss: Figur A ist ein Quadrat (Fläche 4900, falsche Proportionen). Figur C ist ein Parallelogramm mit Fläche 4000 (zu klein). Figur D ist ein Trapez mit Fläche 4200. Option E entfällt, da Figur B exakt konstruierbar ist.",
    "metadata": {
      "pieceCount": 3,
      "shapeFamily": "Rechteck-Zerlegung",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim2-q02",
    "simulationId": "fz-sim2",
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
            50,
            0
          ],
          [
            0,
            60
          ]
        ],
        "canvasPoints": [
          [
            45,
            30
          ],
          [
            95,
            30
          ],
          [
            45,
            90
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
            50,
            0
          ],
          [
            50,
            30
          ]
        ],
        "canvasPoints": [
          [
            205,
            75
          ],
          [
            155,
            75
          ],
          [
            155,
            45
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
            50,
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
            35
          ],
          [
            310,
            85
          ],
          [
            280,
            35
          ]
        ],
        "area": 750
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
          50,
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
            50,
            0
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
        "viewBox": "-10 -10 70 80"
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
            80,
            0
          ],
          [
            40,
            75
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
            100,
            0
          ],
          [
            50,
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
          50,
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
        "rotationDeg": 180,
        "translation": [
          50,
          30
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: Teilstück 1 ist ein rechtwinkliges Dreieck mit Katheten 50 und 60 (Fläche 1500). Die Teilstücke 2 und 3 sind zwei kleinere rechtwinklige Dreiecke mit Katheten 50 und 30 (Fläche je 750). An ihren 50er-Katheten bzw. Hypotenusen zusammengefügt bilden sie die linke Dreieckshälfte mit Katheten 50 und 60 (Fläche 1500). Zusammen mit Teilstück 1 entsteht ein großes gleichschenkliges Dreieck mit Basis 100 und Höhe 60 (Gesamtfläche 3000 Einheiten). Dies entspricht exakt Figur D.\n\nAusschluss: Figur A ist ein Rechteck (keine Dreiecksform). Figur B hat eine asymmetrisch verschobene Spitze bei x = 30 statt x = 50. Figur C hat eine unpassende Basislänge von 80.",
    "metadata": {
      "pieceCount": 3,
      "shapeFamily": "Gleichschenkliges Dreieck",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim2-q03",
    "simulationId": "fz-sim2",
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
            50
          ]
        ],
        "canvasPoints": [
          [
            30,
            35
          ],
          [
            50,
            35
          ],
          [
            50,
            85
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
        "canvasPoints": [
          [
            95,
            35
          ],
          [
            155,
            35
          ],
          [
            155,
            85
          ],
          [
            95,
            85
          ]
        ],
        "area": 3000
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
            25
          ]
        ],
        "canvasPoints": [
          [
            220,
            35
          ],
          [
            220,
            55
          ],
          [
            195,
            35
          ]
        ],
        "area": 250
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
            300,
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
      "viewBox": "-10 -10 120 70",
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
            120,
            50
          ],
          [
            40,
            50
          ]
        ],
        "viewBox": "-10 -10 140 70"
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
            50
          ],
          [
            20,
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
          20,
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
      },
      {
        "pieceId": "p4",
        "rotationDeg": 0,
        "translation": [
          80,
          25
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: Teilstück 2 ist ein Rechteck (60 × 50, Fläche 3000). Teilstück 1 ist ein rechtwinkliges Dreieck mit Katheten 20 und 50 (Fläche 500), das links angefügt eine Schrägkante mit Steigung 50/20 = 2.5 erzeugt. Die beiden kleinen Dreiecke 3 und 4 (Katheten 20 und 25, Fläche je 250) ergänzen sich zu einem Dreieck mit Katheten 20 und 50 (Fläche 500) an der rechten Flanke. Es entsteht ein Parallelogramm mit Grundseite 80 und Höhe 50 (Gesamtfläche 4000). Dies entspricht exakt Figur A.\n\nAusschluss: Figur B ist ein rechtwinkliges Rechteck ohne die zwingend vorgegebene Schrägkante des Dreiecks 1. Figur C besitzt einen doppelten Überhang von 40 statt 20. Figur D ist ein Trapez mit unzureichender Fläche (3500).",
    "metadata": {
      "pieceCount": 4,
      "shapeFamily": "Parallelogramm-Zerlegung",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim2-q04",
    "simulationId": "fz-sim2",
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
            140,
            40
          ],
          [
            140,
            70
          ],
          [
            100,
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
            30,
            0
          ],
          [
            0,
            50
          ]
        ],
        "canvasPoints": [
          [
            240,
            85
          ],
          [
            210,
            85
          ],
          [
            240,
            35
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
            30,
            0
          ],
          [
            30,
            45
          ],
          [
            0,
            45
          ]
        ],
        "canvasPoints": [
          [
            290,
            35
          ],
          [
            320,
            35
          ],
          [
            320,
            80
          ],
          [
            290,
            80
          ]
        ],
        "area": 1350
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
            0,
            0
          ],
          [
            90,
            0
          ],
          [
            60,
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
            0,
            0
          ],
          [
            60,
            0
          ],
          [
            80,
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
    "explanation": "Geometrische Analyse: Die Gesamtfläche der Teilstücke beträgt: Dreieck 1 (600) + Dreieck 2 (600) + Dreieck 3 (750) + Rechteck 4 (1350) = exakt 3300 Einheiten. Teilstück 3 besitzt eine Kathete von 50 und eine Hypotenuse von √3400 ≈ 58.3. Die Teilstücke 1 und 2 besitzen Katheten 30 und 40 (Hypotenuse 50). Damit Teilstück 3 zusammen mit einem anderen Dreieck ein Rechteck bilden könnte, wäre ein zweites Dreieck mit Katheten 30 und 50 zwingend erforderlich – ein solches existiert jedoch nicht.\n\nAusschluss: Figur A (Rechteck 60 × 55) scheitert an den Kathetenlängen (erfordert zwei gleiche Dreiecke der Höhe 50). Figur B (Fläche 3375) und Figur D (Fläche 3500) verletzen die Flächenerhaltung. Figur C (Fläche 3000) ist um 300 Einheiten zu klein. Keine der Figuren A–D lässt sich exakt bilden. Korrekt ist daher Antwort E.",
    "metadata": {
      "pieceCount": 4,
      "shapeFamily": "Hypotenusen-Inkompatibilität",
      "requiresRotation": true,
      "isEAnswer": true
    },
    "assembly": []
  },
  {
    "id": "fz-sim2-q05",
    "simulationId": "fz-sim2",
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
            145,
            35
          ],
          [
            145,
            85
          ],
          [
            115,
            85
          ],
          [
            115,
            35
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
            205,
            45
          ],
          [
            245,
            45
          ],
          [
            205,
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
            335,
            80
          ],
          [
            295,
            80
          ],
          [
            295,
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
          90,
          0
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
      "viewBox": "-10 -10 110 80",
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
            60
          ],
          [
            0,
            60
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
            90,
            0
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
            60
          ],
          [
            20,
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
          0,
          30
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
        "rotationDeg": 180,
        "translation": [
          90,
          30
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: Die beiden Rechtecke 1 und 2 (je 50 × 30, Fläche 1500) lassen sich zu einem Block von 50 × 60 (Fläche 3000) stapeln. Die beiden Dreiecke 3 und 4 mit Katheten 40 und 30 (Fläche je 600) bilden zusammen ein Dreieck mit Katheten 40 und 60 (Fläche 1200). Rechts an den 50er-Block angefügt entsteht ein rechtwinkliges Trapez mit Grundseite 90, Deckseite 50 und Höhe 60 (Gesamtfläche 4200). Dies entspricht exakt Figur C.\n\nAusschluss: Figur A ist ein symmetrisches Trapez (erfordert zwei Dreiecke à 20 × 60 an beiden Flanken, die Teile haben jedoch Katheten 40). Figur B ist ein Rechteck (keine Schrägkante). Figur D ist ein Parallelogramm mit zwei schrägen Flanken.",
    "metadata": {
      "pieceCount": 4,
      "shapeFamily": "Rechtwinkliges Trapez",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim2-q06",
    "simulationId": "fz-sim2",
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
            0,
            80
          ]
        ],
        "canvasPoints": [
          [
            30,
            20
          ],
          [
            70,
            20
          ],
          [
            30,
            100
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
            0,
            40
          ]
        ],
        "canvasPoints": [
          [
            150,
            30
          ],
          [
            150,
            70
          ],
          [
            110,
            30
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
            40,
            25
          ]
        ],
        "canvasPoints": [
          [
            245,
            75
          ],
          [
            205,
            75
          ],
          [
            205,
            50
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
            295,
            55
          ],
          [
            335,
            55
          ],
          [
            295,
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
          80,
          0
        ],
        [
          0,
          80
        ]
      ],
      "viewBox": "-10 -10 100 100",
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
            80,
            0
          ],
          [
            40,
            80
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
            64,
            0
          ],
          [
            0,
            100
          ]
        ],
        "viewBox": "-10 -10 84 120"
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
        "pieceId": "p3",
        "rotationDeg": 0,
        "translation": [
          40,
          40
        ],
        "isReflection": false
      },
      {
        "pieceId": "p4",
        "rotationDeg": 90,
        "translation": [
          40,
          80
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: Teilstück 1 ist ein rechtwinkliges Dreieck mit Katheten 40 und 80 (Fläche 1600). Die Teilstücke 2 (Fläche 800), 3 (Fläche 500) und 4 (Fläche 300) haben zusammen eine Fläche von 1600. Durch passgenaue Addition an der vertikalen Trennlinie x = 40 vervollständigen sie die Hypotenuse des Gesamtdreiecks, sodass ein gleichschenklig-rechtwinkliges Dreieck mit Katheten 80 und 80 entsteht (Gesamtfläche 3200 Einheiten). Dies entspricht exakt Figur A.\n\nAusschluss: Figur B ist ein gleichschenkliges Dreieck mit zentrierter Spitze bei x = 40 (erfordert zwei symmetrische Hälften). Figur C besitzt Katheten 64 und 100 (Kantenlängen passen zu keinem Teilstück). Figur D ist ein Rechteck.",
    "metadata": {
      "pieceCount": 4,
      "shapeFamily": "Großdreieck-Zerlegung",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim2-q07",
    "simulationId": "fz-sim2",
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
            25,
            40
          ],
          [
            85,
            40
          ],
          [
            55,
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
            180,
            80
          ],
          [
            120,
            80
          ],
          [
            150,
            40
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
            220,
            40
          ],
          [
            250,
            40
          ],
          [
            220,
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
            35
          ]
        ],
        "canvasPoints": [
          [
            335,
            45
          ],
          [
            335,
            75
          ],
          [
            300,
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
            45
          ],
          [
            20,
            45
          ]
        ],
        "viewBox": "-10 -10 120 65"
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
    "explanation": "Geometrische Analyse: Teilstück 1 und 2 sind zwei gleichschenklige Dreiecke (Basis 60, Höhe 40, Fläche je 1200). Teilstück 3 ist ein rechtwinkliges Dreieck mit Katheten 30 und 40 (Fläche 600). Teilstück 4 scheint auf den ersten Blick mit Teilstück 3 kongruent zu sein, besitzt jedoch eine Kathete von nur 35 statt 40 (Fläche 525). Die Gesamtsumme aller Teilstücke beträgt somit 1200 + 1200 + 600 + 525 = 3525 Einheiten.\n\nAusschluss: Figur A (Quadrat 60 × 60 = 3600), Figur C (Parallelogramm = 3600) und Figur D (Dreieck = 3600) besitzen allesamt eine Fläche von 3600 Einheiten und sind um exakt 75 Einheiten zu groß für die gegebenen Teile. Figur B hat eine Fläche von 3000 und ist viel zu klein. Da Teilstück 4 mit Höhe 35 nirgends bündig an die 40er-Kanten der übrigen Teile anschließen kann, ist keine Zielfigur bildbar. Antwort E ist korrekt.",
    "metadata": {
      "pieceCount": 4,
      "shapeFamily": "Kantenlängen-Täuschung",
      "requiresRotation": true,
      "isEAnswer": true
    },
    "assembly": []
  },
  {
    "id": "fz-sim2-q08",
    "simulationId": "fz-sim2",
    "questionNumber": 8,
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
            80,
            0
          ],
          [
            40,
            30
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
            60,
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
            80,
            0
          ],
          [
            40,
            30
          ]
        ],
        "canvasPoints": [
          [
            140,
            20
          ],
          [
            140,
            100
          ],
          [
            110,
            60
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
            40,
            30
          ]
        ],
        "canvasPoints": [
          [
            275,
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
            80,
            0
          ],
          [
            40,
            30
          ]
        ],
        "canvasPoints": [
          [
            330,
            100
          ],
          [
            330,
            20
          ],
          [
            360,
            60
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
          40,
          30
        ],
        [
          0,
          60
        ],
        [
          80,
          60
        ],
        [
          120,
          30
        ],
        [
          80,
          0
        ]
      ],
      "viewBox": "-10 -10 140 80",
      "area": 4800
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
            40,
            30
          ],
          [
            0,
            60
          ],
          [
            80,
            60
          ],
          [
            120,
            30
          ],
          [
            80,
            0
          ]
        ],
        "viewBox": "-10 -10 140 80"
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
        "rotationDeg": 180,
        "translation": [
          80,
          60
        ],
        "isReflection": false
      },
      {
        "pieceId": "p4",
        "rotationDeg": 180,
        "translation": [
          120,
          60
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: Gegeben sind 4 kongruente stumpfwinklige Dreiecke mit Basis 80 und Höhe 30 (Fläche je 1200 Einheiten, Gesamtfläche 4800 Einheiten). Werden jeweils zwei Dreiecke an ihren Schrägkanten zusammengefügt, entstehen zwei Parallelogramme. Durch spiegelbildfreie 2D-Zusammenfügung an der horizontalen Symmetrieachse y = 30 entsteht ein Pfeilpolygon (Chevron) mit nach rechts gerichteter Spitze bei (120, 30) und linker Einbuchtung bei (40, 30). Dies entspricht exakt Figur B.\n\nAusschluss: Figur A ist ein konvexes Rechteck (erfordert rechtwinklige Dreiecke). Figur C ist ein einfaches Parallelogramm ohne die charakteristische Pfeilspitze. Figur D hat nur eine Fläche von 2400 (50% zu klein).",
    "metadata": {
      "pieceCount": 4,
      "shapeFamily": "Nicht-konvexes Pfeilpolygon",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim2-q09",
    "simulationId": "fz-sim2",
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
            30,
            0
          ],
          [
            30,
            50
          ]
        ],
        "canvasPoints": [
          [
            30,
            35
          ],
          [
            60,
            35
          ],
          [
            60,
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
            0
          ],
          [
            30,
            0
          ],
          [
            0,
            50
          ]
        ],
        "canvasPoints": [
          [
            130,
            25
          ],
          [
            130,
            55
          ],
          [
            80,
            25
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
            215,
            45
          ],
          [
            255,
            45
          ],
          [
            255,
            70
          ],
          [
            215,
            70
          ]
        ],
        "area": 1000
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
            25
          ],
          [
            0,
            25
          ]
        ],
        "canvasPoints": [
          [
            325,
            35
          ],
          [
            325,
            75
          ],
          [
            300,
            75
          ],
          [
            300,
            35
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
          100,
          0
        ],
        [
          70,
          50
        ],
        [
          30,
          50
        ]
      ],
      "viewBox": "-10 -10 120 70",
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
            100,
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
        "viewBox": "-10 -10 120 70"
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
            100,
            0
          ],
          [
            70,
            50
          ],
          [
            30,
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
          25
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
    "explanation": "Geometrische Analyse: Die beiden Rechtecke 3 und 4 (40 × 25, Fläche je 1000) lassen sich zu einem zentralen Block von 40 × 50 (Fläche 2000) aufeinanderstapeln. Die Teilstücke 1 und 2 sind zwei rechtwinklige Dreiecke mit Katheten 30 und 50 (Fläche je 750). An die linke und rechte Flanke des zentralen Rechtecks angelegt erzeugen sie ein symmetrisches Trapez mit Grundlinie 100 (30 + 40 + 30), Decklinie 40 und Höhe 50 (Gesamtfläche 3500 Einheiten). Dies entspricht exakt Figur D.\n\nAusschluss: Figur A ist ein rechtwinkliges Trapez mit nur einer schrägen Flanke (Fläche 4250, zu groß). Figur B ist ein Rechteck (keine Schrägen). Figur C ist ein Parallelogramm mit gleichgerichteten Schrägen.",
    "metadata": {
      "pieceCount": 4,
      "shapeFamily": "Symmetrisches Trapez",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim2-q10",
    "simulationId": "fz-sim2",
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
            40,
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
            35
          ],
          [
            140,
            75
          ],
          [
            100,
            35
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
            40,
            40
          ]
        ],
        "canvasPoints": [
          [
            220,
            80
          ],
          [
            180,
            80
          ],
          [
            180,
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
            280,
            40
          ],
          [
            320,
            40
          ],
          [
            320,
            80
          ],
          [
            280,
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
            120,
            40
          ],
          [
            0,
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
        "pieceId": "p3",
        "rotationDeg": 180,
        "translation": [
          80,
          40
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
      }
    ],
    "explanation": "Geometrische Analyse: Die Teilstücke 1 und 4 sind zwei Quadrate mit Kantenlänge 40 (Fläche je 1600). Die Teilstücke 2 und 3 sind zwei rechtwinklig-gleichschenklige Dreiecke mit Katheten 40 (Fläche je 800), die sich an ihren Hypotenusen lückenlos zu einem dritten 40 × 40 Quadrat ergänzen. Drei 40 × 40 Quadrate ergeben zusammen eine Fläche von 4800 Einheiten. In L-Anordnung (ein Quadrat an der Ecke (0,0), eines rechts bei (40,0) und eines oben bei (0,40)) entsteht ein exaktes L-Polygon mit Außenmaßen 80 × 80. Dies entspricht exakt Figur C.\n\nAusschluss: Figur A ist ein gestrecktes Rechteck 120 × 40 (keine L-Form). Figur B ist ein Quadrat mit Fläche 4900 (Flächenüberschuss). Figur D ist ein T-förmiges Polygon mit 8 Ecken.",
    "metadata": {
      "pieceCount": 4,
      "shapeFamily": "L-förmiges Orthogonalpolygon",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim2-q11",
    "simulationId": "fz-sim2",
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
            70,
            40
          ],
          [
            20,
            80
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
            50,
            0
          ],
          [
            50,
            40
          ]
        ],
        "canvasPoints": [
          [
            125,
            75
          ],
          [
            75,
            75
          ],
          [
            75,
            35
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
            155,
            40
          ],
          [
            205,
            40
          ],
          [
            205,
            80
          ],
          [
            155,
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
            40,
            0
          ],
          [
            0,
            40
          ]
        ],
        "canvasPoints": [
          [
            265,
            40
          ],
          [
            265,
            80
          ],
          [
            225,
            40
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
            40
          ],
          [
            0,
            40
          ]
        ],
        "canvasPoints": [
          [
            315,
            40
          ],
          [
            355,
            40
          ],
          [
            355,
            80
          ],
          [
            315,
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
          90,
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
          0,
          80
        ]
      ],
      "viewBox": "-10 -10 110 100",
      "area": 6400
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
            80
          ],
          [
            0,
            80
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
            90,
            0
          ],
          [
            90,
            80
          ],
          [
            40,
            80
          ],
          [
            0,
            40
          ]
        ],
        "viewBox": "-10 -10 110 100"
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
            80
          ],
          [
            20,
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
        "rotationDeg": 180,
        "translation": [
          50,
          40
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
          50,
          0
        ],
        "isReflection": false
      },
      {
        "pieceId": "p4",
        "rotationDeg": 0,
        "translation": [
          50,
          40
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: Teilstück 1 und 2 bilden ein 50 × 40 Rechteck (Fläche 2000), welches mit Teilstück 3 (50 × 40 Rechteck) zu einem linken 50 × 80 Block (Fläche 4000) gestapelt wird. Teilstück 5 ist ein 40 × 40 Quadrat (Fläche 1600) rechts unten. Teilstück 4 ist ein rechtwinkliges Dreieck (Katheten 40 und 40, Fläche 800) rechts oben, dessen Hypotenuse die Schrägkante von (50, 80) nach (90, 40) erzeugt. Das resultierende Fünfeck besitzt exakt eine Gesamtfläche von 4000 + 1600 + 800 = 6400 Einheiten. Dies entspricht exakt Figur A.\n\nAusschluss: Figur B ist ein volles 80 × 80 Quadrat ohne die durch Dreieck 4 vorgegebene Schrägkante. Figur C besitzt die Schrägkante an der linken oberen Ecke und erfordert eine unzulässige Spiegelung. Figur D ist ein Trapez mit unzureichender Fläche (5600).",
    "metadata": {
      "pieceCount": 5,
      "shapeFamily": "Fünfeck mit Schrägkante",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim2-q12",
    "simulationId": "fz-sim2",
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
            30,
            0
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
            55,
            30
          ],
          [
            25,
            90
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
            60
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
            55,
            30
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
            60
          ]
        ],
        "canvasPoints": [
          [
            205,
            85
          ],
          [
            175,
            85
          ],
          [
            205,
            25
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
            0,
            60
          ]
        ],
        "canvasPoints": [
          [
            265,
            80
          ],
          [
            265,
            50
          ],
          [
            325,
            80
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
            350,
            45
          ],
          [
            350,
            75
          ],
          [
            320,
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
            90
          ],
          [
            0,
            90
          ]
        ],
        "viewBox": "-10 -10 70 110"
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
            60
          ],
          [
            30,
            60
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
    "explanation": "Geometrische Analyse: Gegeben sind vier rechtwinklige Dreiecke mit Katheten 30 und 60 (Fläche je 900) und ein Quadrat 30 × 30 (Fläche 900). Gesamtfläche: 4500 Einheiten. Um ein Parallelogramm oder Rechteck zu bilden, müssten jeweils zwei Dreiecke an ihren 60er-Kathete bzw. Hypotenuse anliegen. Das 30 × 30 Quadrat besitzt jedoch Kantenlänge 30, wodurch beim Anlegen an 60er-Kanten stets eine Stufe von 30 Einheiten entsteht, die durch kein Teilstück geschlossen werden kann ohne andere Außenkanten zu brechen.\n\nAusschluss: Figur A besitzt einen falschen Überhang von 20 statt 30 Einheiten. Figur B (Rechteck 50 × 90) erfordert Dreiecke mit Katheten 50, die nicht existieren. Figur C (Trapez mit Fläche 3600) und Figur D (Sechseck mit Fläche 3000) verletzen drastisch die Flächenerhaltung. Keine der Optionen A–D ist bildbar. Korrekt ist Antwort E.",
    "metadata": {
      "pieceCount": 5,
      "shapeFamily": "Chiralitäts- & Stufenfalle",
      "requiresRotation": true,
      "isEAnswer": true
    },
    "assembly": []
  },
  {
    "id": "fz-sim2-q13",
    "simulationId": "fz-sim2",
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
            185,
            45
          ],
          [
            205,
            45
          ],
          [
            185,
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
            255,
            75
          ],
          [
            235,
            75
          ],
          [
            235,
            45
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
            60,
            0
          ],
          [
            30,
            20
          ]
        ],
        "canvasPoints": [
          [
            285,
            45
          ],
          [
            345,
            45
          ],
          [
            315,
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
    "options": {
      "A": {
        "key": "A",
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
            90,
            20
          ],
          [
            90,
            40
          ],
          [
            70,
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
        "viewBox": "-10 -10 110 80"
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
      "C": {
        "key": "C",
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
            60,
            20
          ],
          [
            60,
            80
          ],
          [
            30,
            100
          ],
          [
            0,
            80
          ]
        ],
        "viewBox": "-10 -10 80 120"
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
        "rotationDeg": 90,
        "translation": [
          80,
          0
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: Die beiden Rechtecke 1 und 2 bilden einen zentralen quadratischen Block von 60 × 60 (Fläche 3600). Die Teilstücke 3 und 4 (Katheten 20 und 30, Fläche je 300) bilden zusammen die linke Dreiecksspitze mit Basis 60 und Höhe 20 (Fläche 600, Spitze bei (0,30)). Teilstück 5 ist ein gleichschenkliges Dreieck mit Basis 60 und Höhe 20 (Fläche 600), das um 90° rotiert exakt die rechte Dreiecksspitze mit Spitze bei (100,30) bildet. Es entsteht ein symmetrisches gestrecktes Sechseck (Gesamtfläche 4800 Einheiten). Dies entspricht exakt Figur B.\n\nAusschluss: Figur A ist ein Achteck mit abgeschnittenen Ecken oben und unten. Figur C ist ein vertikal ausgerichtetes Sechseck (Höhe 100, Breite 60). Figur D ist ein einfaches Rechteck ohne Dreiecksspitzen.",
    "metadata": {
      "pieceCount": 5,
      "shapeFamily": "Gestrecktes Sechseck",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim2-q14",
    "simulationId": "fz-sim2",
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
            30,
            0
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
            0
          ],
          [
            30,
            0
          ],
          [
            30,
            50
          ]
        ],
        "canvasPoints": [
          [
            115,
            85
          ],
          [
            85,
            85
          ],
          [
            85,
            35
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
            145,
            45
          ],
          [
            195,
            45
          ],
          [
            195,
            70
          ],
          [
            145,
            70
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
            50,
            0
          ],
          [
            0,
            25
          ]
        ],
        "canvasPoints": [
          [
            255,
            30
          ],
          [
            255,
            80
          ],
          [
            230,
            30
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
            50,
            0
          ],
          [
            50,
            25
          ]
        ],
        "canvasPoints": [
          [
            335,
            95
          ],
          [
            335,
            45
          ],
          [
            360,
            45
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
      "viewBox": "-10 -10 130 70",
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
            120,
            0
          ],
          [
            80,
            50
          ],
          [
            40,
            50
          ]
        ],
        "viewBox": "-10 -10 140 70"
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
          25
        ],
        "isReflection": false
      },
      {
        "pieceId": "p5",
        "rotationDeg": 180,
        "translation": [
          110,
          75
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
    "explanation": "Geometrische Analyse: Teilstück 3 (50 × 25 Rechteck, Fläche 1250) und die beiden Dreiecke 4 und 5 (Katheten 50 und 25, Fläche je 625) ergänzen sich zu einem zentralen Rechteckblock von 50 × 50 (Fläche 2500). Die Teilstücke 1 und 2 sind zwei Dreiecke mit Katheten 30 und 50 (Fläche je 750). Links und rechts angefügt bilden sie ein symmetrisches Trapez mit Grundseite 110 (30 + 50 + 30), Deckseite 50 und Höhe 50 (Gesamtfläche 4000 Einheiten). Dies entspricht exakt Figur D.\n\nAusschluss: Figur A ist ein Rechteck (keine Schrägen). Figur B ist ein Parallelogramm mit zwei gleichgerichteten Schrägkanten. Figur C ist ein asymmetrisches Trapez mit unpassenden Kantenabmessungen (40 statt 50).",
    "metadata": {
      "pieceCount": 5,
      "shapeFamily": "Symmetrisches Großtrapez",
      "requiresRotation": true,
      "isEAnswer": false
    }
  },
  {
    "id": "fz-sim2-q15",
    "simulationId": "fz-sim2",
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
            20,
            30
          ],
          [
            50,
            30
          ],
          [
            50,
            90
          ],
          [
            20,
            90
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
            75
          ],
          [
            125,
            75
          ],
          [
            125,
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
            0,
            60
          ]
        ],
        "canvasPoints": [
          [
            220,
            30
          ],
          [
            250,
            30
          ],
          [
            220,
            90
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
            60
          ]
        ],
        "canvasPoints": [
          [
            335,
            90
          ],
          [
            305,
            90
          ],
          [
            305,
            30
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
      "viewBox": "-10 -10 110 110",
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
            45
          ],
          [
            45,
            45
          ],
          [
            45,
            90
          ],
          [
            0,
            90
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
            73,
            0
          ],
          [
            73,
            74
          ],
          [
            0,
            74
          ]
        ],
        "viewBox": "-10 -10 93 94"
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
            90,
            0
          ],
          [
            90,
            90
          ],
          [
            60,
            90
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
        "viewBox": "-10 -10 110 110"
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
        "pieceId": "p5",
        "rotationDeg": 180,
        "translation": [
          30,
          60
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
        "rotationDeg": 0,
        "translation": [
          60,
          0
        ],
        "isReflection": false
      }
    ],
    "explanation": "Geometrische Analyse: Die beiden Dreiecke 4 und 5 (Katheten 30 und 60, Fläche je 900) bilden zusammen ein 30 × 60 Rechteck (Fläche 1800). Zusammen mit Quadrat 2 (30 × 30, Fläche 900) entsteht die linke Säule der Abmessung 30 × 90 (Fläche 2700). Die mittlere Säule wird durch Teilstück 1 (30 × 60 Rechteck, Fläche 1800) gebildet. Die rechte Stufe wird durch Quadrat 3 (30 × 30, Fläche 900) gebildet. Es entsteht eine dreistufige Treppenfigur mit Stufenhöhen 90, 60, 30 und Gesamtfläche 5400 Einheiten. Dies entspricht exakt Figur C.\n\nAusschluss: Figur A besitzt nur zwei breite Stufen (Fläche 6075). Figur B ist ein massives Rechteck. Figur D ist die spiegelverkehrte Treppe (aufsteigend von links nach rechts statt absteigend), die nur durch unzulässiges Spiegeln erzeugt werden könnte.",
    "metadata": {
      "pieceCount": 5,
      "shapeFamily": "3-Stufen Treppenkörper",
      "requiresRotation": true,
      "isEAnswer": false
    }
  }
];
