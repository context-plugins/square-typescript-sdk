import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of dietary preference for the `FOOD_AND_BEV` type of items and integredients. */
export const CatalogItemFoodAndBeverageDetailsDietaryPreferenceType = {
  /** A standard value from a pre-determined list. */
  Standard: "STANDARD",
  /** A user-defined custom value. */
  Custom: "CUSTOM",
} as const;
export type CatalogItemFoodAndBeverageDetailsDietaryPreferenceType =
  | (typeof CatalogItemFoodAndBeverageDetailsDietaryPreferenceType)[keyof typeof CatalogItemFoodAndBeverageDetailsDietaryPreferenceType]
  | (string & {});

export const catalogItemFoodAndBeverageDetailsDietaryPreferenceTypeSchema: EnumSchema<CatalogItemFoodAndBeverageDetailsDietaryPreferenceType> =
  s.enumOf<CatalogItemFoodAndBeverageDetailsDietaryPreferenceType>(
    CatalogItemFoodAndBeverageDetailsDietaryPreferenceType,
  );
