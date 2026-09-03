import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { giftCardActivitySchema, type GiftCardActivity } from "./gift-card-activity.js";

export type GiftCardActivityCreatedEventObject = {
  giftCardActivity?: GiftCardActivity;
};

export const giftCardActivityCreatedEventObjectSchema: Schema<GiftCardActivityCreatedEventObject> =
  s.object<GiftCardActivityCreatedEventObject>({
    giftCardActivity: s.optional(s.lazy(() => giftCardActivitySchema)),
    _keysMap: {
      giftCardActivity: "gift_card_activity",
    },
  });
