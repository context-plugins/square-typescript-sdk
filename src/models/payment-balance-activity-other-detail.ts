import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaymentBalanceActivityOtherDetail = {
  paymentId?: string | null;
};

export const paymentBalanceActivityOtherDetailSchema: Schema<PaymentBalanceActivityOtherDetail> =
  s.object<PaymentBalanceActivityOtherDetail>({
    paymentId: s.optionalNullable(s.string()),
    _keysMap: {
      paymentId: "payment_id",
    },
  });
