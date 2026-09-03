import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneySchema, type Money } from "./money.js";

export type OrderMoneyAmounts = {
  totalMoney?: Money;
  taxMoney?: Money;
  discountMoney?: Money;
  tipMoney?: Money;
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
