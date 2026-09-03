import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { teamMemberSchema, type TeamMember } from "./team-member.js";

export type SearchTeamMembersResponse = {
  teamMembers?: TeamMember[];
  cursor?: string;
  errors?: Error[];
};

export const searchTeamMembersResponseSchema: Schema<SearchTeamMembersResponse> =
  s.object<SearchTeamMembersResponse>({
    teamMembers: s.optional(s.array(s.lazy(() => teamMemberSchema))),
    cursor: s.optional(s.string()),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    _keysMap: {
      teamMembers: "team_members",
    },
  });
