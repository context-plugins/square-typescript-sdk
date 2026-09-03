import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { updateTeamMemberRequestSchema, type UpdateTeamMemberRequest } from "./update-team-member-request.js";

export type BulkUpdateTeamMembersRequest = {
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
