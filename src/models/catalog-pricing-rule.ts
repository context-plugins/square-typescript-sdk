import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { excludeStrategySchema, type ExcludeStrategy } from "./exclude-strategy.js";
import { moneySchema, type Money } from "./money.js";

export type CatalogPricingRule = {
  name?: string | null;
  timePeriodIds?: string[] | null;
  discountId?: string | null;
  matchProductsId?: string | null;
  applyProductsId?: string | null;
  excludeProductsId?: string | null;
  validFromDate?: string | null;
  validFromLocalTime?: string | null;
  validUntilDate?: string | null;
  validUntilLocalTime?: string | null;
  excludeStrategy?: ExcludeStrategy;
  minimumOrderSubtotalMoney?: Money;
  customerGroupIdsAny?: string[] | null;
};

export const catalogPricingRuleSchema: Schema<CatalogPricingRule> = s.object<CatalogPricingRule>({
  name: s.optionalNullable(s.string()),
  timePeriodIds: s.optionalNullable(s.array(s.string())),
  discountId: s.optionalNullable(s.string()),
  matchProductsId: s.optionalNullable(s.string()),
  applyProductsId: s.optionalNullable(s.string()),
  excludeProductsId: s.optionalNullable(s.string()),
  validFromDate: s.optionalNullable(s.string()),
  validFromLocalTime: s.optionalNullable(s.string()),
  validUntilDate: s.optionalNullable(s.string()),
  validUntilLocalTime: s.optionalNullable(s.string()),
  excludeStrategy: s.optional(s.lazy(() => excludeStrategySchema)),
  minimumOrderSubtotalMoney: s.optional(s.lazy(() => moneySchema)),
  customerGroupIdsAny: s.optionalNullable(s.array(s.string())),
  _keysMap: {
    timePeriodIds: "time_period_ids",
    discountId: "discount_id",
    matchProductsId: "match_products_id",
    applyProductsId: "apply_products_id",
    excludeProductsId: "exclude_products_id",
    validFromDate: "valid_from_date",
    validFromLocalTime: "valid_from_local_time",
    validUntilDate: "valid_until_date",
    validUntilLocalTime: "valid_until_local_time",
    excludeStrategy: "exclude_strategy",
    minimumOrderSubtotalMoney: "minimum_order_subtotal_money",
    customerGroupIdsAny: "customer_group_ids_any",
  },
});
