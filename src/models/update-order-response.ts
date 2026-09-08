import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { orderSchema, type Order } from "./order.js";

/**
 * Defines the fields that are included in the response body of a request to the
 * [UpdateOrder](api-endpoint:Orders-UpdateOrder) endpoint.
 */
export type UpdateOrderResponse = {
  /**
   * Contains all information related to a single order to process with Square, including line items
   * that specify the products to purchase. `Order` objects also include information about any
   * associated tenders, refunds, and returns.
   *
   * All Connect V2 Transactions have all been converted to Orders including all associated
   * itemization data.
   */
  order?: Order;
  /** Any errors that occurred during the request. */
  errors?: Error[];
};

export const updateOrderResponseSchema: Schema<UpdateOrderResponse> = s.object<UpdateOrderResponse>({
  order: s.optional(s.lazy(() => orderSchema)),
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
});
