import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneySchema, type Money } from "./money.js";

export type ProcessingFee = {
  effectiveAt?: string | null;
  type?: string | null;
  amountMoney?: Money;
};

export const processingFeeSchema: Schema<ProcessingFee> = s.object<ProcessingFee>({
  effectiveAt: s.optionalNullable(s.string()),
  type: s.optionalNullable(s.string()),
  amountMoney: s.optional(s.lazy(() => moneySchema)),
  _keysMap: {
    effectiveAt: "effective_at",
    amountMoney: "amount_money",
  },
});
