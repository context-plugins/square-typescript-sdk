import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { teamMemberSchema, type TeamMember } from "./team-member.js";

/**
 * Represents a response from a search request containing a filtered list of `TeamMember` objects.
 */
export type SearchTeamMembersResponse = {
  /** The filtered list of `TeamMember` objects. */
  teamMembers?: TeamMember[];
  /**
   * The opaque cursor for fetching the next page. For more information, see
   * [pagination](https://developer.squareup.com/docs/working-with-apis/pagination).
   */
  cursor?: string;
  /** The errors that occurred during the request. */
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
