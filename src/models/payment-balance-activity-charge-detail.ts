import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaymentBalanceActivityChargeDetail = {
  paymentId?: string | null;
};

export const paymentBalanceActivityChargeDetailSchema: Schema<PaymentBalanceActivityChargeDetail> =
  s.object<PaymentBalanceActivityChargeDetail>({
    paymentId: s.optionalNullable(s.string()),
    _keysMap: {
      paymentId: "payment_id",
    },
  });
