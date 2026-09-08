import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Represents shift details for draft and published versions of a [scheduled
 * shift](entity:ScheduledShift), such as job ID, team member assignment, and start and end times.
 */
export type ScheduledShiftDetails = {
  /** The ID of the [team member](entity:TeamMember) scheduled for the shift. */
  teamMemberId?: string | null;
  /** The ID of the [location](entity:Location) the shift is scheduled for. */
  locationId?: string | null;
  /** The ID of the [job](entity:Job) the shift is scheduled for. */
  jobId?: string | null;
  /**
   * The start time of the shift, in RFC 3339 format in the time zone &plus; offset of the shift
   * location specified in `location_id`. Precision up to the minute is respected; seconds are
   * truncated.
   */
  startAt?: string | null;
  /**
   * The end time for the shift, in RFC 3339 format in the time zone &plus; offset of the shift
   * location specified in `location_id`. Precision up to the minute is respected; seconds are
   * truncated.
   */
  endAt?: string | null;
  /** Optional notes for the shift. */
  notes?: string | null;
  /**
   * Indicates whether the draft shift version is deleted. If set to `true` when the shift is
   * published, the entire scheduled shift (including the published shift) is deleted and cannot be
   * accessed using any endpoint.
   */
  isDeleted?: boolean | null;
  /**
   * The time zone of the shift location, calculated based on the `location_id`. This field is
   * provided for convenience.
   */
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
