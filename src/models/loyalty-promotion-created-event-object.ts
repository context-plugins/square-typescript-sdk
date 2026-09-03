import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { loyaltyPromotionSchema, type LoyaltyPromotion } from "./loyalty-promotion.js";

export type LoyaltyPromotionCreatedEventObject = {
  loyaltyPromotion?: LoyaltyPromotion;
};

export const loyaltyPromotionCreatedEventObjectSchema: Schema<LoyaltyPromotionCreatedEventObject> =
  s.object<LoyaltyPromotionCreatedEventObject>({
    loyaltyPromotion: s.optional(s.lazy(() => loyaltyPromotionSchema)),
    _keysMap: {
      loyaltyPromotion: "loyalty_promotion",
    },
  });
