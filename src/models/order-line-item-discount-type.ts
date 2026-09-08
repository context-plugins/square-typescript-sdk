import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates how the discount is applied to the associated line item or order. */
export const OrderLineItemDiscountType = {
  /**
   * Used for reporting only. The original transaction discount type is currently not supported by
   * the API.
   */
  UnknownDiscount: "UNKNOWN_DISCOUNT",
  /** Apply the discount as a fixed percentage (such as 5%) off the item price. */
  FixedPercentage: "FIXED_PERCENTAGE",
  /** Apply the discount as a fixed monetary value (such as $1.00) off the item price. */
  FixedAmount: "FIXED_AMOUNT",
  /**
   * Apply the discount as a variable percentage based on the item price.
   *
   * The specific discount percentage of a `VARIABLE_PERCENTAGE` discount is assigned at the time of
   * the purchase.
   */
  VariablePercentage: "VARIABLE_PERCENTAGE",
  /**
   * Apply the discount as a variable amount based on the item price.
   *
   * The specific discount amount of a `VARIABLE_AMOUNT` discount is assigned at the time of the
   * purchase.
   */
  VariableAmount: "VARIABLE_AMOUNT",
} as const;
export type OrderLineItemDiscountType =
  | (typeof OrderLineItemDiscountType)[keyof typeof OrderLineItemDiscountType]
  | (string & {});

export const orderLineItemDiscountTypeSchema: EnumSchema<OrderLineItemDiscountType> =
  s.enumOf<OrderLineItemDiscountType>(OrderLineItemDiscountType);
