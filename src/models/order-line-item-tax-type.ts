import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const OrderLineItemTaxType = {
  UnknownTax: "UNKNOWN_TAX",
  Additive: "ADDITIVE",
  Inclusive: "INCLUSIVE",
} as const;
export type OrderLineItemTaxType =
  | (typeof OrderLineItemTaxType)[keyof typeof OrderLineItemTaxType]
  | (string & {});

export const orderLineItemTaxTypeSchema: EnumSchema<OrderLineItemTaxType> =
  s.enumOf<OrderLineItemTaxType>(OrderLineItemTaxType);
