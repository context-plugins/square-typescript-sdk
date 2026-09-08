import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dateRangeSchema, type DateRange } from "./date-range.js";
import {
  scheduledShiftWorkdayMatcherSchema,
  type ScheduledShiftWorkdayMatcher,
} from "./scheduled-shift-workday-matcher.js";

/**
 * A `ScheduledShift` search query filter parameter that sets a range of days that a `Shift` must
 * start or end in before passing the filter condition.
 */
export type ScheduledShiftWorkday = {
  /**
   * A range defined by two dates. Used for filtering a query for Connect v2 objects that have date
   * properties.
   */
  dateRange?: DateRange;
  /** Defines the logic used to apply a workday filter. */
  matchScheduledShiftsBy?: ScheduledShiftWorkdayMatcher;
  /**
   * Location-specific timezones convert workdays to datetime filters. Every location included in
   * the query must have a timezone or this field must be provided as a fallback. Format: the IANA
   * timezone database identifier for the relevant timezone.
   */
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
