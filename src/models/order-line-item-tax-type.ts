import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates how the tax is applied to the associated line item or order. */
export const OrderLineItemTaxType = {
  /**
   * Used for reporting only. The original transaction tax type is currently not supported by the
   * API.
   */
  UnknownTax: "UNKNOWN_TAX",
  /**
   * The tax is an additive tax. The tax amount is added on top of the price. For example, an item
   * with a cost of 1.00 USD and a 10% additive tax has a total cost to the buyer of 1.10 USD.
   */
  Additive: "ADDITIVE",
  /**
   * The tax is an inclusive tax. Inclusive taxes are already included in the line item price or
   * order total. For example, an item with a cost of 1.00 USD and a 10% inclusive tax has a pretax
   * cost of 0.91 USD (91 cents) and a 0.09 (9 cents) tax for a total cost of 1.00 USD to the buyer.
   */
  Inclusive: "INCLUSIVE",
} as const;
export type OrderLineItemTaxType =
  | (typeof OrderLineItemTaxType)[keyof typeof OrderLineItemTaxType]
  | (string & {});

export const orderLineItemTaxTypeSchema: EnumSchema<OrderLineItemTaxType> =
  s.enumOf<OrderLineItemTaxType>(OrderLineItemTaxType);
