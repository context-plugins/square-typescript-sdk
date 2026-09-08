import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneySchema, type Money } from "./money.js";

/** A collection of various money amounts. */
export type OrderMoneyAmounts = {
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned. Fields that do not
   * explicitly define whether they are signed or unsigned are considered unsigned and can only hold
   * positive amounts. For signed fields, the sign of the value indicates the purpose of the money
   * transfer. See [Working with Monetary
   * Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for
   * more information.
   */
  totalMoney?: Money;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned. Fields that do not
   * explicitly define whether they are signed or unsigned are considered unsigned and can only hold
   * positive amounts. For signed fields, the sign of the value indicates the purpose of the money
   * transfer. See [Working with Monetary
   * Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for
   * more information.
   */
  taxMoney?: Money;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned. Fields that do not
   * explicitly define whether they are signed or unsigned are considered unsigned and can only hold
   * positive amounts. For signed fields, the sign of the value indicates the purpose of the money
   * transfer. See [Working with Monetary
   * Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for
   * more information.
   */
  discountMoney?: Money;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned. Fields that do not
   * explicitly define whether they are signed or unsigned are considered unsigned and can only hold
   * positive amounts. For signed fields, the sign of the value indicates the purpose of the money
   * transfer. See [Working with Monetary
   * Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for
   * more information.
   */
  tipMoney?: Money;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned. Fields that do not
   * explicitly define whether they are signed or unsigned are considered unsigned and can only hold
   * positive amounts. For signed fields, the sign of the value indicates the purpose of the money
   * transfer. See [Working with Monetary
   * Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for
   * more information.
   */
  serviceChargeMoney?: Money;
};

export const orderMoneyAmountsSchema: Schema<OrderMoneyAmounts> = s.object<OrderMoneyAmounts>({
  totalMoney: s.optional(s.lazy(() => moneySchema)),
  taxMoney: s.optional(s.lazy(() => moneySchema)),
  discountMoney: s.optional(s.lazy(() => moneySchema)),
  tipMoney: s.optional(s.lazy(() => moneySchema)),
  serviceChargeMoney: s.optional(s.lazy(() => moneySchema)),
  _keysMap: {
    totalMoney: "total_money",
    taxMoney: "tax_money",
    discountMoney: "discount_money",
    tipMoney: "tip_money",
    serviceChargeMoney: "service_charge_money",
  },
});
