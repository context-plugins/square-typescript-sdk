import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const LoyaltyProgramStatus = {
  Inactive: "INACTIVE",
  Active: "ACTIVE",
} as const;
export type LoyaltyProgramStatus =
  | (typeof LoyaltyProgramStatus)[keyof typeof LoyaltyProgramStatus]
  | (string & {});

export const loyaltyProgramStatusSchema: EnumSchema<LoyaltyProgramStatus> =
  s.enumOf<LoyaltyProgramStatus>(LoyaltyProgramStatus);
