import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaymentBalanceActivityHoldAdjustmentDetail = {
  /** The ID of the payment associated with this activity. */
  paymentId?: string | null;
};

export const paymentBalanceActivityHoldAdjustmentDetailSchema: Schema<PaymentBalanceActivityHoldAdjustmentDetail> =
  s.object<PaymentBalanceActivityHoldAdjustmentDetail>({
    paymentId: s.optionalNullable(s.string()),
    _keysMap: {
      paymentId: "payment_id",
    },
  });
