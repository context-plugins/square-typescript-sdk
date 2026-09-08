import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { subscriptionEventSchema, type SubscriptionEvent } from "./subscription-event.js";

/**
 * Defines output parameters in a response from the
 * [ListSubscriptionEvents](api-endpoint:Subscriptions-ListSubscriptionEvents).
 */
export type ListSubscriptionEventsResponse = {
  /** Errors encountered during the request. */
  errors?: Error[];
  /** The retrieved subscription events. */
  subscriptionEvents?: SubscriptionEvent[];
  /**
   * When the total number of resulting subscription events exceeds the limit of a paged response,
   * the response includes a cursor for you to use in a subsequent request to fetch the next set of
   * events. If the cursor is unset, the response contains the last page of the results.
   *
   * For more information, see
   * [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
   */
  cursor?: string;
};

export const listSubscriptionEventsResponseSchema: Schema<ListSubscriptionEventsResponse> =
  s.object<ListSubscriptionEventsResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    subscriptionEvents: s.optional(s.array(s.lazy(() => subscriptionEventSchema))),
    cursor: s.optional(s.string()),
    _keysMap: {
      subscriptionEvents: "subscription_events",
    },
  });
