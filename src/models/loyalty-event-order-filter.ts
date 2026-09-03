import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LoyaltyEventOrderFilter = {
  orderId: string;
};

export const loyaltyEventOrderFilterSchema: Schema<LoyaltyEventOrderFilter> =
  s.object<LoyaltyEventOrderFilter>({
    orderId: s.string(),
    _keysMap: {
      orderId: "order_id",
    },
  });
