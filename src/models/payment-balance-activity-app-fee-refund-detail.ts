import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaymentBalanceActivityAppFeeRefundDetail = {
  /** The ID of the payment associated with this activity. */
  paymentId?: string | null;
  /** The ID of the refund associated with this activity. */
  refundId?: string | null;
  /** The ID of the location of the merchant associated with the payment refund activity */
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
