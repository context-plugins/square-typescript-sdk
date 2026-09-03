import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaymentBalanceActivitySquareCapitalReversedPaymentDetail = {
  paymentId?: string | null;
};

export const paymentBalanceActivitySquareCapitalReversedPaymentDetailSchema: Schema<PaymentBalanceActivitySquareCapitalReversedPaymentDetail> =
  s.object<PaymentBalanceActivitySquareCapitalReversedPaymentDetail>({
    paymentId: s.optionalNullable(s.string()),
    _keysMap: {
      paymentId: "payment_id",
    },
  });
