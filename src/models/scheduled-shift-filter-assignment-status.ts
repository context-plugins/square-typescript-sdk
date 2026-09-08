import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Defines valid values for the `assignment_status` filter in a
 * [SearchScheduledShifts](api-endpoint:Labor-SearchScheduledShifts) request. Assignment status is
 * based on the `draft_shift_details.team_member_id` and `published_shift_details.team_member_id`
 * fields of the scheduled shift.
 */
export const ScheduledShiftFilterAssignmentStatus = {
  /** The shift is assigned to a team member. */
  Assigned: "ASSIGNED",
  /** The shift isn't assigned to a team member. */
  Unassigned: "UNASSIGNED",
} as const;
export type ScheduledShiftFilterAssignmentStatus =
  | (typeof ScheduledShiftFilterAssignmentStatus)[keyof typeof ScheduledShiftFilterAssignmentStatus]
  | (string & {});

export const scheduledShiftFilterAssignmentStatusSchema: EnumSchema<ScheduledShiftFilterAssignmentStatus> =
  s.enumOf<ScheduledShiftFilterAssignmentStatus>(ScheduledShiftFilterAssignmentStatus);
