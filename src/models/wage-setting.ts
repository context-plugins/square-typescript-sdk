import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { jobAssignmentSchema, type JobAssignment } from "./job-assignment.js";

/**
 * Represents information about the overtime exemption status, job assignments, and compensation for
 * a [team member](entity:TeamMember).
 */
export type WageSetting = {
  /** The ID of the team member associated with the wage setting. */
  teamMemberId?: string | null;
  /**
   * **Required** The ordered list of jobs that the team member is assigned to. The first job
   * assignment is considered the team member's primary job.
   */
  jobAssignments?: JobAssignment[] | null;
  /** Whether the team member is exempt from the overtime rules of the seller's country. */
  isOvertimeExempt?: boolean | null;
  /**
   * **Read only** Used for resolving concurrency issues. The request fails if the version provided
   * does not match the server version at the time of the request. If not provided, Square executes
   * a blind write, potentially overwriting data from another write. For more information, see
   * [optimistic
   * concurrency](https://developer.squareup.com/docs/working-with-apis/optimistic-concurrency).
   */
  version?: number;
  /** The timestamp when the wage setting was created, in RFC 3339 format. */
  createdAt?: string;
  /** The timestamp when the wage setting was last updated, in RFC 3339 format. */
  updatedAt?: string;
};

export const wageSettingSchema: Schema<WageSetting> = s.object<WageSetting>({
  teamMemberId: s.optionalNullable(s.string()),
  jobAssignments: s.optionalNullable(s.array(s.lazy(() => jobAssignmentSchema))),
  isOvertimeExempt: s.optionalNullable(s.boolean()),
  version: s.optional(s.int()),
  createdAt: s.optional(s.string()),
  updatedAt: s.optional(s.string()),
  _keysMap: {
    teamMemberId: "team_member_id",
    jobAssignments: "job_assignments",
    isOvertimeExempt: "is_overtime_exempt",
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
});
