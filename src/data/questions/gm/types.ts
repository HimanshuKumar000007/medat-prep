import type { StoredQuestion } from "../types";
import { optionKeyToIndex } from "../types";

export interface AllergyCard {
  id: string; // e.g. "gm-sim1-card01"
  simulationId: string; // "gm-sim1"
  cardNumber: number; // 1..8
  name: string; // fictional two-syllable or realistic name e.g. "NERIA KRAMM"
  birthDate: string; // "DD.MM." e.g. "14.07."
  medication: boolean; // true = "Ja", false = "Nein"
  bloodGroup: "A" | "B" | "AB" | "0";
  allergies: string[]; // e.g. ["Haselnuss", "Birke"] or ["Milch"] or []
  idNumber: string; // exactly 5 digits e.g. "58321"
  country: string; // Ausstellungsland des Allergieausweises e.g. "Österreich", "Deutschland", "Schweiz", "Italien", "Spanien"
  issuingCountry?: string; // Ausstellungsland (kanonischer Alias für country)
  photo: string; // synthetic visual avatar identifier e.g. "avatar-f1"
  gender?: "female" | "male";
  visualTraits?: {
    hairColor: string;
    hairStyle: string;
    eyeColor?: string;
    glasses: boolean;
    bgColor: string;
  };
}

export type GmRecallCategory =
  | "photo"
  | "name"
  | "birthDate"
  | "medication"
  | "bloodGroup"
  | "allergies"
  | "idNumber"
  | "country"
  | "cross_card";

export interface GmRecallQuestion {
  id: string; // e.g. "gm-sim1-q01"
  simulationId: string; // "gm-sim1"
  questionNumber: number; // 1..25
  category: GmRecallCategory;
  questionText: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
    E: string; // "Keine der gegebenen Antworten ist korrekt"
  };
  correctAnswer: "A" | "B" | "C" | "D" | "E";
  sourceCardId: string; // e.g. "gm-sim1-card01"
  relatedCardIds?: string[];
  explanation: string;
  difficulty: "Leicht" | "Mittel" | "Schwer";
}

export interface GmSimulationData {
  simulationId: string;
  simNumber: number;
  title: string;
  subtitle: string;
  cards: AllergyCard[]; // exactly 8 cards
  questions: GmRecallQuestion[]; // exactly 25 questions
}

/**
 * Converts a GmRecallQuestion into a unified StoredQuestion object
 */
export function gmQuestionToStoredQuestion(
  q: GmRecallQuestion,
  sim: GmSimulationData
): StoredQuestion {
  const card = sim.cards.find((c) => c.id === q.sourceCardId);

  return {
    id: q.id,
    exam: "BOTH",
    section: "KFF",
    subjectId: "kff-mem",
    chapterId: "kff-mem-pass",
    topic: `Gedächtnis & Merkfähigkeit Simulation ${sim.simNumber}`,
    difficulty: q.difficulty,
    questionText: q.questionText,
    options: [
      q.options.A,
      q.options.B,
      q.options.C,
      q.options.D,
      q.options.E,
    ],
    correctAnswer: optionKeyToIndex(q.correctAnswer),
    explanation: q.explanation,
    tags: ["KFF", "Gedächtnis & Merkfähigkeit", `Sim-${sim.simNumber}`, q.category, q.difficulty],
    source: "medat-original",
    version: "2026.1",
    setOrder: sim.simNumber,
    gmData: q,
    gmCardData: card,
    gmAllCards: sim.cards,
  };
}
