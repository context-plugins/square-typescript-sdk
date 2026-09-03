import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { teamMemberSchema, type TeamMember } from "./team-member.js";

export type TeamMemberUpdatedEventObject = {
  teamMember?: TeamMember;
};

export const teamMemberUpdatedEventObjectSchema: Schema<TeamMemberUpdatedEventObject> =
  s.object<TeamMemberUpdatedEventObject>({
    teamMember: s.optional(s.lazy(() => teamMemberSchema)),
    _keysMap: {
      teamMember: "team_member",
    },
  });
