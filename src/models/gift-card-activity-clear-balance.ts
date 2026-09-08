import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  giftCardActivityClearBalanceReasonSchema,
  type GiftCardActivityClearBalanceReason,
} from "./gift-card-activity-clear-balance-reason.js";

/**
 * Represents details about a `CLEAR_BALANCE` [gift card activity
 * type](entity:GiftCardActivityType).
 */
export type GiftCardActivityClearBalance = {
  /** Indicates the reason for clearing the balance of a [gift card](entity:GiftCard). */
  reason: GiftCardActivityClearBalanceReason;
};

export const giftCardActivityClearBalanceSchema: Schema<GiftCardActivityClearBalance> =
  s.object<GiftCardActivityClearBalance>({
    reason: giftCardActivityClearBalanceReasonSchema,
  });
