import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaymentBalanceActivityTaxOnFeeDetail = {
  /** The ID of the payment associated with this activity. */
  paymentId?: string | null;
  /** The description of the tax rate being applied. For example: "GST", "HST". */
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
