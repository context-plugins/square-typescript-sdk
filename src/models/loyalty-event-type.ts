import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of the loyalty event. */
export const LoyaltyEventType = {
  /**
   * Points are added to a loyalty account for a purchase that qualified for points based on an
   * [accrual rule](entity:LoyaltyProgramAccrualRule).
   */
  AccumulatePoints: "ACCUMULATE_POINTS",
  /** A [loyalty reward](entity:LoyaltyReward) is created. */
  CreateReward: "CREATE_REWARD",
  /** A loyalty reward is redeemed. */
  RedeemReward: "REDEEM_REWARD",
  /** A loyalty reward is deleted. */
  DeleteReward: "DELETE_REWARD",
  /** Loyalty points are manually adjusted. */
  AdjustPoints: "ADJUST_POINTS",
  /** Loyalty points are expired according to the expiration policy of the loyalty program. */
  ExpirePoints: "EXPIRE_POINTS",
  /** Some other loyalty event occurred. */
  Other: "OTHER",
  /**
   * Points are added to a loyalty account for a purchase that qualified for a [loyalty
   * promotion](entity:LoyaltyPromotion).
   */
  AccumulatePromotionPoints: "ACCUMULATE_PROMOTION_POINTS",
} as const;
export type LoyaltyEventType = (typeof LoyaltyEventType)[keyof typeof LoyaltyEventType] | (string & {});

export const loyaltyEventTypeSchema: EnumSchema<LoyaltyEventType> =
  s.enumOf<LoyaltyEventType>(LoyaltyEventType);
