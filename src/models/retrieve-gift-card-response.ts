import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { giftCardSchema, type GiftCard } from "./gift-card.js";

/**
 * A response that contains a `GiftCard`. The response might contain a set of `Error` objects if the
 * request resulted in errors.
 */
export type RetrieveGiftCardResponse = {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /** Represents a Square gift card. */
  giftCard?: GiftCard;
};

export const retrieveGiftCardResponseSchema: Schema<RetrieveGiftCardResponse> =
  s.object<RetrieveGiftCardResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    giftCard: s.optional(s.lazy(() => giftCardSchema)),
    _keysMap: {
      giftCard: "gift_card",
    },
  });
