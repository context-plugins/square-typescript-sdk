import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ScheduledShiftFilterAssignmentStatus = {
  Assigned: "ASSIGNED",
  Unassigned: "UNASSIGNED",
} as const;
export type ScheduledShiftFilterAssignmentStatus =
  | (typeof ScheduledShiftFilterAssignmentStatus)[keyof typeof ScheduledShiftFilterAssignmentStatus]
  | (string & {});

export const scheduledShiftFilterAssignmentStatusSchema: EnumSchema<ScheduledShiftFilterAssignmentStatus> =
  s.enumOf<ScheduledShiftFilterAssignmentStatus>(ScheduledShiftFilterAssignmentStatus);
