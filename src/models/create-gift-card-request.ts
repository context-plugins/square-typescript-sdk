import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { giftCardSchema, type GiftCard } from "./gift-card.js";

/** Represents a [CreateGiftCard](api-endpoint:GiftCards-CreateGiftCard) request. */
export type CreateGiftCardRequest = {
  /**
   * A unique identifier for this request, used to ensure idempotency. For more information, see
   * [Idempotency](https://developer.squareup.com/docs/build-basics/common-api-patterns/idempotency).
   */
  idempotencyKey: string;
  /**
   * The ID of the [location](entity:Location) where the gift card should be registered for
   * reporting purposes. Gift cards can be redeemed at any of the seller's locations.
   */
  locationId: string;
  /** Represents a Square gift card. */
  giftCard: GiftCard;
};

export const createGiftCardRequestSchema: Schema<CreateGiftCardRequest> = s.object<CreateGiftCardRequest>({
  idempotencyKey: s.string(),
  locationId: s.string(),
  giftCard: giftCardSchema,
  _keysMap: {
    idempotencyKey: "idempotency_key",
    locationId: "location_id",
    giftCard: "gift_card",
  },
});
