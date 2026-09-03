import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaymentBalanceActivityOtherAdjustmentDetail = {
  paymentId?: string | null;
};

export const paymentBalanceActivityOtherAdjustmentDetailSchema: Schema<PaymentBalanceActivityOtherAdjustmentDetail> =
  s.object<PaymentBalanceActivityOtherAdjustmentDetail>({
    paymentId: s.optionalNullable(s.string()),
    _keysMap: {
      paymentId: "payment_id",
    },
  });
