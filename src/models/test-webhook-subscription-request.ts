import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Tests a [Subscription](entity:WebhookSubscription) by sending a test event to its notification
 * URL.
 */
export type TestWebhookSubscriptionRequest = {
  /**
   * The event type that will be used to test the [Subscription](entity:WebhookSubscription). The
   * event type must be contained in the list of event types in the
   * [Subscription](entity:WebhookSubscription).
   */
  eventType?: string | null;
};

export const testWebhookSubscriptionRequestSchema: Schema<TestWebhookSubscriptionRequest> =
  s.object<TestWebhookSubscriptionRequest>({
    eventType: s.optionalNullable(s.string()),
    _keysMap: {
      eventType: "event_type",
    },
  });
