import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneySchema, type Money } from "./money.js";

export type GiftCardActivityImportReversal = {
  amountMoney: Money;
};

export const giftCardActivityImportReversalSchema: Schema<GiftCardActivityImportReversal> =
  s.object<GiftCardActivityImportReversal>({
    amountMoney: moneySchema,
    _keysMap: {
      amountMoney: "amount_money",
    },
  });
