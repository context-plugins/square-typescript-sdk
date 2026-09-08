import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneySchema, type Money } from "./money.js";

/** Represents details about a `REFUND` [gift card activity type](entity:GiftCardActivityType). */
export type GiftCardActivityRefund = {
  /**
   * The ID of the refunded `REDEEM` gift card activity. Square populates this field if the
   * `payment_id` in the corresponding [RefundPayment](api-endpoint:Refunds-RefundPayment) request
   * represents a gift card redemption.
   *
   * For applications that use a custom payment processing system, this field is required when
   * creating a `REFUND` activity. The provided `REDEEM` activity ID must be linked to the same gift
   * card.
   */
  redeemActivityId?: string | null;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned. Fields that do not
   * explicitly define whether they are signed or unsigned are considered unsigned and can only hold
   * positive amounts. For signed fields, the sign of the value indicates the purpose of the money
   * transfer. See [Working with Monetary
   * Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for
   * more information.
   */
  amountMoney?: Money;
  /**
   * A client-specified ID that associates the gift card activity with an entity in another system.
   */
  referenceId?: string | null;
  /**
   * The ID of the refunded payment. Square populates this field if the refund is for a payment
   * processed by Square. This field matches the `payment_id` in the corresponding
   * [RefundPayment](api-endpoint:Refunds-RefundPayment) request.
   */
  paymentId?: string;
};

export const giftCardActivityRefundSchema: Schema<GiftCardActivityRefund> = s.object<GiftCardActivityRefund>({
  redeemActivityId: s.optionalNullable(s.string()),
  amountMoney: s.optional(s.lazy(() => moneySchema)),
  referenceId: s.optionalNullable(s.string()),
  paymentId: s.optional(s.string()),
  _keysMap: {
    redeemActivityId: "redeem_activity_id",
    amountMoney: "amount_money",
    referenceId: "reference_id",
    paymentId: "payment_id",
  },
});
