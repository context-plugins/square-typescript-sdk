import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LoyaltyPromotionIncentivePointsMultiplierData = {
  pointsMultiplier?: number | null;
  multiplier?: string | null;
};

export const loyaltyPromotionIncentivePointsMultiplierDataSchema: Schema<LoyaltyPromotionIncentivePointsMultiplierData> =
  s.object<LoyaltyPromotionIncentivePointsMultiplierData>({
    pointsMultiplier: s.optionalNullable(s.number()),
    multiplier: s.optionalNullable(s.string()),
    _keysMap: {
      pointsMultiplier: "points_multiplier",
    },
  });
