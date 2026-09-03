import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneySchema, type Money } from "./money.js";

export type GiftCardActivityUnlinkedActivityRefund = {
  amountMoney: Money;
  referenceId?: string | null;
  paymentId?: string;
};

export const giftCardActivityUnlinkedActivityRefundSchema: Schema<GiftCardActivityUnlinkedActivityRefund> =
  s.object<GiftCardActivityUnlinkedActivityRefund>({
    amountMoney: moneySchema,
    referenceId: s.optionalNullable(s.string()),
    paymentId: s.optional(s.string()),
    _keysMap: {
      amountMoney: "amount_money",
      referenceId: "reference_id",
      paymentId: "payment_id",
    },
  });
