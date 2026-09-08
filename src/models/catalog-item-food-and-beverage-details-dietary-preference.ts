import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  catalogItemFoodAndBeverageDetailsDietaryPreferenceStandardDietaryPreferenceSchema,
  type CatalogItemFoodAndBeverageDetailsDietaryPreferenceStandardDietaryPreference,
} from "./catalog-item-food-and-beverage-details-dietary-preference-standard-dietary-preference.js";
import {
  catalogItemFoodAndBeverageDetailsDietaryPreferenceTypeSchema,
  type CatalogItemFoodAndBeverageDetailsDietaryPreferenceType,
} from "./catalog-item-food-and-beverage-details-dietary-preference-type.js";

/** Dietary preferences that can be assigned to an `FOOD_AND_BEV` item and its ingredients. */
export type CatalogItemFoodAndBeverageDetailsDietaryPreference = {
  /** The type of dietary preference for the `FOOD_AND_BEV` type of items and integredients. */
  type?: CatalogItemFoodAndBeverageDetailsDietaryPreferenceType;
  /**
   * Standard dietary preferences for food and beverage items that are recommended on item creation.
   */
  standardName?: CatalogItemFoodAndBeverageDetailsDietaryPreferenceStandardDietaryPreference;
  /**
   * The name of a user-defined custom dietary preference. This should be null if it's a standard
   * dietary preference.
   */
  customName?: string | null;
};

export const catalogItemFoodAndBeverageDetailsDietaryPreferenceSchema: Schema<CatalogItemFoodAndBeverageDetailsDietaryPreference> =
  s.object<CatalogItemFoodAndBeverageDetailsDietaryPreference>({
    type: s.optional(s.lazy(() => catalogItemFoodAndBeverageDetailsDietaryPreferenceTypeSchema)),
    standardName: s.optional(
      s.lazy(() => catalogItemFoodAndBeverageDetailsDietaryPreferenceStandardDietaryPreferenceSchema),
    ),
    customName: s.optionalNullable(s.string()),
    _keysMap: {
      standardName: "standard_name",
      customName: "custom_name",
    },
  });
