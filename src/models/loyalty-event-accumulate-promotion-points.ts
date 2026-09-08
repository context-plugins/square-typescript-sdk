import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Provides metadata when the event `type` is `ACCUMULATE_PROMOTION_POINTS`. */
export type LoyaltyEventAccumulatePromotionPoints = {
  /** The Square-assigned ID of the [loyalty program](entity:LoyaltyProgram). */
  loyaltyProgramId?: string;
  /** The Square-assigned ID of the [loyalty promotion](entity:LoyaltyPromotion). */
  loyaltyPromotionId?: string;
  /** The number of points earned by the event. */
  points: number;
  /**
   * The ID of the [order](entity:Order) for which the buyer earned the promotion points. Only
   * applications that use the Orders API to process orders can trigger this event.
   */
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
