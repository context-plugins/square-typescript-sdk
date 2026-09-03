import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaymentBalanceActivityReserveReleaseDetail = {
  paymentId?: string | null;
};

export const paymentBalanceActivityReserveReleaseDetailSchema: Schema<PaymentBalanceActivityReserveReleaseDetail> =
  s.object<PaymentBalanceActivityReserveReleaseDetail>({
    paymentId: s.optionalNullable(s.string()),
    _keysMap: {
      paymentId: "payment_id",
    },
  });
