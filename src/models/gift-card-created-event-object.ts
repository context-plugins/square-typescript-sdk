import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { giftCardSchema, type GiftCard } from "./gift-card.js";

/** An object that contains the gift card associated with a `gift_card.created` event. */
export type GiftCardCreatedEventObject = {
  /** Represents a Square gift card. */
  giftCard?: GiftCard;
};

export const giftCardCreatedEventObjectSchema: Schema<GiftCardCreatedEventObject> =
  s.object<GiftCardCreatedEventObject>({
    giftCard: s.optional(s.lazy(() => giftCardSchema)),
    _keysMap: {
      giftCard: "gift_card",
    },
  });
