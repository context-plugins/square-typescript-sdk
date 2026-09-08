import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Request payload for the
 * [BulkRetrieveTeamMemberBookingProfiles](api-endpoint:Bookings-BulkRetrieveTeamMemberBookingProfiles)
 * endpoint.
 */
export type BulkRetrieveTeamMemberBookingProfilesRequest = {
  /** A non-empty list of IDs of team members whose booking profiles you want to retrieve. */
  teamMemberIds: string[];
};

export const bulkRetrieveTeamMemberBookingProfilesRequestSchema: Schema<BulkRetrieveTeamMemberBookingProfilesRequest> =
  s.object<BulkRetrieveTeamMemberBookingProfilesRequest>({
    teamMemberIds: s.array(s.string()),
    _keysMap: {
      teamMemberIds: "team_member_ids",
    },
  });
