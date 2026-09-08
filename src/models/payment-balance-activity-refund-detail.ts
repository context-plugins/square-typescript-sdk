import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaymentBalanceActivityRefundDetail = {
  /** The ID of the payment associated with this activity. */
  paymentId?: string | null;
  /** The ID of the refund associated with this activity. */
  refundId?: string | null;
};

export const paymentBalanceActivityRefundDetailSchema: Schema<PaymentBalanceActivityRefundDetail> =
  s.object<PaymentBalanceActivityRefundDetail>({
    paymentId: s.optionalNullable(s.string()),
    refundId: s.optionalNullable(s.string()),
    _keysMap: {
      paymentId: "payment_id",
      refundId: "refund_id",
    },
  });
