import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneySchema, type Money } from "./money.js";
import { orderLineItemTaxScopeSchema, type OrderLineItemTaxScope } from "./order-line-item-tax-scope.js";
import { orderLineItemTaxTypeSchema, type OrderLineItemTaxType } from "./order-line-item-tax-type.js";

export type OrderReturnTax = {
  uid?: string | null;
  sourceTaxUid?: string | null;
  catalogObjectId?: string | null;
  catalogVersion?: number | null;
  name?: string | null;
  type?: OrderLineItemTaxType;
  percentage?: string | null;
  appliedMoney?: Money;
  scope?: OrderLineItemTaxScope;
};

export const orderReturnTaxSchema: Schema<OrderReturnTax> = s.object<OrderReturnTax>({
  uid: s.optionalNullable(s.string()),
  sourceTaxUid: s.optionalNullable(s.string()),
  catalogObjectId: s.optionalNullable(s.string()),
  catalogVersion: s.optionalNullable(s.number()),
  name: s.optionalNullable(s.string()),
  type: s.optional(s.lazy(() => orderLineItemTaxTypeSchema)),
  percentage: s.optionalNullable(s.string()),
  appliedMoney: s.optional(s.lazy(() => moneySchema)),
  scope: s.optional(s.lazy(() => orderLineItemTaxScopeSchema)),
  _keysMap: {
    sourceTaxUid: "source_tax_uid",
    catalogObjectId: "catalog_object_id",
    catalogVersion: "catalog_version",
    appliedMoney: "applied_money",
  },
});
