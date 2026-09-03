import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TeamMemberAssignedLocationsAssignmentType = {
  AllCurrentAndFutureLocations: "ALL_CURRENT_AND_FUTURE_LOCATIONS",
  ExplicitLocations: "EXPLICIT_LOCATIONS",
} as const;
export type TeamMemberAssignedLocationsAssignmentType =
  | (typeof TeamMemberAssignedLocationsAssignmentType)[keyof typeof TeamMemberAssignedLocationsAssignmentType]
  | (string & {});

export const teamMemberAssignedLocationsAssignmentTypeSchema: EnumSchema<TeamMemberAssignedLocationsAssignmentType> =
  s.enumOf<TeamMemberAssignedLocationsAssignmentType>(TeamMemberAssignedLocationsAssignmentType);
