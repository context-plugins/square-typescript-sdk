import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaymentBalanceActivityDepositFeeDetail = {
  payoutId?: string | null;
};

export const paymentBalanceActivityDepositFeeDetailSchema: Schema<PaymentBalanceActivityDepositFeeDetail> =
  s.object<PaymentBalanceActivityDepositFeeDetail>({
    payoutId: s.optionalNullable(s.string()),
    _keysMap: {
      payoutId: "payout_id",
    },
  });
