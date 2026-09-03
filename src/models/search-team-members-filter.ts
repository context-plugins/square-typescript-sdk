import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { teamMemberStatusSchema, type TeamMemberStatus } from "./team-member-status.js";

export type SearchTeamMembersFilter = {
  locationIds?: string[] | null;
  status?: TeamMemberStatus;
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
