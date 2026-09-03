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

export type ScheduledShiftFilter = {
  locationIds?: string[] | null;
  start?: TimeRange;
  end?: TimeRange;
  workday?: ScheduledShiftWorkday;
  teamMemberIds?: string[] | null;
  assignmentStatus?: ScheduledShiftFilterAssignmentStatus;
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
