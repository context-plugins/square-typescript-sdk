import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaymentBalanceActivityAppFeeRevenueDetail = {
  /** The ID of the payment associated with this activity. */
  paymentId?: string | null;
  /** The ID of the location of the merchant associated with the payment activity */
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
