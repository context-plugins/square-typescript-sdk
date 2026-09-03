import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dateRangeSchema, type DateRange } from "./date-range.js";
import { shiftWorkdayMatcherSchema, type ShiftWorkdayMatcher } from "./shift-workday-matcher.js";

export type ShiftWorkday = {
  dateRange?: DateRange;
  matchShiftsBy?: ShiftWorkdayMatcher;
  defaultTimezone?: string | null;
};

export const shiftWorkdaySchema: Schema<ShiftWorkday> = s.object<ShiftWorkday>({
  dateRange: s.optional(s.lazy(() => dateRangeSchema)),
  matchShiftsBy: s.optional(s.lazy(() => shiftWorkdayMatcherSchema)),
  defaultTimezone: s.optionalNullable(s.string()),
  _keysMap: {
    dateRange: "date_range",
    matchShiftsBy: "match_shifts_by",
    defaultTimezone: "default_timezone",
  },
});
