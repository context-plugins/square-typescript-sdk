import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaymentBalanceActivityAutomaticSavingsDetail = {
  paymentId?: string | null;
  payoutId?: string | null;
};

export const paymentBalanceActivityAutomaticSavingsDetailSchema: Schema<PaymentBalanceActivityAutomaticSavingsDetail> =
  s.object<PaymentBalanceActivityAutomaticSavingsDetail>({
    paymentId: s.optionalNullable(s.string()),
    payoutId: s.optionalNullable(s.string()),
    _keysMap: {
      paymentId: "payment_id",
      payoutId: "payout_id",
    },
  });
