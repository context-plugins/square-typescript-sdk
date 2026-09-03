import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const LoyaltyEventType = {
  AccumulatePoints: "ACCUMULATE_POINTS",
  CreateReward: "CREATE_REWARD",
  RedeemReward: "REDEEM_REWARD",
  DeleteReward: "DELETE_REWARD",
  AdjustPoints: "ADJUST_POINTS",
  ExpirePoints: "EXPIRE_POINTS",
  Other: "OTHER",
  AccumulatePromotionPoints: "ACCUMULATE_PROMOTION_POINTS",
} as const;
export type LoyaltyEventType = (typeof LoyaltyEventType)[keyof typeof LoyaltyEventType] | (string & {});

export const loyaltyEventTypeSchema: EnumSchema<LoyaltyEventType> =
  s.enumOf<LoyaltyEventType>(LoyaltyEventType);
