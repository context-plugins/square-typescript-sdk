import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { giftCardSchema, type GiftCard } from "./gift-card.js";

export type GiftCardCustomerUnlinkedEventObject = {
  giftCard?: GiftCard;
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
