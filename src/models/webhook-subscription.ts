import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type WebhookSubscription = {
  id?: string;
  name?: string | null;
  enabled?: boolean | null;
  eventTypes?: string[] | null;
  notificationUrl?: string | null;
  apiVersion?: string | null;
  signatureKey?: string;
  createdAt?: string;
  updatedAt?: string;
};

export const webhookSubscriptionSchema: Schema<WebhookSubscription> = s.object<WebhookSubscription>({
  id: s.optional(s.string()),
  name: s.optionalNullable(s.string()),
  enabled: s.optionalNullable(s.boolean()),
  eventTypes: s.optionalNullable(s.array(s.string())),
  notificationUrl: s.optionalNullable(s.string()),
  apiVersion: s.optionalNullable(s.string()),
  signatureKey: s.optional(s.string()),
  createdAt: s.optional(s.string()),
  updatedAt: s.optional(s.string()),
  _keysMap: {
    eventTypes: "event_types",
    notificationUrl: "notification_url",
    apiVersion: "api_version",
    signatureKey: "signature_key",
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
});
