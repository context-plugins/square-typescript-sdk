import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { orderSchema, type Order } from "./order.js";

/**
 * Defines the fields that are included in the response body of a request to the `CreateOrder`
 * endpoint.
 *
 * Either `errors` or `order` is present in a given response, but never both.
 */
export type CreateOrderResponse = {
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

export const createOrderResponseSchema: Schema<CreateOrderResponse> = s.object<CreateOrderResponse>({
  order: s.optional(s.lazy(() => orderSchema)),
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
});
