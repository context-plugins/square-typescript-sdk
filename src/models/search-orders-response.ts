import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { orderEntrySchema, type OrderEntry } from "./order-entry.js";
import { orderSchema, type Order } from "./order.js";

/**
 * Either the `order_entries` or `orders` field is set, depending on whether `return_entries` is set
 * on the [SearchOrdersRequest](api-endpoint:Orders-SearchOrders).
 */
export type SearchOrdersResponse = {
  /**
   * A list of [OrderEntries](entity:OrderEntry) that fit the query conditions. The list is
   * populated only if `return_entries` is set to `true` in the request.
   */
  orderEntries?: OrderEntry[];
  /**
   * A list of [Order](entity:Order) objects that match the query conditions. The list is populated
   * only if `return_entries` is set to `false` in the request.
   */
  orders?: Order[];
  /**
   * The pagination cursor to be used in a subsequent request. If unset, this is the final response.
   * For more information, see
   * [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
   */
  cursor?: string;
  /** [Errors](entity:Error) encountered during the search. */
  errors?: Error[];
};

export const searchOrdersResponseSchema: Schema<SearchOrdersResponse> = s.object<SearchOrdersResponse>({
  orderEntries: s.optional(s.array(s.lazy(() => orderEntrySchema))),
  orders: s.optional(s.array(s.lazy(() => orderSchema))),
  cursor: s.optional(s.string()),
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
  _keysMap: {
    orderEntries: "order_entries",
  },
});
