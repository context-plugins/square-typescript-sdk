import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dateRangeSchema, type DateRange } from "./date-range.js";
import {
  scheduledShiftWorkdayMatcherSchema,
  type ScheduledShiftWorkdayMatcher,
} from "./scheduled-shift-workday-matcher.js";

export type ScheduledShiftWorkday = {
  dateRange?: DateRange;
  matchScheduledShiftsBy?: ScheduledShiftWorkdayMatcher;
  defaultTimezone?: string | null;
};

export const scheduledShiftWorkdaySchema: Schema<ScheduledShiftWorkday> = s.object<ScheduledShiftWorkday>({
  dateRange: s.optional(s.lazy(() => dateRangeSchema)),
  matchScheduledShiftsBy: s.optional(s.lazy(() => scheduledShiftWorkdayMatcherSchema)),
  defaultTimezone: s.optionalNullable(s.string()),
  _keysMap: {
    dateRange: "date_range",
    matchScheduledShiftsBy: "match_scheduled_shifts_by",
    defaultTimezone: "default_timezone",
  },
});
