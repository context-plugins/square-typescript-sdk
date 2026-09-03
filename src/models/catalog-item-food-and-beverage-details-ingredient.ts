import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  catalogItemFoodAndBeverageDetailsDietaryPreferenceTypeSchema,
  type CatalogItemFoodAndBeverageDetailsDietaryPreferenceType,
} from "./catalog-item-food-and-beverage-details-dietary-preference-type.js";
import {
  catalogItemFoodAndBeverageDetailsIngredientStandardIngredientSchema,
  type CatalogItemFoodAndBeverageDetailsIngredientStandardIngredient,
} from "./catalog-item-food-and-beverage-details-ingredient-standard-ingredient.js";

export type CatalogItemFoodAndBeverageDetailsIngredient = {
  type?: CatalogItemFoodAndBeverageDetailsDietaryPreferenceType;
  standardName?: CatalogItemFoodAndBeverageDetailsIngredientStandardIngredient;
  customName?: string | null;
};

export const catalogItemFoodAndBeverageDetailsIngredientSchema: Schema<CatalogItemFoodAndBeverageDetailsIngredient> =
  s.object<CatalogItemFoodAndBeverageDetailsIngredient>({
    type: s.optional(s.lazy(() => catalogItemFoodAndBeverageDetailsDietaryPreferenceTypeSchema)),
    standardName: s.optional(
      s.lazy(() => catalogItemFoodAndBeverageDetailsIngredientStandardIngredientSchema),
    ),
    customName: s.optionalNullable(s.string()),
    _keysMap: {
      standardName: "standard_name",
      customName: "custom_name",
    },
  });
