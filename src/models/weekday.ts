import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Weekday = {
  Mon: "MON",
  Tue: "TUE",
  Wed: "WED",
  Thu: "THU",
  Fri: "FRI",
  Sat: "SAT",
  Sun: "SUN",
} as const;
export type Weekday = (typeof Weekday)[keyof typeof Weekday] | (string & {});

export const weekdaySchema: EnumSchema<Weekday> = s.enumOf<Weekday>(Weekday);
