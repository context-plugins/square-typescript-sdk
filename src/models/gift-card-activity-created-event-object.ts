import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { giftCardActivitySchema, type GiftCardActivity } from "./gift-card-activity.js";

/**
 * An object that contains the gift card activity associated with a `gift_card.activity.created`
 * event.
 */
export type GiftCardActivityCreatedEventObject = {
  /**
   * Represents an action performed on a [gift card](entity:GiftCard) that affects its state or
   * balance. A gift card activity contains information about a specific activity type. For example,
   * a `REDEEM` activity includes a `redeem_activity_details` field that contains information about
   * the redemption.
   */
  giftCardActivity?: GiftCardActivity;
};

export const giftCardActivityCreatedEventObjectSchema: Schema<GiftCardActivityCreatedEventObject> =
  s.object<GiftCardActivityCreatedEventObject>({
    giftCardActivity: s.optional(s.lazy(() => giftCardActivitySchema)),
    _keysMap: {
      giftCardActivity: "gift_card_activity",
    },
  });
