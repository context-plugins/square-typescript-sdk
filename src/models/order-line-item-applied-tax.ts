import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneySchema, type Money } from "./money.js";

/**
 * Represents an applied portion of a tax to a line item in an order.
 *
 * Order-scoped taxes automatically include the applied taxes in each line item. Line item taxes
 * must be referenced from any applicable line items. The corresponding applied money is
 * automatically computed, based on the set of participating line items.
 */
export type OrderLineItemAppliedTax = {
  /** A unique ID that identifies the applied tax only within this order. */
  uid?: string | null;
  /**
   * The `uid` of the tax for which this applied tax represents. It must reference a tax present in
   * the `order.taxes` field.
   *
   * This field is immutable. To change which taxes apply to a line item, delete and add a new
   * `OrderLineItemAppliedTax`.
   */
  taxUid: string;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned. Fields that do not
   * explicitly define whether they are signed or unsigned are considered unsigned and can only hold
   * positive amounts. For signed fields, the sign of the value indicates the purpose of the money
   * transfer. See [Working with Monetary
   * Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for
   * more information.
   */
  appliedMoney?: Money;
  /**
   * Indicates whether the tax was automatically applied to the order based on the catalog
   * configuration. For an example, see [Automatically Apply Taxes to an
   * Order](https://developer.squareup.com/docs/orders-api/apply-taxes-and-discounts/auto-apply-taxes).
   */
  autoApplied?: boolean;
};

export const orderLineItemAppliedTaxSchema: Schema<OrderLineItemAppliedTax> =
  s.object<OrderLineItemAppliedTax>({
    uid: s.optionalNullable(s.string()),
    taxUid: s.string(),
    appliedMoney: s.optional(s.lazy(() => moneySchema)),
    autoApplied: s.optional(s.boolean()),
    _keysMap: {
      taxUid: "tax_uid",
      appliedMoney: "applied_money",
      autoApplied: "auto_applied",
    },
  });
