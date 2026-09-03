import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LoyaltyPromotionIncentivePointsAdditionData = {
  pointsAddition: number;
};

export const loyaltyPromotionIncentivePointsAdditionDataSchema: Schema<LoyaltyPromotionIncentivePointsAdditionData> =
  s.object<LoyaltyPromotionIncentivePointsAdditionData>({
    pointsAddition: s.number(),
    _keysMap: {
      pointsAddition: "points_addition",
    },
  });
