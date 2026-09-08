import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { teamMemberSchema, type TeamMember } from "./team-member.js";

/**
 * Represents a response from a retrieve request containing a `TeamMember` object or error messages.
 */
export type RetrieveTeamMemberResponse = {
  /** A record representing an individual team member for a business. */
  teamMember?: TeamMember;
  /** The errors that occurred during the request. */
  errors?: Error[];
};

export const retrieveTeamMemberResponseSchema: Schema<RetrieveTeamMemberResponse> =
  s.object<RetrieveTeamMemberResponse>({
    teamMember: s.optional(s.lazy(() => teamMemberSchema)),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    _keysMap: {
      teamMember: "team_member",
    },
  });
