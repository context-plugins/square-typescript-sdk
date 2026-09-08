import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneySchema, type Money } from "./money.js";

/** Represents the details of a tender with `type` `CASH`. */
export type TenderCashDetails = {
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned. Fields that do not
   * explicitly define whether they are signed or unsigned are considered unsigned and can only hold
   * positive amounts. For signed fields, the sign of the value indicates the purpose of the money
   * transfer. See [Working with Monetary
   * Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for
   * more information.
   */
  buyerTenderedMoney?: Money;
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

export const tenderCashDetailsSchema: Schema<TenderCashDetails> = s.object<TenderCashDetails>({
  buyerTenderedMoney: s.optional(s.lazy(() => moneySchema)),
  changeBackMoney: s.optional(s.lazy(() => moneySchema)),
  _keysMap: {
    buyerTenderedMoney: "buyer_tendered_money",
    changeBackMoney: "change_back_money",
  },
});
