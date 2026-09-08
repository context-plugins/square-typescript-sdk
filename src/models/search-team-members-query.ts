import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { searchTeamMembersFilterSchema, type SearchTeamMembersFilter } from "./search-team-members-filter.js";

/** Represents the parameters in a search for `TeamMember` objects. */
export type SearchTeamMembersQuery = {
  /**
   * Represents a filter used in a search for `TeamMember` objects. `AND` logic is applied between
   * the individual fields, and `OR` logic is applied within list-based fields. For example, setting
   * this filter value:
   * ```
   * filter = (locations_ids = ["A", "B"], status = ACTIVE)
   * ```
   * returns only active team members assigned to either location "A" or "B".
   */
  filter?: SearchTeamMembersFilter;
};

export const searchTeamMembersQuerySchema: Schema<SearchTeamMembersQuery> = s.object<SearchTeamMembersQuery>({
  filter: s.optional(s.lazy(() => searchTeamMembersFilterSchema)),
});
