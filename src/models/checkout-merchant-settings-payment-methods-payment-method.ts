import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The settings allowed for a payment method. */
export type CheckoutMerchantSettingsPaymentMethodsPaymentMethod = {
  /** Indicates whether the payment method is enabled for the account. */
  enabled?: boolean | null;
};

export const checkoutMerchantSettingsPaymentMethodsPaymentMethodSchema: Schema<CheckoutMerchantSettingsPaymentMethodsPaymentMethod> =
  s.object<CheckoutMerchantSettingsPaymentMethodsPaymentMethod>({
    enabled: s.optionalNullable(s.boolean()),
  });
