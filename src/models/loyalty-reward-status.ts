import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of the loyalty reward. */
export const LoyaltyRewardStatus = {
  /** The reward is issued. */
  Issued: "ISSUED",
  /** The reward is redeemed. */
  Redeemed: "REDEEMED",
  /** The reward is deleted. */
  Deleted: "DELETED",
} as const;
export type LoyaltyRewardStatus =
  | (typeof LoyaltyRewardStatus)[keyof typeof LoyaltyRewardStatus]
  | (string & {});

export const loyaltyRewardStatusSchema: EnumSchema<LoyaltyRewardStatus> =
  s.enumOf<LoyaltyRewardStatus>(LoyaltyRewardStatus);
