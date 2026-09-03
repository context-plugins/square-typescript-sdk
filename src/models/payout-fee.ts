import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneySchema, type Money } from "./money.js";
import { payoutFeeTypeSchema, type PayoutFeeType } from "./payout-fee-type.js";

export type PayoutFee = {
  amountMoney?: Money;
  effectiveAt?: string | null;
  type?: PayoutFeeType;
};

export const payoutFeeSchema: Schema<PayoutFee> = s.object<PayoutFee>({
  amountMoney: s.optional(s.lazy(() => moneySchema)),
  effectiveAt: s.optionalNullable(s.string()),
  type: s.optional(s.lazy(() => payoutFeeTypeSchema)),
  _keysMap: {
    amountMoney: "amount_money",
    effectiveAt: "effective_at",
  },
});
