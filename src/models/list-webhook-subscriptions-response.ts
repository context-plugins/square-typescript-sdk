import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { webhookSubscriptionSchema, type WebhookSubscription } from "./webhook-subscription.js";

/**
 * Defines the fields that are included in the response body of a request to the
 * [ListWebhookSubscriptions](api-endpoint:WebhookSubscriptions-ListWebhookSubscriptions) endpoint.
 *
 * Note: if there are errors processing the request, the subscriptions field will not be present.
 */
export type ListWebhookSubscriptionsResponse = {
  /** Information on errors encountered during the request. */
  errors?: Error[];
  /** The requested list of [Subscription](entity:WebhookSubscription)s. */
  subscriptions?: WebhookSubscription[];
  /**
   * The pagination cursor to be used in a subsequent request. If empty, this is the final response.
   *
   * For more information, see
   * [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
   */
  cursor?: string;
};

export const listWebhookSubscriptionsResponseSchema: Schema<ListWebhookSubscriptionsResponse> =
  s.object<ListWebhookSubscriptionsResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    subscriptions: s.optional(s.array(s.lazy(() => webhookSubscriptionSchema))),
    cursor: s.optional(s.string()),
  });
