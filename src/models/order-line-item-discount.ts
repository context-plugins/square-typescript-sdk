import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneySchema, type Money } from "./money.js";
import {
  orderLineItemDiscountScopeSchema,
  type OrderLineItemDiscountScope,
} from "./order-line-item-discount-scope.js";
import {
  orderLineItemDiscountTypeSchema,
  type OrderLineItemDiscountType,
} from "./order-line-item-discount-type.js";

export type OrderLineItemDiscount = {
  uid?: string | null;
  catalogObjectId?: string | null;
  catalogVersion?: number | null;
  name?: string | null;
  type?: OrderLineItemDiscountType;
  percentage?: string | null;
  amountMoney?: Money;
  appliedMoney?: Money;
  metadata?: Record<string, string> | null;
  scope?: OrderLineItemDiscountScope;
  rewardIds?: string[];
  pricingRuleId?: string;
};

export const orderLineItemDiscountSchema: Schema<OrderLineItemDiscount> = s.object<OrderLineItemDiscount>({
  uid: s.optionalNullable(s.string()),
  catalogObjectId: s.optionalNullable(s.string()),
  catalogVersion: s.optionalNullable(s.number()),
  name: s.optionalNullable(s.string()),
  type: s.optional(s.lazy(() => orderLineItemDiscountTypeSchema)),
  percentage: s.optionalNullable(s.string()),
  amountMoney: s.optional(s.lazy(() => moneySchema)),
  appliedMoney: s.optional(s.lazy(() => moneySchema)),
  metadata: s.optionalNullable(s.record(s.string(), s.string())),
  scope: s.optional(s.lazy(() => orderLineItemDiscountScopeSchema)),
  rewardIds: s.optional(s.array(s.string())),
  pricingRuleId: s.optional(s.string()),
  _keysMap: {
    catalogObjectId: "catalog_object_id",
    catalogVersion: "catalog_version",
    amountMoney: "amount_money",
    appliedMoney: "applied_money",
    rewardIds: "reward_ids",
    pricingRuleId: "pricing_rule_id",
  },
});
