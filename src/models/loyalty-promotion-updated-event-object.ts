import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { loyaltyPromotionSchema, type LoyaltyPromotion } from "./loyalty-promotion.js";

/**
 * An object that contains the loyalty promotion associated with a `loyalty.promotion.updated`
 * event.
 */
export type LoyaltyPromotionUpdatedEventObject = {
  /**
   * Represents a promotion for a [loyalty program](entity:LoyaltyProgram). Loyalty promotions
   * enable buyers to earn extra points on top of those earned from the base program.
   *
   * A loyalty program can have a maximum of 10 loyalty promotions with an `ACTIVE` or `SCHEDULED`
   * status.
   */
  loyaltyPromotion?: LoyaltyPromotion;
};

export const loyaltyPromotionUpdatedEventObjectSchema: Schema<LoyaltyPromotionUpdatedEventObject> =
  s.object<LoyaltyPromotionUpdatedEventObject>({
    loyaltyPromotion: s.optional(s.lazy(() => loyaltyPromotionSchema)),
    _keysMap: {
      loyaltyPromotion: "loyalty_promotion",
    },
  });
