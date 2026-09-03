import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { searchTeamMembersFilterSchema, type SearchTeamMembersFilter } from "./search-team-members-filter.js";

export type SearchTeamMembersQuery = {
  filter?: SearchTeamMembersFilter;
};

export const searchTeamMembersQuerySchema: Schema<SearchTeamMembersQuery> = s.object<SearchTeamMembersQuery>({
  filter: s.optional(s.lazy(() => searchTeamMembersFilterSchema)),
});
