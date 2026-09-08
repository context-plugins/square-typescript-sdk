import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  giftCardCustomerLinkedEventDataSchema,
  type GiftCardCustomerLinkedEventData,
} from "./gift-card-customer-linked-event-data.js";

/** Published when a [customer](entity:Customer) is linked to a [gift card](entity:GiftCard). */
export type GiftCardCustomerLinkedEvent = {
  /** The ID of the Square seller associated with the event. */
  merchantId?: string | null;
  /** The type of event. For this event, the value is `gift_card.customer_linked`. */
  type?: string | null;
  /**
   * The unique ID of the event, which is used for [idempotency
   * support](https://developer.squareup.com/docs/webhooks/step4manage#webhooks-best-practices).
   */
  eventId?: string | null;
  /** The timestamp of when the event was created, in RFC 3339 format. */
  createdAt?: string;
  /** The data associated with a `gift_card.customer_linked` event. */
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
