import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { loyaltyPromotionSchema, type LoyaltyPromotion } from "./loyalty-promotion.js";

export type LoyaltyPromotionUpdatedEventObject = {
  loyaltyPromotion?: LoyaltyPromotion;
};

export const loyaltyPromotionUpdatedEventObjectSchema: Schema<LoyaltyPromotionUpdatedEventObject> =
  s.object<LoyaltyPromotionUpdatedEventObject>({
    loyaltyPromotion: s.optional(s.lazy(() => loyaltyPromotionSchema)),
    _keysMap: {
      loyaltyPromotion: "loyalty_promotion",
    },
  });
