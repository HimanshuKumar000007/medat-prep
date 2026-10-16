import type { SectionCode, ExamType } from "../content/medat/config";
import type { NormalizedQuestion } from "../dashboard/practiceData";

export type QuestionLayoutMode = "standard" | "reading_split" | "cognitive" | "scenario";

export interface SimulatorQuestionItem extends NormalizedQuestion {
  passageText?: string;
  passageTitle?: string;
}

export type QuestionStatusType = "answered" | "marked" | "unanswered" | "current";

export interface SimulatorExamMeta {
  title: string;
  subtitle?: string;
  examType?: ExamType;
  sectionCode?: SectionCode;
  subjectTitle?: string;
  topicTitle?: string;
  mode?: "practice" | "mock" | "mistakes" | "timed";
}

export interface SimulatorActionHandlers {
  onSelectOption: (questionId: string, optionIndex: number) => void;
  onClearOption?: (questionId: string) => void;
  onToggleBookmark: (questionId: string) => void;
  onNavigateQuestion: (index: number) => void;
  onNext: () => void;
  onPrev: () => void;
  onRequestPause: () => void;
  onRequestSubmit: () => void;
  onOpenShortcuts: () => void;
  onOpenOverview?: () => void;
  onOpenScratchpad?: () => void;
  onOpenPeriodicTable?: () => void;
  onOpenFormulas?: () => void;
}
