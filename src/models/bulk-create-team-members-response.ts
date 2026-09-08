import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  createTeamMemberResponseSchema,
  type CreateTeamMemberResponse,
} from "./create-team-member-response.js";
import { errorSchema, type Error } from "./error.js";

/**
 * Represents a response from a bulk create request containing the created `TeamMember` objects or
 * error messages.
 */
export type BulkCreateTeamMembersResponse = {
  /**
   * The successfully created `TeamMember` objects. Each key is the `idempotency_key` that maps to
   * the `CreateTeamMemberRequest`.
   */
  teamMembers?: Record<string, CreateTeamMemberResponse>;
  /** The errors that occurred during the request. */
  errors?: Error[];
};

export const bulkCreateTeamMembersResponseSchema: Schema<BulkCreateTeamMembersResponse> =
  s.object<BulkCreateTeamMembersResponse>({
    teamMembers: s.optional(
      s.record(
        s.string(),
        s.lazy(() => createTeamMemberResponseSchema),
      ),
    ),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    _keysMap: {
      teamMembers: "team_members",
    },
  });
