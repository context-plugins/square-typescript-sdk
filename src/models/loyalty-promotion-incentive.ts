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

export type LoyaltyPromotionIncentive = {
  type: LoyaltyPromotionIncentiveType;
  pointsMultiplierData?: LoyaltyPromotionIncentivePointsMultiplierData;
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
