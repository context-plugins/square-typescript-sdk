import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { giftCardSchema, type GiftCard } from "./gift-card.js";

/**
 * An object that contains the gift card and the customer ID associated with a
 * `gift_card.customer_linked` event.
 */
export type GiftCardCustomerUnlinkedEventObject = {
  /** Represents a Square gift card. */
  giftCard?: GiftCard;
  /** The ID of the unlinked [customer](entity:Customer). */
  unlinkedCustomerId?: string | null;
};

export const giftCardCustomerUnlinkedEventObjectSchema: Schema<GiftCardCustomerUnlinkedEventObject> =
  s.object<GiftCardCustomerUnlinkedEventObject>({
    giftCard: s.optional(s.lazy(() => giftCardSchema)),
    unlinkedCustomerId: s.optionalNullable(s.string()),
    _keysMap: {
      giftCard: "gift_card",
      unlinkedCustomerId: "unlinked_customer_id",
    },
  });
