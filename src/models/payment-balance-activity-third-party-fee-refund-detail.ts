import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaymentBalanceActivityThirdPartyFeeRefundDetail = {
  /** The ID of the payment associated with this activity. */
  paymentId?: string | null;
  /** The public refund id associated with this activity. */
  refundId?: string | null;
};

export const paymentBalanceActivityThirdPartyFeeRefundDetailSchema: Schema<PaymentBalanceActivityThirdPartyFeeRefundDetail> =
  s.object<PaymentBalanceActivityThirdPartyFeeRefundDetail>({
    paymentId: s.optionalNullable(s.string()),
    refundId: s.optionalNullable(s.string()),
    _keysMap: {
      paymentId: "payment_id",
      refundId: "refund_id",
    },
  });
