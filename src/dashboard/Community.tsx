import { useEffect, useMemo, useState } from "react";
import { toast } from "../lib/core";
import {
  DIconBookmark,
  DIconBookmarkFilled,
  DIconChat,
  DIconPlus,
  DIconSearch,
  DIconSparkles,
  DIconTrendUp,
  DIconUser,
} from "./icons";
import { IconArrowRight, IconCheck, IconClose } from "../lib/icons";
import { usePractice } from "./practiceContext";
import { UNIVERSITIES } from "../content/medat/config";

export const TABS = [
  "Diskussionen",
  "Erfolgsgeschichten",
  "Studienplatz-Updates",
  "Hilfe",
] as const;
export type Tab = (typeof TABS)[number];

export interface CommunityReply {
  id: string;
  postId: string;
  author: string;
  initials: string;
  color: string;
  role: string;
  isTutor?: boolean;
  time: string;
  timestamp: number;
  content: string;
  votes: number;
}

export interface CommunityPost {
  id: string;
  tab: Tab;
  author: string;
  initials: string;
  color: string;
  authorRole: string;
  isTutor?: boolean;
  time: string;
  timestamp: number;
  title: string;
  preview: string;
  content?: string;
  tags: string[];
  votes: number;
  answers: number;
}

const STORAGE_POSTS_KEY = "medat_community_posts_v3";
const STORAGE_REPLIES_KEY = "medat_community_replies_v3";
const STORAGE_UPVOTES_KEY = "medat_community_upvotes_v3";
const STORAGE_BOOKMARKS_KEY = "medat_community_bookmarks_v3";

export const POPULAR_TAGS = [
  "KFF",
  "BMS",
  "Biologie",
  "Chemie",
  "Mathematik",
  "Physik",
  "SEK",
  "Textverständnis",
  "Strategie",
  "Zeitdruck",
  "MedUni Wien",
  "MedUni Graz",
  "MedUni Innsbruck",
  "JKU Linz",
  "Lerngruppe",
  "Altfragen",
];

export const CATEGORY_OPTIONS: {
  tab: Tab;
  title: string;
  subtitle: string;
  icon: string;
}[] = [
  {
    tab: "Diskussionen",
    title: "Diskussionen",
    subtitle: "Strategien, Tipps & Austausch",
    icon: "💬",
  },
  {
    tab: "Erfolgsgeschichten",
    title: "Erfolgsgeschichten",
    subtitle: "Erfahrungsberichte & Motivation",
    icon: "🏆",
  },
  {
    tab: "Studienplatz-Updates",
    title: "Updates & Fristen",
    subtitle: "Uni-News, Termine & Quoten",
    icon: "📢",
  },
  {
    tab: "Hilfe",
    title: "Hilfe & Fragen",
    subtitle: "Aufgaben & Fachfragen klären",
    icon: "❓",
  },
];

/* Canonical high-value Seed Posts */
const DEFAULT_POSTS: CommunityPost[] = [
  {
    id: "c1",
    tab: "Diskussionen",
    author: "Lena W.",
    initials: "LW",
    color: "#0F172A",
    authorRole: "Kandidatin · MedUni Wien",
    time: "vor 2 Stunden",
    timestamp: Date.now() - 2 * 3600 * 1000,
    title: "Wie löst man KFF-Figuren am schnellsten?",
    preview:
      "Ich brauche für 10 Figuren-Fragen immer 15 Minuten. Das ist zu langsam für den MedAT. Hat jemand eine Strategie, die wirklich Zeit spart — besonders bei Rotationsaufgaben?",
    content:
      "Ich hänge im KFF-Teil bei Figuren zusammensetzen fest. Für 10 Aufgaben brauche ich im Schnitt 15 Minuten, im echten MedAT hat man aber nur 20 Minuten für 15 Aufgaben (also 80 Sekunden pro Figur inklusive Übertrag!).\n\nBesonders wenn mehrere Dreiecke mit unterschiedlichen Winkeln vorkommen, verliere ich mich im mentalen Rotieren. Wie geht ihr da methodisch vor? Zählt ihr Kanten oder sucht ihr nach Ankerstücken?",
    tags: ["KFF", "Strategie", "Zeitdruck"],
    votes: 24,
    answers: 3,
  },
  {
    id: "c2",
    tab: "Diskussionen",
    author: "Tobias R.",
    initials: "TR",
    color: "#DC2626",
    authorRole: "Kandidat · MedUni Graz",
    time: "vor 5 Stunden",
    timestamp: Date.now() - 5 * 3600 * 1000,
    title: "Chemie-Formelsammlung: Was muss wirklich sitzen?",
    preview:
      "Der BMS-Katalog ist riesig. Welche Formeln kommen gefühlt in jedem Jahrgang dran? Ich dachte an Stoffmenge, pH-Wert und Reaktionsgeschwindigkeit — fehlt was?",
    content:
      "Ich gehe gerade die Altfragen der letzten 4 Jahre durch. Der Stichwortkatalog Chemie ist extrem umfangreich, aber im BMS gibt es bekanntlich keinen Taschenrechner.\n\nWelche mathematischen Formeln muss man wirklich blind beherrschen und wie tief geht das Rechnen mit Logarithmen im pH-Bereich?",
    tags: ["BMS", "Chemie", "Formeln"],
    votes: 18,
    answers: 2,
  },
  {
    id: "c3",
    tab: "Diskussionen",
    author: "Amira K.",
    initials: "AK",
    color: "#8B5CF6",
    authorRole: "Kandidatin · Wien",
    time: "gestern",
    timestamp: Date.now() - 24 * 3600 * 1000,
    title: "Lerngruppe Wien — wer ist dabei?",
    preview:
      "Suche 3–4 Leute für eine wöchentliche Mock-Session (Samstag Vormittag, Bibliothek MedUni Wien). Niveau: Phase 2. Bitte mit kurzer Vorstellung melden!",
    content:
      "Hallo zusammen! Ich bereite mich aktuell auf den MedAT-H in Wien vor und bin mitten in Phase 2 (ca. 70 % Trefferquote im BMS, KFF im Aufbau).\n\nIch suche 3–4 motivierte Leute für eine wöchentliche Lern- und Simulationsgruppe. Fokus: Samstag vormittags in der AKH-Bibliothek oder MedUni Wien Lernzone. Zusammen Zeitmanagement bei KFF trainieren und schwierige Physik-/Chemie-Fragen debriefen. Schreibt gerne kurz euer Level und eure Fächer-Schwerpunkte!",
    tags: ["Wien", "Lerngruppe", "Mock"],
    votes: 31,
    answers: 2,
  },
  {
    id: "c4",
    tab: "Erfolgsgeschichten",
    author: "Jonas M.",
    initials: "JM",
    color: "#10B981",
    authorRole: "Zugelassen · MedUni Wien 2026",
    isTutor: true,
    time: "vor 3 Tagen",
    timestamp: Date.now() - 3 * 86400 * 1000,
    title: "Von 54 % auf 78 % in 8 Wochen — mein Protokoll",
    preview:
      "Ich habe im ersten Mock 54 % erreicht und fast aufgegeben. Dann: täglich 20 Min KFF, Fehlerjournal, ein Full-Mock pro Woche. Beim letzten Mock: 78 %. Hier ist, was wirklich den Unterschied gemacht hat …",
    content:
      "Hi Leute! Ich wollte allen Mut machen, die gerade im 50er- oder 60er-Bereich feststecken. Vor genau einem Jahr stand ich nach meiner ersten Generalprobe bei 54.2 % und war am Boden zerstört.\n\nMein Gamechanger-Protokoll:\n1. Tägliche KFF-Disziplin (jeden Morgen als Erstes 20 Min Zahlenfolgen oder Figuren, noch vor dem Frühstück).\n2. Konsequentes Fehlerheft: Jede falsch beantwortete BMS-Frage wurde in ein separates Notizbuch mit der genauen biologischen/chemischen Ursache eingetragen.\n3. Generalproben im echten Rhythmus: Samstags 08:30 Uhr mit gedrucktem Antwortbogen und Maske/Ohrstöpseln.\n\nAm Ende waren es 78.4 % und Platz 184 in Wien. Ihr packt das auch — Kontinuität schlägt Genialität!",
    tags: ["Motivation", "Erfolg", "Protokoll"],
    votes: 87,
    answers: 2,
  },
  {
    id: "c5",
    tab: "Erfolgsgeschichten",
    author: "Sophie B.",
    initials: "SB",
    color: "#F59E0B",
    authorRole: "Zahnmedizin · MedUni Innsbruck",
    time: "vor 1 Woche",
    timestamp: Date.now() - 7 * 86400 * 1000,
    title: "Studienplatz in Innsbruck — Danke an diese Community",
    preview:
      "Letztes Jahr beim MedAT-Z angetreten, heute im ersten Semester Zahnmedizin. Die Probetests hier waren härter als der echte Test — genau das hat mich ruhig gemacht.",
    content:
      "Ein riesiges Dankeschön an alle hier! Ich habe mich 6 Monate lang neben der Matura auf den MedAT-Z in Innsbruck vorbereitet. Vor allem der MF-Teil (Drahtbiegen & Formen spiegeln) hat mich anfangs verzweifelt gemacht.\n\nTipp für alle Zahnmedizin-Bewerber: Besorgt euch rechtzeitig die Original-Kieferorthopädie-Zange und übt das Biegen mit Stoppuhr. Im echten Test zählt jeder Millimeter!",
    tags: ["Innsbruck", "MedAT-Z", "Erfolg"],
    votes: 142,
    answers: 1,
  },
  {
    id: "c6",
    tab: "Studienplatz-Updates",
    author: "MedAT Prep Team",
    initials: "MP",
    color: "#DC2626",
    authorRole: "Offizielles Redaktionsteam",
    isTutor: true,
    time: "vor 1 Tag",
    timestamp: Date.now() - 24 * 3600 * 1000,
    title: "Anmeldung MedAT: Fristen, Gebühren und Quoten im Überblick",
    preview:
      "Internet-Anmeldung: 1.–31. März · Testtag: Erster Freitag im Juli · Kostenbeteiligung: 110 €. Alle Details und offizielle Links zu den vier Universitäten.",
    content:
      "Wichtige Fristen für alle Bewerber:innen der Human- und Zahnmedizin in Österreich:\n\n• Anmeldezeitraum: 1. März bis 31. März (Ausschlussfrist!)\n• Kostenbeteiligung: 110 Euro pro Bewerber:in\n• Testtermin: Traditionell am ersten Freitag im Juli zeitgleich in Wien, Innsbruck, Graz und Linz.\n• Quotenregelung Humanmedizin: 75 % Österreicher-Quote, 20 % EU-Quote, 5 % Nicht-EU-Quote.\n\nWir halten euch hier im Channel über alle offiziellen Bekanntmachungen auf dem Laufenden.",
    tags: ["Offiziell", "Fristen", "Quoten"],
    votes: 96,
    answers: 1,
  },
  {
    id: "c7",
    tab: "Hilfe",
    author: "Florian S.",
    initials: "FS",
    color: "#2563EB",
    authorRole: "Kandidat · JKU Linz",
    time: "vor 4 Stunden",
    timestamp: Date.now() - 4 * 3600 * 1000,
    title: "Hilfe: Implikationen erkennen — wie formuliert man Kontraposition sicher?",
    preview:
      "Ich verwechsle bei All- und Existenzaussagen immer die logische Negation mit der Umkehrung. Hat jemand einen einfachen Merksatz für die Syllogismen?",
    content:
      "Bei Implikationen erkennen (IE) habe ich ein wiederkehrendes Problem mit Prämissen der Form: 'Alle Ärzte tragen Kittel' vs. 'Wer einen Kittel trägt, ist Arzt'.\n\nWie stellt ihr bei 3 verschachtelten Prämissen in unter 60 Sekunden sicher fest, ob der Schluss formal gültig ist, ohne Euler-Diagramme auf Papier zeichnen zu müssen?",
    tags: ["KFF", "IE", "Logik", "Hilfe"],
    votes: 15,
    answers: 2,
  },
];

/* Canonical high-value Seed Replies */
const DEFAULT_REPLIES: Record<string, CommunityReply[]> = {
  c1: [
    {
      id: "r1-1",
      postId: "c1",
      author: "Dr. med. univ. Lukas",
      initials: "LU",
      color: "#059669",
      role: "MedAT-Tutor (91% Score)",
      isTutor: true,
      time: "vor 1 Stunde",
      timestamp: Date.now() - 3600 * 1000,
      content:
        "Die effektivste Methode ist das **Ausschlussverfahren über markante Kanten**:\n1. Ignoriere die kleinen Dreiecke zuerst.\n2. Suche nach dem größten oder am stärksten asymmetrischen Einzelteil (dem 'Ankerstück').\n3. Prüfe in den 5 Antwortmöglichkeiten, ob dieses Ankerstück überhaupt hineinpassen kann.\n\nIn über 70 % der Aufgaben fallen dadurch sofort 3 falsche Optionen weg, ohne dass du die ganze Figur zusammensetzen musst!",
      votes: 19,
    },
    {
      id: "r1-2",
      postId: "c1",
      author: "Sarah M.",
      initials: "SM",
      color: "#8B5CF6",
      role: "Kandidatin · MedUni Wien",
      time: "vor 45 Minuten",
      timestamp: Date.now() - 45 * 60 * 1000,
      content:
        "Mir hat extrem geholfen: Kein Drehen im Kopf, sondern Fixpunkte zählen! Ich zähle bei rechtwinkligen Teilen einfach die 90°-Winkel. Wenn in den Teilen insgesamt drei 90°-Winkel sind, die Antwortfigur aber nur zwei hat, ist sie sofort raus.",
      votes: 11,
    },
    {
      id: "r1-3",
      postId: "c1",
      author: "Felix H.",
      initials: "FH",
      color: "#D97706",
      role: "Kandidat · Graz",
      time: "vor 20 Minuten",
      timestamp: Date.now() - 20 * 60 * 1000,
      content:
        "Der KFF-Timer hier in der App hat mir die Augen geöffnet. Ich trainiere jetzt jeden Tag 15 Aufgaben und liege mittlerweile bei 16 Minuten. Die Routine bringt den Durchbruch!",
      votes: 4,
    },
  ],
  c2: [
    {
      id: "r2-1",
      postId: "c2",
      author: "Anna K.",
      initials: "AK",
      color: "#DC2626",
      role: "MedAT Alumna (Rang 12)",
      isTutor: true,
      time: "vor 3 Stunden",
      timestamp: Date.now() - 3 * 3600 * 1000,
      content:
        "Hier sind die absoluten Must-Haves, die im MedAT ohne Taschenrechner blind sitzen müssen:\n\n1. **Stoffmenge & Konzentration**: $n = m / M$ und $c = n / V$\n2. **Massenanteil**: $w = m_{\\text{gelöst}} / m_{\\text{gesamt}}$\n3. **pH- & pOH-Wert**: $pH = -\\log[H_3O^+]$ und $pH + pOH = 14$\n4. **Ideales Gasgesetz**: $p \\cdot V = n \\cdot R \\cdot T$ (Molvolumen bei Standardbedingungen = 22.4 L/mol!)\n5. **Verdünnungsformel**: $c_1 \\cdot V_1 = c_2 \\cdot V_2$\n\nWichtig: Übe das Kopfrechnen mit Zehnerpotenzen ($10^{-3}$, $10^{-7}$) und Logarithmen!",
      votes: 27,
    },
    {
      id: "r2-2",
      postId: "c2",
      author: "Tobias R.",
      initials: "TR",
      color: "#DC2626",
      role: "Kandidat · Autor",
      time: "vor 2 Stunden",
      timestamp: Date.now() - 2 * 3600 * 1000,
      content:
        "Danke Anna! Das mit dem Molvolumen von 22.4 L hatte ich fast vergessen. Schreib ich mir direkt auf meine Karteikarte.",
      votes: 6,
    },
  ],
  c3: [
    {
      id: "r3-1",
      postId: "c3",
      author: "David P.",
      initials: "DP",
      color: "#0284C7",
      role: "Kandidat · Wien",
      time: "gestern",
      timestamp: Date.now() - 22 * 3600 * 1000,
      content:
        "Hey Amira! Ich wäre super gerne dabei. Bin aktuell fast täglich in der Hauptuni-Bibliothek und lerne Vollzeit. Stehe bei BMS bei ~74 % und würde mich riesig über gemeinsamen KFF- und SEK-Austausch freuen!",
      votes: 7,
    },
    {
      id: "r3-2",
      postId: "c3",
      author: "Laura T.",
      initials: "LT",
      color: "#EC4899",
      role: "Kandidatin · Wien",
      time: "vor 18 Stunden",
      timestamp: Date.now() - 18 * 3600 * 1000,
      content:
        "Ich würde mich auch anschließen! Habe einen Discord-Server für die Wiener Gruppe eingerichtet, falls wir Termine koordinieren wollen. Schicke dir eine Nachricht!",
      votes: 5,
    },
  ],
  c4: [
    {
      id: "r4-1",
      postId: "c4",
      author: "Maximilian V.",
      initials: "MV",
      color: "#475569",
      role: "Kandidat · Phase 1",
      time: "vor 2 Tagen",
      timestamp: Date.now() - 2 * 86400 * 1000,
      content:
        "Unglaublich motivierend, danke Jonas! Wie viele Stunden pro Tag hast du in den letzten 8 Wochen gelernt?",
      votes: 12,
    },
    {
      id: "r4-2",
      postId: "c4",
      author: "Jonas M.",
      initials: "JM",
      color: "#10B981",
      role: "Autor",
      isTutor: true,
      time: "vor 1 Tag",
      timestamp: Date.now() - 86400 * 1000,
      content:
        "Es waren im Schnitt 4 bis 5 Stunden reines konzentriertes Arbeiten (Pomodoro-Technik: 50 Min Fokus, 10 Min Pause). Nicht 10 Stunden halbhier rumsitzen, sondern echte Intensität und das Fehlerheft wiederholen!",
      votes: 16,
    },
  ],
  c5: [
    {
      id: "r5-1",
      postId: "c5",
      author: "Elena K.",
      initials: "EK",
      color: "#7C3AED",
      role: "Bewerberin MedAT-Z",
      time: "vor 5 Tagen",
      timestamp: Date.now() - 5 * 86400 * 1000,
      content:
        "Herzlichen Glückwunsch! Wie viele Versuche hattest du beim Drahtbiegen vor dem Test gemacht?",
      votes: 8,
    },
  ],
  c6: [
    {
      id: "r6-1",
      postId: "c6",
      author: "Kevin S.",
      initials: "KS",
      color: "#0F172A",
      role: "Kandidat · Innsbruck",
      time: "vor 20 Stunden",
      timestamp: Date.now() - 20 * 3600 * 1000,
      content:
        "Wichtiger Hinweis: Vergesst nicht, die Überweisungsbestätigung der 110 Euro abzuspeichern! Letztes Jahr gab es bei einigen Banken Buchungsverzögerungen.",
      votes: 14,
    },
  ],
  c7: [
    {
      id: "r7-1",
      postId: "c7",
      author: "Dr. med. univ. Lukas",
      initials: "LU",
      color: "#059669",
      role: "MedAT-Tutor (91% Score)",
      isTutor: true,
      time: "vor 3 Stunden",
      timestamp: Date.now() - 3 * 3600 * 1000,
      content:
        "Merke dir für Implikationen immer die **Kontraposition**:\n\nAus $A \\rightarrow B$ folgt logisch zwingend nur $\\neg B \\rightarrow \\neg A$ ('Nicht-B impliziert Nicht-A').\n\nBeispiel:\n• 'Wenn jemand MedAT-Arzt ist, hat er Matura.'\n• Kontraposition: 'Wer keine Matura hat, ist kein MedAT-Arzt.' (GÜLTIG!)\n• Fehlschluss: 'Wer Matura hat, ist MedAT-Arzt.' (UNGÜLTIG!).\n\nPrüfe bei jeder IE-Aufgabe sofort die Kontraposition — das löst 80 % der Aufgaben in unter 30 Sekunden!",
      votes: 21,
    },
    {
      id: "r7-2",
      postId: "c7",
      author: "Florian S.",
      initials: "FS",
      color: "#2563EB",
      role: "Autor",
      time: "vor 2 Stunden",
      timestamp: Date.now() - 2 * 3600 * 1000,
      content:
        "Bester Tipp des Tages! Mit der Umkehrung des Pfeils und doppelter Verneinung wird es plötzlich glasklar. Danke Lukas!",
      votes: 8,
    },
  ],
};

export default function Community() {
  const { userProfile } = usePractice();

  // Active state
  const [tab, setTab] = useState<Tab>("Diskussionen");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string>("Alle");
  const [sortBy, setSortBy] = useState<"newest" | "votes" | "answers">("newest");
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

  // New post modal state
  const [modal, setModal] = useState(false);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [postTab, setPostTab] = useState<Tab>("Diskussionen");
  const [selectedTags, setSelectedTags] = useState<string[]>(["KFF", "Strategie"]);
  const [customTagInput, setCustomTagInput] = useState("");

  // Comment input state
  const [replyText, setReplyText] = useState("");

  // Persistent posts state
  const [posts, setPosts] = useState<CommunityPost[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_POSTS_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch {}
    return DEFAULT_POSTS;
  });

  // Persistent replies state
  const [replies, setReplies] = useState<Record<string, CommunityReply[]>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_REPLIES_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && typeof parsed === "object") return parsed;
      }
    } catch {}
    return DEFAULT_REPLIES;
  });

  // Persistent upvotes state
  const [upvoted, setUpvoted] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_UPVOTES_KEY);
      if (saved) return new Set(JSON.parse(saved));
    } catch {}
    return new Set();
  });

  // Persistent bookmarks state
  const [bookmarks, setBookmarks] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_BOOKMARKS_KEY);
      if (saved) return new Set(JSON.parse(saved));
    } catch {}
    return new Set();
  });

  // Save changes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_POSTS_KEY, JSON.stringify(posts));
    } catch {}
  }, [posts]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_REPLIES_KEY, JSON.stringify(replies));
    } catch {}
  }, [replies]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_UPVOTES_KEY, JSON.stringify([...upvoted]));
    } catch {}
  }, [upvoted]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_BOOKMARKS_KEY, JSON.stringify([...bookmarks]));
    } catch {}
  }, [bookmarks]);

  // Modal ESC handler
  useEffect(() => {
    if (!modal) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setModal(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [modal]);

  // Compute initials for current user
  const userInitials = useMemo(() => {
    const name = userProfile?.name || "Student:in";
    const parts = name.trim().split(" ");
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  }, [userProfile?.name]);

  const targetUniMeta = UNIVERSITIES[userProfile?.targetUniversity] || UNIVERSITIES.undecided;
  const userRoleBadge = `${userProfile?.examType || "MEDAT-H"} · ${targetUniMeta.shortName}`;

  // Upvote toggle
  const toggleVote = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setUpvoted((prev) => {
      const next = new Set(prev);
      const isUpvoted = next.has(id);
      if (isUpvoted) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  // Bookmark toggle
  const toggleBookmark = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setBookmarks((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
        toast("Aus Merkliste entfernt.", "info");
      } else {
        next.add(id);
        toast("Diskussion gespeichert!", "success");
      }
      return next;
    });
  };

  // Modal helper
  const openNewDiscussionModal = (initialTab?: Tab) => {
    setPostTab(initialTab || tab);
    setModal(true);
  };

  // Tag selection helpers
  const toggleModalTag = (tag: string) => {
    setSelectedTags((prev) => {
      if (prev.includes(tag)) {
        return prev.filter((t) => t !== tag);
      }
      if (prev.length >= 6) {
        toast("Maximal 6 Tags pro Diskussion erlaubt.", "info");
        return prev;
      }
      return [...prev, tag];
    });
  };

  const handleAddCustomTag = () => {
    const clean = customTagInput.trim().replace(/^#/, "");
    if (!clean) return;
    if (clean.length > 25) {
      toast("Tag darf maximal 25 Zeichen lang sein.", "error");
      return;
    }
    if (selectedTags.includes(clean)) {
      toast("Dieser Tag ist bereits ausgewählt.", "info");
      setCustomTagInput("");
      return;
    }
    if (selectedTags.length >= 6) {
      toast("Maximal 6 Tags pro Diskussion erlaubt.", "info");
      return;
    }
    setSelectedTags((prev) => [...prev, clean]);
    setCustomTagInput("");
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setSelectedTags((prev) => prev.filter((t) => t !== tagToRemove));
  };

  const insertFormatting = (prefix: string, suffix: string = prefix) => {
    setPostBody((prev) => (prev ? `${prev} ${prefix}Text${suffix}` : `${prefix}Text${suffix}`));
  };

  const insertQuestionTemplate = () => {
    setPostBody((prev) => {
      const template = `\n\n📌 Mein Ansatz:\n- \n\n❓ Meine konkrete Frage:\n- `;
      return prev ? `${prev}${template}` : template.trim();
    });
  };

  // Submit new post
  const submitPost = () => {
    if (postTitle.trim().length < 5) {
      toast("Titel zu kurz — mindestens 5 aussagekräftige Zeichen erforderlich.", "error");
      return;
    }

    const tagList =
      selectedTags.length > 0
        ? selectedTags
        : [postTab === "Hilfe" ? "Hilfe" : "Allgemein"];

    const newPost: CommunityPost = {
      id: `post-${Date.now()}`,
      tab: postTab,
      author: userProfile.name || "Student:in",
      initials: userInitials,
      color: "#DC2626",
      authorRole: userRoleBadge,
      time: "gerade eben",
      timestamp: Date.now(),
      title: postTitle.trim(),
      preview: postBody.trim() || "Keine Beschreibung — die Community diskutiert.",
      content: postBody.trim() || undefined,
      tags: tagList,
      votes: 0,
      answers: 0,
    };

    setPosts((prev) => [newPost, ...prev]);
    setUpvoted((prev) => new Set(prev).add(newPost.id));
    setModal(false);
    setPostTitle("");
    setPostBody("");
    setSelectedTags(["KFF", "Strategie"]);
    setCustomTagInput("");
    setTab(postTab);
    toast("Deine Diskussion ist live! 🎉", "success");
  };

  // Submit reply to a post
  const submitReply = (postId: string) => {
    if (replyText.trim().length < 3) {
      toast("Bitte gib eine aussagekräftige Antwort ein.", "error");
      return;
    }

    const newReply: CommunityReply = {
      id: `reply-${Date.now()}`,
      postId,
      author: userProfile.name || "Student:in",
      initials: userInitials,
      color: "#DC2626",
      role: userRoleBadge,
      time: "gerade eben",
      timestamp: Date.now(),
      content: replyText.trim(),
      votes: 0,
    };

    // Add reply
    setReplies((prev) => ({
      ...prev,
      [postId]: [...(prev[postId] || []), newReply],
    }));

    // Increment post answers count
    setPosts((prev) =>
      prev.map((p) => (p.id === postId ? { ...p, answers: p.answers + 1 } : p))
    );

    setUpvoted((prev) => new Set(prev).add(newReply.id));
    setReplyText("");
    toast("Deine Antwort wurde veröffentlicht! 💬", "success");
  };

  // Collect all available tags
  const allTags = useMemo(() => {
    const set = new Set<string>();
    posts.forEach((p) => p.tags.forEach((t) => set.add(t)));
    return ["Alle", ...Array.from(set)];
  }, [posts]);

  // Filtered and sorted posts
  const visiblePosts = useMemo(() => {
    return posts
      .filter((p) => {
        // Tab filter
        if (p.tab !== tab) return false;
        // Search query filter
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchTitle = p.title.toLowerCase().includes(q);
          const matchPreview = p.preview.toLowerCase().includes(q);
          const matchAuthor = p.author.toLowerCase().includes(q);
          const matchTag = p.tags.some((t) => t.toLowerCase().includes(q));
          if (!matchTitle && !matchPreview && !matchAuthor && !matchTag) return false;
        }
        // Tag filter
        if (selectedTag !== "Alle") {
          if (!p.tags.includes(selectedTag)) return false;
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === "votes") {
          const aVotes = a.votes + (upvoted.has(a.id) ? 1 : 0);
          const bVotes = b.votes + (upvoted.has(b.id) ? 1 : 0);
          return bVotes - aVotes;
        }
        if (sortBy === "answers") {
          return b.answers - a.answers;
        }
        return b.timestamp - a.timestamp;
      });
  }, [posts, tab, searchQuery, selectedTag, sortBy, upvoted]);

  // Selected post object for thread view
  const currentPost = useMemo(() => {
    if (!selectedPostId) return null;
    return posts.find((p) => p.id === selectedPostId) || null;
  }, [posts, selectedPostId]);

  const currentPostReplies = useMemo(() => {
    if (!selectedPostId) return [];
    return replies[selectedPostId] || [];
  }, [replies, selectedPostId]);

  /* =================================================================
     VIEW 1: THREAD DETAIL VIEW (WHEN A POST IS CLICKED)
     ================================================================= */
  if (currentPost) {
    const isPostVoted = upvoted.has(currentPost.id);
    const isBookmarked = bookmarks.has(currentPost.id);
    const postVotesCount = currentPost.votes + (isPostVoted ? 1 : 0);

    return (
      <div className="animate-screen-in space-y-6 pb-24 pt-2 max-w-4xl mx-auto">
        {/* Back navigation bar */}
        <div className="flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => setSelectedPostId(null)}
            className="flex items-center gap-2 rounded-xl border border-line bg-paper px-3.5 py-2 text-xs font-bold text-ink hover:bg-slate-50 transition-colors shadow-2xs cursor-pointer"
          >
            <span>←</span>
            <span>Zurück zu allen Diskussionen</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-primary bg-primary-subtle px-2.5 py-1 rounded-lg">
              {currentPost.tab}
            </span>
          </div>
        </div>

        {/* Main Post Card */}
        <article className="rounded-3xl border border-line bg-paper p-6 sm:p-8 shadow-xs space-y-6">
          {/* Author Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-line/80">
            <div className="flex items-center gap-3">
              <span
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-xs font-black text-white shadow-xs"
                style={{ background: currentPost.color }}
              >
                {currentPost.initials}
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[15px] font-bold text-ink">{currentPost.author}</span>
                  {currentPost.isTutor && (
                    <span className="flex items-center gap-1 rounded-full bg-emerald-50 border border-emerald-200 px-2 py-0.5 text-[10.5px] font-bold text-emerald-800">
                      <IconCheck className="h-3 w-3 text-emerald-600" />
                      Tutor
                    </span>
                  )}
                </div>
                <p className="text-xs text-ink-3">
                  {currentPost.authorRole} · {currentPost.time}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={(e) => toggleBookmark(currentPost.id, e)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                  isBookmarked
                    ? "bg-amber-50 text-amber-900 border-amber-300"
                    : "bg-paper text-ink-3 border-line hover:text-ink"
                }`}
              >
                {isBookmarked ? (
                  <>
                    <DIconBookmarkFilled className="h-3.5 w-3.5 text-amber-500" />
                    <span>Gemerkt</span>
                  </>
                ) : (
                  <>
                    <DIconBookmark className="h-3.5 w-3.5 text-slate-400" />
                    <span>Merken</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Post Title & Content */}
          <div className="space-y-4">
            <h1 className="text-[22px] sm:text-[26px] font-black leading-snug text-ink">
              {currentPost.title}
            </h1>
            <div className="text-[15px] leading-relaxed text-slate-700 whitespace-pre-line font-normal">
              {currentPost.content || currentPost.preview}
            </div>
          </div>

          {/* Tags & Action Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-line/60">
            <div className="flex flex-wrap gap-1.5">
              {currentPost.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-paper-3 px-3 py-1 text-xs font-bold text-slate-700 border border-line/70"
                >
                  #{t}
                </span>
              ))}
            </div>

            <button
              type="button"
              onClick={() => toggleVote(currentPost.id)}
              className={`flex items-center gap-2 rounded-xl border px-4 py-2 transition-all cursor-pointer ${
                isPostVoted
                  ? "border-primary bg-primary-subtle text-primary ring-2 ring-primary/20 shadow-xs"
                  : "border-line bg-paper text-slate-700 hover:border-primary/50 hover:text-primary"
              }`}
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m5 14 7-7 7 7" />
              </svg>
              <span className="text-xs font-bold">Hilfreich ({postVotesCount})</span>
            </button>
          </div>
        </article>

        {/* ─── Answers & Discussion Section ─── */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-[18px] font-bold text-ink">
              Antworten & Diskussionen ({currentPostReplies.length})
            </h2>
            <span className="text-xs font-semibold text-slate-400">
              Antworten werden live synchronisiert
            </span>
          </div>

          {/* Existing Replies List */}
          {currentPostReplies.length > 0 ? (
            <div className="space-y-3.5">
              {currentPostReplies.map((reply) => {
                const isReplyVoted = upvoted.has(reply.id);
                const replyVotesCount = reply.votes + (isReplyVoted ? 1 : 0);

                return (
                  <div
                    key={reply.id}
                    className="rounded-2xl border border-line bg-paper p-5 sm:p-6 shadow-2xs space-y-3 transition-colors hover:border-slate-300"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <span
                          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-xs font-black text-white"
                          style={{ background: reply.color }}
                        >
                          {reply.initials}
                        </span>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-bold text-ink">{reply.author}</span>
                            {reply.isTutor && (
                              <span className="flex items-center gap-1 rounded-full bg-emerald-50 border border-emerald-200 px-2 py-0.5 text-[10px] font-bold text-emerald-800">
                                <IconCheck className="h-2.5 w-2.5 text-emerald-600" />
                                Tutor
                              </span>
                            )}
                          </div>
                          <p className="text-[11.5px] text-ink-3">
                            {reply.role} · {reply.time}
                          </p>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => toggleVote(reply.id)}
                        className={`flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-xs font-bold transition-all cursor-pointer ${
                          isReplyVoted
                            ? "border-primary bg-primary-subtle text-primary"
                            : "border-line bg-paper text-slate-600 hover:border-slate-300"
                        }`}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          className="h-3 w-3"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m5 14 7-7 7 7" />
                        </svg>
                        <span>{replyVotesCount}</span>
                      </button>
                    </div>

                    <div className="text-[14px] leading-relaxed text-slate-800 whitespace-pre-line pl-12">
                      {reply.content}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-line bg-paper-3/40 p-8 text-center space-y-2">
              <p className="text-sm font-bold text-ink">Noch keine Antworten</p>
              <p className="text-xs text-ink-3">
                Sei der Erste, der Lena auf ihre Frage antwortet und der Community hilft!
              </p>
            </div>
          )}

          {/* ─── Reply Input Form ─── */}
          <div className="rounded-2xl border border-line bg-paper p-5 sm:p-6 shadow-xs space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary text-white font-bold text-xs">
                {userInitials}
              </span>
              <span className="text-xs font-bold text-slate-700">
                Als <strong className="text-ink">{userProfile.name || "Kandidat:in"}</strong> antworten
              </span>
            </div>

            <textarea
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              rows={3}
              placeholder="Schreibe deinen Lösungsvorschlag, deine Strategie oder teile deine Erfahrung..."
              className="w-full rounded-xl border border-line p-3 text-[14px] text-ink placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />

            <div className="flex items-center justify-between gap-3 pt-1">
              <span className="text-[11.5px] text-slate-400">
                Markdown & Formeln werden unterstützt
              </span>
              <button
                type="button"
                onClick={() => submitReply(currentPost.id)}
                className="btn btn-primary btn-sm text-xs font-bold cursor-pointer"
              >
                Antwort veröffentlichen →
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  /* =================================================================
     VIEW 2: MAIN COMMUNITY FEED & DISCUSSIONS LIST
     ================================================================= */
  return (
    <div className="animate-screen-in space-y-6 pb-24 pt-2">
      {/* ─── Header & Value Proposition ─── */}
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="rounded-md bg-primary-subtle px-2.5 py-0.5 text-[11px] font-black uppercase tracking-wider text-primary">
              MedATPrep Community
            </span>
            <span className="flex items-center gap-1.5 rounded-md bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 text-[11px] font-bold text-emerald-800">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Live & Aktiv
            </span>
          </div>
          <h1 className="display text-[30px] sm:text-[34px] text-ink">COMMUNITY</h1>
          <p className="mt-0.5 text-[14.5px] text-ink-3">
            13.248 Kandidat:innen, ein Ziel. Ihr müsst das nicht alleine durchziehen.
          </p>
        </div>

        <button
          type="button"
          onClick={() => openNewDiscussionModal()}
          className="btn btn-primary flex items-center gap-2 shadow-cta cursor-pointer"
        >
          <DIconPlus className="h-4 w-4" />
          <span>Neue Diskussion starten</span>
        </button>
      </div>

      {/* ─── Category Tabs ─── */}
      <div
        className="flex gap-1 overflow-x-auto rounded-2xl bg-slate-100 p-1.5 scrollbar-none"
        role="tablist"
        aria-label="Community-Bereiche"
      >
        {TABS.map((t) => (
          <button
            key={t}
            role="tab"
            aria-selected={tab === t}
            onClick={() => setTab(t)}
            className={`whitespace-nowrap rounded-xl px-4 py-2 text-[13px] font-bold transition-all cursor-pointer ${
              tab === t
                ? "bg-paper text-ink shadow-xs"
                : "text-slate-500 hover:text-ink hover:bg-slate-200/50"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* ─── Search, Filter Tags & Sort Bar ─── */}
      <div className="rounded-2xl border border-line bg-paper p-4 shadow-2xs space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          {/* Search Bar */}
          <div className="relative flex-1 min-w-[260px]">
            <DIconSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Diskussionen, Themen oder Fragen suchen..."
              className="w-full rounded-xl border border-line bg-paper-3/40 pl-10 pr-4 py-2 text-xs font-medium text-ink placeholder:text-slate-400 focus:border-primary focus:bg-white focus:outline-none"
            />
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-2 text-xs">
            <span className="font-bold text-slate-400">Sortieren:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="rounded-lg border border-line bg-paper px-2.5 py-1.5 text-xs font-bold text-slate-700 focus:outline-none cursor-pointer"
            >
              <option value="newest">Neueste Beiträge</option>
              <option value="votes">Meiste Upvotes</option>
              <option value="answers">Meiste Antworten</option>
            </select>
          </div>
        </div>

        {/* Tag Chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto pt-1 scrollbar-none">
          {allTags.map((tagItem) => (
            <button
              key={tagItem}
              type="button"
              onClick={() => setSelectedTag(tagItem)}
              className={`rounded-lg px-2.5 py-1 text-[11.5px] font-bold transition-all cursor-pointer ${
                selectedTag === tagItem
                  ? "bg-slate-900 text-white shadow-2xs"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {tagItem}
            </button>
          ))}
        </div>
      </div>

      {/* ─── Posts Feed ─── */}
      {visiblePosts.length > 0 ? (
        <div className="space-y-3.5">
          {visiblePosts.map((p) => {
            const isVoted = upvoted.has(p.id);
            const isBookmarked = bookmarks.has(p.id);
            const votesCount = p.votes + (isVoted ? 1 : 0);

            return (
              <article
                key={p.id}
                onClick={() => setSelectedPostId(p.id)}
                className="card-lift group flex items-start gap-4 rounded-3xl border border-line bg-paper p-5 sm:p-6 transition-all hover:border-slate-300 hover:shadow-md cursor-pointer"
              >
                {/* Upvote Button */}
                <button
                  type="button"
                  onClick={(e) => toggleVote(p.id, e)}
                  aria-pressed={isVoted}
                  className={`flex h-fit shrink-0 flex-col items-center gap-0.5 rounded-2xl border px-3 py-2.5 transition-all duration-200 cursor-pointer ${
                    isVoted
                      ? "border-primary bg-primary-subtle text-primary ring-2 ring-primary/20 shadow-2xs"
                      : "border-line bg-paper text-slate-500 hover:border-primary hover:text-primary hover:bg-red-50/20"
                  }`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m5 14 7-7 7 7" />
                  </svg>
                  <span className="num text-[13px] font-black">{votesCount}</span>
                </button>

                {/* Post Content */}
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <span
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl text-[10.5px] font-black text-white"
                        style={{ background: p.color }}
                      >
                        {p.initials}
                      </span>
                      <p className="truncate text-xs font-medium text-slate-500">
                        <span className="font-bold text-slate-900">{p.author}</span>
                        {p.isTutor && (
                          <span className="ml-1 text-[10px] font-black text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded border border-emerald-200">
                            Tutor
                          </span>
                        )}
                        {" · "}
                        <span>{p.time}</span>
                        {" · "}
                        <strong className="text-slate-700">{p.answers} Antworten</strong>
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={(e) => toggleBookmark(p.id, e)}
                      className="p-1 rounded-lg text-slate-300 hover:text-amber-500 hover:bg-slate-50 transition-colors"
                      title={isBookmarked ? "Gespeichert" : "Speichern"}
                    >
                      {isBookmarked ? (
                        <DIconBookmarkFilled className="h-4 w-4 text-amber-500" />
                      ) : (
                        <DIconBookmark className="h-4 w-4" />
                      )}
                    </button>
                  </div>

                  <h3 className="mt-2 text-[16.5px] font-bold leading-snug text-ink transition-colors group-hover:text-primary">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 line-clamp-2 text-[13.5px] leading-relaxed text-slate-600">
                    {p.preview}
                  </p>

                  <div className="mt-3.5 flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap gap-1.5">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-bold text-slate-600 border border-slate-200/50"
                        >
                          #{t}
                        </span>
                      ))}
                    </div>

                    <span className="text-xs font-bold text-primary group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                      <span>Diskussion ansehen</span>
                      <span>→</span>
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <div className="rounded-3xl border border-dashed border-line bg-paper p-12 text-center space-y-4">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-subtle text-primary">
            <DIconChat className="h-6 w-6" />
          </div>
          <div className="max-w-md mx-auto">
            <h2 className="text-[18px] font-bold text-ink">
              {searchQuery ? "Keine Ergebnisse für deine Suche" : "Noch keine Beiträge in diesem Bereich"}
            </h2>
            <p className="mt-1.5 text-xs text-ink-3 leading-relaxed">
              {searchQuery
                ? `Versuche einen anderen Suchbegriff oder setze den Tag-Filter zurück.`
                : `Sei die oder der Erste und starte eine neue Diskussion in „${tab}“!`}
            </p>
          </div>
          <button
            type="button"
            onClick={() => {
              setSearchQuery("");
              setSelectedTag("Alle");
              openNewDiscussionModal();
            }}
            className="btn btn-primary btn-sm"
          >
            Neue Diskussion starten
          </button>
        </div>
      )}

      {/* ─── Floating Action Button (FAB) ─── */}
      <button
        type="button"
        onClick={() => openNewDiscussionModal()}
        className="fixed bottom-6 right-6 z-30 flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-[14px] font-bold text-white shadow-xl transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-[0_8px_24px_rgba(220,38,38,0.35)] cursor-pointer"
      >
        <DIconPlus className="h-4 w-4" />
        <span>Neue Diskussion starten</span>
      </button>

      {/* ─── New Post Modal (Modern & User-Friendly) ─── */}
      {modal && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-3 sm:p-4 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Neue Diskussion"
          onClick={(e) => {
            if (e.target === e.currentTarget) setModal(false);
          }}
        >
          <div
            className="animate-pop-in relative w-full max-w-2xl my-auto rounded-3xl border border-line bg-paper shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-line/70 px-6 py-5 bg-paper">
              <div className="flex items-center gap-3.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary text-white font-black text-sm shadow-sm ring-4 ring-primary/10">
                  {userInitials}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wide text-primary bg-primary-subtle px-2 py-0.5 rounded-md">
                      Community-Beitrag
                    </span>
                    <span className="text-[11.5px] font-semibold text-ink-3">
                      Als <strong className="text-ink">{userProfile.name || "Student:in"}</strong> ({userRoleBadge})
                    </span>
                  </div>
                  <h2 className="text-[19px] sm:text-[21px] font-black text-ink leading-tight mt-0.5">
                    Neue Diskussion starten
                  </h2>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setModal(false)}
                className="rounded-2xl p-2 text-slate-400 hover:bg-slate-100 hover:text-ink transition-colors cursor-pointer"
                aria-label="Schließen"
                title="Schließen (Esc)"
              >
                <IconClose className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="overflow-y-auto px-6 py-5 sm:px-8 space-y-6 scrollbar-thin">
              {/* Step 1: Bereich wählen (Rich Cards) */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  1. Bereich wählen
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {CATEGORY_OPTIONS.map((cat) => {
                    const isSelected = postTab === cat.tab;
                    return (
                      <button
                        key={cat.tab}
                        type="button"
                        onClick={() => setPostTab(cat.tab)}
                        className={`flex items-start gap-3 p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                          isSelected
                            ? "border-primary bg-primary/5 ring-2 ring-primary/20 shadow-xs"
                            : "border-line bg-paper hover:border-slate-300 hover:bg-slate-50/70"
                        }`}
                      >
                        <span className="text-2xl shrink-0 mt-0.5 leading-none">
                          {cat.icon}
                        </span>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-1">
                            <span
                              className={`text-xs font-bold ${
                                isSelected ? "text-primary" : "text-ink"
                              }`}
                            >
                              {cat.title}
                            </span>
                            {isSelected && (
                              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-primary text-white text-[10px] font-bold">
                                ✓
                              </span>
                            )}
                          </div>
                          <p className="text-[11.5px] text-ink-3 leading-snug mt-0.5">
                            {cat.subtitle}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Titel */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label htmlFor="post-title" className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    2. Titel der Diskussion
                  </label>
                  <div className="flex items-center gap-2 text-[11px]">
                    {postTitle.trim().length >= 5 ? (
                      <span className="flex items-center gap-1 font-bold text-emerald-600">
                        <IconCheck className="h-3 w-3" />
                        Guter Titel
                      </span>
                    ) : (
                      <span className="text-ink-3">
                        Mind. 5 Zeichen (noch {Math.max(0, 5 - postTitle.trim().length)})
                      </span>
                    )}
                    <span className="font-mono text-slate-400">
                      {postTitle.length}/120
                    </span>
                  </div>
                </div>
                <input
                  id="post-title"
                  type="text"
                  maxLength={120}
                  value={postTitle}
                  onChange={(e) => setPostTitle(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
                      e.preventDefault();
                      submitPost();
                    }
                  }}
                  placeholder="z. B. Welche Strategie nutzt ihr bei KFF-Zahlenfolgen unter Zeitdruck?"
                  className="w-full rounded-2xl border border-line bg-paper px-4 py-3 text-[14px] text-ink placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                />
              </div>

              {/* Step 3: Beschreibung & Fragestellung */}
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                  <label htmlFor="post-body" className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    3. Beschreibung & Details <span className="text-ink-3 font-normal normal-case">(optional)</span>
                  </label>

                  {/* Formatting Toolbar */}
                  <div className="flex items-center gap-1 rounded-xl bg-slate-100 p-1 text-[11.5px]">
                    <button
                      type="button"
                      onClick={() => insertFormatting("**")}
                      className="px-2 py-1 rounded-lg font-bold text-slate-700 hover:bg-paper hover:text-ink transition-colors cursor-pointer"
                      title="Fett formatieren"
                    >
                      B
                    </button>
                    <button
                      type="button"
                      onClick={() => insertFormatting("*")}
                      className="px-2 py-1 rounded-lg italic text-slate-700 hover:bg-paper hover:text-ink transition-colors cursor-pointer"
                      title="Kursiv formatieren"
                    >
                      I
                    </button>
                    <button
                      type="button"
                      onClick={() => insertFormatting("`")}
                      className="px-2 py-1 rounded-lg font-mono text-slate-700 hover:bg-paper hover:text-ink transition-colors cursor-pointer"
                      title="Code / Formel"
                    >
                      fx
                    </button>
                    <button
                      type="button"
                      onClick={() => insertFormatting("\n- ")}
                      className="px-2 py-1 rounded-lg text-slate-700 hover:bg-paper hover:text-ink transition-colors cursor-pointer"
                      title="Aufzählungspunkt"
                    >
                      • Liste
                    </button>
                    <span className="h-3 w-px bg-slate-300 mx-0.5" />
                    <button
                      type="button"
                      onClick={insertQuestionTemplate}
                      className="px-2 py-1 rounded-lg font-semibold text-primary hover:bg-paper transition-colors cursor-pointer"
                      title="Struktur-Vorlage einfügen"
                    >
                      📋 Vorlage
                    </button>
                  </div>
                </div>

                <textarea
                  id="post-body"
                  value={postBody}
                  onChange={(e) => setPostBody(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
                      e.preventDefault();
                      submitPost();
                    }
                  }}
                  rows={4}
                  placeholder="Beschreibe deinen aktuellen Ansatz, was dir schwerfällt oder welche Frage du genau an die Community hast..."
                  className="w-full rounded-2xl border border-line bg-paper p-4 text-[13.5px] leading-relaxed text-ink placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-normal"
                />
              </div>

              {/* Step 4: Tags festlegen (Chips + Custom Tag Input) */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    4. Themen-Tags wählen
                  </label>
                  <span className="text-[11px] text-ink-3">
                    {selectedTags.length}/6 Tags gewählt
                  </span>
                </div>

                {/* Selected Tags Chips */}
                <div className="min-h-[38px] p-2.5 rounded-2xl border border-line bg-slate-50/80 flex flex-wrap items-center gap-1.5 mb-2.5">
                  {selectedTags.length === 0 ? (
                    <span className="text-xs text-slate-400 italic px-1">
                      Klicke unten auf ein Thema oder gib eigene Tags ein...
                    </span>
                  ) : (
                    selectedTags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1.5 rounded-xl bg-paper px-2.5 py-1 text-xs font-bold text-ink border border-line shadow-2xs group"
                      >
                        <span className="text-primary font-black">#</span>
                        <span>{tag}</span>
                        <button
                          type="button"
                          onClick={() => handleRemoveTag(tag)}
                          className="text-slate-400 hover:text-rose-600 transition-colors cursor-pointer rounded-full p-0.5"
                          title={`${tag} entfernen`}
                        >
                          ✕
                        </button>
                      </span>
                    ))
                  )}
                </div>

                {/* Popular Tags Quick-Pick */}
                <div className="space-y-1.5">
                  <span className="text-[11px] font-bold text-slate-500">
                    Häufige MedAT-Schwerpunkte:
                  </span>
                  <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto pr-1">
                    {POPULAR_TAGS.map((tag) => {
                      const isChosen = selectedTags.includes(tag);
                      return (
                        <button
                          key={tag}
                          type="button"
                          onClick={() => toggleModalTag(tag)}
                          className={`rounded-xl px-2.5 py-1 text-[11.5px] font-bold border transition-all cursor-pointer ${
                            isChosen
                              ? "border-primary bg-primary text-white shadow-xs"
                              : "border-line bg-paper text-slate-600 hover:border-slate-300 hover:bg-slate-100"
                          }`}
                        >
                          {isChosen ? `✓ ${tag}` : `+ ${tag}`}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Custom Tag Input */}
                <div className="mt-2.5 flex gap-2">
                  <input
                    type="text"
                    value={customTagInput}
                    onChange={(e) => setCustomTagInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        handleAddCustomTag();
                      }
                    }}
                    placeholder="Eigenen Tag eingeben (z. B. Physik, MedUni Graz)..."
                    maxLength={25}
                    className="flex-1 rounded-xl border border-line bg-paper px-3.5 py-2 text-xs text-ink placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/20"
                  />
                  <button
                    type="button"
                    onClick={handleAddCustomTag}
                    className="btn btn-secondary btn-sm px-3.5 text-xs font-bold cursor-pointer"
                  >
                    + Tag hinzufügen
                  </button>
                </div>
              </div>

              {/* MedAT Community Tip Callout */}
              <div className="rounded-2xl border border-sky-200/80 bg-sky-50/70 p-3.5 sm:p-4 text-xs text-sky-950 flex items-start gap-3">
                <span className="text-xl shrink-0 mt-0.5">💡</span>
                <p className="leading-relaxed">
                  <strong>Tipp für beste Antworten:</strong> Fragen mit konkreten Übungsbeispielen oder Zwischenschritten erhalten im MedAT-Forum durchschnittlich <strong>3× schneller</strong> hilfreiche Antworten von Tutor:innen!
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line/70 px-6 py-4 bg-paper">
              <span className="hidden sm:inline-block text-[11.5px] text-slate-400">
                Drücke <kbd className="rounded border border-line bg-paper-2 px-1.5 py-0.5 font-mono text-[10px] text-ink">Strg</kbd> + <kbd className="rounded border border-line bg-paper-2 px-1.5 py-0.5 font-mono text-[10px] text-ink">Enter</kbd> zum Absenden
              </span>

              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => setModal(false)}
                  className="btn btn-secondary flex-1 sm:flex-initial px-5 text-xs font-bold cursor-pointer"
                >
                  Abbrechen
                </button>
                <button
                  type="button"
                  disabled={postTitle.trim().length < 5}
                  onClick={submitPost}
                  className={`btn btn-primary flex-1 sm:flex-initial flex items-center justify-center gap-2 px-6 text-xs font-bold cursor-pointer ${
                    postTitle.trim().length < 5 ? "opacity-50 cursor-not-allowed" : "shadow-cta"
                  }`}
                >
                  <DIconPlus className="h-3.5 w-3.5" />
                  <span>Diskussion veröffentlichen</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
