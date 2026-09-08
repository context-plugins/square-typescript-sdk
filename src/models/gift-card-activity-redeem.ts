import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  giftCardActivityRedeemStatusSchema,
  type GiftCardActivityRedeemStatus,
} from "./gift-card-activity-redeem-status.js";
import { moneySchema, type Money } from "./money.js";

/** Represents details about a `REDEEM` [gift card activity type](entity:GiftCardActivityType). */
export type GiftCardActivityRedeem = {
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
   * The ID of the payment that represents the gift card redemption. Square populates this field if
   * the payment was processed by Square.
   */
  paymentId?: string;
  /**
   * A client-specified ID that associates the gift card activity with an entity in another system.
   *
   * Applications that use a custom payment processing system can use this field to track
   * information related to an order or payment.
   */
  referenceId?: string | null;
  /**
   * Indicates the status of a [gift card](entity:GiftCard) redemption. This status is relevant only
   * for redemptions made from Square products (such as Square Point of Sale) because Square
   * products use a two-state process. Gift cards redeemed using the Gift Card Activities API always
   * have a `COMPLETED` status.
   */
  status?: GiftCardActivityRedeemStatus;
};

export const giftCardActivityRedeemSchema: Schema<GiftCardActivityRedeem> = s.object<GiftCardActivityRedeem>({
  amountMoney: moneySchema,
  paymentId: s.optional(s.string()),
  referenceId: s.optionalNullable(s.string()),
  status: s.optional(s.lazy(() => giftCardActivityRedeemStatusSchema)),
  _keysMap: {
    amountMoney: "amount_money",
    paymentId: "payment_id",
    referenceId: "reference_id",
  },
});
