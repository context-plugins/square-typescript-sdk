import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Enumerates the possible assignment types that the team member can have. */
export const TeamMemberAssignedLocationsAssignmentType = {
  /**
   * The team member is assigned to all current and future locations. The `location_ids` field is
   * empty if the team member has this assignment type.
   */
  AllCurrentAndFutureLocations: "ALL_CURRENT_AND_FUTURE_LOCATIONS",
  /**
   * The team member is assigned to an explicit subset of locations. The `location_ids` field is the
   * list of locations that the team member is assigned to.
   */
  ExplicitLocations: "EXPLICIT_LOCATIONS",
} as const;
export type TeamMemberAssignedLocationsAssignmentType =
  | (typeof TeamMemberAssignedLocationsAssignmentType)[keyof typeof TeamMemberAssignedLocationsAssignmentType]
  | (string & {});

export const teamMemberAssignedLocationsAssignmentTypeSchema: EnumSchema<TeamMemberAssignedLocationsAssignmentType> =
  s.enumOf<TeamMemberAssignedLocationsAssignmentType>(TeamMemberAssignedLocationsAssignmentType);
