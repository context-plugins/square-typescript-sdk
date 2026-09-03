import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneySchema, type Money } from "./money.js";

export type GiftCardActivityImport = {
  amountMoney: Money;
};

export const giftCardActivityImportSchema: Schema<GiftCardActivityImport> = s.object<GiftCardActivityImport>({
  amountMoney: moneySchema,
  _keysMap: {
    amountMoney: "amount_money",
  },
});
