import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  checkoutMerchantSettingsPaymentMethodsSchema,
  type CheckoutMerchantSettingsPaymentMethods,
} from "./checkout-merchant-settings-payment-methods.js";

export type CheckoutMerchantSettings = {
  paymentMethods?: CheckoutMerchantSettingsPaymentMethods;
  /**
   * The timestamp when the settings were last updated, in RFC 3339 format. Examples for January
   * 25th, 2020 6:25:34pm Pacific Standard Time: UTC: 2020-01-26T02:25:34Z Pacific Standard Time
   * with UTC offset: 2020-01-25T18:25:34-08:00
   */
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
