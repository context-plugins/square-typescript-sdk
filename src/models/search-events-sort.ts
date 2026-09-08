import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { searchEventsSortFieldSchema, type SearchEventsSortField } from "./search-events-sort-field.js";
import { sortOrderSchema, type SortOrder } from "./sort-order.js";

/** Criteria to sort events by. */
export type SearchEventsSort = {
  /** Specifies the sort key for events returned from a search. */
  field?: SearchEventsSortField;
  /**
   * The order (e.g., chronological or alphabetical) in which results from a request are returned.
   */
  order?: SortOrder;
};

export const searchEventsSortSchema: Schema<SearchEventsSort> = s.object<SearchEventsSort>({
  field: s.optional(s.lazy(() => searchEventsSortFieldSchema)),
  order: s.optional(s.lazy(() => sortOrderSchema)),
});
