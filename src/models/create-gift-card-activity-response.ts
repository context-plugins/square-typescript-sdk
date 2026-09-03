import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { giftCardActivitySchema, type GiftCardActivity } from "./gift-card-activity.js";

export type CreateGiftCardActivityResponse = {
  errors?: Error[];
  giftCardActivity?: GiftCardActivity;
};

export const createGiftCardActivityResponseSchema: Schema<CreateGiftCardActivityResponse> =
  s.object<CreateGiftCardActivityResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    giftCardActivity: s.optional(s.lazy(() => giftCardActivitySchema)),
    _keysMap: {
      giftCardActivity: "gift_card_activity",
    },
  });
