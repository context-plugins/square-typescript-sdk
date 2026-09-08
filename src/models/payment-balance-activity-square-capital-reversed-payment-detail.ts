import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaymentBalanceActivitySquareCapitalReversedPaymentDetail = {
  /** The ID of the payment associated with this activity. */
  paymentId?: string | null;
};

export const paymentBalanceActivitySquareCapitalReversedPaymentDetailSchema: Schema<PaymentBalanceActivitySquareCapitalReversedPaymentDetail> =
  s.object<PaymentBalanceActivitySquareCapitalReversedPaymentDetail>({
    paymentId: s.optionalNullable(s.string()),
    _keysMap: {
      paymentId: "payment_id",
    },
  });
