import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { loyaltyPromotionSchema, type LoyaltyPromotion } from "./loyalty-promotion.js";

/**
 * Represents a [CreateLoyaltyPromotion](api-endpoint:Loyalty-CreateLoyaltyPromotion) response.
 * Either `loyalty_promotion` or `errors` is present in the response.
 */
export type CreateLoyaltyPromotionResponse = {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /**
   * Represents a promotion for a [loyalty program](entity:LoyaltyProgram). Loyalty promotions
   * enable buyers to earn extra points on top of those earned from the base program.
   *
   * A loyalty program can have a maximum of 10 loyalty promotions with an `ACTIVE` or `SCHEDULED`
   * status.
   */
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
