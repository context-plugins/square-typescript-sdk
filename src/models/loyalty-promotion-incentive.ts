import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  loyaltyPromotionIncentivePointsAdditionDataSchema,
  type LoyaltyPromotionIncentivePointsAdditionData,
} from "./loyalty-promotion-incentive-points-addition-data.js";
import {
  loyaltyPromotionIncentivePointsMultiplierDataSchema,
  type LoyaltyPromotionIncentivePointsMultiplierData,
} from "./loyalty-promotion-incentive-points-multiplier-data.js";
import {
  loyaltyPromotionIncentiveTypeSchema,
  type LoyaltyPromotionIncentiveType,
} from "./loyalty-promotion-incentive-type.js";

/**
 * Represents how points for a [loyalty promotion](entity:LoyaltyPromotion) are calculated, either
 * by multiplying the points earned from the base program or by adding a specified number of points
 * to the points earned from the base program.
 */
export type LoyaltyPromotionIncentive = {
  /**
   * Indicates the type of points incentive for a [loyalty promotion](entity:LoyaltyPromotion),
   * which is used to determine how buyers can earn points from the promotion.
   */
  type: LoyaltyPromotionIncentiveType;
  /**
   * Represents the metadata for a `POINTS_MULTIPLIER` type of [loyalty promotion
   * incentive](entity:LoyaltyPromotionIncentive).
   */
  pointsMultiplierData?: LoyaltyPromotionIncentivePointsMultiplierData;
  /**
   * Represents the metadata for a `POINTS_ADDITION` type of [loyalty promotion
   * incentive](entity:LoyaltyPromotionIncentive).
   */
  pointsAdditionData?: LoyaltyPromotionIncentivePointsAdditionData;
};

export const loyaltyPromotionIncentiveSchema: Schema<LoyaltyPromotionIncentive> =
  s.object<LoyaltyPromotionIncentive>({
    type: loyaltyPromotionIncentiveTypeSchema,
    pointsMultiplierData: s.optional(s.lazy(() => loyaltyPromotionIncentivePointsMultiplierDataSchema)),
    pointsAdditionData: s.optional(s.lazy(() => loyaltyPromotionIncentivePointsAdditionDataSchema)),
    _keysMap: {
      pointsMultiplierData: "points_multiplier_data",
      pointsAdditionData: "points_addition_data",
    },
  });
