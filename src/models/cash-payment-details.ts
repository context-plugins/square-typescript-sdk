import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneySchema, type Money } from "./money.js";

export type CashPaymentDetails = {
  buyerSuppliedMoney: Money;
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
