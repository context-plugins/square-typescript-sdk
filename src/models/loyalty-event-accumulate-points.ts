import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Provides metadata when the event `type` is `ACCUMULATE_POINTS`. */
export type LoyaltyEventAccumulatePoints = {
  /** The ID of the [loyalty program](entity:LoyaltyProgram). */
  loyaltyProgramId?: string;
  /** The number of points accumulated by the event. */
  points?: number | null;
  /**
   * The ID of the [order](entity:Order) for which the buyer accumulated the points. This field is
   * returned only if the Orders API is used to process orders.
   */
  orderId?: string | null;
};

export const loyaltyEventAccumulatePointsSchema: Schema<LoyaltyEventAccumulatePoints> =
  s.object<LoyaltyEventAccumulatePoints>({
    loyaltyProgramId: s.optional(s.string()),
    points: s.optionalNullable(s.int()),
    orderId: s.optionalNullable(s.string()),
    _keysMap: {
      loyaltyProgramId: "loyalty_program_id",
      orderId: "order_id",
    },
  });
