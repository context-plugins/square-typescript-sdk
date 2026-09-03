import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CatalogDiscountType = {
  FixedPercentage: "FIXED_PERCENTAGE",
  FixedAmount: "FIXED_AMOUNT",
  VariablePercentage: "VARIABLE_PERCENTAGE",
  VariableAmount: "VARIABLE_AMOUNT",
} as const;
export type CatalogDiscountType =
  | (typeof CatalogDiscountType)[keyof typeof CatalogDiscountType]
  | (string & {});

export const catalogDiscountTypeSchema: EnumSchema<CatalogDiscountType> =
  s.enumOf<CatalogDiscountType>(CatalogDiscountType);
