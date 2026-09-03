import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  checkoutMerchantSettingsPaymentMethodsAfterpayClearpayEligibilityRangeSchema,
  type CheckoutMerchantSettingsPaymentMethodsAfterpayClearpayEligibilityRange,
} from "./checkout-merchant-settings-payment-methods-afterpay-clearpay-eligibility-range.js";

export type CheckoutMerchantSettingsPaymentMethodsAfterpayClearpay = {
  orderEligibilityRange?: CheckoutMerchantSettingsPaymentMethodsAfterpayClearpayEligibilityRange;
  itemEligibilityRange?: CheckoutMerchantSettingsPaymentMethodsAfterpayClearpayEligibilityRange;
  enabled?: boolean;
};

export const checkoutMerchantSettingsPaymentMethodsAfterpayClearpaySchema: Schema<CheckoutMerchantSettingsPaymentMethodsAfterpayClearpay> =
  s.object<CheckoutMerchantSettingsPaymentMethodsAfterpayClearpay>({
    orderEligibilityRange: s.optional(
      s.lazy(() => checkoutMerchantSettingsPaymentMethodsAfterpayClearpayEligibilityRangeSchema),
    ),
    itemEligibilityRange: s.optional(
      s.lazy(() => checkoutMerchantSettingsPaymentMethodsAfterpayClearpayEligibilityRangeSchema),
    ),
    enabled: s.optional(s.boolean()),
    _keysMap: {
      orderEligibilityRange: "order_eligibility_range",
      itemEligibilityRange: "item_eligibility_range",
    },
  });
