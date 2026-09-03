import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaymentBalanceActivityThirdPartyFeeDetail = {
  paymentId?: string | null;
};

export const paymentBalanceActivityThirdPartyFeeDetailSchema: Schema<PaymentBalanceActivityThirdPartyFeeDetail> =
  s.object<PaymentBalanceActivityThirdPartyFeeDetail>({
    paymentId: s.optionalNullable(s.string()),
    _keysMap: {
      paymentId: "payment_id",
    },
  });
