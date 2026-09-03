import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaymentBalanceActivitySquareCapitalPaymentDetail = {
  paymentId?: string | null;
};

export const paymentBalanceActivitySquareCapitalPaymentDetailSchema: Schema<PaymentBalanceActivitySquareCapitalPaymentDetail> =
  s.object<PaymentBalanceActivitySquareCapitalPaymentDetail>({
    paymentId: s.optionalNullable(s.string()),
    _keysMap: {
      paymentId: "payment_id",
    },
  });
