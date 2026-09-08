import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneySchema, type Money } from "./money.js";

/**
 * Represents details about an `UNLINKED_ACTIVITY_REFUND` [gift card activity
 * type](entity:GiftCardActivityType).
 */
export type GiftCardActivityUnlinkedActivityRefund = {
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned. Fields that do not
   * explicitly define whether they are signed or unsigned are considered unsigned and can only hold
   * positive amounts. For signed fields, the sign of the value indicates the purpose of the money
   * transfer. See [Working with Monetary
   * Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for
   * more information.
   */
  amountMoney: Money;
  /**
   * A client-specified ID that associates the gift card activity with an entity in another system.
   */
  referenceId?: string | null;
  /**
   * The ID of the refunded payment. This field is not used starting in Square version 2022-06-16.
   */
  paymentId?: string;
};

export const giftCardActivityUnlinkedActivityRefundSchema: Schema<GiftCardActivityUnlinkedActivityRefund> =
  s.object<GiftCardActivityUnlinkedActivityRefund>({
    amountMoney: moneySchema,
    referenceId: s.optionalNullable(s.string()),
    paymentId: s.optional(s.string()),
    _keysMap: {
      amountMoney: "amount_money",
      referenceId: "reference_id",
      paymentId: "payment_id",
    },
  });
