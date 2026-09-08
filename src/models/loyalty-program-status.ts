import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates whether the program is currently active. */
export const LoyaltyProgramStatus = {
  /** The loyalty program does not have an active subscription. Loyalty API requests fail. */
  Inactive: "INACTIVE",
  /** The program is fully functional. The program has an active subscription. */
  Active: "ACTIVE",
} as const;
export type LoyaltyProgramStatus =
  | (typeof LoyaltyProgramStatus)[keyof typeof LoyaltyProgramStatus]
  | (string & {});

export const loyaltyProgramStatusSchema: EnumSchema<LoyaltyProgramStatus> =
  s.enumOf<LoyaltyProgramStatus>(LoyaltyProgramStatus);
