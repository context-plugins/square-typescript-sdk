import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneySchema, type Money } from "./money.js";

export type GiftCardActivityTransferBalanceTo = {
  transferFromGiftCardId: string;
  amountMoney: Money;
};

export const giftCardActivityTransferBalanceToSchema: Schema<GiftCardActivityTransferBalanceTo> =
  s.object<GiftCardActivityTransferBalanceTo>({
    transferFromGiftCardId: s.string(),
    amountMoney: moneySchema,
    _keysMap: {
      transferFromGiftCardId: "transfer_from_gift_card_id",
      amountMoney: "amount_money",
    },
  });
