import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { teamMemberWageSchema, type TeamMemberWage } from "./team-member-wage.js";

/**
 * A response to a request to get a `TeamMemberWage`. The response contains the requested
 * `TeamMemberWage` objects and might contain a set of `Error` objects if the request resulted in
 * errors.
 */
export type GetTeamMemberWageResponse = {
  /**
   * Job and wage information for a [team member](entity:TeamMember). This convenience object
   * provides details needed to specify the `wage` field for a [timecard](entity:Timecard).
   */
  teamMemberWage?: TeamMemberWage;
  /** Any errors that occurred during the request. */
  errors?: Error[];
};

export const getTeamMemberWageResponseSchema: Schema<GetTeamMemberWageResponse> =
  s.object<GetTeamMemberWageResponse>({
    teamMemberWage: s.optional(s.lazy(() => teamMemberWageSchema)),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    _keysMap: {
      teamMemberWage: "team_member_wage",
    },
  });
