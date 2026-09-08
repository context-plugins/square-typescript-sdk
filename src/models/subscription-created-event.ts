import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  subscriptionCreatedEventDataSchema,
  type SubscriptionCreatedEventData,
} from "./subscription-created-event-data.js";

/** Published when a [Subscription](entity:Subscription) is created. */
export type SubscriptionCreatedEvent = {
  /** The ID of the target merchant associated with the event. */
  merchantId?: string | null;
  /** The type of event this represents, `"subscription.created"`. */
  type?: string | null;
  /** A unique ID for the event. */
  eventId?: string | null;
  /** Timestamp of when the event was created, in RFC 3339 format. */
  createdAt?: string;
  data?: SubscriptionCreatedEventData;
};

export const subscriptionCreatedEventSchema: Schema<SubscriptionCreatedEvent> =
  s.object<SubscriptionCreatedEvent>({
    merchantId: s.optionalNullable(s.string()),
    type: s.optionalNullable(s.string()),
    eventId: s.optionalNullable(s.string()),
    createdAt: s.optional(s.string()),
    data: s.optional(s.lazy(() => subscriptionCreatedEventDataSchema)),
    _keysMap: {
      merchantId: "merchant_id",
      eventId: "event_id",
      createdAt: "created_at",
    },
  });
