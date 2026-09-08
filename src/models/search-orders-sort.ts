import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { searchOrdersSortFieldSchema, type SearchOrdersSortField } from "./search-orders-sort-field.js";
import { sortOrderSchema, type SortOrder } from "./sort-order.js";

/**
 * Sorting criteria for a `SearchOrders` request. Results can only be sorted by a timestamp field.
 */
export type SearchOrdersSort = {
  /** Specifies which timestamp to use to sort `SearchOrder` results. */
  sortField: SearchOrdersSortField;
  /**
   * The order (e.g., chronological or alphabetical) in which results from a request are returned.
   */
  sortOrder?: SortOrder;
};

export const searchOrdersSortSchema: Schema<SearchOrdersSort> = s.object<SearchOrdersSort>({
  sortField: searchOrdersSortFieldSchema,
  sortOrder: s.optional(s.lazy(() => sortOrderSchema)),
  _keysMap: {
    sortField: "sort_field",
    sortOrder: "sort_order",
  },
});
