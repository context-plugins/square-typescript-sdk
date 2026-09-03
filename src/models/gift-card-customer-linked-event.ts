import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  giftCardCustomerLinkedEventDataSchema,
  type GiftCardCustomerLinkedEventData,
} from "./gift-card-customer-linked-event-data.js";

export type GiftCardCustomerLinkedEvent = {
  merchantId?: string | null;
  type?: string | null;
  eventId?: string | null;
  createdAt?: string;
  data?: GiftCardCustomerLinkedEventData;
};

export const giftCardCustomerLinkedEventSchema: Schema<GiftCardCustomerLinkedEvent> =
  s.object<GiftCardCustomerLinkedEvent>({
    merchantId: s.optionalNullable(s.string()),
    type: s.optionalNullable(s.string()),
    eventId: s.optionalNullable(s.string()),
    createdAt: s.optional(s.string()),
    data: s.optional(s.lazy(() => giftCardCustomerLinkedEventDataSchema)),
    _keysMap: {
      merchantId: "merchant_id",
      eventId: "event_id",
      createdAt: "created_at",
    },
  });
