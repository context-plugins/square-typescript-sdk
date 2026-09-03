import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaymentBalanceActivitySquarePayrollTransferReversedDetail = {
  paymentId?: string | null;
};

export const paymentBalanceActivitySquarePayrollTransferReversedDetailSchema: Schema<PaymentBalanceActivitySquarePayrollTransferReversedDetail> =
  s.object<PaymentBalanceActivitySquarePayrollTransferReversedDetail>({
    paymentId: s.optionalNullable(s.string()),
    _keysMap: {
      paymentId: "payment_id",
    },
  });
