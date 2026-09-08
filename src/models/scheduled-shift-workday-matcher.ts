import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Defines the logic used to apply a workday filter. */
export const ScheduledShiftWorkdayMatcher = {
  /** All shifts that start on or after the specified workday */
  StartAt: "START_AT",
  /** All shifts that end on or before the specified workday */
  EndAt: "END_AT",
  /** All shifts that start between the start and end workdays (inclusive) */
  Intersection: "INTERSECTION",
} as const;
export type ScheduledShiftWorkdayMatcher =
  | (typeof ScheduledShiftWorkdayMatcher)[keyof typeof ScheduledShiftWorkdayMatcher]
  | (string & {});

export const scheduledShiftWorkdayMatcherSchema: EnumSchema<ScheduledShiftWorkdayMatcher> =
  s.enumOf<ScheduledShiftWorkdayMatcher>(ScheduledShiftWorkdayMatcher);
