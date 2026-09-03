import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const LoyaltyRewardStatus = {
  Issued: "ISSUED",
  Redeemed: "REDEEMED",
  Deleted: "DELETED",
} as const;
export type LoyaltyRewardStatus =
  | (typeof LoyaltyRewardStatus)[keyof typeof LoyaltyRewardStatus]
  | (string & {});

export const loyaltyRewardStatusSchema: EnumSchema<LoyaltyRewardStatus> =
  s.enumOf<LoyaltyRewardStatus>(LoyaltyRewardStatus);
