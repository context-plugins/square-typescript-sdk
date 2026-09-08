import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { shiftFilterStatusSchema, type ShiftFilterStatus } from "./shift-filter-status.js";
import { shiftWorkdaySchema, type ShiftWorkday } from "./shift-workday.js";
import { timeRangeSchema, type TimeRange } from "./time-range.js";

/**
 * Defines a filter used in a search for `Shift` records. `AND` logic is used by Square's servers to
 * apply each filter property specified.
 *
 * Deprecated at Square API version 2025-05-21. See the [migration
 * notes](https://developer.squareup.com/docs/labor-api/what-it-does#migration-notes).
 */
export type ShiftFilter = {
  /** Fetch shifts for the specified location. */
  locationIds?: string[] | null;
  /**
   * Fetch shifts for the specified employees. DEPRECATED at version 2020-08-26. Use
   * `team_member_ids` instead.
   */
  employeeIds?: string[] | null;
  /**
   * Specifies the `status` of `Shift` records to be returned.
   *
   * Deprecated at Square API version 2025-05-21. See the [migration
   * notes](https://developer.squareup.com/docs/labor-api/what-it-does#migration-notes).
   */
  status?: ShiftFilterStatus;
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
   * A `Shift` search query filter parameter that sets a range of days that a `Shift` must start or
   * end in before passing the filter condition.
   *
   * Deprecated at Square API version 2025-05-21. See the [migration
   * notes](https://developer.squareup.com/docs/labor-api/what-it-does#migration-notes).
   */
  workday?: ShiftWorkday;
  /**
   * Fetch shifts for the specified team members. Replaced `employee_ids` at version "2020-08-26".
   */
  teamMemberIds?: string[] | null;
};

export const shiftFilterSchema: Schema<ShiftFilter> = s.object<ShiftFilter>({
  locationIds: s.optionalNullable(s.array(s.string())),
  employeeIds: s.optionalNullable(s.array(s.string())),
  status: s.optional(s.lazy(() => shiftFilterStatusSchema)),
  start: s.optional(s.lazy(() => timeRangeSchema)),
  end: s.optional(s.lazy(() => timeRangeSchema)),
  workday: s.optional(s.lazy(() => shiftWorkdaySchema)),
  teamMemberIds: s.optionalNullable(s.array(s.string())),
  _keysMap: {
    locationIds: "location_ids",
    employeeIds: "employee_ids",
    teamMemberIds: "team_member_ids",
  },
});
