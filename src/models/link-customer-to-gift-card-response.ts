import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { giftCardSchema, type GiftCard } from "./gift-card.js";

/**
 * A response that contains the linked `GiftCard` object. If the request resulted in errors, the
 * response contains a set of `Error` objects.
 */
export type LinkCustomerToGiftCardResponse = {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /** Represents a Square gift card. */
  giftCard?: GiftCard;
};

export const linkCustomerToGiftCardResponseSchema: Schema<LinkCustomerToGiftCardResponse> =
  s.object<LinkCustomerToGiftCardResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    giftCard: s.optional(s.lazy(() => giftCardSchema)),
    _keysMap: {
      giftCard: "gift_card",
    },
  });
