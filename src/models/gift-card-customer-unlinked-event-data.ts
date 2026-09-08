import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  giftCardCustomerUnlinkedEventObjectSchema,
  type GiftCardCustomerUnlinkedEventObject,
} from "./gift-card-customer-unlinked-event-object.js";

/** The data associated with a `gift_card.customer_unlinked` event. */
export type GiftCardCustomerUnlinkedEventData = {
  /** The type of object affected by the event. For this event, the value is `gift_card`. */
  type?: string | null;
  /** The ID of the updated gift card. */
  id?: string;
  /**
   * An object that contains the gift card and the customer ID associated with a
   * `gift_card.customer_linked` event.
   */
  object?: GiftCardCustomerUnlinkedEventObject;
};

export const giftCardCustomerUnlinkedEventDataSchema: Schema<GiftCardCustomerUnlinkedEventData> =
  s.object<GiftCardCustomerUnlinkedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => giftCardCustomerUnlinkedEventObjectSchema)),
  });
