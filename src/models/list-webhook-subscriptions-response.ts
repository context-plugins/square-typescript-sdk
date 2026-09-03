import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { webhookSubscriptionSchema, type WebhookSubscription } from "./webhook-subscription.js";

export type ListWebhookSubscriptionsResponse = {
  errors?: Error[];
  subscriptions?: WebhookSubscription[];
  cursor?: string;
};

export const listWebhookSubscriptionsResponseSchema: Schema<ListWebhookSubscriptionsResponse> =
  s.object<ListWebhookSubscriptionsResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    subscriptions: s.optional(s.array(s.lazy(() => webhookSubscriptionSchema))),
    cursor: s.optional(s.string()),
  });
