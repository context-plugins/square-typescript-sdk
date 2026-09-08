import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { teamMemberSchema, type TeamMember } from "./team-member.js";

/** Represents a create request for a `TeamMember` object. */
export type CreateTeamMemberRequest = {
  /**
   * A unique string that identifies this `CreateTeamMember` request. Keys can be any valid string,
   * but must be unique for every request. For more information, see
   * [Idempotency](https://developer.squareup.com/docs/build-basics/common-api-patterns/idempotency).
   *
   * The minimum length is 1 and the maximum length is 45.
   */
  idempotencyKey?: string;
  /** A record representing an individual team member for a business. */
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
