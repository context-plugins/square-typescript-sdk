import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { giftCardSchema, type GiftCard } from "./gift-card.js";

export type GiftCardCustomerLinkedEventObject = {
  giftCard?: GiftCard;
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
