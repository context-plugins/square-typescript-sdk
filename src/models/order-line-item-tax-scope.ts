import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates whether this is a line-item or order-level tax. */
export const OrderLineItemTaxScope = {
  /**
   * Used for reporting only. The original transaction tax scope is currently not supported by the
   * API.
   */
  OtherTaxScope: "OTHER_TAX_SCOPE",
  /**
   * The tax should be applied only to line items specified by the `OrderLineItemAppliedTax`
   * reference records.
   */
  LineItem: "LINE_ITEM",
  /** The tax should be applied to the entire order. */
  Order: "ORDER",
} as const;
export type OrderLineItemTaxScope =
  | (typeof OrderLineItemTaxScope)[keyof typeof OrderLineItemTaxScope]
  | (string & {});

export const orderLineItemTaxScopeSchema: EnumSchema<OrderLineItemTaxScope> =
  s.enumOf<OrderLineItemTaxScope>(OrderLineItemTaxScope);
