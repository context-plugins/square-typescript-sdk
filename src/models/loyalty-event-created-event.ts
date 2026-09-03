import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  loyaltyEventCreatedEventDataSchema,
  type LoyaltyEventCreatedEventData,
} from "./loyalty-event-created-event-data.js";

export type LoyaltyEventCreatedEvent = {
  merchantId?: string | null;
  type?: string | null;
  eventId?: string | null;
  createdAt?: string;
  data?: LoyaltyEventCreatedEventData;
};

export const loyaltyEventCreatedEventSchema: Schema<LoyaltyEventCreatedEvent> =
  s.object<LoyaltyEventCreatedEvent>({
    merchantId: s.optionalNullable(s.string()),
    type: s.optionalNullable(s.string()),
    eventId: s.optionalNullable(s.string()),
    createdAt: s.optional(s.string()),
    data: s.optional(s.lazy(() => loyaltyEventCreatedEventDataSchema)),
    _keysMap: {
      merchantId: "merchant_id",
      eventId: "event_id",
      createdAt: "created_at",
    },
  });
