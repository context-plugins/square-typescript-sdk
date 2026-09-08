import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { giftCardSchema, type GiftCard } from "./gift-card.js";

/**
 * A response that contains a list of `GiftCard` objects. If the request resulted in errors, the
 * response contains a set of `Error` objects.
 */
export type ListGiftCardsResponse = {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /** The requested gift cards or an empty object if none are found. */
  giftCards?: GiftCard[];
  /**
   * When a response is truncated, it includes a cursor that you can use in a subsequent request to
   * retrieve the next set of gift cards. If a cursor is not present, this is the final response.
   * For more information, see
   * [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination).
   */
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
