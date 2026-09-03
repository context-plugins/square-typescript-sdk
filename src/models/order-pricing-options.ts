import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type OrderPricingOptions = {
  autoApplyDiscounts?: boolean | null;
  autoApplyTaxes?: boolean | null;
};

export const orderPricingOptionsSchema: Schema<OrderPricingOptions> = s.object<OrderPricingOptions>({
  autoApplyDiscounts: s.optionalNullable(s.boolean()),
  autoApplyTaxes: s.optionalNullable(s.boolean()),
  _keysMap: {
    autoApplyDiscounts: "auto_apply_discounts",
    autoApplyTaxes: "auto_apply_taxes",
  },
});
