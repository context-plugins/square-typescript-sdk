import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { giftCardSchema, type GiftCard } from "./gift-card.js";

export type GiftCardCreatedEventObject = {
  giftCard?: GiftCard;
};

export const giftCardCreatedEventObjectSchema: Schema<GiftCardCreatedEventObject> =
  s.object<GiftCardCreatedEventObject>({
    giftCard: s.optional(s.lazy(() => giftCardSchema)),
    _keysMap: {
      giftCard: "gift_card",
    },
  });
