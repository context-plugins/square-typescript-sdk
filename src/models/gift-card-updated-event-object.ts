import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { giftCardSchema, type GiftCard } from "./gift-card.js";

export type GiftCardUpdatedEventObject = {
  giftCard?: GiftCard;
};

export const giftCardUpdatedEventObjectSchema: Schema<GiftCardUpdatedEventObject> =
  s.object<GiftCardUpdatedEventObject>({
    giftCard: s.optional(s.lazy(() => giftCardSchema)),
    _keysMap: {
      giftCard: "gift_card",
    },
  });
