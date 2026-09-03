import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TimecardWorkdayMatcher = {
  StartAt: "START_AT",
  EndAt: "END_AT",
  Intersection: "INTERSECTION",
} as const;
export type TimecardWorkdayMatcher =
  | (typeof TimecardWorkdayMatcher)[keyof typeof TimecardWorkdayMatcher]
  | (string & {});

export const timecardWorkdayMatcherSchema: EnumSchema<TimecardWorkdayMatcher> =
  s.enumOf<TimecardWorkdayMatcher>(TimecardWorkdayMatcher);
