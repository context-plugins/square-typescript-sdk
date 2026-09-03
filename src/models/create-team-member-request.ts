import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { teamMemberSchema, type TeamMember } from "./team-member.js";

export type CreateTeamMemberRequest = {
  idempotencyKey?: string;
  teamMember?: TeamMember;
};

export const createTeamMemberRequestSchema: Schema<CreateTeamMemberRequest> =
  s.object<CreateTeamMemberRequest>({
    idempotencyKey: s.optional(s.string()),
    teamMember: s.optional(s.lazy(() => teamMemberSchema)),
    _keysMap: {
      idempotencyKey: "idempotency_key",
      teamMember: "team_member",
    },
  });
