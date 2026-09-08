import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import {
  updateTeamMemberResponseSchema,
  type UpdateTeamMemberResponse,
} from "./update-team-member-response.js";

/**
 * Represents a response from a bulk update request containing the updated `TeamMember` objects or
 * error messages.
 */
export type BulkUpdateTeamMembersResponse = {
  /**
   * The successfully updated `TeamMember` objects. Each key is the `team_member_id` that maps to
   * the `UpdateTeamMemberRequest`.
   */
  teamMembers?: Record<string, UpdateTeamMemberResponse>;
  /** The errors that occurred during the request. */
  errors?: Error[];
};

export const bulkUpdateTeamMembersResponseSchema: Schema<BulkUpdateTeamMembersResponse> =
  s.object<BulkUpdateTeamMembersResponse>({
    teamMembers: s.optional(
      s.record(
        s.string(),
        s.lazy(() => updateTeamMemberResponseSchema),
      ),
    ),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    _keysMap: {
      teamMembers: "team_members",
    },
  });
