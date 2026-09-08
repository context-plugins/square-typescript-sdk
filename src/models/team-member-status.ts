import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Enumerates the possible statuses the team member can have within a business. */
export const TeamMemberStatus = {
  /** The team member can sign in to Point of Sale and the Seller Dashboard. */
  Active: "ACTIVE",
  /**
   * The team member can no longer sign in to Point of Sale or the Seller Dashboard, but the team
   * member's sales reports remain available.
   */
  Inactive: "INACTIVE",
} as const;
export type TeamMemberStatus = (typeof TeamMemberStatus)[keyof typeof TeamMemberStatus] | (string & {});

export const teamMemberStatusSchema: EnumSchema<TeamMemberStatus> =
  s.enumOf<TeamMemberStatus>(TeamMemberStatus);
