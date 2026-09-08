import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { webhookSubscriptionSchema, type WebhookSubscription } from "./webhook-subscription.js";

/** Updates a [Subscription](entity:WebhookSubscription). */
export type UpdateWebhookSubscriptionRequest = {
  /**
   * Represents the details of a webhook subscription, including notification URL, event types, and
   * signature key.
   */
  subscription?: WebhookSubscription;
};

export const updateWebhookSubscriptionRequestSchema: Schema<UpdateWebhookSubscriptionRequest> =
  s.object<UpdateWebhookSubscriptionRequest>({
    subscription: s.optional(s.lazy(() => webhookSubscriptionSchema)),
  });
