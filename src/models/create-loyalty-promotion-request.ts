import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { loyaltyPromotionSchema, type LoyaltyPromotion } from "./loyalty-promotion.js";

export type CreateLoyaltyPromotionRequest = {
  loyaltyPromotion: LoyaltyPromotion;
  idempotencyKey: string;
};

export const createLoyaltyPromotionRequestSchema: Schema<CreateLoyaltyPromotionRequest> =
  s.object<CreateLoyaltyPromotionRequest>({
    loyaltyPromotion: loyaltyPromotionSchema,
    idempotencyKey: s.string(),
    _keysMap: {
      loyaltyPromotion: "loyalty_promotion",
      idempotencyKey: "idempotency_key",
    },
  });
