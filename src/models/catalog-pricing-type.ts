import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates whether the price of a CatalogItemVariation should be entered manually at the time of
 * sale.
 */
export const CatalogPricingType = {
  /** The catalog item variation's price is fixed. */
  FixedPricing: "FIXED_PRICING",
  /** The catalog item variation's price is entered at the time of sale. */
  VariablePricing: "VARIABLE_PRICING",
} as const;
export type CatalogPricingType = (typeof CatalogPricingType)[keyof typeof CatalogPricingType] | (string & {});

export const catalogPricingTypeSchema: EnumSchema<CatalogPricingType> =
  s.enumOf<CatalogPricingType>(CatalogPricingType);
