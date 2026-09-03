import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { searchOrdersFilterSchema, type SearchOrdersFilter } from "./search-orders-filter.js";
import { searchOrdersSortSchema, type SearchOrdersSort } from "./search-orders-sort.js";

export type SearchOrdersQuery = {
  filter?: SearchOrdersFilter;
  sort?: SearchOrdersSort;
};

export const searchOrdersQuerySchema: Schema<SearchOrdersQuery> = s.object<SearchOrdersQuery>({
  filter: s.optional(s.lazy(() => searchOrdersFilterSchema)),
  sort: s.optional(s.lazy(() => searchOrdersSortSchema)),
});
