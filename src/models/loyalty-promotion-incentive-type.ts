import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates the type of points incentive for a [loyalty promotion](entity:LoyaltyPromotion), which
 * is used to determine how buyers can earn points from the promotion.
 */
export const LoyaltyPromotionIncentiveType = {
  /**
   * Multiply the number of points earned from the base loyalty program. For example, "Earn double
   * points."
   */
  PointsMultiplier: "POINTS_MULTIPLIER",
  /**
   * Add a specified number of points to those earned from the base loyalty program. For example,
   * "Earn 10 additional points."
   */
  PointsAddition: "POINTS_ADDITION",
} as const;
export type LoyaltyPromotionIncentiveType =
  | (typeof LoyaltyPromotionIncentiveType)[keyof typeof LoyaltyPromotionIncentiveType]
  | (string & {});

export const loyaltyPromotionIncentiveTypeSchema: EnumSchema<LoyaltyPromotionIncentiveType> =
  s.enumOf<LoyaltyPromotionIncentiveType>(LoyaltyPromotionIncentiveType);
