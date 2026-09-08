import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Defines the logic used to apply a workday filter. */
export const TimecardWorkdayMatcher = {
  /** All timecards that start on or after the specified workday */
  StartAt: "START_AT",
  /** All timecards that end on or before the specified workday */
  EndAt: "END_AT",
  /** All timecards that start between the start and end workdays (inclusive) */
  Intersection: "INTERSECTION",
} as const;
export type TimecardWorkdayMatcher =
  | (typeof TimecardWorkdayMatcher)[keyof typeof TimecardWorkdayMatcher]
  | (string & {});

export const timecardWorkdayMatcherSchema: EnumSchema<TimecardWorkdayMatcher> =
  s.enumOf<TimecardWorkdayMatcher>(TimecardWorkdayMatcher);
