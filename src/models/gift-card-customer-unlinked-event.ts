import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  giftCardCustomerUnlinkedEventDataSchema,
  type GiftCardCustomerUnlinkedEventData,
} from "./gift-card-customer-unlinked-event-data.js";

export type GiftCardCustomerUnlinkedEvent = {
  merchantId?: string | null;
  type?: string | null;
  eventId?: string | null;
  createdAt?: string;
  data?: GiftCardCustomerUnlinkedEventData;
};

export const giftCardCustomerUnlinkedEventSchema: Schema<GiftCardCustomerUnlinkedEvent> =
  s.object<GiftCardCustomerUnlinkedEvent>({
    merchantId: s.optionalNullable(s.string()),
    type: s.optionalNullable(s.string()),
    eventId: s.optionalNullable(s.string()),
    createdAt: s.optional(s.string()),
    data: s.optional(s.lazy(() => giftCardCustomerUnlinkedEventDataSchema)),
    _keysMap: {
      merchantId: "merchant_id",
      eventId: "event_id",
      createdAt: "created_at",
    },
  });
