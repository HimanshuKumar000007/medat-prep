const fs = require('fs');
const path = require('path');

const kffJsonPath = path.join(__dirname, '..', 'src', 'data', 'questions', 'json', 'kff.json');
const existingData = JSON.parse(fs.readFileSync(kffJsonPath, 'utf8'));

// Filter out old stub kff-fig questions
const nonFigQuestions = existingData.filter(q => q.subjectId !== 'kff-fig');

const fzQuestions = [
  {
    id: "kff-fig-sim1-q001",
    chapter: "Figuren zusammensetzen",
    chapterId: "kff-fig-l1",
    topic: "Schnittmuster — Quadrat-Zerlegung",
    set: 1,
    question: "Aus den 4 Teilstücken (zwei rechtwinklige Dreiecke mit Katheten 4 cm und 4 cm sowie zwei symmetrische Trapeze mit Grundseiten 8 cm und 4 cm und Höhe 2 cm) lässt sich genau eine der folgenden Zielfiguren lückenlos und ohne Überlappung in der 2D-Ebene zusammensetzen. Welche?",
    options: {
      A: "Ein regelmäßiges Sechseck (Hexagon) mit Kantenlänge a = 6 cm",
      B: "Ein Quadrat mit Kantenlänge a = 8 cm",
      C: "Ein gleichseitiges Dreieck mit Basislänge 10 cm",
      D: "Ein Parallelogramm mit spitzem Innenwinkel von 30°",
      E: "Ein regelmäßiges Achteck (Oktagon)"
    },
    correct_answer: "B",
    explanation: "Die beiden Trapeze an ihrer langen Grundseite (8 cm) zusammengefügt bilden ein Achteck/Viereck, an dessen Seiten die beiden rechtwinkligen Dreiecke (Katheten 4 cm) die Ecken lückenlos zu einem vollständigen Quadrat mit Kantenlänge 8 cm und Gesamtfläche A = 64 cm² ergänzen.",
    difficulty: "medium",
    concept: "Figuren zusammensetzen",
    tags: ["KFF", "Figuren", "Quadrat", "Schnittmuster"],
    exam: "BOTH",
    section: "KFF",
    subjectId: "kff-fig"
  },
  {
    id: "kff-fig-sim1-q002",
    chapter: "Figuren zusammensetzen",
    chapterId: "kff-fig-l1",
    topic: "Winkel- & Kantenabgleich — Hypotenusen-Analyse",
    set: 1,
    question: "Gegeben sind 2 kongruente rechtwinklige Dreiecke mit Katheten 3 cm und 4 cm (Hypotenuse 5 cm) sowie 1 Rechteck mit Kantenlängen 6 cm und 5 cm. Werden die Dreiecke an ihren Katheten der Länge 4 cm gespiegelt aneinandergelegt und an deren 6-cm-Basis das Rechteck angefügt, welche Zielfigur entsteht?",
    options: {
      A: "Ein gleichschenkliges Trapez mit Schenkellänge 5 cm",
      B: "Ein achsensymmetrisches Fünfeck (Pentagon)",
      C: "Ein symmetrischer Drachen (Deltoid)",
      D: "Ein Parallelogramm mit Innenwinkel 60°",
      E: "Ein geschlossenes Quadrat mit Kantenlänge 6 cm"
    },
    correct_answer: "B",
    explanation: "Die beiden Dreiecke bilden an der 4-cm-Kathete ein gleichschenkliges Dreieck mit Basis 2 · 3 cm = 6 cm und zwei Schenkeln à 5 cm. Wird dieses Dreieck auf das 6 cm × 5 cm Rechteck gesetzt, entsteht ein symmetrisches 5-Eck (Hausform) mit 5 Außenkanten.",
    difficulty: "easy",
    concept: "Figuren zusammensetzen",
    tags: ["KFF", "Figuren", "Winkel", "Dreiecke"],
    exam: "BOTH",
    section: "KFF",
    subjectId: "kff-fig"
  },
  {
    id: "kff-fig-sim1-q003",
    chapter: "Figuren zusammensetzen",
    chapterId: "kff-fig-l1",
    topic: "Mentale Rotation — Rasterzerlegungen",
    set: 1,
    question: "Gegeben sind 4 Teilstücke auf einem quadratischen Raster: zwei L-förmige Trominos (je 3 Rasterquadrate), ein Dominostein (2 Rasterquadrate) und ein Einzelquadrat (1 Rasterquadrat). Die Gesamtfläche beträgt 3 + 3 + 2 + 1 = 9 Einheiten. Welche quadratische Zielfigur lässt sich hieraus bilden?",
    options: {
      A: "Ein Quadrat der Größe 3 × 3 Rastereinheiten",
      B: "Ein Rechteck der Größe 2 × 5 Rastereinheiten",
      C: "Ein Parallelogramm mit Grundlinie 4 Rastereinheiten",
      D: "Ein gleichschenkliges Dreieck mit Grundseite 6 Rastereinheiten",
      E: "Keine der genannten Figuren, da eine ungerade Anzahl von Eckfeldern vorliegt"
    },
    correct_answer: "A",
    explanation: "Ein 3×3-Quadrat hat exakt 9 Flächeneinheiten. Zwei L-Trominos lassen sich durch Drehung um 180° so verschränken, dass mit dem 1×2-Block und dem 1×1-Block lückenlos alle 9 Felder des Quadrats gefüllt werden.",
    difficulty: "easy",
    concept: "Figuren zusammensetzen",
    tags: ["KFF", "Figuren", "Raster", "Rotation"],
    exam: "BOTH",
    section: "KFF",
    subjectId: "kff-fig"
  },
  {
    id: "kff-fig-sim1-q004",
    chapter: "Figuren zusammensetzen",
    chapterId: "kff-fig-l1",
    topic: "Ergänzungsfigur — Das fehlende Puzzleteil",
    set: 1,
    question: "Ein gleichseitiges Dreieck mit Kantenlänge 6 cm soll aus vier Teilstücken zusammengesetzt werden. Drei Teilstücke (zwei gleichseitige Dreiecke mit Kantenlänge 3 cm und ein gleichschenkliges Trapez mit parallelen Seiten 6 cm und 3 cm) sind vorgegeben. Welche Form muss das vierte Teilstück zwingend haben?",
    options: {
      A: "Ein rechtwinkliges Dreieck mit Kathete 3 cm",
      B: "Ein gleichseitiges Dreieck mit Kantenlänge 3 cm",
      C: "Ein Parallelogramm mit Seiten 3 cm und 2 cm",
      D: "Ein Quadrat mit Kantenlänge 3 cm",
      E: "Ein Deltoid mit Diagonalen 3 cm und 6 cm"
    },
    correct_answer: "B",
    explanation: "Verbindet man die Seitenmitten eines gleichseitigen Dreiecks (Kante 6 cm), zerfällt es in exakt vier kongruente gleichseitige Dreiecke mit Kantenlänge 3 cm. Da zwei Dreiecke und ein Trapez (welches zwei Dreiecken entspricht) gegeben sind, fehlt genau das vierte gleichseitige Dreieck mit Kantenlänge 3 cm.",
    difficulty: "medium",
    concept: "Figuren zusammensetzen",
    tags: ["KFF", "Figuren", "Ergänzung", "Gleichseitiges Dreieck"],
    exam: "BOTH",
    section: "KFF",
    subjectId: "kff-fig"
  },
  {
    id: "kff-fig-sim1-q005",
    chapter: "Figuren zusammensetzen",
    chapterId: "kff-fig-l1",
    topic: "Kantenlängen & Geradenschnitte",
    set: 1,
    question: "Ein Rechteck mit Seitenlängen a = 8 cm und b = 4 cm wird durch einen Schnitt von der linken unteren Ecke (0,0) zur Kantenmitte oben (4,4) und einen vertikalen Schnitt bei x = 4 cm zerlegt. Welche der folgenden Teilfiguren existiert nach diesem Schnittverfahren NICHT?",
    options: {
      A: "Ein rechtwinkliges Dreieck mit Katheten 4 cm und 4 cm",
      B: "Ein Quadrat mit Kantenlänge 4 cm",
      C: "Ein rechtwinkliges Trapez mit parallelen Seiten 4 cm und 2 cm",
      D: "Ein Viereck mit genau zwei rechten Winkeln",
      E: "Ein regelmäßiges Sechseck"
    },
    correct_answer: "E",
    explanation: "Durch zwei gerade Schnitte durch ein Rechteck entstehen maximal 3 Teilflächen (Polygone mit 3 bis 4 Ecken). Ein regelmäßiges Sechseck (6 Ecken) kann geometrisch unmöglich durch zwei Geradenschnitte aus einem Rechteck erzeugt werden.",
    difficulty: "easy",
    concept: "Figuren zusammensetzen",
    tags: ["KFF", "Figuren", "Ausschluss", "Schnitte"],
    exam: "BOTH",
    section: "KFF",
    subjectId: "kff-fig"
  },
  {
    id: "kff-fig-sim1-q006",
    chapter: "Figuren zusammensetzen",
    chapterId: "kff-fig-l1",
    topic: "Flächenerhaltung & Parallelogramme",
    set: 1,
    question: "Aus zwei kongruenten Dreiecken mit Grundseite g = 5 cm und Höhe h = 4 cm sowie einem Parallelogramm mit Grundseite g = 5 cm und Höhe h = 4 cm soll eine zusammenhängende Figur entstehen. Welchen Gesamtflächeninhalt besitzt die zusammengesetzte Zielfigur zwingend?",
    options: {
      A: "20 cm²",
      B: "30 cm²",
      C: "40 cm²",
      D: "50 cm²",
      E: "60 cm²"
    },
    correct_answer: "C",
    explanation: "Fläche eines Dreiecks: A = 0,5 · g · h = 0,5 · 5 · 4 = 10 cm². Zwei Dreiecke haben somit A = 20 cm². Fläche des Parallelogramms: A = g · h = 5 · 4 = 20 cm². Die Summe aller Teilflächen beträgt invariant A_ges = 20 + 20 = 40 cm².",
    difficulty: "medium",
    concept: "Figuren zusammensetzen",
    tags: ["KFF", "Figuren", "Flächeninhalt", "Parallelogramm"],
    exam: "BOTH",
    section: "KFF",
    subjectId: "kff-fig"
  },
  {
    id: "kff-fig-sim1-q007",
    chapter: "Figuren zusammensetzen",
    chapterId: "kff-fig-l1",
    topic: "Symmetrie & Zulässige 2D-Transformationen",
    set: 1,
    question: "Welche der folgenden Transformationen in der 2D-Ebene ist beim MedAT-Untertest 'Figuren zusammensetzen' für asymmetrische Teilstücke NICHT zulässig?",
    options: {
      A: "Eine Drehung um 90° im Uhrzeigersinn",
      B: "Eine Parallelverschiebung um 5 cm nach rechts",
      C: "Eine Drehung um 180° um den Flächenschwerpunkt",
      D: "Ein räumliches Umklappen der Figur (Spiegelung an einer Achse)",
      E: "Eine Drehung um 270° gegen den Uhrzeigersinn"
    },
    correct_answer: "D",
    explanation: "In den offiziellen MedAT-Testregeln für Figuren zusammensetzen ist ausschließlich die Verschiebung und Drehung (Rotation) in der zweidimensionalen Ebene erlaubt. Ein räumliches Wenden/Umklappen (Spiegelung) verändert die Orientierung asymmetrischer Teile und ist streng unzulässig.",
    difficulty: "easy",
    concept: "Figuren zusammensetzen",
    tags: ["KFF", "Figuren", "Testregeln", "Spiegelung"],
    exam: "BOTH",
    section: "KFF",
    subjectId: "kff-fig"
  },
  {
    id: "kff-fig-sim1-q008",
    chapter: "Figuren zusammensetzen",
    chapterId: "kff-fig-l1",
    topic: "Tangram-Prinzip — Dreiecks-Kombinationen",
    set: 1,
    question: "Zwei kongruente gleichschenklig-rechtwinklige Dreiecke mit Schenkellänge s = 4 cm werden an verschiedenen Kanten zusammengefügt. Welche der folgenden Zielfiguren kann durch Aneinanderlegen dieser beiden Teile NIEMALS erzeugt werden?",
    options: {
      A: "Ein Quadrat mit Kantenlänge 4 cm (Hypotenuse an Hypotenuse)",
      B: "Ein größeres gleichschenklig-rechtwinkliges Dreieck (Kathete an Kathete)",
      C: "Ein Parallelogramm mit spitzem Winkel von 45°",
      D: "Ein gleichseitiges Dreieck mit Innenwinkeln von jeweils 60°",
      E: "Ein symmetrischer Rhomboid"
    },
    correct_answer: "D",
    explanation: "Gleichschenklig-rechtwinklige Dreiecke besitzen ausschließlich Winkel von 45° und 90°. Durch Kombination zweier solcher Dreiecke können nur Winkel von 45°, 90° oder 135° erzeugt werden, niemals jedoch der für ein gleichseitiges Dreieck erforderliche 60°-Winkel.",
    difficulty: "medium",
    concept: "Figuren zusammensetzen",
    tags: ["KFF", "Figuren", "Tangram", "Winkel"],
    exam: "BOTH",
    section: "KFF",
    subjectId: "kff-fig"
  },
  {
    id: "kff-fig-sim1-q009",
    chapter: "Figuren zusammensetzen",
    chapterId: "kff-fig-l1",
    topic: "Rhombus & Trapeze",
    set: 1,
    question: "Ein gleichschenkliges Trapez besitzt die Innenwinkel 60°, 120°, 120° und 60°. Wird dieses Trapez entlang seiner vertikalen Symmetrieachse senkrecht halbiert, welche Eigenschaften haben die beiden entstehenden Teilstücke?",
    options: {
      A: "Zwei kongruente rechtwinklige Trapeze mit Innenwinkeln 90°, 90°, 120° und 60°",
      B: "Zwei gleichseitige Dreiecke mit Kantenlänge a",
      C: "Zwei Rechtecke mit Seitenverhältnis 1:2",
      D: "Zwei Parallelogramme mit spitzen Winkeln von 45°",
      E: "Zwei kongruente Deltoide"
    },
    correct_answer: "A",
    explanation: "Die Symmetrieachse steht senkrecht auf beiden parallelen Grundseiten und halbiert diese. An der Schnittkante entstehen somit zwei 90°-Winkel, während die beiden verbleibenden Ecken ihre ursprünglichen Winkel von 60° und 120° behalten. Es entstehen zwei kongruente rechtwinklige Trapeze.",
    difficulty: "medium",
    concept: "Figuren zusammensetzen",
    tags: ["KFF", "Figuren", "Trapez", "Symmetrie"],
    exam: "BOTH",
    section: "KFF",
    subjectId: "kff-fig"
  },
  {
    id: "kff-fig-sim1-q010",
    chapter: "Figuren zusammensetzen",
    chapterId: "kff-fig-l1",
    topic: "Ausschlussverfahren — Extremkanten",
    set: 1,
    question: "Ein zusammengesetztes Puzzle besteht aus 5 Teilstücken. Das größte Teilstück besitzt eine durchgehende, ungeteilte Außenkante von 9 cm Länge. Welche der folgenden quadratischen Zielfiguren scheidet als Lösung sofort aus?",
    options: {
      A: "Ein Quadrat mit Kantenlänge 7 cm",
      B: "Ein Quadrat mit Kantenlänge 9 cm",
      C: "Ein Quadrat mit Kantenlänge 10 cm",
      D: "Ein Quadrat mit Kantenlänge 12 cm",
      E: "Ein Quadrat mit Kantenlänge 15 cm"
    },
    correct_answer: "A",
    explanation: "Eine ungeteilte Kante von 9 cm kann unmöglich an der Außenkante eines Quadrats mit nur 7 cm Kantenlänge anliegen. Auch als diagonale Innenkante scheidet sie aus, da der Raum zu klein ist. Option A ist über das Kanten-Ausschlussprinzip in unter 5 Sekunden sicher eliminierbar.",
    difficulty: "easy",
    concept: "Figuren zusammensetzen",
    tags: ["KFF", "Figuren", "Ausschlussprinzip", "Kanten"],
    exam: "BOTH",
    section: "KFF",
    subjectId: "kff-fig"
  },
  {
    id: "kff-fig-sim1-q011",
    chapter: "Figuren zusammensetzen",
    chapterId: "kff-fig-l1",
    topic: "Kreissektoren & Symmetrische Formen",
    set: 1,
    question: "Aus vier kongruenten Viertelkreis-Sektoren mit Radius r = 3 cm und einem Quadrat mit Kantenlänge a = 6 cm soll eine geschlossene Figur gebildet werden. Welche Form entsteht, wenn an jede der vier Quadratseiten ein Viertelkreis mit seiner geraden Kante nach innen angesetzt wird?",
    options: {
      A: "Ein vollständiger Kreis mit Radius 6 cm",
      B: "Eine symmetrische Kleeblattform mit 4 bogenförmigen Ausbuchtungen",
      C: "Ein regelmäßiges Achteck",
      D: "Ein Quadrat mit abgerundeten Ecken",
      E: "Eine Ellipse mit Halbachsen 6 cm und 3 cm"
    },
    correct_answer: "B",
    explanation: "Da jede Quadratseite die Länge 6 cm = 2 · r (r = 3 cm) hat, schließt an jeder Kante ein bogenförmiger Kreissektor bündig an. Das Gesamtmuster bildet eine vierzählig rotationssymmetrische Rosette bzw. Kleeblattform mit vier Ausbuchtungen.",
    difficulty: "medium",
    concept: "Figuren zusammensetzen",
    tags: ["KFF", "Figuren", "Kreisbogen", "Symmetrie"],
    exam: "BOTH",
    section: "KFF",
    subjectId: "kff-fig"
  },
  {
    id: "kff-fig-sim1-q012",
    chapter: "Figuren zusammensetzen",
    chapterId: "kff-fig-l1",
    topic: "Sechseck-Zerlegung",
    set: 1,
    question: "Ein regelmäßiges Sechseck (Hexagon) mit Kantenlänge a = 4 cm lässt sich durch Verbindung des Mittelpunkts mit allen sechs Ecken zerlegen in:",
    options: {
      A: "Sechs kongruente gleichseitige Dreiecke mit Kantenlänge 4 cm",
      B: "Drei kongruente Rechtecke",
      C: "Vier rechtwinklige Dreiecke und zwei Quadrate",
      D: "Sechs gleichschenklig-rechtwinklige Dreiecke",
      E: "Zwei Trapeze und zwei Parallelogramme"
    },
    correct_answer: "A",
    explanation: "Im regelmäßigen Sechseck beträgt der Mittelpunktswinkel 360° / 6 = 60°. Da die beiden vom Mittelpunkt zu den Ecken verlaufenden Radien gleich der Kantenlänge a sind, haben alle drei Winkel jedes Teildreiecks 60°. Es entstehen exakt sechs gleichseitige Dreiecke.",
    difficulty: "easy",
    concept: "Figuren zusammensetzen",
    tags: ["KFF", "Figuren", "Sechseck", "Zerlegung"],
    exam: "BOTH",
    section: "KFF",
    subjectId: "kff-fig"
  },
  {
    id: "kff-fig-sim1-q013",
    chapter: "Figuren zusammensetzen",
    chapterId: "kff-fig-l1",
    topic: "Winkelkombinationen an Knotenpunkten",
    set: 1,
    question: "Drei Teilstücke treffen in einem gemeinsamen inneren Knotenpunkt der Zielfigur lückenlos aufeinander. Teilstück 1 steuert einen Winkel von 135° bei, Teilstück 2 einen Winkel von 90°. Welchen Innenwinkel muss Teilstück 3 an dieser Ecke aufweisen, damit der Vollwinkel von 360° lückenlos geschlossen wird?",
    options: {
      A: "45°",
      B: "90°",
      C: "120°",
      D: "135°",
      E: "150°"
    },
    correct_answer: "D",
    explanation: "Ein lückenloser innerer Knotenpunkt erfordert die Summe von 360°. Berechnung: 360° − 135° − 90° = 135°. Teilstück 3 muss an diesem Knotenpunkt exakt einen Winkel von 135° aufweisen.",
    difficulty: "medium",
    concept: "Figuren zusammensetzen",
    tags: ["KFF", "Figuren", "Knotenpunkt", "Winkel"],
    exam: "BOTH",
    section: "KFF",
    subjectId: "kff-fig"
  },
  {
    id: "kff-fig-sim1-q014",
    chapter: "Figuren zusammensetzen",
    chapterId: "kff-fig-l1",
    topic: "Drachenviereck & Symmetrie",
    set: 1,
    question: "Ein Deltoid (Drachenviereck) besitzt zueinander orthogonale Diagonalen e und f. Durch einen vollständigen Schnitt entlang beider Diagonalenachsen zerfällt das Deltoid in:",
    options: {
      A: "Vier paarweise kongruente rechtwinklige Dreiecke",
      B: "Vier ungleiche Trapeze",
      C: "Zwei Paare zueinander kongruenter rechtwinkliger Dreiecke",
      D: "Vier gleichseitige Dreiecke",
      E: "Ein Quadrat und drei Dreiecke"
    },
    correct_answer: "C",
    explanation: "Da die Hauptdiagonale des Drachenvierecks eine Symmetrieachse ist und die Nebendiagonale senkrecht halbiert, entstehen vier rechtwinklige Dreiecke: zwei kongruente obere Dreiecke und zwei kongruente untere Dreiecke (zwei kongruente Paare).",
    difficulty: "medium",
    concept: "Figuren zusammensetzen",
    tags: ["KFF", "Figuren", "Deltoid", "Diagonalen"],
    exam: "BOTH",
    section: "KFF",
    subjectId: "kff-fig"
  },
  {
    id: "kff-fig-sim1-q015",
    chapter: "Figuren zusammensetzen",
    chapterId: "kff-fig-l1",
    topic: "Ausschluss-Pacing unter Zeitdruck",
    set: 1,
    question: "Du hast bei einer FZ-Aufgabe im MedAT noch 25 Sekunden Zeit. Teilstück 1 ist ein rechtwinkliges Dreieck mit Katheten 3 cm und 5 cm. Option A und B zeigen Zielfiguren mit einer maximalen Außenabmessung von 4 cm. Welche taktische Entscheidung maximiert deine Punktchance?",
    options: {
      A: "Die verbleibende Zeit nutzen, um Option A millimetergenau auf Karopapier nachzuzeichnen",
      B: "Option A und B sofort als unmöglich streichen, da eine Kathete von 5 cm nicht in eine 4-cm-Begrenzung passt, und unter C, D und E entscheiden",
      C: "Den Testleiter um eine Zeitverlängerung für diese Aufgabe bitten",
      D: "Die Aufgabe überspringen und am Ende der gesamten KFF-Prüfung nochmals darauf zurückkommen",
      E: "Alle Optionen gleichzeitig auswählen"
    },
    correct_answer: "B",
    explanation: "Das Kanten-Ausschlussprinzip ermöglicht die sekundenschnelle Elimination geometrisch unmöglicher Optionen. Da eine 5-cm-Kante nicht in eine 4-cm-Figur passt, scheiden A und B aus; die Ratewahrscheinlichkeit steigt sofort auf 33–50% im strikten 80s-Zeitbudget.",
    difficulty: "easy",
    concept: "Figuren zusammensetzen",
    tags: ["KFF", "Figuren", "Pacing", "Strategie"],
    exam: "BOTH",
    section: "KFF",
    subjectId: "kff-fig"
  }
];

const combined = [...nonFigQuestions, ...fzQuestions];

fs.writeFileSync(kffJsonPath, JSON.stringify(combined, null, 2), 'utf8');
console.log(`Successfully updated ${kffJsonPath} with ${fzQuestions.length} authentic FZ questions.`);
