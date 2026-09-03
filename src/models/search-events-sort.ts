import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { searchEventsSortFieldSchema, type SearchEventsSortField } from "./search-events-sort-field.js";
import { sortOrderSchema, type SortOrder } from "./sort-order.js";

export type SearchEventsSort = {
  field?: SearchEventsSortField;
  order?: SortOrder;
};

export const searchEventsSortSchema: Schema<SearchEventsSort> = s.object<SearchEventsSort>({
  field: s.optional(s.lazy(() => searchEventsSortFieldSchema)),
  order: s.optional(s.lazy(() => sortOrderSchema)),
});
