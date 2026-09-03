import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { giftCardSchema, type GiftCard } from "./gift-card.js";

export type ListGiftCardsResponse = {
  errors?: Error[];
  giftCards?: GiftCard[];
  cursor?: string;
};

export const listGiftCardsResponseSchema: Schema<ListGiftCardsResponse> = s.object<ListGiftCardsResponse>({
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
  giftCards: s.optional(s.array(s.lazy(() => giftCardSchema))),
  cursor: s.optional(s.string()),
  _keysMap: {
    giftCards: "gift_cards",
  },
});
