import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import {
  retrieveTeamMemberBookingProfileResponseSchema,
  type RetrieveTeamMemberBookingProfileResponse,
} from "./retrieve-team-member-booking-profile-response.js";

export type BulkRetrieveTeamMemberBookingProfilesResponse = {
  teamMemberBookingProfiles?: Record<string, RetrieveTeamMemberBookingProfileResponse>;
  errors?: Error[];
};

export const bulkRetrieveTeamMemberBookingProfilesResponseSchema: Schema<BulkRetrieveTeamMemberBookingProfilesResponse> =
  s.object<BulkRetrieveTeamMemberBookingProfilesResponse>({
    teamMemberBookingProfiles: s.optional(
      s.record(
        s.string(),
        s.lazy(() => retrieveTeamMemberBookingProfileResponseSchema),
      ),
    ),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    _keysMap: {
      teamMemberBookingProfiles: "team_member_booking_profiles",
    },
  });
