import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { giftCardActivitySchema, type GiftCardActivity } from "./gift-card-activity.js";

/**
 * A response that contains a `GiftCardActivity` that was created. The response might contain a set
 * of `Error` objects if the request resulted in errors.
 */
export type CreateGiftCardActivityResponse = {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /**
   * Represents an action performed on a [gift card](entity:GiftCard) that affects its state or
   * balance. A gift card activity contains information about a specific activity type. For example,
   * a `REDEEM` activity includes a `redeem_activity_details` field that contains information about
   * the redemption.
   */
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
