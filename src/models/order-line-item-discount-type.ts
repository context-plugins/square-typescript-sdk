import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const OrderLineItemDiscountType = {
  UnknownDiscount: "UNKNOWN_DISCOUNT",
  FixedPercentage: "FIXED_PERCENTAGE",
  FixedAmount: "FIXED_AMOUNT",
  VariablePercentage: "VARIABLE_PERCENTAGE",
  VariableAmount: "VARIABLE_AMOUNT",
} as const;
export type OrderLineItemDiscountType =
  | (typeof OrderLineItemDiscountType)[keyof typeof OrderLineItemDiscountType]
  | (string & {});

export const orderLineItemDiscountTypeSchema: EnumSchema<OrderLineItemDiscountType> =
  s.enumOf<OrderLineItemDiscountType>(OrderLineItemDiscountType);
