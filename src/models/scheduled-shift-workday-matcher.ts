import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ScheduledShiftWorkdayMatcher = {
  StartAt: "START_AT",
  EndAt: "END_AT",
  Intersection: "INTERSECTION",
} as const;
export type ScheduledShiftWorkdayMatcher =
  | (typeof ScheduledShiftWorkdayMatcher)[keyof typeof ScheduledShiftWorkdayMatcher]
  | (string & {});

export const scheduledShiftWorkdayMatcherSchema: EnumSchema<ScheduledShiftWorkdayMatcher> =
  s.enumOf<ScheduledShiftWorkdayMatcher>(ScheduledShiftWorkdayMatcher);
