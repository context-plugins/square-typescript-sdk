import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaymentBalanceActivityRefundDetail = {
  paymentId?: string | null;
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
