import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { giftCardSchema, type GiftCard } from "./gift-card.js";

export type CreateGiftCardResponse = {
  errors?: Error[];
  giftCard?: GiftCard;
};

export const createGiftCardResponseSchema: Schema<CreateGiftCardResponse> = s.object<CreateGiftCardResponse>({
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
  giftCard: s.optional(s.lazy(() => giftCardSchema)),
  _keysMap: {
    giftCard: "gift_card",
  },
});
