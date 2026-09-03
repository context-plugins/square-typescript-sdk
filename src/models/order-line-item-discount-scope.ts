import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const OrderLineItemDiscountScope = {
  OtherDiscountScope: "OTHER_DISCOUNT_SCOPE",
  LineItem: "LINE_ITEM",
  Order: "ORDER",
} as const;
export type OrderLineItemDiscountScope =
  | (typeof OrderLineItemDiscountScope)[keyof typeof OrderLineItemDiscountScope]
  | (string & {});

export const orderLineItemDiscountScopeSchema: EnumSchema<OrderLineItemDiscountScope> =
  s.enumOf<OrderLineItemDiscountScope>(OrderLineItemDiscountScope);
