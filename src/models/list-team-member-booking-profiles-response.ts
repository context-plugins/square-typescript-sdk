import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import {
  teamMemberBookingProfileSchema,
  type TeamMemberBookingProfile,
} from "./team-member-booking-profile.js";

export type ListTeamMemberBookingProfilesResponse = {
  teamMemberBookingProfiles?: TeamMemberBookingProfile[];
  cursor?: string;
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
