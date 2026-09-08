import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import {
  teamMemberBookingProfileSchema,
  type TeamMemberBookingProfile,
} from "./team-member-booking-profile.js";

export type ListTeamMemberBookingProfilesResponse = {
  /**
   * The list of team member booking profiles. The results are returned in the ascending order of
   * the time when the team member booking profiles were last updated. Multiple booking profiles
   * updated at the same time are further sorted in the ascending order of their IDs.
   */
  teamMemberBookingProfiles?: TeamMemberBookingProfile[];
  /**
   * The pagination cursor to be used in the subsequent request to get the next page of the results.
   * Stop retrieving the next page of the results when the cursor is not set.
   */
  cursor?: string;
  /** Errors that occurred during the request. */
  errors?: Error[];
};

export const listTeamMemberBookingProfilesResponseSchema: Schema<ListTeamMemberBookingProfilesResponse> =
  s.object<ListTeamMemberBookingProfilesResponse>({
    teamMemberBookingProfiles: s.optional(s.array(s.lazy(() => teamMemberBookingProfileSchema))),
    cursor: s.optional(s.string()),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    _keysMap: {
      teamMemberBookingProfiles: "team_member_booking_profiles",
    },
  });
