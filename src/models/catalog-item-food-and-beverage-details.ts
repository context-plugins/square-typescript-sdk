import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  catalogItemFoodAndBeverageDetailsDietaryPreferenceSchema,
  type CatalogItemFoodAndBeverageDetailsDietaryPreference,
} from "./catalog-item-food-and-beverage-details-dietary-preference.js";
import {
  catalogItemFoodAndBeverageDetailsIngredientSchema,
  type CatalogItemFoodAndBeverageDetailsIngredient,
} from "./catalog-item-food-and-beverage-details-ingredient.js";

export type CatalogItemFoodAndBeverageDetails = {
  calorieCount?: number | null;
  dietaryPreferences?: CatalogItemFoodAndBeverageDetailsDietaryPreference[] | null;
  ingredients?: CatalogItemFoodAndBeverageDetailsIngredient[] | null;
};

export const catalogItemFoodAndBeverageDetailsSchema: Schema<CatalogItemFoodAndBeverageDetails> =
  s.object<CatalogItemFoodAndBeverageDetails>({
    calorieCount: s.optionalNullable(s.number()),
    dietaryPreferences: s.optionalNullable(
      s.array(s.lazy(() => catalogItemFoodAndBeverageDetailsDietaryPreferenceSchema)),
    ),
    ingredients: s.optionalNullable(s.array(s.lazy(() => catalogItemFoodAndBeverageDetailsIngredientSchema))),
    _keysMap: {
      calorieCount: "calorie_count",
      dietaryPreferences: "dietary_preferences",
    },
  });
