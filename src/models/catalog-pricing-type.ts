import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CatalogPricingType = {
  FixedPricing: "FIXED_PRICING",
  VariablePricing: "VARIABLE_PRICING",
} as const;
export type CatalogPricingType = (typeof CatalogPricingType)[keyof typeof CatalogPricingType] | (string & {});

export const catalogPricingTypeSchema: EnumSchema<CatalogPricingType> =
  s.enumOf<CatalogPricingType>(CatalogPricingType);
