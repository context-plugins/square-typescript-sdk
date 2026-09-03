import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { giftCardSchema, type GiftCard } from "./gift-card.js";

export type CreateGiftCardRequest = {
  idempotencyKey: string;
  locationId: string;
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
