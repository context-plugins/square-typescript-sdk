import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaymentBalanceActivityTaxOnFeeDetail = {
  paymentId?: string | null;
  taxRateDescription?: string | null;
};

export const paymentBalanceActivityTaxOnFeeDetailSchema: Schema<PaymentBalanceActivityTaxOnFeeDetail> =
  s.object<PaymentBalanceActivityTaxOnFeeDetail>({
    paymentId: s.optionalNullable(s.string()),
    taxRateDescription: s.optionalNullable(s.string()),
    _keysMap: {
      paymentId: "payment_id",
      taxRateDescription: "tax_rate_description",
    },
  });
