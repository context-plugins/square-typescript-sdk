import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { searchOrdersFilterSchema, type SearchOrdersFilter } from "./search-orders-filter.js";
import { searchOrdersSortSchema, type SearchOrdersSort } from "./search-orders-sort.js";

/** Contains query criteria for the search. */
export type SearchOrdersQuery = {
  /**
   * Filtering criteria to use for a `SearchOrders` request. Multiple filters are ANDed together.
   */
  filter?: SearchOrdersFilter;
  /**
   * Sorting criteria for a `SearchOrders` request. Results can only be sorted by a timestamp field.
   */
  sort?: SearchOrdersSort;
};

export const searchOrdersQuerySchema: Schema<SearchOrdersQuery> = s.object<SearchOrdersQuery>({
  filter: s.optional(s.lazy(() => searchOrdersFilterSchema)),
  sort: s.optional(s.lazy(() => searchOrdersSortSchema)),
});
