import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dateRangeSchema, type DateRange } from "./date-range.js";
import { timecardWorkdayMatcherSchema, type TimecardWorkdayMatcher } from "./timecard-workday-matcher.js";

export type TimecardWorkday = {
  dateRange?: DateRange;
  matchTimecardsBy?: TimecardWorkdayMatcher;
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
