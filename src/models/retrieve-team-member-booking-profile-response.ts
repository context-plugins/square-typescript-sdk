import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import {
  teamMemberBookingProfileSchema,
  type TeamMemberBookingProfile,
} from "./team-member-booking-profile.js";

export type RetrieveTeamMemberBookingProfileResponse = {
  /**
   * The booking profile of a seller's team member, including the team member's ID, display name,
   * description and whether the team member can be booked as a service provider.
   */
  teamMemberBookingProfile?: TeamMemberBookingProfile;
  /** Errors that occurred during the request. */
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
