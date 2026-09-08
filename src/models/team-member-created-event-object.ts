import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { teamMemberSchema, type TeamMember } from "./team-member.js";

export type TeamMemberCreatedEventObject = {
  /** A record representing an individual team member for a business. */
  teamMember?: TeamMember;
};

export const teamMemberCreatedEventObjectSchema: Schema<TeamMemberCreatedEventObject> =
  s.object<TeamMemberCreatedEventObject>({
    teamMember: s.optional(s.lazy(() => teamMemberSchema)),
    _keysMap: {
      teamMember: "team_member",
    },
  });
