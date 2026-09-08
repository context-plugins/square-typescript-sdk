import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { subscriptionSchema, type Subscription } from "./subscription.js";

/**
 * Defines output parameters in a response from the
 * [SearchSubscriptions](api-endpoint:Subscriptions-SearchSubscriptions) endpoint.
 */
export type SearchSubscriptionsResponse = {
  /** Errors encountered during the request. */
  errors?: Error[];
  /** The subscriptions matching the specified query expressions. */
  subscriptions?: Subscription[];
  /**
   * When the total number of resulting subscription exceeds the limit of a paged response, the
   * response includes a cursor for you to use in a subsequent request to fetch the next set of
   * results. If the cursor is unset, the response contains the last page of the results.
   *
   * For more information, see
   * [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
   */
  cursor?: string;
};

export const searchSubscriptionsResponseSchema: Schema<SearchSubscriptionsResponse> =
  s.object<SearchSubscriptionsResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    subscriptions: s.optional(s.array(s.lazy(() => subscriptionSchema))),
    cursor: s.optional(s.string()),
  });
