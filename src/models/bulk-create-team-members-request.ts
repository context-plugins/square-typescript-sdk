import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { createTeamMemberRequestSchema, type CreateTeamMemberRequest } from "./create-team-member-request.js";

/** Represents a bulk create request for `TeamMember` objects. */
export type BulkCreateTeamMembersRequest = {
  /**
   * The data used to create the `TeamMember` objects. Each key is the `idempotency_key` that maps
   * to the `CreateTeamMemberRequest`. The maximum number of create objects is 25.
   *
   * If you include a team member's `wage_setting`, you must provide `job_id` for each job
   * assignment. To get job IDs, call [ListJobs](api-endpoint:Team-ListJobs).
   */
  teamMembers: Record<string, CreateTeamMemberRequest>;
};

export const bulkCreateTeamMembersRequestSchema: Schema<BulkCreateTeamMembersRequest> =
  s.object<BulkCreateTeamMembersRequest>({
    teamMembers: s.record(
      s.string(),
      s.lazy(() => createTeamMemberRequestSchema),
    ),
    _keysMap: {
      teamMembers: "team_members",
    },
  });
