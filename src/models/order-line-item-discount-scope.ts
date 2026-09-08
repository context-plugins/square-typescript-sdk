import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates whether this is a line-item or order-level discount. */
export const OrderLineItemDiscountScope = {
  /**
   * Used for reporting only. The original transaction discount scope is currently not supported by
   * the API.
   */
  OtherDiscountScope: "OTHER_DISCOUNT_SCOPE",
  /**
   * The discount should be applied to only line items specified by `OrderLineItemAppliedDiscount`
   * reference records.
   */
  LineItem: "LINE_ITEM",
  /** The discount should be applied to the entire order. */
  Order: "ORDER",
} as const;
export type OrderLineItemDiscountScope =
  | (typeof OrderLineItemDiscountScope)[keyof typeof OrderLineItemDiscountScope]
  | (string & {});

export const orderLineItemDiscountScopeSchema: EnumSchema<OrderLineItemDiscountScope> =
  s.enumOf<OrderLineItemDiscountScope>(OrderLineItemDiscountScope);
