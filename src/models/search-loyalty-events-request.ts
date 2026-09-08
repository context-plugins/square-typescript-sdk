import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { loyaltyEventQuerySchema, type LoyaltyEventQuery } from "./loyalty-event-query.js";

/** A request to search for loyalty events. */
export type SearchLoyaltyEventsRequest = {
  /** Represents a query used to search for loyalty events. */
  query?: LoyaltyEventQuery;
  /**
   * The maximum number of results to include in the response. The last page might contain fewer
   * events. The default is 30 events.
   */
  limit?: number;
  /**
   * A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the
   * next set of results for your original query. For more information, see
   * [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
   */
  cursor?: string;
};

export const searchLoyaltyEventsRequestSchema: Schema<SearchLoyaltyEventsRequest> =
  s.object<SearchLoyaltyEventsRequest>({
    query: s.optional(s.lazy(() => loyaltyEventQuerySchema)),
    limit: s.optional(s.number()),
    cursor: s.optional(s.string()),
  });
