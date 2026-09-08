import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneySchema, type Money } from "./money.js";

/** A range of purchase price that qualifies. */
export type CheckoutMerchantSettingsPaymentMethodsAfterpayClearpayEligibilityRange = {
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned. Fields that do not
   * explicitly define whether they are signed or unsigned are considered unsigned and can only hold
   * positive amounts. For signed fields, the sign of the value indicates the purpose of the money
   * transfer. See [Working with Monetary
   * Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for
   * more information.
   */
  min: Money;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned. Fields that do not
   * explicitly define whether they are signed or unsigned are considered unsigned and can only hold
   * positive amounts. For signed fields, the sign of the value indicates the purpose of the money
   * transfer. See [Working with Monetary
   * Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for
   * more information.
   */
  max: Money;
};

export const checkoutMerchantSettingsPaymentMethodsAfterpayClearpayEligibilityRangeSchema: Schema<CheckoutMerchantSettingsPaymentMethodsAfterpayClearpayEligibilityRange> =
  s.object<CheckoutMerchantSettingsPaymentMethodsAfterpayClearpayEligibilityRange>({
    min: moneySchema,
    max: moneySchema,
  });
