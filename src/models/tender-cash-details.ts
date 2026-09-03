import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneySchema, type Money } from "./money.js";

export type TenderCashDetails = {
  buyerTenderedMoney?: Money;
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
