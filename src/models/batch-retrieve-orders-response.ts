import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { orderSchema, type Order } from "./order.js";

/**
 * Defines the fields that are included in the response body of a request to the
 * `BatchRetrieveOrders` endpoint.
 */
export type BatchRetrieveOrdersResponse = {
  /** The requested orders. This will omit any requested orders that do not exist. */
  orders?: Order[];
  /** Any errors that occurred during the request. */
  errors?: Error[];
};

export const batchRetrieveOrdersResponseSchema: Schema<BatchRetrieveOrdersResponse> =
  s.object<BatchRetrieveOrdersResponse>({
    orders: s.optional(s.array(s.lazy(() => orderSchema))),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
  });
