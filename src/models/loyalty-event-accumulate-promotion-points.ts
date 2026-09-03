import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LoyaltyEventAccumulatePromotionPoints = {
  loyaltyProgramId?: string;
  loyaltyPromotionId?: string;
  points: number;
  orderId: string;
};

export const loyaltyEventAccumulatePromotionPointsSchema: Schema<LoyaltyEventAccumulatePromotionPoints> =
  s.object<LoyaltyEventAccumulatePromotionPoints>({
    loyaltyProgramId: s.optional(s.string()),
    loyaltyPromotionId: s.optional(s.string()),
    points: s.number(),
    orderId: s.string(),
    _keysMap: {
      loyaltyProgramId: "loyalty_program_id",
      loyaltyPromotionId: "loyalty_promotion_id",
      orderId: "order_id",
    },
  });
