import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { teamMemberStatusSchema, type TeamMemberStatus } from "./team-member-status.js";

/**
 * Represents a filter used in a search for `TeamMember` objects. `AND` logic is applied between the
 * individual fields, and `OR` logic is applied within list-based fields. For example, setting this
 * filter value:
 * ```
 * filter = (locations_ids = ["A", "B"], status = ACTIVE)
 * ```
 * returns only active team members assigned to either location "A" or "B".
 */
export type SearchTeamMembersFilter = {
  /**
   * When present, filters by team members assigned to the specified locations. When empty, includes
   * team members assigned to any location.
   */
  locationIds?: string[] | null;
  /** Enumerates the possible statuses the team member can have within a business. */
  status?: TeamMemberStatus;
  /**
   * When present and set to true, returns the team member who is the owner of the Square account.
   */
  isOwner?: boolean | null;
};

export const searchTeamMembersFilterSchema: Schema<SearchTeamMembersFilter> =
  s.object<SearchTeamMembersFilter>({
    locationIds: s.optionalNullable(s.array(s.string())),
    status: s.optional(s.lazy(() => teamMemberStatusSchema)),
    isOwner: s.optionalNullable(s.boolean()),
    _keysMap: {
      locationIds: "location_ids",
      isOwner: "is_owner",
    },
  });
