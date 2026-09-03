import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaymentBalanceActivityAppFeeRefundDetail = {
  paymentId?: string | null;
  refundId?: string | null;
  locationId?: string | null;
};

export const paymentBalanceActivityAppFeeRefundDetailSchema: Schema<PaymentBalanceActivityAppFeeRefundDetail> =
  s.object<PaymentBalanceActivityAppFeeRefundDetail>({
    paymentId: s.optionalNullable(s.string()),
    refundId: s.optionalNullable(s.string()),
    locationId: s.optionalNullable(s.string()),
    _keysMap: {
      paymentId: "payment_id",
      refundId: "refund_id",
      locationId: "location_id",
    },
  });
