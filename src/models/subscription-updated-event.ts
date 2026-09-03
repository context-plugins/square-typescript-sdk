import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  subscriptionUpdatedEventDataSchema,
  type SubscriptionUpdatedEventData,
} from "./subscription-updated-event-data.js";

export type SubscriptionUpdatedEvent = {
  merchantId?: string | null;
  type?: string | null;
  eventId?: string | null;
  createdAt?: string;
  data?: SubscriptionUpdatedEventData;
};

export const subscriptionUpdatedEventSchema: Schema<SubscriptionUpdatedEvent> =
  s.object<SubscriptionUpdatedEvent>({
    merchantId: s.optionalNullable(s.string()),
    type: s.optionalNullable(s.string()),
    eventId: s.optionalNullable(s.string()),
    createdAt: s.optional(s.string()),
    data: s.optional(s.lazy(() => subscriptionUpdatedEventDataSchema)),
    _keysMap: {
      merchantId: "merchant_id",
      eventId: "event_id",
      createdAt: "created_at",
    },
  });
