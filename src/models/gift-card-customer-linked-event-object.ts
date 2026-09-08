import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { giftCardSchema, type GiftCard } from "./gift-card.js";

/**
 * An object that contains the gift card and customer ID associated with a
 * `gift_card.customer_linked` event.
 */
export type GiftCardCustomerLinkedEventObject = {
  /** Represents a Square gift card. */
  giftCard?: GiftCard;
  /** The ID of the linked [customer](entity:Customer). */
  linkedCustomerId?: string | null;
};

export const giftCardCustomerLinkedEventObjectSchema: Schema<GiftCardCustomerLinkedEventObject> =
  s.object<GiftCardCustomerLinkedEventObject>({
    giftCard: s.optional(s.lazy(() => giftCardSchema)),
    linkedCustomerId: s.optionalNullable(s.string()),
    _keysMap: {
      giftCard: "gift_card",
      linkedCustomerId: "linked_customer_id",
    },
  });
