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

/**
 * Represents a discount being returned that applies to one or more return line items in an order.
 *
 * Fixed-amount, order-scoped discounts are distributed across all non-zero return line item totals.
 * The amount distributed to each return line item is relative to that item’s contribution to the
 * order subtotal.
 */
export type OrderReturnDiscount = {
  /** A unique ID that identifies the returned discount only within this order. */
  uid?: string | null;
  /** The discount `uid` from the order that contains the original application of this discount. */
  sourceDiscountUid?: string | null;
  /** The catalog object ID referencing [CatalogDiscount](entity:CatalogDiscount). */
  catalogObjectId?: string | null;
  /** The version of the catalog object that this discount references. */
  catalogVersion?: number | null;
  /** The discount's name. */
  name?: string | null;
  /** Indicates how the discount is applied to the associated line item or order. */
  type?: OrderLineItemDiscountType;
  /**
   * The percentage of the tax, as a string representation of a decimal number. A value of `"7.25"`
   * corresponds to a percentage of 7.25%.
   *
   * `percentage` is not set for amount-based discounts.
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
  amountMoney?: Money;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned. Fields that do not
   * explicitly define whether they are signed or unsigned are considered unsigned and can only hold
   * positive amounts. For signed fields, the sign of the value indicates the purpose of the money
   * transfer. See [Working with Monetary
   * Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for
   * more information.
   */
  appliedMoney?: Money;
  /** Indicates whether this is a line-item or order-level discount. */
  scope?: OrderLineItemDiscountScope;
};

export const orderReturnDiscountSchema: Schema<OrderReturnDiscount> = s.object<OrderReturnDiscount>({
  uid: s.optionalNullable(s.string()),
  sourceDiscountUid: s.optionalNullable(s.string()),
  catalogObjectId: s.optionalNullable(s.string()),
  catalogVersion: s.optionalNullable(s.int()),
  name: s.optionalNullable(s.string()),
  type: s.optional(s.lazy(() => orderLineItemDiscountTypeSchema)),
  percentage: s.optionalNullable(s.string()),
  amountMoney: s.optional(s.lazy(() => moneySchema)),
  appliedMoney: s.optional(s.lazy(() => moneySchema)),
  scope: s.optional(s.lazy(() => orderLineItemDiscountScopeSchema)),
  _keysMap: {
    sourceDiscountUid: "source_discount_uid",
    catalogObjectId: "catalog_object_id",
    catalogVersion: "catalog_version",
    amountMoney: "amount_money",
    appliedMoney: "applied_money",
  },
});
