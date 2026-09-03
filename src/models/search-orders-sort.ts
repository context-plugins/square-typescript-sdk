import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { searchOrdersSortFieldSchema, type SearchOrdersSortField } from "./search-orders-sort-field.js";
import { sortOrderSchema, type SortOrder } from "./sort-order.js";

export type SearchOrdersSort = {
  sortField: SearchOrdersSortField;
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
