/**
 * Supabase Question Seeder Script & Helper
 * Used to batch import/upsert JSON questions into Supabase production table `medat_questions`.
 */

import { supabase } from "../../lib/supabase";
import type { JsonQuestion } from "./types";
import { RAW_BIOLOGY_JSON } from "./loader";

export async function seedQuestionsToSupabase(questions: JsonQuestion[] = RAW_BIOLOGY_JSON): Promise<{
  success: boolean;
  inserted: number;
  error?: any;
}> {
  try {
    const records = questions.map((q) => ({
      id: q.id,
      chapter: q.chapter,
      chapter_id: q.chapterId || "bio-01-zelle",
      topic: q.topic,
      set_number: q.set || 1,
      question: q.question,
      options: q.options,
      correct_answer: q.correct_answer,
      explanation: q.explanation,
      difficulty: q.difficulty,
      concept: q.concept || q.topic,
      tags: q.tags || [q.chapter, q.topic],
      exam_type: q.exam || "BOTH",
      section: q.section || "BMS",
      subject_id: q.subjectId || "bio",
      updated_at: new Date().toISOString(),
    }));

    const { data, error } = await supabase
      .from("medat_questions")
      .upsert(records, { onConflict: "id" });

    if (error) {
      console.error("Supabase question seeding error:", error);
      return { success: false, inserted: 0, error };
    }

    return { success: true, inserted: records.length };
  } catch (err) {
    console.error("Supabase question seeding exception:", err);
    return { success: false, inserted: 0, error: err };
  }
}
