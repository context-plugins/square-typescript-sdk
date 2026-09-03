import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CatalogItemFoodAndBeverageDetailsDietaryPreferenceType = {
  Standard: "STANDARD",
  Custom: "CUSTOM",
} as const;
export type CatalogItemFoodAndBeverageDetailsDietaryPreferenceType =
  | (typeof CatalogItemFoodAndBeverageDetailsDietaryPreferenceType)[keyof typeof CatalogItemFoodAndBeverageDetailsDietaryPreferenceType]
  | (string & {});

export const catalogItemFoodAndBeverageDetailsDietaryPreferenceTypeSchema: EnumSchema<CatalogItemFoodAndBeverageDetailsDietaryPreferenceType> =
  s.enumOf<CatalogItemFoodAndBeverageDetailsDietaryPreferenceType>(
    CatalogItemFoodAndBeverageDetailsDietaryPreferenceType,
  );
