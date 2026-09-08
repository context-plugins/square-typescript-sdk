import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneySchema, type Money } from "./money.js";
import { orderLineItemTaxScopeSchema, type OrderLineItemTaxScope } from "./order-line-item-tax-scope.js";
import { orderLineItemTaxTypeSchema, type OrderLineItemTaxType } from "./order-line-item-tax-type.js";

/**
 * Represents a tax being returned that applies to one or more return line items in an order.
 *
 * Fixed-amount, order-scoped taxes are distributed across all non-zero return line item totals. The
 * amount distributed to each return line item is relative to that item’s contribution to the order
 * subtotal.
 */
export type OrderReturnTax = {
  /** A unique ID that identifies the returned tax only within this order. */
  uid?: string | null;
  /** The tax `uid` from the order that contains the original tax charge. */
  sourceTaxUid?: string | null;
  /** The catalog object ID referencing [CatalogTax](entity:CatalogTax). */
  catalogObjectId?: string | null;
  /** The version of the catalog object that this tax references. */
  catalogVersion?: number | null;
  /** The tax's name. */
  name?: string | null;
  /** Indicates how the tax is applied to the associated line item or order. */
  type?: OrderLineItemTaxType;
  /**
   * The percentage of the tax, as a string representation of a decimal number. For example, a value
   * of `"7.25"` corresponds to a percentage of 7.25%.
   */
  percentage?: string | null;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned. Fields that do not
   * explicitly define whether they are signed or unsigned are considered unsigned and can only hold
   * positive amounts. For signed fields, the sign of the value indicates the purpose of the money
   * transfer. See [Working with Monetary
   * Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for
   * more information.
   */
  appliedMoney?: Money;
  /** Indicates whether this is a line-item or order-level tax. */
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
