import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneySchema, type Money } from "./money.js";

export type CheckoutMerchantSettingsPaymentMethodsAfterpayClearpayEligibilityRange = {
  min: Money;
  max: Money;
};

export const checkoutMerchantSettingsPaymentMethodsAfterpayClearpayEligibilityRangeSchema: Schema<CheckoutMerchantSettingsPaymentMethodsAfterpayClearpayEligibilityRange> =
  s.object<CheckoutMerchantSettingsPaymentMethodsAfterpayClearpayEligibilityRange>({
    min: moneySchema,
    max: moneySchema,
  });
