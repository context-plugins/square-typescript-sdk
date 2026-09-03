import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { teamMemberSchema, type TeamMember } from "./team-member.js";

export type UpdateTeamMemberResponse = {
  teamMember?: TeamMember;
  errors?: Error[];
};

export const updateTeamMemberResponseSchema: Schema<UpdateTeamMemberResponse> =
  s.object<UpdateTeamMemberResponse>({
    teamMember: s.optional(s.lazy(() => teamMemberSchema)),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    _keysMap: {
      teamMember: "team_member",
    },
  });
