import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { loyaltyEventSchema, type LoyaltyEvent } from "./loyalty-event.js";

/**
 * A response that contains loyalty events that satisfy the search criteria, in order by the
 * `created_at` date.
 */
export type SearchLoyaltyEventsResponse = {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /** The loyalty events that satisfy the search criteria. */
  events?: LoyaltyEvent[];
  /**
   * The pagination cursor to be used in a subsequent request. If empty, this is the final response.
   * For more information, see
   * [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
   */
  cursor?: string;
};

export const searchLoyaltyEventsResponseSchema: Schema<SearchLoyaltyEventsResponse> =
  s.object<SearchLoyaltyEventsResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    events: s.optional(s.array(s.lazy(() => loyaltyEventSchema))),
    cursor: s.optional(s.string()),
  });
