import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { searchTeamMembersQuerySchema, type SearchTeamMembersQuery } from "./search-team-members-query.js";

export type SearchTeamMembersRequest = {
  query?: SearchTeamMembersQuery;
  limit?: number;
  cursor?: string;
};

export const searchTeamMembersRequestSchema: Schema<SearchTeamMembersRequest> =
  s.object<SearchTeamMembersRequest>({
    query: s.optional(s.lazy(() => searchTeamMembersQuerySchema)),
    limit: s.optional(s.number()),
    cursor: s.optional(s.string()),
  });
