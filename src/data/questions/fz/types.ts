/**
 * Types for MedAT Figuren zusammensetzen (FZ)
 * Pure 2D vector geometry representation for cognitive spatial assembly tests.
 */

export type FzDifficulty = "Leicht" | "Mittel" | "Schwer";
export type FzOptionKey = "A" | "B" | "C" | "D" | "E";

export interface FzPoint {
  x: number;
  y: number;
}

export type FzPolygon = [number, number][];

export interface FzPiece {
  id: string;
  points: FzPolygon;
  // Pre-rotated/translated coordinates for displaying neatly inside the pieces canvas
  canvasPoints: FzPolygon;
  area: number;
}

export interface FzCandidateOption {
  key: FzOptionKey;
  label?: string;
  // null for Option E ("Keine der Antwortmöglichkeiten ist richtig")
  polygon: FzPolygon | null;
  viewBox: string;
  area?: number;
  isNone?: boolean;
}

export interface FzPieceAssembly {
  pieceId: string;
  // Solution rotation angle in degrees (clockwise)
  rotationDeg: number;
  // Solution translation in target coordinate space
  translation: [number, number];
  // Verification: determinant of transformation matrix (+1 = pure rotation, -1 = reflection)
  isReflection: boolean;
}

export interface FzQuestionData {
  id: string;
  simulationId: string;
  questionNumber: number;
  difficulty: FzDifficulty;
  correctAnswer: FzOptionKey;
  questionText: string;
  estimatedTimeSeconds: number;
  pieces: FzPiece[];
  options: {
    A: FzCandidateOption;
    B: FzCandidateOption;
    C: FzCandidateOption;
    D: FzCandidateOption;
    E: FzCandidateOption;
  };
  // Canvas viewport for pieces
  canvasViewBox: string;
  // Target figure geometry for verification
  targetFigure: {
    polygon: FzPolygon;
    viewBox: string;
    area: number;
  };
  // Assembly instructions mapping pieces into targetFigure
  assembly: FzPieceAssembly[];
  explanation: string;
  metadata: {
    pieceCount: number;
    shapeFamily: string;
    requiresRotation: boolean;
    isEAnswer: boolean;
  };
}
