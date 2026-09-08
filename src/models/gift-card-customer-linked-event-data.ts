import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  giftCardCustomerLinkedEventObjectSchema,
  type GiftCardCustomerLinkedEventObject,
} from "./gift-card-customer-linked-event-object.js";

/** The data associated with a `gift_card.customer_linked` event. */
export type GiftCardCustomerLinkedEventData = {
  /** The type of object affected by the event. For this event, the value is `gift_card`. */
  type?: string | null;
  /** The ID of the updated gift card. */
  id?: string;
  /**
   * An object that contains the gift card and customer ID associated with a
   * `gift_card.customer_linked` event.
   */
  object?: GiftCardCustomerLinkedEventObject;
};

export const giftCardCustomerLinkedEventDataSchema: Schema<GiftCardCustomerLinkedEventData> =
  s.object<GiftCardCustomerLinkedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => giftCardCustomerLinkedEventObjectSchema)),
  });
