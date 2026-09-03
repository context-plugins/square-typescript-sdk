import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaymentBalanceActivityFreeProcessingDetail = {
  paymentId?: string | null;
};

export const paymentBalanceActivityFreeProcessingDetailSchema: Schema<PaymentBalanceActivityFreeProcessingDetail> =
  s.object<PaymentBalanceActivityFreeProcessingDetail>({
    paymentId: s.optionalNullable(s.string()),
    _keysMap: {
      paymentId: "payment_id",
    },
  });
