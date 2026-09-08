import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  giftCardCustomerUnlinkedEventDataSchema,
  type GiftCardCustomerUnlinkedEventData,
} from "./gift-card-customer-unlinked-event-data.js";

/** Published when a [customer](entity:Customer) is unlinked from a [gift card](entity:GiftCard). */
export type GiftCardCustomerUnlinkedEvent = {
  /** The ID of the Square seller associated with the event. */
  merchantId?: string | null;
  /** The type of event. For this event, the value is `gift_card.customer_unlinked`. */
  type?: string | null;
  /**
   * The unique ID of the event, which is used for [idempotency
   * support](https://developer.squareup.com/docs/webhooks/step4manage#webhooks-best-practices).
   */
  eventId?: string | null;
  /** The timestamp of when the event was created, in RFC 3339 format. */
  createdAt?: string;
  /** The data associated with a `gift_card.customer_unlinked` event. */
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
