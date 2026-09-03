import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  teamMemberAssignedLocationsAssignmentTypeSchema,
  type TeamMemberAssignedLocationsAssignmentType,
} from "./team-member-assigned-locations-assignment-type.js";

export type TeamMemberAssignedLocations = {
  assignmentType?: TeamMemberAssignedLocationsAssignmentType;
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
