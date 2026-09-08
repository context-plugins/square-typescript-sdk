import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneySchema, type Money } from "./money.js";

/**
 * A rounding adjustment of the money being returned. Commonly used to apply cash rounding when the
 * minimum unit of the account is smaller than the lowest physical denomination of the currency.
 */
export type OrderRoundingAdjustment = {
  /** A unique ID that identifies the rounding adjustment only within this order. */
  uid?: string | null;
  /** The name of the rounding adjustment from the original sale order. */
  name?: string | null;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned. Fields that do not
   * explicitly define whether they are signed or unsigned are considered unsigned and can only hold
   * positive amounts. For signed fields, the sign of the value indicates the purpose of the money
   * transfer. See [Working with Monetary
   * Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for
   * more information.
   */
  amountMoney?: Money;
};

export const orderRoundingAdjustmentSchema: Schema<OrderRoundingAdjustment> =
  s.object<OrderRoundingAdjustment>({
    uid: s.optionalNullable(s.string()),
    name: s.optionalNullable(s.string()),
    amountMoney: s.optional(s.lazy(() => moneySchema)),
    _keysMap: {
      amountMoney: "amount_money",
    },
  });
