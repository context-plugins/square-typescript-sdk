import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** How to apply a CatalogDiscount to a CatalogItem. */
export const CatalogDiscountType = {
  /** Apply the discount as a fixed percentage (e.g., 5%) off the item price. */
  FixedPercentage: "FIXED_PERCENTAGE",
  /** Apply the discount as a fixed amount (e.g., $1.00) off the item price. */
  FixedAmount: "FIXED_AMOUNT",
  /**
   * Apply the discount as a variable percentage off the item price. The percentage will be
   * specified at the time of sale.
   */
  VariablePercentage: "VARIABLE_PERCENTAGE",
  /**
   * Apply the discount as a variable amount off the item price. The amount will be specified at the
   * time of sale.
   */
  VariableAmount: "VARIABLE_AMOUNT",
} as const;
export type CatalogDiscountType =
  | (typeof CatalogDiscountType)[keyof typeof CatalogDiscountType]
  | (string & {});

export const catalogDiscountTypeSchema: EnumSchema<CatalogDiscountType> =
  s.enumOf<CatalogDiscountType>(CatalogDiscountType);
