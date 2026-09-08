import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  teamMemberAssignedLocationsAssignmentTypeSchema,
  type TeamMemberAssignedLocationsAssignmentType,
} from "./team-member-assigned-locations-assignment-type.js";

/** An object that represents a team member's assignment to locations. */
export type TeamMemberAssignedLocations = {
  /** Enumerates the possible assignment types that the team member can have. */
  assignmentType?: TeamMemberAssignedLocationsAssignmentType;
  /** The explicit locations that the team member is assigned to. */
  locationIds?: string[] | null;
};

export const teamMemberAssignedLocationsSchema: Schema<TeamMemberAssignedLocations> =
  s.object<TeamMemberAssignedLocations>({
    assignmentType: s.optional(s.lazy(() => teamMemberAssignedLocationsAssignmentTypeSchema)),
    locationIds: s.optionalNullable(s.array(s.string())),
    _keysMap: {
      assignmentType: "assignment_type",
      locationIds: "location_ids",
    },
  });
