import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TeamMemberBookingProfile = {
  teamMemberId?: string;
  description?: string;
  displayName?: string;
  isBookable?: boolean | null;
  profileImageUrl?: string;
};

export const teamMemberBookingProfileSchema: Schema<TeamMemberBookingProfile> =
  s.object<TeamMemberBookingProfile>({
    teamMemberId: s.optional(s.string()),
    description: s.optional(s.string()),
    displayName: s.optional(s.string()),
    isBookable: s.optionalNullable(s.boolean()),
    profileImageUrl: s.optional(s.string()),
    _keysMap: {
      teamMemberId: "team_member_id",
      displayName: "display_name",
      isBookable: "is_bookable",
      profileImageUrl: "profile_image_url",
    },
  });
