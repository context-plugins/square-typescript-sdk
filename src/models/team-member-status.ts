import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TeamMemberStatus = {
  Active: "ACTIVE",
  Inactive: "INACTIVE",
} as const;
export type TeamMemberStatus = (typeof TeamMemberStatus)[keyof typeof TeamMemberStatus] | (string & {});

export const teamMemberStatusSchema: EnumSchema<TeamMemberStatus> =
  s.enumOf<TeamMemberStatus>(TeamMemberStatus);
