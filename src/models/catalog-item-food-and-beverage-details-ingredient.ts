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

/** Describes the ingredient used in a `FOOD_AND_BEV` item. */
export type CatalogItemFoodAndBeverageDetailsIngredient = {
  /** The type of dietary preference for the `FOOD_AND_BEV` type of items and integredients. */
  type?: CatalogItemFoodAndBeverageDetailsDietaryPreferenceType;
  /** Standard ingredients for food and beverage items that are recommended on item creation. */
  standardName?: CatalogItemFoodAndBeverageDetailsIngredientStandardIngredient;
  /**
   * The name of a custom user-defined ingredient. This should be null if it's a standard dietary
   * preference.
   */
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
