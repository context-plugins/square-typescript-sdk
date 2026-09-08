import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { searchEventsFilterSchema, type SearchEventsFilter } from "./search-events-filter.js";
import { searchEventsSortSchema, type SearchEventsSort } from "./search-events-sort.js";

/** Contains query criteria for the search. */
export type SearchEventsQuery = {
  /** Criteria to filter events by. */
  filter?: SearchEventsFilter;
  /** Criteria to sort events by. */
  sort?: SearchEventsSort;
};

export const searchEventsQuerySchema: Schema<SearchEventsQuery> = s.object<SearchEventsQuery>({
  filter: s.optional(s.lazy(() => searchEventsFilterSchema)),
  sort: s.optional(s.lazy(() => searchEventsSortSchema)),
});
