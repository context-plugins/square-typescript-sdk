import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { giftCardSchema, type GiftCard } from "./gift-card.js";

/** An object that contains the gift card associated with a `gift_card.updated` event. */
export type GiftCardUpdatedEventObject = {
  /** Represents a Square gift card. */
  giftCard?: GiftCard;
};

export const giftCardUpdatedEventObjectSchema: Schema<GiftCardUpdatedEventObject> =
  s.object<GiftCardUpdatedEventObject>({
    giftCard: s.optional(s.lazy(() => giftCardSchema)),
    _keysMap: {
      giftCard: "gift_card",
    },
  });
