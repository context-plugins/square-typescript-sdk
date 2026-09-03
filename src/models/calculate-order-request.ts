import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { orderRewardSchema, type OrderReward } from "./order-reward.js";
import { orderSchema, type Order } from "./order.js";

export type CalculateOrderRequest = {
  order: Order;
  proposedRewards?: OrderReward[] | null;
};

export const calculateOrderRequestSchema: Schema<CalculateOrderRequest> = s.object<CalculateOrderRequest>({
  order: orderSchema,
  proposedRewards: s.optionalNullable(s.array(s.lazy(() => orderRewardSchema))),
  _keysMap: {
    proposedRewards: "proposed_rewards",
  },
});
