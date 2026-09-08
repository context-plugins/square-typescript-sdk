import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { webhookSubscriptionSchema, type WebhookSubscription } from "./webhook-subscription.js";

/** Creates a [Subscription](entity:WebhookSubscription). */
export type CreateWebhookSubscriptionRequest = {
  /**
   * A unique string that identifies the
   * [CreateWebhookSubscription](api-endpoint:WebhookSubscriptions-CreateWebhookSubscription)
   * request.
   */
  idempotencyKey?: string;
  /**
   * Represents the details of a webhook subscription, including notification URL, event types, and
   * signature key.
   */
  subscription: WebhookSubscription;
};

export const createWebhookSubscriptionRequestSchema: Schema<CreateWebhookSubscriptionRequest> =
  s.object<CreateWebhookSubscriptionRequest>({
    idempotencyKey: s.optional(s.string()),
    subscription: webhookSubscriptionSchema,
    _keysMap: {
      idempotencyKey: "idempotency_key",
    },
  });
