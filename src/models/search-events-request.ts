import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { searchEventsQuerySchema, type SearchEventsQuery } from "./search-events-query.js";

/** Searches [Event](entity:Event)s for your application. */
export type SearchEventsRequest = {
  /**
   * A pagination cursor returned by a previous call to this endpoint. Provide this cursor to
   * retrieve the next set of events for your original query.
   *
   * For more information, see
   * [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
   */
  cursor?: string;
  /**
   * The maximum number of events to return in a single page. The response might contain fewer
   * events. The default value is 100, which is also the maximum allowed value.
   *
   * For more information, see
   * [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
   *
   * Default: 100
   */
  limit?: number;
  /** Contains query criteria for the search. */
  query?: SearchEventsQuery;
};

export const searchEventsRequestSchema: Schema<SearchEventsRequest> = s.object<SearchEventsRequest>({
  cursor: s.optional(s.string()),
  limit: s.optional(s.int()),
  query: s.optional(s.lazy(() => searchEventsQuerySchema)),
});
