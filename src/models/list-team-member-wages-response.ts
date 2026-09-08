import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { teamMemberWageSchema, type TeamMemberWage } from "./team-member-wage.js";

/**
 * The response to a request for a set of `TeamMemberWage` objects. The response contains a set of
 * `TeamMemberWage` objects.
 */
export type ListTeamMemberWagesResponse = {
  /** A page of `TeamMemberWage` results. */
  teamMemberWages?: TeamMemberWage[];
  /**
   * The value supplied in the subsequent request to fetch the next page of `TeamMemberWage`
   * results.
   */
  cursor?: string;
  /** Any errors that occurred during the request. */
  errors?: Error[];
};

export const listTeamMemberWagesResponseSchema: Schema<ListTeamMemberWagesResponse> =
  s.object<ListTeamMemberWagesResponse>({
    teamMemberWages: s.optional(s.array(s.lazy(() => teamMemberWageSchema))),
    cursor: s.optional(s.string()),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    _keysMap: {
      teamMemberWages: "team_member_wages",
    },
  });
