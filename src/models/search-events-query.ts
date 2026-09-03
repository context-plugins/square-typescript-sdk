import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { searchEventsFilterSchema, type SearchEventsFilter } from "./search-events-filter.js";
import { searchEventsSortSchema, type SearchEventsSort } from "./search-events-sort.js";

export type SearchEventsQuery = {
  filter?: SearchEventsFilter;
  sort?: SearchEventsSort;
};

export const searchEventsQuerySchema: Schema<SearchEventsQuery> = s.object<SearchEventsQuery>({
  filter: s.optional(s.lazy(() => searchEventsFilterSchema)),
  sort: s.optional(s.lazy(() => searchEventsSortSchema)),
});
