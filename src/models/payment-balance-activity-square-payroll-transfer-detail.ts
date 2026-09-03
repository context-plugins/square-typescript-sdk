import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaymentBalanceActivitySquarePayrollTransferDetail = {
  paymentId?: string | null;
};

export const paymentBalanceActivitySquarePayrollTransferDetailSchema: Schema<PaymentBalanceActivitySquarePayrollTransferDetail> =
  s.object<PaymentBalanceActivitySquarePayrollTransferDetail>({
    paymentId: s.optionalNullable(s.string()),
    _keysMap: {
      paymentId: "payment_id",
    },
  });
