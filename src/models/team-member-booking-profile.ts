import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The booking profile of a seller's team member, including the team member's ID, display name,
 * description and whether the team member can be booked as a service provider.
 */
export type TeamMemberBookingProfile = {
  /**
   * The ID of the [TeamMember](entity:TeamMember) object for the team member associated with the
   * booking profile.
   */
  teamMemberId?: string;
  /** The description of the team member. */
  description?: string;
  /** The display name of the team member. */
  displayName?: string;
  /**
   * Indicates whether the team member can be booked through the Bookings API or the seller's online
   * booking channel or site (`true`) or not (`false`).
   */
  isBookable?: boolean | null;
  /** The URL of the team member's image for the bookings profile. */
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
