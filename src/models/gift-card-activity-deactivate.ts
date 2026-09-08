import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  giftCardActivityDeactivateReasonSchema,
  type GiftCardActivityDeactivateReason,
} from "./gift-card-activity-deactivate-reason.js";

/**
 * Represents details about a `DEACTIVATE` [gift card activity type](entity:GiftCardActivityType).
 */
export type GiftCardActivityDeactivate = {
  /** Indicates the reason for deactivating a [gift card](entity:GiftCard). */
  reason: GiftCardActivityDeactivateReason;
};

export const giftCardActivityDeactivateSchema: Schema<GiftCardActivityDeactivate> =
  s.object<GiftCardActivityDeactivate>({
    reason: giftCardActivityDeactivateReasonSchema,
  });
