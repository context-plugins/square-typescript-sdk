import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { giftCardActivitySchema, type GiftCardActivity } from "./gift-card-activity.js";

export type GiftCardActivityUpdatedEventObject = {
  giftCardActivity?: GiftCardActivity;
};

export const giftCardActivityUpdatedEventObjectSchema: Schema<GiftCardActivityUpdatedEventObject> =
  s.object<GiftCardActivityUpdatedEventObject>({
    giftCardActivity: s.optional(s.lazy(() => giftCardActivitySchema)),
    _keysMap: {
      giftCardActivity: "gift_card_activity",
    },
  });
