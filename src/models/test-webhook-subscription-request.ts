import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TestWebhookSubscriptionRequest = {
  eventType?: string | null;
};

export const testWebhookSubscriptionRequestSchema: Schema<TestWebhookSubscriptionRequest> =
  s.object<TestWebhookSubscriptionRequest>({
    eventType: s.optionalNullable(s.string()),
    _keysMap: {
      eventType: "event_type",
    },
  });
