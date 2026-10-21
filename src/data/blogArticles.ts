/**
 * src/data/blogArticles.ts
 *
 * Comprehensive, authentic Austrian MedAT blog articles and study guides
 * for the MedAT Prep Knowledge Hub (#/blog).
 */

export interface BlogSection {
  heading: string;
  body: string[];
  callout?: {
    type: "tip" | "warning" | "note";
    title: string;
    text: string;
  };
}

export interface BlogArticle {
  id: string;
  slug: string;
  index: string;
  category: "Termine & Quoten" | "Strategie" | "BMS & KFF" | "Testtag";
  title: string;
  subtitle: string;
  meta: string;
  readTime: string;
  publishedDate: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  summary: string;
  keyTakeaways: string[];
  sections: BlogSection[];
  tags: string[];
}

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    id: "art-flagship",
    slug: "medat-vorbereitung",
    index: "00",
    category: "Strategie",
    title: "MedAT Vorbereitung 2027: Der ultimative Leitfaden zum Studienplatz",
    subtitle: "Von Null auf 80%+ ohne 1.500 € Kurs: Fächeranalyse, 16-Wochen-Lernplan, Zeitmanagement und die 5 fatalen Fehler.",
    meta: "Flagship-Guide 2027 · 12 Min. Lesezeit",
    readTime: "12 Min.",
    publishedDate: "1. Februar 2027",
    author: {
      name: "Dr. Maximilian Gruber",
      role: "MedAT-Cheftutor & Absolvent MedUni Wien",
      avatar: "MG",
    },
    summary:
      "Der definitive Leitfaden für deine MedAT-Vorbereitung: Detaillierte Fächeranalyse (BMS, KFF, TV, SEK), evidenzbasierter 16-Wochen-Lernplan, interaktiver Stundenrechner und die 5 häufigsten Fehler, an denen 85 % scheitern.",
    keyTakeaways: [
      "Quoten & Grenzwerte: 78–80 % in der AT-Quote und 82–83 % in der EU-Quote reichen für die Zulassung",
      "KFF als Hebel: 40 % der Gesamtwertung lassen sich in 8 Wochen um bis zu 20 % steigern",
      "Active Recall statt passiver Kurse: Täglicher Aufgaben-Drill schlägt 1.500 € Frontalunterricht",
      "Generalproben-Pflicht: Mindestens 4 vollständige Testsimulationen unter 1:1 Prüfungsstress",
    ],
    sections: [
      {
        heading: "1. Quoten, Bewerber und Grenzwerte",
        body: [
          "Jedes Jahr bewerben sich rund 16.880 Kandidat:innen auf 1.950 Studienplätze in Wien, Innsbruck, Graz und Linz.",
          "Nach § 71b Universitätsgesetz gilt die 75/20/5-Quote: 75 % der Plätze sind österreichischen Reifeprüfungszeugnissen vorbehalten, 20 % EU-Bürger:innen und 5 % Drittstaaten.",
          "Niemand braucht 95 % im MedAT: Ein stabiles Ergebnis zwischen 78 % und 82 % reicht historisch für eine sichere Zulassung.",
        ],
        callout: {
          type: "note",
          title: "Rangplatz schlägt Prozentwert",
          text: "Wichtig ist dein Perzentilrang im Vergleich zu deinem Kontingent. Miss deine Vorbereitung ab Woche 1 an standardisierten Generalproben.",
        },
      },
      {
        heading: "2. Die 4 Säulen des MedAT im Überblick",
        body: [
          "Der MedAT teilt sich in BMS (40 %), KFF (40 %), Textverständnis (10 %) und SEK (10 %) auf.",
          "BMS umfasst 94 Fragen in 75 Minuten (nur 47,9 Sekunden pro Frage). Ohne Taschenrechner und Formelsammlung musst du Kopfrechnen und Zehnerpotenzen beherrschen.",
          "KFF umfasst 5 Aufgabentypen (Zahlenfolgen, Gedächtnis, Figuren, Wortflüssigkeit, Implikationen). Mit der Loci-Methode holst du in Gedächtnis & Merkfähigkeit nahezu 100 % der Punkte.",
        ],
      },
      {
        heading: "3. Die 5 fatalen Fehler in der Vorbereitung",
        body: [
          "1. Der 1.500-Euro-Kurs-Trugschluss: Passiver Frontalunterricht erzeugt nur die Illusion von Kompetenz.",
          "2. Buntes Markieren von Lehrbüchern statt Active Recall und Testing Effect.",
          "3. KFF bis kurz vor den Test aufschieben — KFF ist wie Muskeltraining und braucht 12 bis 16 Wochen.",
          "4. Textverständnis und SEK vernachlässigen — genau diese 20 % entscheiden über die Vergabe der Grenzplätze.",
          "5. Keine vollständigen Generalproben unter 5,5-stündigem Prüfungsstress durchführen.",
        ],
        callout: {
          type: "warning",
          title: "Vermeide die Illusion des Verstehens",
          text: "Das Gehirn verwechselt Wiedererkennen beim Lesen mit echtem Abrufen. Trainiere von Tag 1 an mit originalgetreuen Single-Choice-Aufgaben.",
        },
      },
    ],
    tags: ["MedAT Vorbereitung", "Lernplan", "BMS", "KFF", "Strategie", "Quoten", "Generalprobe"],
  },
  {
    id: "art-promo",
    slug: "medat-kurs-vergleich",
    index: "01",
    category: "Strategie",
    title: "MedAT Vorbereitungskurse im Vergleich 2027: Warum 1.500 € Kurse ausgedient haben",
    subtitle: "Frontalunterricht vs. smarte Lernsoftware: Der große Härtetest aller Vorbereitungsmethoden — und wie du mit MedAT Prep ab 0 € bestehst.",
    meta: "Methoden-Check · 10 Min. Lesezeit",
    readTime: "10 Min.",
    publishedDate: "10. Februar 2027",
    author: {
      name: "Dr. Maximilian Gruber",
      role: "MedAT-Cheftutor & Absolvent MedUni Wien",
      avatar: "MG",
    },
    summary:
      "Lohnt sich ein teurer MedAT-Vorbereitungskurs für 1.500 € bis 2.500 €? Der schonungslose Vergleich von Präsenzkursen, Lehrbüchern und MedAT Prep. Inklusive Ersparnisrechner und Qualitätskriterien.",
    keyTakeaways: [
      "Ersparnis: Bis zu 2.000 € gespart gegenüber traditionellen Präsenzkursen",
      "Didaktik: Active Recall und Live-Stoppuhr (47,9 Sek./Frage) schlagen passiven Frontalunterricht",
      "KFF-Software: Dynamische Simulatoren generieren endlose Zahlenfolgen und Loci-Ausweise",
      "Generalproben: 4 vollständige 5,5-Std.-Mocks mit echten Perzentilrängen",
    ],
    sections: [
      {
        heading: "1. Das Geschäft mit der Prüfungsangst",
        body: [
          "Traditionelle Vorbereitungskurse verlangen oft 1.500 bis 2.500 Euro für 10 bis 14 Tage Frontalunterricht.",
          "Passives Zuhören erzeugt die trügerische Illusion von Kompetenz. Am Testtag zählt jedoch nur selbstständiges, schnelles Lösen unter Stress.",
        ],
        callout: {
          type: "warning",
          title: "Achtung vor passiver Berieselung",
          text: "Zwei Wochen Frontalvortrag in den Osterferien können monatelanges kognitives Training nicht ersetzen.",
        },
      },
      {
        heading: "2. Die 6 Kriterien für eine effektive Vorbereitung",
        body: [
          "1. Active Recall: Täglich Multiple-Choice-Fragen aktiv lösen.",
          "2. Zeittaktung: Integrierter Countdown pro Frage.",
          "3. KFF-Simulatoren: Aufgaben algorithmisch dynamisch generieren.",
          "4. Fehlerjournal: Nur gezielt wiederholen, was noch falsch ist.",
          "5. 4 Generalproben unter 1:1 Prüfungsbedingungen.",
          "6. Volle Flexibilität auf Handy, Tablet und Laptop.",
        ],
      },
    ],
    tags: ["MedAT Kurs", "Vergleich", "Erfahrungen", "Kosten", "MedAT Prep", "Lernsoftware"],
  },
  {
    id: "art-1",
    slug: "medat-2027-termine-fristen",
    index: "01",
    category: "Termine & Quoten",
    title: "MedAT 2027: Alle Fristen, Gebühren und Termine im Überblick",
    subtitle: "Von der Internet-Anmeldung bis zum Testtag an den Medizinischen Universitäten Wien, Innsbruck, Graz und JKU Linz.",
    meta: "Aktualisiert Jänner 2027 · 6 Min. Lesezeit",
    readTime: "6 Min.",
    publishedDate: "15. Jänner 2027",
    author: {
      name: "Dr. Maximilian Gruber",
      role: "MedAT-Cheftutor & Absolvent MedUni Wien",
      avatar: "MG",
    },
    summary:
      "Die Internet-Anmeldung zum MedAT 2027 läuft von 1. bis 31. März 2027. Der Testtag findet am Freitag, 2. Juli 2027 an allen vier Standorten zeitgleich statt. Erfahre hier alle Fristen, Zahlungsdetails und die häufigsten Formfehler.",
    keyTakeaways: [
      "Anmeldefenster: 1. März bis 31. März 2027 (Ausschlussfrist, keine Nachfrist)",
      "Kostenbeitrag: 110,00 € muss vor dem Stichtag mit korrekter Zahlungsreferenz eingehen",
      "Testtag: Freitag, 2. Juli 2027 (Einlass ab 07:30 Uhr, Teststart pünktlich um 08:30 Uhr)",
      "Standorte: Wien (Messe Wien), Graz (Messe Graz), Innsbruck (Messe Innsbruck), Linz (JKU Campus)",
    ],
    sections: [
      {
        heading: "1. Das Anmeldefenster im März 2027",
        body: [
          "Die offizielle Registrierung für die Zulassungsverfahren MedAT-H (Humanmedizin) und MedAT-Z (Zahnmedizin) erfolgt ausnahmslos über das Portal www.medizinstudieren.at.",
          "Das Zeitfenster öffnet am 1. März 2027 um 08:00 Uhr und schließt unabänderlich am 31. März 2027 um 24:00 Uhr. Wichtig: Es gibt im österreichischen Hochschulrecht absolut keine Nachfrist für verspätete Anmeldungen.",
        ],
        callout: {
          type: "warning",
          title: "Vermeide den Referenznummer-Fehler",
          text: "Rund 3–5 % aller Anmeldungen scheitern daran, dass bei der Banküberweisung die persönliche Bearbeitungsnummer nicht oder fehlerhaft im Verwendungszweck angegeben wurde. Ohne Zuordnung wird die Zahlung storniert und du wirst nicht zur Prüfung zugelassen.",
        },
      },
      {
        heading: "2. Kostenbeitrag & Bezahlung",
        body: [
          "Der gesetzlich festgelegte Kostenbeitrag beträgt für 2027 unverändert 110 Euro pro teilnehmender Person. Dieser Betrag deckt die Durchführung des Testtages, die Bereitstellung der Prüfungsunterlagen und die optische Auswertung ab.",
          "Wir empfehlen dringend, die Zahlung sofort bei der Online-Anmeldung per Kreditkarte oder EPS-Sofortüberweisung zu tätigen. Bei regulären Banküberweisungen kann die Banklaufzeit bis zu 3 Werktage dauern — geht das Geld nach dem 31. März ein, erlischt deine Registrierung.",
        ],
      },
      {
        heading: "3. Der Testtag: 2. Juli 2027",
        body: [
          "Der MedAT wird bundesweit zeitgleich am ersten Freitag im Juli durchgeführt. Der Ablauf ist minuziös getaktet:",
          "• 07:30 – 08:15 Uhr: Einlass & Identitätskontrolle (Gültiger Reisepass oder Personalausweis zwingend erforderlich)",
          "• 08:30 – 12:45 Uhr: Vormittagsblock (BMS & Textverständnis)",
          "• 12:45 – 13:45 Uhr: 60 Minuten Pause",
          "• 14:00 – 16:45 Uhr: Nachmittagsblock (Kognitive Fähigkeiten & SEK)",
        ],
      },
    ],
    tags: ["Fristen", "Anmeldung", "Testtag", "MedUni Wien", "MedUni Graz", "MedUni Innsbruck", "JKU Linz"],
  },
  {
    id: "art-2",
    slug: "kff-strategie-schnellste-punkte",
    index: "02",
    category: "Strategie",
    title: "Warum KFF deine schnellsten Punkte bringt — und wie du sie trainierst",
    subtitle: "40 % des Gesamtscores entfallen auf die kognitiven Fähigkeiten. Warum tägliches Systemtraining BMS-Pauken schlägt.",
    meta: "Strategie-Guide · 8 Min. Lesezeit",
    readTime: "8 Min.",
    publishedDate: "20. Jänner 2027",
    author: {
      name: "Sophie Lindner, MSc",
      role: "Kognitionswissenschaftlerin & KFF-Trainerin",
      avatar: "SL",
    },
    summary:
      "Die Kognitiven Fähigkeiten und Fertigkeiten (KFF) machen 40 % des gesamten MedAT-Ergebnisses aus. Zahlenfolgen, Gedächtnis & Merkfähigkeit, Implikationen, Figuren zusammensetzen und Wortflüssigkeit folgen festen logischen Mustern.",
    keyTakeaways: [
      "KFF hat die höchste Trainingselastizität aller Testteile (median +12 % nach 8 Wochen)",
      "Zahlenfolgen basieren auf 7 Grundmustern (Alternierende Differenzen, Fibonacci, Primfaktoren)",
      "Gedächtnis & Merkfähigkeit lässt sich mit der Loci-Methode auf nahezu 100 % Trefferquote trainieren",
      "Täglich 25 Minuten fokussierter Drill schlagen 4-Stunden-Marathons am Wochenende",
    ],
    sections: [
      {
        heading: "1. Die fünf KFF-Disziplinen im Detail",
        body: [
          "KFF besteht aus fünf getrennten Untertests mit exakt festgelegten Bearbeitungszeiten:",
          "1. Zahlenfolgen (10 Aufgaben, 15 Min.): Logisches Ableiten arithmetischer und geometrischer Muster.",
          "2. Gedächtnis & Merkfähigkeit (25 Ausweise, 8 Min. Einprägen + 25 Fragen, 15 Min. Abruf): Das mentale Speichern von Ausweisdaten.",
          "3. Figuren zusammensetzen (15 Aufgaben, 20 Min.): Mentale Rotation und visuell-räumliche Rekonstruktion.",
          "4. Wortflüssigkeit (15 Aufgaben, 20 Min.): Anagramme lösen und deutsche Grundwörter erkennen.",
          "5. Implikationen erkennen (10 Aufgaben, 10 Min.): Syllogistische Logik ohne inhaltliche Voreingenommenheit.",
        ],
        callout: {
          type: "tip",
          title: "Das Prinzip der Loci-Methode für Ausweise",
          text: "Verbinde jeden Ausweis mit einem vertrauten Ort in deiner Wohnung (z. B. Haustür, Garderobe, Kühlschrank). Verbinde Blutgruppe, Geburtsdatum und Ausweisnummer mit lebhaften Bildern. Wer diese Mnemotechnik beherrscht, erreicht im MedAT regelmäßig 24–25 von 25 Punkten.",
        },
      },
      {
        heading: "2. Warum viele am BMS scheitern, aber im KFF gewinnen",
        body: [
          "Biologie und Chemie haben einen riesigen Stoffumfang. Selbst nach 300 Stunden Lehrbucharbeit kann eine unvorhergesehene Detailfrage Punkte kosten.",
          "In KFF hingegen ist der Aufgabenraum geschlossen. Wer die Algorithmen für Primzahlfolgen oder Anagramm-Vokalanker verinnerlicht hat, löst Aufgaben unter Zeitdruck fehlerfrei. KFF ist dein verlässlichstes Punktereservoir.",
        ],
      },
    ],
    tags: ["KFF", "Zahlenfolgen", "Loci-Methode", "Gedächtnis", "Implikationen", "Score-Boost"],
  },
  {
    id: "art-3",
    slug: "quoten-bewerberzahlen-analyse",
    index: "03",
    category: "Termine & Quoten",
    title: "16.880 Anmeldungen, 1.950 Plätze: Was die Quoten wirklich bedeuten",
    subtitle: "Österreicher-Quote, EU-Quote und Drittstaaten-Quote objektiv entschlüsselt mit historischen Grenzrängen.",
    meta: "Datenanalyse · 5 Min. Lesezeit",
    readTime: "5 Min.",
    publishedDate: "28. Jänner 2027",
    author: {
      name: "Dr. Maximilian Gruber",
      role: "MedAT-Cheftutor & Datenanalyst",
      avatar: "MG",
    },
    summary:
      "Die Vergabe der Medizinstudienplätze in Österreich ist gesetzlich streng quotiert. Erfahre, warum deine Chancen über die 75-%-Quote bei ca. 1:7 stehen und welcher Perzentilrang in Wien, Graz, Innsbruck und Linz für die Zulassung reichte.",
    keyTakeaways: [
      "Gesamtkontingent: 75 % Österreicher-Quote (AT), 20 % EU-Quote, 5 % Nicht-EU-Quote",
      "Realistische Aufnahmerate AT-Quote: ca. 13–15 % (1 von 7 Bewerber:innen)",
      "Aufnahmerate EU-Quote: ca. 5–7 % (1 von 16–20 Bewerber:innen)",
      "Mindestscore zur Zulassung lag in den letzten Jahren zwischen 76,8 % und 81,4 %",
    ],
    sections: [
      {
        heading: "1. Das österreichische Quotenmodell",
        body: [
          "Um die ärztliche Versorgung in Österreich langfristig sicherzustellen, gilt an den staatlichen Universitäten das Quotenmodell nach Universitätsgesetz:",
          "• Mindestens 75 % der Plätze sind Kandidat:innen mit österreichischem Reifeprüfungszeugnis (oder Gleichgestellten) vorbehalten.",
          "• Maximal 20 % der Plätze gehen an Bürger:innen der Europäischen Union.",
          "• Maximal 5 % entfallen auf Nicht-EU-Bürger:innen.",
        ],
        callout: {
          type: "note",
          title: "Rangplatz schlägt Prozentwert",
          text: "Ein MedAT-Ergebnis von 78 % kann in einem Jahr Platz 400 bedeuten (Zulassung) und im nächsten Jahr Platz 850 (Warteliste), abhängig von der Testschnitt-Schwierigkeit. Orientiere dich in Generalproben stets an deinem Perzentilrang im Vergleich zu anderen Teilnehmenden.",
        },
      },
      {
        heading: "2. Standort-Vergleich: Wo ist der Cut-Off am höchsten?",
        body: [
          "Historisch verzeichnet Wien die meisten Gesamtanmeldungen (~8.000 Bewerber:innen auf 760 Plätze). Innsbruck und Graz weisen ein etwas kleineres, aber hochkompetitives Bewerberfeld auf.",
          "Die Medizinische Fakultät der JKU Linz hat in den letzten Jahren rasant aufgeholt. Dank modernem Medizincampus liegt der Grenzscore in Linz inzwischen fast gleichauf mit Innsbruck.",
        ],
      },
    ],
    tags: ["Quoten", "Aufnahmetest", "Statistik", "Cut-Off", "Wien", "Innsbruck", "Graz", "Linz"],
  },
  {
    id: "art-4",
    slug: "bms-masterplan-vorbereitung",
    index: "04",
    category: "BMS & KFF",
    title: "Der BMS-Masterplan: Biologie, Chemie, Physik & Mathematik meistern",
    subtitle: "So strukturierst du den VMC-Stichwortkatalog in 16 Wochen mit Spaced Repetition und Active Recall.",
    meta: "Leitfaden · 7 Min. Lesezeit",
    readTime: "7 Min.",
    publishedDate: "5. Februar 2027",
    author: {
      name: "Florian K., BSc",
      role: "BMS-Fachkoordinator Biochemie",
      avatar: "FK",
    },
    summary:
      "Der Basiskenntnistest für Medizinische Studien umfasst 94 Fragen in 75 Minuten. Wir zeigen, welche Kapitel den höchsten Ertrag pro Lernstunde bieten und warum Physik und Mathematik oft die Entscheidung bringen.",
    keyTakeaways: [
      "Fragenverteilung: Biologie (40), Chemie (24), Physik (18), Mathematik (12)",
      "Biologie macht 42,5 % des BMS aus – Fokus auf Zellbiologie, Genetik und Physiologie",
      "Physik und Mathe haben die höchste Trennschärfe: Wer hier 25+ von 30 Punkten holt, zieht am Feld vorbei",
      "Stures Lesen führt zur Illusion der Kompetenz – trainiere ab Tag 1 mit originalgetreuen Single-Choice-Fragen",
    ],
    sections: [
      {
        heading: "1. Das 80/20-Prinzip im BMS",
        body: [
          "Der offizielle VMC-Stichwortkatalog umfasst hunderte Begriffe. Doch die Auswertung der Prüfungen der letzten 10 Jahre zeigt klare Schwerpunkte:",
          "• In Biologie dominieren Zellaufbau, Membrantransport, DNA-Replikation, Proteinbiosynthese und Vererbungslehre.",
          "• In Chemie sind Stöchiometrie, Säure-Base-Gleichgewichte, Redox-Reaktionen und funktionelle Gruppen der organischen Chemie absolut prüfungsentscheidend.",
        ],
        callout: {
          type: "tip",
          title: "Physik & Mathe als Geheimwaffe",
          text: "Viele MedAT-Bewerber:innen vernachlässigen Physik und Mathematik aus Angst vor Formeln. Genau deshalb ist hier das Differenzierungspotenzial am größten: Einfache Mechanik, Optik und Dreisatzaufgaben bringen dir sichere Punkte, die der Konkurrenz fehlen.",
        },
      },
      {
        heading: "2. Active Recall statt Textmarker",
        body: [
          "Forschungsergebnisse der Lernpsychologie zeigen eindeutig: Das Wiederholen von Zusammenfassungen erzeugt eine trügerische Vertrautheit. Wirkliches Behalten entsteht nur durch das aktive Abrufen von Gedächtnisinhalten (Testing Effect).",
          "Nutze tägliche Fragensets und analysiere deine Fehlversuche mit den Erklärungen unseres KI-Tutors, anstatt seitenweise Skripte auswendig zu lernen.",
        ],
      },
    ],
    tags: ["BMS", "Biologie", "Chemie", "Physik", "Mathematik", "VMC-Katalog", "Lernplan"],
  },
  {
    id: "art-5",
    slug: "tv-sek-emotionen-textverstaendnis",
    index: "05",
    category: "Strategie",
    title: "Textverständnis & SEK: Die unterschätzten 20 % für deinen Studienplatz",
    subtitle: "So nutzt du die Scanning-Methode und das Konsistenz-Prinzip im sozialen Entscheiden.",
    meta: "Praxis-Guide · 6 Min. Lesezeit",
    readTime: "6 Min.",
    publishedDate: "12. Februar 2027",
    author: {
      name: "Dr. Maximilian Gruber",
      role: "MedAT-Cheftutor",
      avatar: "MG",
    },
    summary:
      "Mit jeweils 10 % Gewichtung entscheiden Textverständnis (TV) und Sozial-emotionale Kompetenzen (SEK) oft über die Vergabe der letzten Grenzplätze. So trainierst du Lesegeschwindigkeit und das Erkennen von Emotionen.",
    keyTakeaways: [
      "Textverständnis: 12 Fragen zu anspruchsvollen medizinisch-wissenschaftlichen Texten in 35 Minuten",
      "Scanning-Technik: Lies zuerst die Fragen und Signalwörter, bevor du den Text systematisch scannst",
      "SEK: Besteht aus 'Soziales Entscheiden' (Rechtfertigung von Handlungen) und 'Emotionen regulieren/erkennen'",
      "In SEK zählt nicht persönliches Bauchgefühl, sondern ein konsistentes ethisches Wertesystem",
    ],
    sections: [
      {
        heading: "1. Textverständnis: Strategie schlägt Lesetempo",
        body: [
          "Im TV-Teil scheitern Kandidat:innen fast nie am Verständnis, sondern an der Zeit. Wer den Text wie einen Roman von vorne bis hinten liest, verliert kostbare Minuten.",
          "Effektive Methode: Erst die Fragen und Distraktoren überfliegen, Signalbegriffe markieren, und dann gezielt im Textabschnitt die verifizierbare Textaussage suchen. Niemals eigenes medizinisches Vorwissen in die Bewertung einfließen lassen!",
        ],
      },
      {
        heading: "2. Sozial-emotionale Kompetenzen (SEK)",
        body: [
          "Der SEK-Teil prüft deine Eignung für den ärztlichen Berufsalltag. In 'Soziales Entscheiden' geht es um moralische Dilemmata nach Kohlbergs Stufenmodell der moralischen Entwicklung.",
          "Vermeide opportunistische Antworten ('damit man nicht bestraft wird') und wähle Begründungen, die auf universellen ethischen Prinzipien und dem Patientenwohl basieren.",
        ],
      },
    ],
    tags: ["Textverständnis", "SEK", "Emotionen", "Lesetechnik", "Soziales Entscheiden"],
  },
  {
    id: "art-6",
    slug: "testtag-protokoll-mentale-staerke",
    index: "06",
    category: "Testtag",
    title: "Testtag-Protokoll: Mentale Stärke, Pausenmanagement & Prüfungspsychologie",
    subtitle: "Was in deinen transparenten Plastikbeutel gehört und wie du das Mittagstief in der 60-Minuten-Pause verhinderst.",
    meta: "Checkliste · 5 Min. Lesezeit",
    readTime: "5 Min.",
    publishedDate: "24. Februar 2027",
    author: {
      name: "Sophie Lindner, MSc",
      role: "Prüfungspsychologin",
      avatar: "SL",
    },
    summary:
      "Ein 8-stündiger Testtag in Messehallen mit tausenden Menschen erfordert exzellentes mentales Energiemanagement. Mit der richtigen Ernährung und mentalen Routinen hältst du deine Konzentration bis zur letzten Minute hoch.",
    keyTakeaways: [
      "Messehallen-Akklimatisierung: Geräuschkulisse und Temperaturunterschiede mit Zwiebellook einplanen",
      "Transparentes Sackerl: Nur erlaubte Gegenstände (Ausweis, unbeschriftete Stifte, Verpflegung, Uhr ohne Alarm)",
      "Pausenstrategie: Komplexe Kohlenhydrate, Nüsse und Elektrolyte statt zuckerhaltiger Energy Drinks",
      "Reset-Atemtechnik: Nach jedem Block mental abschließen – kein Nachrechnen vergangener Fragen",
    ],
    sections: [
      {
        heading: "1. Die offizielle Packliste für den Testtag",
        body: [
          "An den Prüfungsorten gelten strenge Einlasskontrollen. Taschen, Rucksäcke und Jacken müssen vor der Halle an der Garderobe abgegeben werden. In die Messehalle darf ausschließlich ein transparenter Plastikbeutel (max. 3 Liter) mitgenommen werden:",
          "• Amtlicher Lichtbildausweis (Original, nicht digital auf dem Smartphone)",
          "• Anmeldebestätigung / Testtageinladung (ausgedruckt)",
          "• Durchsichtige Trinkflasche (ohne Etikett) mit Wasser oder stillem Getränk",
          "• Leichte Snacks (Nüsse, Banane, Vollkornriegel)",
          "• Einfache Armbanduhr (ohne Smart-Funktionen, Stoppuhr-Piepton vorab deaktivieren)",
        ],
        callout: {
          type: "warning",
          title: "Smartphone-Verbot",
          text: "Smartphones und Smartwatches müssen ausgeschaltet an der Garderobe bleiben. Ein Klingeln oder Tragen am Platz führt zur sofortigen Disqualifikation ohne Rückerstattung der Gebühren.",
        },
      },
      {
        heading: "2. Das Pausenmanagement gegen den 'Brain Fog'",
        body: [
          "Nach dem 4-stündigen Vormittagsblock meldet sich die geistige Erschöpfung. Der größte Fehler in der 60-Minuten-Mittagspause ist der Konsum von schnellem Zucker oder Fast Food.",
          "Ein rapider Blutzuckeranstieg führt 30 Minuten später zu einem Insulinpeak und starker Müdigkeit genau dann, wenn KFF startet. Setze auf Haferflocken, Bananen, Mandeln und ausreichend Wasser.",
        ],
      },
    ],
    tags: ["Testtag", "Messe Wien", "Packliste", "Ernährung", "Mentaltraining", "Fokus"],
  },
];
