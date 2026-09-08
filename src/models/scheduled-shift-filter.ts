import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  scheduledShiftFilterAssignmentStatusSchema,
  type ScheduledShiftFilterAssignmentStatus,
} from "./scheduled-shift-filter-assignment-status.js";
import {
  scheduledShiftFilterScheduledShiftStatusSchema,
  type ScheduledShiftFilterScheduledShiftStatus,
} from "./scheduled-shift-filter-scheduled-shift-status.js";
import { scheduledShiftWorkdaySchema, type ScheduledShiftWorkday } from "./scheduled-shift-workday.js";
import { timeRangeSchema, type TimeRange } from "./time-range.js";

/**
 * Defines filter criteria for a [SearchScheduledShifts](api-endpoint:Labor-SearchScheduledShifts)
 * request. Multiple filters in a query are combined as an `AND` operation.
 */
export type ScheduledShiftFilter = {
  /**
   * Return shifts for the specified locations. When omitted, shifts for all locations are returned.
   * If needed, call [ListLocations](api-endpoint:Locations-ListLocations) to get location IDs.
   */
  locationIds?: string[] | null;
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
   * A `ScheduledShift` search query filter parameter that sets a range of days that a `Shift` must
   * start or end in before passing the filter condition.
   */
  workday?: ScheduledShiftWorkday;
  /**
   * Return shifts assigned to specified team members. If needed, call
   * [SearchTeamMembers](api-endpoint:Team-SearchTeamMembers) to get team member IDs.
   *
   * To return only the shifts assigned to the specified team members, include the
   * `assignment_status` filter in the query. Otherwise, all unassigned shifts are returned along
   * with shifts assigned to the specified team members.
   */
  teamMemberIds?: string[] | null;
  /**
   * Defines valid values for the `assignment_status` filter in a
   * [SearchScheduledShifts](api-endpoint:Labor-SearchScheduledShifts) request. Assignment status is
   * based on the `draft_shift_details.team_member_id` and `published_shift_details.team_member_id`
   * fields of the scheduled shift.
   */
  assignmentStatus?: ScheduledShiftFilterAssignmentStatus;
  /**
   * Return shifts based on the draft or published status of the shift. A shift is published if the
   * `published_shift_details` field is present.
   *
   * Note that shifts with `draft_shift_details.is_deleted` set to `true` are ignored with the
   * `DRAFT` filter. See
   * [ScheduledShiftFilterScheduledShiftStatus](#type-scheduledshiftfilterscheduledshiftstatus) for
   * possible values
   */
  scheduledShiftStatuses?: ScheduledShiftFilterScheduledShiftStatus[] | null;
};

export const scheduledShiftFilterSchema: Schema<ScheduledShiftFilter> = s.object<ScheduledShiftFilter>({
  locationIds: s.optionalNullable(s.array(s.string())),
  start: s.optional(s.lazy(() => timeRangeSchema)),
  end: s.optional(s.lazy(() => timeRangeSchema)),
  workday: s.optional(s.lazy(() => scheduledShiftWorkdaySchema)),
  teamMemberIds: s.optionalNullable(s.array(s.string())),
  assignmentStatus: s.optional(s.lazy(() => scheduledShiftFilterAssignmentStatusSchema)),
  scheduledShiftStatuses: s.optionalNullable(
    s.array(s.lazy(() => scheduledShiftFilterScheduledShiftStatusSchema)),
  ),
  _keysMap: {
    locationIds: "location_ids",
    teamMemberIds: "team_member_ids",
    assignmentStatus: "assignment_status",
    scheduledShiftStatuses: "scheduled_shift_statuses",
  },
});
