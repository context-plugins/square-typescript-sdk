import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneySchema, type Money } from "./money.js";
import { orderLineItemTaxScopeSchema, type OrderLineItemTaxScope } from "./order-line-item-tax-scope.js";
import { orderLineItemTaxTypeSchema, type OrderLineItemTaxType } from "./order-line-item-tax-type.js";

export type OrderLineItemTax = {
  uid?: string | null;
  catalogObjectId?: string | null;
  catalogVersion?: number | null;
  name?: string | null;
  type?: OrderLineItemTaxType;
  percentage?: string | null;
  metadata?: Record<string, string> | null;
  appliedMoney?: Money;
  scope?: OrderLineItemTaxScope;
  autoApplied?: boolean;
};

export const orderLineItemTaxSchema: Schema<OrderLineItemTax> = s.object<OrderLineItemTax>({
  uid: s.optionalNullable(s.string()),
  catalogObjectId: s.optionalNullable(s.string()),
  catalogVersion: s.optionalNullable(s.number()),
  name: s.optionalNullable(s.string()),
  type: s.optional(s.lazy(() => orderLineItemTaxTypeSchema)),
  percentage: s.optionalNullable(s.string()),
  metadata: s.optionalNullable(s.record(s.string(), s.string())),
  appliedMoney: s.optional(s.lazy(() => moneySchema)),
  scope: s.optional(s.lazy(() => orderLineItemTaxScopeSchema)),
  autoApplied: s.optional(s.boolean()),
  _keysMap: {
    catalogObjectId: "catalog_object_id",
    catalogVersion: "catalog_version",
    appliedMoney: "applied_money",
    autoApplied: "auto_applied",
  },
});
