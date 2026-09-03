import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { loyaltyPromotionSchema, type LoyaltyPromotion } from "./loyalty-promotion.js";

export type CreateLoyaltyPromotionResponse = {
  errors?: Error[];
  loyaltyPromotion?: LoyaltyPromotion;
};

export const createLoyaltyPromotionResponseSchema: Schema<CreateLoyaltyPromotionResponse> =
  s.object<CreateLoyaltyPromotionResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    loyaltyPromotion: s.optional(s.lazy(() => loyaltyPromotionSchema)),
    _keysMap: {
      loyaltyPromotion: "loyalty_promotion",
    },
  });
