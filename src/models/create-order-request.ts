import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { orderSchema, type Order } from "./order.js";

export type CreateOrderRequest = {
  /**
   * Contains all information related to a single order to process with Square, including line items
   * that specify the products to purchase. `Order` objects also include information about any
   * associated tenders, refunds, and returns.
   *
   * All Connect V2 Transactions have all been converted to Orders including all associated
   * itemization data.
   */
  order?: Order;
  /**
   * A value you specify that uniquely identifies this order among orders you have created.
   *
   * If you are unsure whether a particular order was created successfully, you can try it again
   * with the same idempotency key without worrying about creating duplicate orders.
   *
   * For more information, see
   * [Idempotency](https://developer.squareup.com/docs/build-basics/common-api-patterns/idempotency).
   */
  idempotencyKey?: string;
};

export const createOrderRequestSchema: Schema<CreateOrderRequest> = s.object<CreateOrderRequest>({
  order: s.optional(s.lazy(() => orderSchema)),
  idempotencyKey: s.optional(s.string()),
  _keysMap: {
    idempotencyKey: "idempotency_key",
  },
});
