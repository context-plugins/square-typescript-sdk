import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { createTeamMemberRequestSchema, type CreateTeamMemberRequest } from "./create-team-member-request.js";

export type BulkCreateTeamMembersRequest = {
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
