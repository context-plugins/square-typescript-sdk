import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Enumerates the possible invitation statuses the team member can have within a business. */
export const TeamMemberInvitationStatus = {
  /** The team member has not received an invitation. */
  Uninvited: "UNINVITED",
  /** The team member has received an invitation, but had not accepted it. */
  Pending: "PENDING",
  /** The team member has both received and accepted an invitation. */
  Accepted: "ACCEPTED",
} as const;
export type TeamMemberInvitationStatus =
  | (typeof TeamMemberInvitationStatus)[keyof typeof TeamMemberInvitationStatus]
  | (string & {});

export const teamMemberInvitationStatusSchema: EnumSchema<TeamMemberInvitationStatus> =
  s.enumOf<TeamMemberInvitationStatus>(TeamMemberInvitationStatus);
