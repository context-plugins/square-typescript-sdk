import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates the specific day of the week. */
export const DayOfWeek = {
  /** Sunday */
  Sun: "SUN",
  /** Monday */
  Mon: "MON",
  /** Tuesday */
  Tue: "TUE",
  /** Wednesday */
  Wed: "WED",
  /** Thursday */
  Thu: "THU",
  /** Friday */
  Fri: "FRI",
  /** Saturday */
  Sat: "SAT",
} as const;
export type DayOfWeek = (typeof DayOfWeek)[keyof typeof DayOfWeek] | (string & {});

export const dayOfWeekSchema: EnumSchema<DayOfWeek> = s.enumOf<DayOfWeek>(DayOfWeek);
