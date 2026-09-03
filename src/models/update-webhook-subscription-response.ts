import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { webhookSubscriptionSchema, type WebhookSubscription } from "./webhook-subscription.js";

export type UpdateWebhookSubscriptionResponse = {
  errors?: Error[];
  subscription?: WebhookSubscription;
};

export const updateWebhookSubscriptionResponseSchema: Schema<UpdateWebhookSubscriptionResponse> =
  s.object<UpdateWebhookSubscriptionResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    subscription: s.optional(s.lazy(() => webhookSubscriptionSchema)),
  });
