/**
 * Task-Based Rule Engine for MedAT-H / MedAT-Z Exam Simulator
 *
 * Clearly distinguishes:
 * - REAL MEDAT RULES (Official Test Day Regulations)
 * - SMARTPREP TRAINING FEATURES (In-app study and reference assistance)
 */

import type { SectionCode } from "../content/medat/config";

export interface TaskRules {
  /** In-exam scratchpad / notes allowed for this specific task */
  allow_notes: boolean;
  /** Drawing / geometric sketching permitted */
  allow_drawing: boolean;
  /** In-app formula collection (Disabled: Not permitted in official MedAT) */
  allow_formula_tool?: boolean;
  /** In-app periodic table of elements (Disabled: Not permitted in official MedAT) */
  allow_pse?: boolean;
  /** Training pause allowed (stops timer & obscures questions) */
  allow_pause: boolean;
  /** Marking questions for review */
  allow_review: boolean;
  /** Question jumping allowed within current section */
  allow_free_navigation: boolean;
  /** Strict countdown timer enforcement */
  strict_timer: boolean;
  /** Time limit in seconds for this subtest/task */
  time_limit_seconds?: number;
  /** Educational disclosure explaining official test rules vs SmartPrep assistance */
  rule_disclosure?: string;
  /** Notice when a tool is intentionally restricted by official rules */
  restriction_notice?: string;
}

/**
 * Returns task-specific rules based on section, subject, and learning phase
 */
export function getTaskRules(
  sectionCode?: SectionCode | string,
  subjectId?: string,
  taskPhase?: "learning" | "recall" | "standard",
  isStrictMode = false
): TaskRules {
  const sec = (sectionCode || "BMS").toUpperCase();
  const sub = (subjectId || "").toLowerCase();

  // 1. KFF — Memory & Cognitive Retention (Gedächtnis & Merkfähigkeit)
  if (sub.includes("mem") || sub.includes("gm") || sub.includes("gedaechtnis")) {
    if (taskPhase === "learning") {
      // Strictly forbidden to take notes or mark during the learning phase (8 minutes)
      return {
        allow_notes: false,
        allow_drawing: false,
        allow_formula_tool: false,
        allow_pse: false,
        allow_pause: !isStrictMode,
        allow_review: false,
        allow_free_navigation: true,
        strict_timer: true,
        time_limit_seconds: 8 * 60, // 8 minutes
        rule_disclosure: "Offizielle MedAT-Regel: Während der Einprägephase (8 Min.) sind Notizen, Mitschriften oder Markierungen strikt untersagt.",
        restriction_notice: "Notizen sind in der Einprägephase gemäß offiziellen MedAT-Vorgaben gesperrt.",
      };
    }
    // Recall phase (25 minutes)
    return {
      allow_notes: true,
      allow_drawing: false,
      allow_formula_tool: false,
      allow_pse: false,
      allow_pause: !isStrictMode,
      allow_review: true,
      allow_free_navigation: true,
      strict_timer: true,
      time_limit_seconds: 25 * 60, // 25 minutes
      rule_disclosure: "Abrufphase: 25 Fragen zu den eingeprägten Allergieausweisen.",
    };
  }

  // 2. KFF — Assemble Figures (Figuren zusammensetzen / FZ)
  if (sub.includes("fig") || sub.includes("fz")) {
    return {
      allow_notes: true,
      allow_drawing: true,
      allow_formula_tool: false,
      allow_pse: false,
      allow_pause: !isStrictMode,
      allow_review: true,
      allow_free_navigation: true,
      strict_timer: true,
      time_limit_seconds: 20 * 60, // 20 minutes for 15 questions
      rule_disclosure: "Figuren zusammensetzen: Mentale Zerlegung und Rotation in 2D.",
    };
  }

  // 3. KFF — Number Sequences (Zahlenfolgen / ZF)
  if (sub.includes("num") || sub.includes("zf")) {
    return {
      allow_notes: true,
      allow_drawing: false,
      allow_formula_tool: false,
      allow_pse: false,
      allow_pause: !isStrictMode,
      allow_review: true,
      allow_free_navigation: true,
      strict_timer: true,
      time_limit_seconds: 15 * 60, // 15 minutes for 10 questions
      rule_disclosure: "Zahlenfolgen: Arithmetische und logische Mustererkennung.",
    };
  }

  // 3b. KFF — Wortflüssigkeit (WF)
  if (sub.includes("wf") || sub.includes("wort")) {
    return {
      allow_notes: true,
      allow_drawing: false,
      allow_formula_tool: false,
      allow_pse: false,
      allow_pause: !isStrictMode,
      allow_review: true,
      allow_free_navigation: true,
      strict_timer: true,
      time_limit_seconds: 20 * 60,
      rule_disclosure: "Wortflüssigkeit (WF): Buchstaben entwirren und Anfangsbuchstaben bestimmen.",
    };
  }

  // 3c. KFF — Implikationen erkennen (IE) [Nur MedAT-H]
  if (sub.includes("imp") || sub.includes("ie") || sub.includes("syll")) {
    return {
      allow_notes: true,
      allow_drawing: false,
      allow_formula_tool: false,
      allow_pse: false,
      allow_pause: !isStrictMode,
      allow_review: true,
      allow_free_navigation: true,
      strict_timer: true,
      time_limit_seconds: 10 * 60, // 10 minutes for 10 tasks
      rule_disclosure: "Implikationen erkennen (IE): 10 Aufgaben in 10 Minuten (~60s/Aufgabe). Formale Deduktion und Syllogismen (Nur MedAT-H).",
    };
  }

  // 4. BMS — Chemistry (Chemie)
  if (sub.includes("chem")) {
    return {
      allow_notes: true,
      allow_drawing: false,
      allow_formula_tool: false,
      allow_pse: false,
      allow_pause: !isStrictMode,
      allow_review: true,
      allow_free_navigation: true,
      strict_timer: true,
      time_limit_seconds: 24 * 60,
      rule_disclosure: "Offizielle MedAT-Regel: Kein Periodensystem erlaubt. Benötigte Werte sind in der Angabe vorgegeben oder Allgemeinwissen.",
    };
  }

  // 5. BMS — Physics (Physik)
  if (sub.includes("phys")) {
    return {
      allow_notes: true,
      allow_drawing: false,
      allow_formula_tool: false,
      allow_pse: false,
      allow_pause: !isStrictMode,
      allow_review: true,
      allow_free_navigation: true,
      strict_timer: true,
      time_limit_seconds: 18 * 60,
      rule_disclosure: "Offizielle MedAT-Regel: Keine Formelsammlungen oder Taschenrechner gestattet. Formeln müssen auswendig beherrscht werden.",
    };
  }

  // 6. BMS — Mathematics (Mathematik)
  if (sub.includes("math")) {
    return {
      allow_notes: true,
      allow_drawing: false,
      allow_formula_tool: false,
      allow_pse: false,
      allow_pause: !isStrictMode,
      allow_review: true,
      allow_free_navigation: true,
      strict_timer: true,
      time_limit_seconds: 12 * 60,
      rule_disclosure: "Offizielle MedAT-Regel: Keine Formelsammlungen oder Taschenrechner erlaubt.",
    };
  }

  // 7. BMS — Biology (Biologie)
  if (sub.includes("bio") || sec === "BMS") {
    return {
      allow_notes: true,
      allow_drawing: false,
      allow_formula_tool: false,
      allow_pse: false,
      allow_pause: !isStrictMode,
      allow_review: true,
      allow_free_navigation: true,
      strict_timer: true,
      time_limit_seconds: 40 * 60,
      rule_disclosure: "BMS Biologie: 40 Multiple-Choice-Fragen (5 Antwortoptionen A-E).",
    };
  }

  // 8. Textverständnis (TV) [Nur MedAT-H]
  if (sec === "TV" || sub.includes("tv")) {
    return {
      allow_notes: true,
      allow_drawing: false,
      allow_formula_tool: false,
      allow_pse: false,
      allow_pause: !isStrictMode,
      allow_review: true,
      allow_free_navigation: true,
      strict_timer: true,
      time_limit_seconds: 35 * 60,
      rule_disclosure: "Textverständnis (TV): 12 Fragen zu 4–5 komplexen Texten in 35 Minuten (~175 s/Frage). Der Text ist die einzige Informationsquelle.",
    };
  }

  // 9. SEK — Emotionen erkennen (EE)
  if (sub.includes("ee") || sub.includes("sek-emo-rec") || sub.includes("sek-rec")) {
    return {
      allow_notes: false,
      allow_drawing: false,
      allow_formula_tool: false,
      allow_pse: false,
      allow_pause: !isStrictMode,
      allow_review: true,
      allow_free_navigation: true,
      strict_timer: true,
      time_limit_seconds: 21 * 60, // 21 minutes for 14 tasks
      rule_disclosure: "Emotionen erkennen (EE): 14 Aufgaben in 21 Minuten (~90s pro Aufgabe). Bewerte für jede der 5 Emotionen, ob sie eher wahrscheinlich oder eher unwahrscheinlich ist. 1 Punkt nur bei 5/5 korrekten Bewertungen.",
    };
  }

  // 10. SEK — Emotionen regulieren (ER)
  if (sub.includes("er") || sub.includes("sek-emo-reg") || sub.includes("sek-reg")) {
    return {
      allow_notes: false,
      allow_drawing: false,
      allow_formula_tool: false,
      allow_pse: false,
      allow_pause: !isStrictMode,
      allow_review: true,
      allow_free_navigation: true,
      strict_timer: true,
      time_limit_seconds: 18 * 60, // 18 minutes for 12 tasks
      rule_disclosure: "Emotionen regulieren (ER): 12 Aufgaben in 18 Minuten (~90s pro Aufgabe). Wähle die Vorgehensweise, die das Handlungsziel schützt und Emotionen wirksam reguliert.",
    };
  }

  // 11. SEK — Soziales Entscheiden (SE)
  if (sub.includes("soc-dec") || sub.includes("sek-soc") || sub.includes("sek-dec") || sub.includes("sek-se") || sub === "se") {
    return {
      allow_notes: false,
      allow_drawing: false,
      allow_formula_tool: false,
      allow_pse: false,
      allow_pause: !isStrictMode,
      allow_review: true,
      allow_free_navigation: true,
      strict_timer: true,
      time_limit_seconds: 21 * 60, // 21 minutes for 14 tasks (~90s / task)
      rule_disclosure: "Soziales Entscheiden (SE): 14 Aufgaben in 21 Minuten (~90s pro Aufgabe). Ordne jeder der 5 Überlegungen einen eindeutigen Rang von 1 (am wichtigsten) bis 5 (am wenigsten wichtig) zu. Teilpunkte werden vergeben.",
    };
  }

  // 12. SEK General Fallback
  if (sec === "SEK" || sub.includes("sek") || sub.includes("se")) {
    return {
      allow_notes: false,
      allow_drawing: false,
      allow_formula_tool: false,
      allow_pse: false,
      allow_pause: !isStrictMode,
      allow_review: true,
      allow_free_navigation: true,
      strict_timer: true,
      time_limit_seconds: 15 * 60,
      rule_disclosure: "SEK: Emotionen erkennen, regulieren und soziales Entscheiden.",
    };
  }

  // Default Fallback
  return {
    allow_notes: true,
    allow_drawing: false,
    allow_formula_tool: false,
    allow_pse: false,
    allow_pause: !isStrictMode,
    allow_review: true,
    allow_free_navigation: true,
    strict_timer: true,
  };
}
