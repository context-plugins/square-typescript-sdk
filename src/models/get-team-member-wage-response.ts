import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { teamMemberWageSchema, type TeamMemberWage } from "./team-member-wage.js";

export type GetTeamMemberWageResponse = {
  teamMemberWage?: TeamMemberWage;
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
