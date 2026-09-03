import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { teamMemberWageSchema, type TeamMemberWage } from "./team-member-wage.js";

export type ListTeamMemberWagesResponse = {
  teamMemberWages?: TeamMemberWage[];
  cursor?: string;
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
