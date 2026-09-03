import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaymentBalanceActivityDepositFeeReversedDetail = {
  payoutId?: string | null;
};

export const paymentBalanceActivityDepositFeeReversedDetailSchema: Schema<PaymentBalanceActivityDepositFeeReversedDetail> =
  s.object<PaymentBalanceActivityDepositFeeReversedDetail>({
    payoutId: s.optionalNullable(s.string()),
    _keysMap: {
      payoutId: "payout_id",
    },
  });
