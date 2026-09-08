import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dateRangeSchema, type DateRange } from "./date-range.js";
import { timecardWorkdayMatcherSchema, type TimecardWorkdayMatcher } from "./timecard-workday-matcher.js";

/**
 * A `Timecard` search query filter parameter that sets a range of days that a `Timecard` must start
 * or end in before passing the filter condition.
 */
export type TimecardWorkday = {
  /**
   * A range defined by two dates. Used for filtering a query for Connect v2 objects that have date
   * properties.
   */
  dateRange?: DateRange;
  /** Defines the logic used to apply a workday filter. */
  matchTimecardsBy?: TimecardWorkdayMatcher;
  /**
   * Location-specific timezones convert workdays to datetime filters. Every location included in
   * the query must have a timezone or this field must be provided as a fallback. Format: the IANA
   * timezone database identifier for the relevant timezone.
   */
  defaultTimezone?: string | null;
};

export const timecardWorkdaySchema: Schema<TimecardWorkday> = s.object<TimecardWorkday>({
  dateRange: s.optional(s.lazy(() => dateRangeSchema)),
  matchTimecardsBy: s.optional(s.lazy(() => timecardWorkdayMatcherSchema)),
  defaultTimezone: s.optionalNullable(s.string()),
  _keysMap: {
    dateRange: "date_range",
    matchTimecardsBy: "match_timecards_by",
    defaultTimezone: "default_timezone",
  },
});
