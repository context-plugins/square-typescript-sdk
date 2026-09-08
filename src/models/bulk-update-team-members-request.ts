import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { updateTeamMemberRequestSchema, type UpdateTeamMemberRequest } from "./update-team-member-request.js";

/** Represents a bulk update request for `TeamMember` objects. */
export type BulkUpdateTeamMembersRequest = {
  /**
   * The data used to update the `TeamMember` objects. Each key is the `team_member_id` that maps to
   * the `UpdateTeamMemberRequest`. The maximum number of update objects is 25.
   *
   * For each team member, include the fields to add, change, or clear. Fields can be cleared using
   * a null value. To update `wage_setting.job_assignments`, you must provide the complete list of
   * job assignments. If needed, call [ListJobs](api-endpoint:Team-ListJobs) to get the required
   * `job_id` values.
   */
  teamMembers: Record<string, UpdateTeamMemberRequest>;
};

export const bulkUpdateTeamMembersRequestSchema: Schema<BulkUpdateTeamMembersRequest> =
  s.object<BulkUpdateTeamMembersRequest>({
    teamMembers: s.record(
      s.string(),
      s.lazy(() => updateTeamMemberRequestSchema),
    ),
    _keysMap: {
      teamMembers: "team_members",
    },
  });
