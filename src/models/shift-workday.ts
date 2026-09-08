import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dateRangeSchema, type DateRange } from "./date-range.js";
import { shiftWorkdayMatcherSchema, type ShiftWorkdayMatcher } from "./shift-workday-matcher.js";

/**
 * A `Shift` search query filter parameter that sets a range of days that a `Shift` must start or
 * end in before passing the filter condition.
 *
 * Deprecated at Square API version 2025-05-21. See the [migration
 * notes](https://developer.squareup.com/docs/labor-api/what-it-does#migration-notes).
 */
export type ShiftWorkday = {
  /**
   * A range defined by two dates. Used for filtering a query for Connect v2 objects that have date
   * properties.
   */
  dateRange?: DateRange;
  /** Defines the logic used to apply a workday filter. */
  matchShiftsBy?: ShiftWorkdayMatcher;
  /**
   * Location-specific timezones convert workdays to datetime filters. Every location included in
   * the query must have a timezone or this field must be provided as a fallback. Format: the IANA
   * timezone database identifier for the relevant timezone.
   */
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
