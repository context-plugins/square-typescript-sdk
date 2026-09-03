import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  giftCardActivityCreatedEventDataSchema,
  type GiftCardActivityCreatedEventData,
} from "./gift-card-activity-created-event-data.js";

export type GiftCardActivityCreatedEvent = {
  merchantId?: string | null;
  type?: string | null;
  eventId?: string | null;
  createdAt?: string;
  data?: GiftCardActivityCreatedEventData;
};

export const giftCardActivityCreatedEventSchema: Schema<GiftCardActivityCreatedEvent> =
  s.object<GiftCardActivityCreatedEvent>({
    merchantId: s.optionalNullable(s.string()),
    type: s.optionalNullable(s.string()),
    eventId: s.optionalNullable(s.string()),
    createdAt: s.optional(s.string()),
    data: s.optional(s.lazy(() => giftCardActivityCreatedEventDataSchema)),
    _keysMap: {
      merchantId: "merchant_id",
      eventId: "event_id",
      createdAt: "created_at",
    },
  });
