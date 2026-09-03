import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaymentBalanceActivityAppFeeRevenueDetail = {
  paymentId?: string | null;
  locationId?: string | null;
};

export const paymentBalanceActivityAppFeeRevenueDetailSchema: Schema<PaymentBalanceActivityAppFeeRevenueDetail> =
  s.object<PaymentBalanceActivityAppFeeRevenueDetail>({
    paymentId: s.optionalNullable(s.string()),
    locationId: s.optionalNullable(s.string()),
    _keysMap: {
      paymentId: "payment_id",
      locationId: "location_id",
    },
  });
