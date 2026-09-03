import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { loyaltyPromotionSchema, type LoyaltyPromotion } from "./loyalty-promotion.js";

export type ListLoyaltyPromotionsResponse = {
  errors?: Error[];
  loyaltyPromotions?: LoyaltyPromotion[];
  cursor?: string;
};

export const listLoyaltyPromotionsResponseSchema: Schema<ListLoyaltyPromotionsResponse> =
  s.object<ListLoyaltyPromotionsResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    loyaltyPromotions: s.optional(s.array(s.lazy(() => loyaltyPromotionSchema))),
    cursor: s.optional(s.string()),
    _keysMap: {
      loyaltyPromotions: "loyalty_promotions",
    },
  });
