import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  giftCardActivityUpdatedEventDataSchema,
  type GiftCardActivityUpdatedEventData,
} from "./gift-card-activity-updated-event-data.js";

export type GiftCardActivityUpdatedEvent = {
  merchantId?: string | null;
  type?: string | null;
  eventId?: string | null;
  createdAt?: string;
  data?: GiftCardActivityUpdatedEventData;
};

export const giftCardActivityUpdatedEventSchema: Schema<GiftCardActivityUpdatedEvent> =
  s.object<GiftCardActivityUpdatedEvent>({
    merchantId: s.optionalNullable(s.string()),
    type: s.optionalNullable(s.string()),
    eventId: s.optionalNullable(s.string()),
    createdAt: s.optional(s.string()),
    data: s.optional(s.lazy(() => giftCardActivityUpdatedEventDataSchema)),
    _keysMap: {
      merchantId: "merchant_id",
      eventId: "event_id",
      createdAt: "created_at",
    },
  });
