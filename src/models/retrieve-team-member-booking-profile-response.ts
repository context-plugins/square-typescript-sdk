import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import {
  teamMemberBookingProfileSchema,
  type TeamMemberBookingProfile,
} from "./team-member-booking-profile.js";

export type RetrieveTeamMemberBookingProfileResponse = {
  teamMemberBookingProfile?: TeamMemberBookingProfile;
  errors?: Error[];
};

export const retrieveTeamMemberBookingProfileResponseSchema: Schema<RetrieveTeamMemberBookingProfileResponse> =
  s.object<RetrieveTeamMemberBookingProfileResponse>({
    teamMemberBookingProfile: s.optional(s.lazy(() => teamMemberBookingProfileSchema)),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    _keysMap: {
      teamMemberBookingProfile: "team_member_booking_profile",
    },
  });
