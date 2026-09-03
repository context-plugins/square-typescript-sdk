import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TeamMemberInvitationStatus = {
  Uninvited: "UNINVITED",
  Pending: "PENDING",
  Accepted: "ACCEPTED",
} as const;
export type TeamMemberInvitationStatus =
  | (typeof TeamMemberInvitationStatus)[keyof typeof TeamMemberInvitationStatus]
  | (string & {});

export const teamMemberInvitationStatusSchema: EnumSchema<TeamMemberInvitationStatus> =
  s.enumOf<TeamMemberInvitationStatus>(TeamMemberInvitationStatus);
