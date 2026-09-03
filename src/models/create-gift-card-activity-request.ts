import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { giftCardActivitySchema, type GiftCardActivity } from "./gift-card-activity.js";

export type CreateGiftCardActivityRequest = {
  idempotencyKey: string;
  giftCardActivity: GiftCardActivity;
};

export const createGiftCardActivityRequestSchema: Schema<CreateGiftCardActivityRequest> =
  s.object<CreateGiftCardActivityRequest>({
    idempotencyKey: s.string(),
    giftCardActivity: giftCardActivitySchema,
    _keysMap: {
      idempotencyKey: "idempotency_key",
      giftCardActivity: "gift_card_activity",
    },
  });
