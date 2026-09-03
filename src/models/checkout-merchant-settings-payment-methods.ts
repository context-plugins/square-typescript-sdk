import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  checkoutMerchantSettingsPaymentMethodsAfterpayClearpaySchema,
  type CheckoutMerchantSettingsPaymentMethodsAfterpayClearpay,
} from "./checkout-merchant-settings-payment-methods-afterpay-clearpay.js";
import {
  checkoutMerchantSettingsPaymentMethodsPaymentMethodSchema,
  type CheckoutMerchantSettingsPaymentMethodsPaymentMethod,
} from "./checkout-merchant-settings-payment-methods-payment-method.js";

export type CheckoutMerchantSettingsPaymentMethods = {
  applePay?: CheckoutMerchantSettingsPaymentMethodsPaymentMethod;
  googlePay?: CheckoutMerchantSettingsPaymentMethodsPaymentMethod;
  cashApp?: CheckoutMerchantSettingsPaymentMethodsPaymentMethod;
  afterpayClearpay?: CheckoutMerchantSettingsPaymentMethodsAfterpayClearpay;
};

export const checkoutMerchantSettingsPaymentMethodsSchema: Schema<CheckoutMerchantSettingsPaymentMethods> =
  s.object<CheckoutMerchantSettingsPaymentMethods>({
    applePay: s.optional(s.lazy(() => checkoutMerchantSettingsPaymentMethodsPaymentMethodSchema)),
    googlePay: s.optional(s.lazy(() => checkoutMerchantSettingsPaymentMethodsPaymentMethodSchema)),
    cashApp: s.optional(s.lazy(() => checkoutMerchantSettingsPaymentMethodsPaymentMethodSchema)),
    afterpayClearpay: s.optional(s.lazy(() => checkoutMerchantSettingsPaymentMethodsAfterpayClearpaySchema)),
    _keysMap: {
      applePay: "apple_pay",
      googlePay: "google_pay",
      cashApp: "cash_app",
      afterpayClearpay: "afterpay_clearpay",
    },
  });
