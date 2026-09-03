import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  subscriptionCreatedEventDataSchema,
  type SubscriptionCreatedEventData,
} from "./subscription-created-event-data.js";

export type SubscriptionCreatedEvent = {
  merchantId?: string | null;
  type?: string | null;
  eventId?: string | null;
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
