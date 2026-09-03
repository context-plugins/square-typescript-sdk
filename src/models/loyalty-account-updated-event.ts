import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  loyaltyAccountUpdatedEventDataSchema,
  type LoyaltyAccountUpdatedEventData,
} from "./loyalty-account-updated-event-data.js";

export type LoyaltyAccountUpdatedEvent = {
  merchantId?: string | null;
  type?: string | null;
  eventId?: string | null;
  createdAt?: string;
  data?: LoyaltyAccountUpdatedEventData;
};

export const loyaltyAccountUpdatedEventSchema: Schema<LoyaltyAccountUpdatedEvent> =
  s.object<LoyaltyAccountUpdatedEvent>({
    merchantId: s.optionalNullable(s.string()),
    type: s.optionalNullable(s.string()),
    eventId: s.optionalNullable(s.string()),
    createdAt: s.optional(s.string()),
    data: s.optional(s.lazy(() => loyaltyAccountUpdatedEventDataSchema)),
    _keysMap: {
      merchantId: "merchant_id",
      eventId: "event_id",
      createdAt: "created_at",
    },
  });
