import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AcceptedPaymentMethods = {
  applePay?: boolean | null;
  googlePay?: boolean | null;
  cashAppPay?: boolean | null;
  afterpayClearpay?: boolean | null;
};

export const acceptedPaymentMethodsSchema: Schema<AcceptedPaymentMethods> = s.object<AcceptedPaymentMethods>({
  applePay: s.optionalNullable(s.boolean()),
  googlePay: s.optionalNullable(s.boolean()),
  cashAppPay: s.optionalNullable(s.boolean()),
  afterpayClearpay: s.optionalNullable(s.boolean()),
  _keysMap: {
    applePay: "apple_pay",
    googlePay: "google_pay",
    cashAppPay: "cash_app_pay",
    afterpayClearpay: "afterpay_clearpay",
  },
});
