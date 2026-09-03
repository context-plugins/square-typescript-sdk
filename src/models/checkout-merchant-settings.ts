import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  checkoutMerchantSettingsPaymentMethodsSchema,
  type CheckoutMerchantSettingsPaymentMethods,
} from "./checkout-merchant-settings-payment-methods.js";

export type CheckoutMerchantSettings = {
  paymentMethods?: CheckoutMerchantSettingsPaymentMethods;
  updatedAt?: string;
};

export const checkoutMerchantSettingsSchema: Schema<CheckoutMerchantSettings> =
  s.object<CheckoutMerchantSettings>({
    paymentMethods: s.optional(s.lazy(() => checkoutMerchantSettingsPaymentMethodsSchema)),
    updatedAt: s.optional(s.string()),
    _keysMap: {
      paymentMethods: "payment_methods",
      updatedAt: "updated_at",
    },
  });
