import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const LoyaltyPromotionIncentiveType = {
  PointsMultiplier: "POINTS_MULTIPLIER",
  PointsAddition: "POINTS_ADDITION",
} as const;
export type LoyaltyPromotionIncentiveType =
  | (typeof LoyaltyPromotionIncentiveType)[keyof typeof LoyaltyPromotionIncentiveType]
  | (string & {});

export const loyaltyPromotionIncentiveTypeSchema: EnumSchema<LoyaltyPromotionIncentiveType> =
  s.enumOf<LoyaltyPromotionIncentiveType>(LoyaltyPromotionIncentiveType);
