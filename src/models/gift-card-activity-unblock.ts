import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  giftCardActivityUnblockReasonSchema,
  type GiftCardActivityUnblockReason,
} from "./gift-card-activity-unblock-reason.js";

/** Represents details about an `UNBLOCK` [gift card activity type](entity:GiftCardActivityType). */
export type GiftCardActivityUnblock = {
  /** Indicates the reason for unblocking a [gift card](entity:GiftCard). */
  reason: GiftCardActivityUnblockReason;
};

export const giftCardActivityUnblockSchema: Schema<GiftCardActivityUnblock> =
  s.object<GiftCardActivityUnblock>({
    reason: giftCardActivityUnblockReasonSchema,
  });
