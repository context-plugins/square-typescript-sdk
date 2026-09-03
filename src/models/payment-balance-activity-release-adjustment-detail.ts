import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaymentBalanceActivityReleaseAdjustmentDetail = {
  paymentId?: string | null;
};

export const paymentBalanceActivityReleaseAdjustmentDetailSchema: Schema<PaymentBalanceActivityReleaseAdjustmentDetail> =
  s.object<PaymentBalanceActivityReleaseAdjustmentDetail>({
    paymentId: s.optionalNullable(s.string()),
    _keysMap: {
      paymentId: "payment_id",
    },
  });
