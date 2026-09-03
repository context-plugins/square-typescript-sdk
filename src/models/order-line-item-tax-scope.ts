import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const OrderLineItemTaxScope = {
  OtherTaxScope: "OTHER_TAX_SCOPE",
  LineItem: "LINE_ITEM",
  Order: "ORDER",
} as const;
export type OrderLineItemTaxScope =
  | (typeof OrderLineItemTaxScope)[keyof typeof OrderLineItemTaxScope]
  | (string & {});

export const orderLineItemTaxScopeSchema: EnumSchema<OrderLineItemTaxScope> =
  s.enumOf<OrderLineItemTaxScope>(OrderLineItemTaxScope);
