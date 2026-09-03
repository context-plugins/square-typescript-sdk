import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  createTeamMemberResponseSchema,
  type CreateTeamMemberResponse,
} from "./create-team-member-response.js";
import { errorSchema, type Error } from "./error.js";

export type BulkCreateTeamMembersResponse = {
  teamMembers?: Record<string, CreateTeamMemberResponse>;
  errors?: Error[];
};

export const bulkCreateTeamMembersResponseSchema: Schema<BulkCreateTeamMembersResponse> =
  s.object<BulkCreateTeamMembersResponse>({
    teamMembers: s.optional(
      s.record(
        s.string(),
        s.lazy(() => createTeamMemberResponseSchema),
      ),
    ),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    _keysMap: {
      teamMembers: "team_members",
    },
  });
