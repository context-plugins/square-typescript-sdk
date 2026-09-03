import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ScheduledShiftDetails = {
  teamMemberId?: string | null;
  locationId?: string | null;
  jobId?: string | null;
  startAt?: string | null;
  endAt?: string | null;
  notes?: string | null;
  isDeleted?: boolean | null;
  timezone?: string;
};

export const scheduledShiftDetailsSchema: Schema<ScheduledShiftDetails> = s.object<ScheduledShiftDetails>({
  teamMemberId: s.optionalNullable(s.string()),
  locationId: s.optionalNullable(s.string()),
  jobId: s.optionalNullable(s.string()),
  startAt: s.optionalNullable(s.string()),
  endAt: s.optionalNullable(s.string()),
  notes: s.optionalNullable(s.string()),
  isDeleted: s.optionalNullable(s.boolean()),
  timezone: s.optional(s.string()),
  _keysMap: {
    teamMemberId: "team_member_id",
    locationId: "location_id",
    jobId: "job_id",
    startAt: "start_at",
    endAt: "end_at",
    isDeleted: "is_deleted",
  },
});
