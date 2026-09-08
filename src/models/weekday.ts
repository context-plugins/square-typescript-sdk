import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The days of the week. */
export const Weekday = {
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
  /** Sunday */
  Sun: "SUN",
} as const;
export type Weekday = (typeof Weekday)[keyof typeof Weekday] | (string & {});

export const weekdaySchema: EnumSchema<Weekday> = s.enumOf<Weekday>(Weekday);
