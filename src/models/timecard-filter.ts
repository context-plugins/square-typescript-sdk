import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { timeRangeSchema, type TimeRange } from "./time-range.js";
import { timecardFilterStatusSchema, type TimecardFilterStatus } from "./timecard-filter-status.js";
import { timecardWorkdaySchema, type TimecardWorkday } from "./timecard-workday.js";

/**
 * Defines a filter used in a search for `Timecard` records. `AND` logic is used by Square's servers
 * to apply each filter property specified.
 */
export type TimecardFilter = {
  /** Fetch timecards for the specified location. */
  locationIds?: string[] | null;
  /** Specifies the `status` of `Timecard` records to be returned. */
  status?: TimecardFilterStatus;
  /**
   * Represents a generic time range. The start and end values are represented in RFC 3339 format.
   * Time ranges are customized to be inclusive or exclusive based on the needs of a particular
   * endpoint. Refer to the relevant endpoint-specific documentation to determine how time ranges
   * are handled.
   */
  start?: TimeRange;
  /**
   * Represents a generic time range. The start and end values are represented in RFC 3339 format.
   * Time ranges are customized to be inclusive or exclusive based on the needs of a particular
   * endpoint. Refer to the relevant endpoint-specific documentation to determine how time ranges
   * are handled.
   */
  end?: TimeRange;
  /**
   * A `Timecard` search query filter parameter that sets a range of days that a `Timecard` must
   * start or end in before passing the filter condition.
   */
  workday?: TimecardWorkday;
  /** Fetch timecards for the specified team members. */
  teamMemberIds?: string[] | null;
};

export const timecardFilterSchema: Schema<TimecardFilter> = s.object<TimecardFilter>({
  locationIds: s.optionalNullable(s.array(s.string())),
  status: s.optional(s.lazy(() => timecardFilterStatusSchema)),
  start: s.optional(s.lazy(() => timeRangeSchema)),
  end: s.optional(s.lazy(() => timeRangeSchema)),
  workday: s.optional(s.lazy(() => timecardWorkdaySchema)),
  teamMemberIds: s.optionalNullable(s.array(s.string())),
  _keysMap: {
    locationIds: "location_ids",
    teamMemberIds: "team_member_ids",
  },
});
