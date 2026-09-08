import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  giftCardActivityAdjustIncrementReasonSchema,
  type GiftCardActivityAdjustIncrementReason,
} from "./gift-card-activity-adjust-increment-reason.js";
import { moneySchema, type Money } from "./money.js";

/**
 * Represents details about an `ADJUST_INCREMENT` [gift card activity
 * type](entity:GiftCardActivityType).
 */
export type GiftCardActivityAdjustIncrement = {
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned. Fields that do not
   * explicitly define whether they are signed or unsigned are considered unsigned and can only hold
   * positive amounts. For signed fields, the sign of the value indicates the purpose of the money
   * transfer. See [Working with Monetary
   * Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for
   * more information.
   */
  amountMoney: Money;
  /** Indicates the reason for adding money to a [gift card](entity:GiftCard). */
  reason: GiftCardActivityAdjustIncrementReason;
};

export const giftCardActivityAdjustIncrementSchema: Schema<GiftCardActivityAdjustIncrement> =
  s.object<GiftCardActivityAdjustIncrement>({
    amountMoney: moneySchema,
    reason: giftCardActivityAdjustIncrementReasonSchema,
    _keysMap: {
      amountMoney: "amount_money",
    },
  });
