import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { orderRewardSchema, type OrderReward } from "./order-reward.js";
import { orderSchema, type Order } from "./order.js";

export type CalculateOrderRequest = {
  /**
   * Contains all information related to a single order to process with Square, including line items
   * that specify the products to purchase. `Order` objects also include information about any
   * associated tenders, refunds, and returns.
   *
   * All Connect V2 Transactions have all been converted to Orders including all associated
   * itemization data.
   */
  order: Order;
  /**
   * Identifies one or more loyalty reward tiers to apply during the order calculation. The
   * discounts defined by the reward tiers are added to the order only to preview the effect of
   * applying the specified rewards. The rewards do not correspond to actual redemptions; that is,
   * no `reward`s are created. Therefore, the reward `id`s are random strings used only to reference
   * the reward tier.
   */
  proposedRewards?: OrderReward[] | null;
};

export const calculateOrderRequestSchema: Schema<CalculateOrderRequest> = s.object<CalculateOrderRequest>({
  order: orderSchema,
  proposedRewards: s.optionalNullable(s.array(s.lazy(() => orderRewardSchema))),
  _keysMap: {
    proposedRewards: "proposed_rewards",
  },
});
