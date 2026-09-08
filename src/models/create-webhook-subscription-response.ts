import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { webhookSubscriptionSchema, type WebhookSubscription } from "./webhook-subscription.js";

/**
 * Defines the fields that are included in the response body of a request to the
 * [CreateWebhookSubscription](api-endpoint:WebhookSubscriptions-CreateWebhookSubscription)
 * endpoint.
 *
 * Note: if there are errors processing the request, the [Subscription](entity:WebhookSubscription)
 * will not be present.
 */
export type CreateWebhookSubscriptionResponse = {
  /** Information on errors encountered during the request. */
  errors?: Error[];
  /**
   * Represents the details of a webhook subscription, including notification URL, event types, and
   * signature key.
   */
  subscription?: WebhookSubscription;
};

export const createWebhookSubscriptionResponseSchema: Schema<CreateWebhookSubscriptionResponse> =
  s.object<CreateWebhookSubscriptionResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    subscription: s.optional(s.lazy(() => webhookSubscriptionSchema)),
  });
