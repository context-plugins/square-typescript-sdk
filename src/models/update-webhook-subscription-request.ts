import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { webhookSubscriptionSchema, type WebhookSubscription } from "./webhook-subscription.js";

export type UpdateWebhookSubscriptionRequest = {
  subscription?: WebhookSubscription;
};

export const updateWebhookSubscriptionRequestSchema: Schema<UpdateWebhookSubscriptionRequest> =
  s.object<UpdateWebhookSubscriptionRequest>({
    subscription: s.optional(s.lazy(() => webhookSubscriptionSchema)),
  });
