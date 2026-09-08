import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaymentBalanceActivityFeeDetail = {
  /**
   * The ID of the payment associated with this activity This will only be populated when a
   * principal LedgerEntryToken is also populated. If the fee is independent (there is no principal
   * LedgerEntryToken) then this will likely not be populated.
   */
  paymentId?: string | null;
};

export const paymentBalanceActivityFeeDetailSchema: Schema<PaymentBalanceActivityFeeDetail> =
  s.object<PaymentBalanceActivityFeeDetail>({
    paymentId: s.optionalNullable(s.string()),
    _keysMap: {
      paymentId: "payment_id",
    },
  });
