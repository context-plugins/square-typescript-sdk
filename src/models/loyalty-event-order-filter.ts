import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Filter events by the order associated with the event. */
export type LoyaltyEventOrderFilter = {
  /** The ID of the [order](entity:Order) associated with the event. */
  orderId: string;
};

export const loyaltyEventOrderFilterSchema: Schema<LoyaltyEventOrderFilter> =
  s.object<LoyaltyEventOrderFilter>({
    orderId: s.string(),
    _keysMap: {
      orderId: "order_id",
    },
  });
