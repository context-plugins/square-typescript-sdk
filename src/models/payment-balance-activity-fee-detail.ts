import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaymentBalanceActivityFeeDetail = {
  paymentId?: string | null;
};

export const paymentBalanceActivityFeeDetailSchema: Schema<PaymentBalanceActivityFeeDetail> =
  s.object<PaymentBalanceActivityFeeDetail>({
    paymentId: s.optionalNullable(s.string()),
    _keysMap: {
      paymentId: "payment_id",
    },
  });
