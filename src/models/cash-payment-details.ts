import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneySchema, type Money } from "./money.js";

/**
 * Stores details about a cash payment. Contains only non-confidential information. For more
 * information, see [Take Cash
 * Payments](https://developer.squareup.com/docs/payments-api/take-payments/cash-payments).
 */
export type CashPaymentDetails = {
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned. Fields that do not
   * explicitly define whether they are signed or unsigned are considered unsigned and can only hold
   * positive amounts. For signed fields, the sign of the value indicates the purpose of the money
   * transfer. See [Working with Monetary
   * Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for
   * more information.
   */
  buyerSuppliedMoney: Money;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned. Fields that do not
   * explicitly define whether they are signed or unsigned are considered unsigned and can only hold
   * positive amounts. For signed fields, the sign of the value indicates the purpose of the money
   * transfer. See [Working with Monetary
   * Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for
   * more information.
   */
  changeBackMoney?: Money;
};

export const cashPaymentDetailsSchema: Schema<CashPaymentDetails> = s.object<CashPaymentDetails>({
  buyerSuppliedMoney: moneySchema,
  changeBackMoney: s.optional(s.lazy(() => moneySchema)),
  _keysMap: {
    buyerSuppliedMoney: "buyer_supplied_money",
    changeBackMoney: "change_back_money",
  },
});
