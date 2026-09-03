import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneySchema, type Money } from "./money.js";

export type GiftCardActivityTransferBalanceFrom = {
  transferToGiftCardId: string;
  amountMoney: Money;
};

export const giftCardActivityTransferBalanceFromSchema: Schema<GiftCardActivityTransferBalanceFrom> =
  s.object<GiftCardActivityTransferBalanceFrom>({
    transferToGiftCardId: s.string(),
    amountMoney: moneySchema,
    _keysMap: {
      transferToGiftCardId: "transfer_to_gift_card_id",
      amountMoney: "amount_money",
    },
  });
