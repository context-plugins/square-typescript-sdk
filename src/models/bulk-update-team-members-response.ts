import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import {
  updateTeamMemberResponseSchema,
  type UpdateTeamMemberResponse,
} from "./update-team-member-response.js";

export type BulkUpdateTeamMembersResponse = {
  teamMembers?: Record<string, UpdateTeamMemberResponse>;
  errors?: Error[];
};

export const bulkUpdateTeamMembersResponseSchema: Schema<BulkUpdateTeamMembersResponse> =
  s.object<BulkUpdateTeamMembersResponse>({
    teamMembers: s.optional(
      s.record(
        s.string(),
        s.lazy(() => updateTeamMemberResponseSchema),
      ),
    ),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    _keysMap: {
      teamMembers: "team_members",
    },
  });
