import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { webhookSubscriptionSchema, type WebhookSubscription } from "./webhook-subscription.js";

export type CreateWebhookSubscriptionRequest = {
  idempotencyKey?: string;
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
