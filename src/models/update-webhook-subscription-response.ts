import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { webhookSubscriptionSchema, type WebhookSubscription } from "./webhook-subscription.js";

/**
 * Defines the fields that are included in the response body of a request to the
 * [UpdateWebhookSubscription](api-endpoint:WebhookSubscriptions-UpdateWebhookSubscription)
 * endpoint.
 *
 * Note: If there are errors processing the request, the [Subscription](entity:WebhookSubscription)
 * is not present.
 */
export type UpdateWebhookSubscriptionResponse = {
  /** Information on errors encountered during the request. */
  errors?: Error[];
  /**
   * Represents the details of a webhook subscription, including notification URL, event types, and
   * signature key.
   */
  subscription?: WebhookSubscription;
};

export const updateWebhookSubscriptionResponseSchema: Schema<UpdateWebhookSubscriptionResponse> =
  s.object<UpdateWebhookSubscriptionResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    subscription: s.optional(s.lazy(() => webhookSubscriptionSchema)),
  });
