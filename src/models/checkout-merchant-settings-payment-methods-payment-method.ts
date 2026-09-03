import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CheckoutMerchantSettingsPaymentMethodsPaymentMethod = {
  enabled?: boolean | null;
};

export const checkoutMerchantSettingsPaymentMethodsPaymentMethodSchema: Schema<CheckoutMerchantSettingsPaymentMethodsPaymentMethod> =
  s.object<CheckoutMerchantSettingsPaymentMethodsPaymentMethod>({
    enabled: s.optionalNullable(s.boolean()),
  });
