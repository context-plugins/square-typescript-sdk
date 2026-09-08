import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { teamMemberSchema, type TeamMember } from "./team-member.js";

/** Represents an update request for a `TeamMember` object. */
export type UpdateTeamMemberRequest = {
  /** A record representing an individual team member for a business. */
  teamMember?: TeamMember;
};

export const updateTeamMemberRequestSchema: Schema<UpdateTeamMemberRequest> =
  s.object<UpdateTeamMemberRequest>({
    teamMember: s.optional(s.lazy(() => teamMemberSchema)),
    _keysMap: {
      teamMember: "team_member",
    },
  });
