import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { searchTeamMembersQuerySchema, type SearchTeamMembersQuery } from "./search-team-members-query.js";

/** Represents a search request for a filtered list of `TeamMember` objects. */
export type SearchTeamMembersRequest = {
  /** Represents the parameters in a search for `TeamMember` objects. */
  query?: SearchTeamMembersQuery;
  /** The maximum number of `TeamMember` objects in a page (100 by default). */
  limit?: number;
  /**
   * The opaque cursor for fetching the next page. For more information, see
   * [pagination](https://developer.squareup.com/docs/working-with-apis/pagination).
   */
  cursor?: string;
};

export const searchTeamMembersRequestSchema: Schema<SearchTeamMembersRequest> =
  s.object<SearchTeamMembersRequest>({
    query: s.optional(s.lazy(() => searchTeamMembersQuerySchema)),
    limit: s.optional(s.int()),
    cursor: s.optional(s.string()),
  });
