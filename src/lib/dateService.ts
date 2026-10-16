/**
 * src/lib/dateService.ts
 *
 * Canonical date formatting and calculation service standardized to
 * the official MedAT exam timezone: "Europe/Vienna" (CET / CEST).
 *
 * Prevents midnight boundary discrepancies where UTC and local student time diverge.
 */

export const VIENNA_TIMEZONE = "Europe/Vienna";

const viennaFormatter = new Intl.DateTimeFormat("en-CA", {
  timeZone: VIENNA_TIMEZONE,
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

/**
 * Returns the current date string in Europe/Vienna timezone: "YYYY-MM-DD"
 */
export function getTodayViennaString(): string {
  return viennaFormatter.format(new Date());
}

/**
 * Formats a Date, timestamp number, or ISO string into "YYYY-MM-DD" in Europe/Vienna timezone.
 */
export function getViennaDateString(date: Date | number | string = new Date()): string {
  const d = typeof date === "number" || typeof date === "string" ? new Date(date) : date;
  if (isNaN(d.getTime())) {
    return viennaFormatter.format(new Date());
  }
  return viennaFormatter.format(d);
}

/**
 * Returns the date string for `offsetDays` relative to `baseDateStr` (default: today) in Europe/Vienna.
 * e.g., offsetDays = -1 returns yesterday's Vienna date string.
 */
export function getViennaOffsetDateString(offsetDays: number, baseDateStr?: string): string {
  const base = baseDateStr ? new Date(`${baseDateStr}T12:00:00Z`) : new Date();
  const target = new Date(base.getTime() + offsetDays * 86400000);
  return getViennaDateString(target);
}

/**
 * Returns true if both dates fall on the same calendar day in Europe/Vienna.
 */
export function isSameDayVienna(
  d1: Date | number | string,
  d2: Date | number | string
): boolean {
  return getViennaDateString(d1) === getViennaDateString(d2);
}

/**
 * Legacy compatibility alias for getViennaDateString.
 */
export function getLocalDateString(d: Date = new Date()): string {
  return getViennaDateString(d);
}
