import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneySchema, type Money } from "./money.js";

export type GiftCardActivityRefund = {
  redeemActivityId?: string | null;
  amountMoney?: Money;
  referenceId?: string | null;
  paymentId?: string;
};

export const giftCardActivityRefundSchema: Schema<GiftCardActivityRefund> = s.object<GiftCardActivityRefund>({
  redeemActivityId: s.optionalNullable(s.string()),
  amountMoney: s.optional(s.lazy(() => moneySchema)),
  referenceId: s.optionalNullable(s.string()),
  paymentId: s.optional(s.string()),
  _keysMap: {
    redeemActivityId: "redeem_activity_id",
    amountMoney: "amount_money",
    referenceId: "reference_id",
    paymentId: "payment_id",
  },
});
