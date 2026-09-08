import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  giftCardActivityAdjustDecrementReasonSchema,
  type GiftCardActivityAdjustDecrementReason,
} from "./gift-card-activity-adjust-decrement-reason.js";
import { moneySchema, type Money } from "./money.js";

/**
 * Represents details about an `ADJUST_DECREMENT` [gift card activity
 * type](entity:GiftCardActivityType).
 */
export type GiftCardActivityAdjustDecrement = {
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned. Fields that do not
   * explicitly define whether they are signed or unsigned are considered unsigned and can only hold
   * positive amounts. For signed fields, the sign of the value indicates the purpose of the money
   * transfer. See [Working with Monetary
   * Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for
   * more information.
   */
  amountMoney: Money;
  /** Indicates the reason for deducting money from a [gift card](entity:GiftCard). */
  reason: GiftCardActivityAdjustDecrementReason;
};

export const giftCardActivityAdjustDecrementSchema: Schema<GiftCardActivityAdjustDecrement> =
  s.object<GiftCardActivityAdjustDecrement>({
    amountMoney: moneySchema,
    reason: giftCardActivityAdjustDecrementReasonSchema,
    _keysMap: {
      amountMoney: "amount_money",
    },
  });
