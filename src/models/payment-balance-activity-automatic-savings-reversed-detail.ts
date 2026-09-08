import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaymentBalanceActivityAutomaticSavingsReversedDetail = {
  /** The ID of the payment associated with this activity. */
  paymentId?: string | null;
  /** The ID of the payout associated with this activity. */
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
