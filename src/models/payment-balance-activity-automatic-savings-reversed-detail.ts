import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaymentBalanceActivityAutomaticSavingsReversedDetail = {
  paymentId?: string | null;
  payoutId?: string | null;
};

export const paymentBalanceActivityAutomaticSavingsReversedDetailSchema: Schema<PaymentBalanceActivityAutomaticSavingsReversedDetail> =
  s.object<PaymentBalanceActivityAutomaticSavingsReversedDetail>({
    paymentId: s.optionalNullable(s.string()),
    payoutId: s.optionalNullable(s.string()),
    _keysMap: {
      paymentId: "payment_id",
      payoutId: "payout_id",
    },
  });
