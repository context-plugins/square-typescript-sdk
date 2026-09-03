import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CatalogItemFoodAndBeverageDetailsDietaryPreferenceStandardDietaryPreference = {
  DairyFree: "DAIRY_FREE",
  GlutenFree: "GLUTEN_FREE",
  Halal: "HALAL",
  Kosher: "KOSHER",
  NutFree: "NUT_FREE",
  Vegan: "VEGAN",
  Vegetarian: "VEGETARIAN",
} as const;
export type CatalogItemFoodAndBeverageDetailsDietaryPreferenceStandardDietaryPreference =
  | (typeof CatalogItemFoodAndBeverageDetailsDietaryPreferenceStandardDietaryPreference)[keyof typeof CatalogItemFoodAndBeverageDetailsDietaryPreferenceStandardDietaryPreference]
  | (string & {});

export const catalogItemFoodAndBeverageDetailsDietaryPreferenceStandardDietaryPreferenceSchema: EnumSchema<CatalogItemFoodAndBeverageDetailsDietaryPreferenceStandardDietaryPreference> =
  s.enumOf<CatalogItemFoodAndBeverageDetailsDietaryPreferenceStandardDietaryPreference>(
    CatalogItemFoodAndBeverageDetailsDietaryPreferenceStandardDietaryPreference,
  );
