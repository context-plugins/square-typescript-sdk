import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BulkRetrieveTeamMemberBookingProfilesRequest = {
  teamMemberIds: string[];
};

export const bulkRetrieveTeamMemberBookingProfilesRequestSchema: Schema<BulkRetrieveTeamMemberBookingProfilesRequest> =
  s.object<BulkRetrieveTeamMemberBookingProfilesRequest>({
    teamMemberIds: s.array(s.string()),
    _keysMap: {
      teamMemberIds: "team_member_ids",
    },
  });
