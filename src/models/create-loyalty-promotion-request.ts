import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { loyaltyPromotionSchema, type LoyaltyPromotion } from "./loyalty-promotion.js";

/** Represents a [CreateLoyaltyPromotion](api-endpoint:Loyalty-CreateLoyaltyPromotion) request. */
export type CreateLoyaltyPromotionRequest = {
  /**
   * Represents a promotion for a [loyalty program](entity:LoyaltyProgram). Loyalty promotions
   * enable buyers to earn extra points on top of those earned from the base program.
   *
   * A loyalty program can have a maximum of 10 loyalty promotions with an `ACTIVE` or `SCHEDULED`
   * status.
   */
  loyaltyPromotion: LoyaltyPromotion;
  /**
   * A unique identifier for this request, which is used to ensure idempotency. For more
   * information, see
   * [Idempotency](https://developer.squareup.com/docs/build-basics/common-api-patterns/idempotency).
   */
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
