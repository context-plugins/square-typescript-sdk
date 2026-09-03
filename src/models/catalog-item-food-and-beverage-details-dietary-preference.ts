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

export type CatalogItemFoodAndBeverageDetailsDietaryPreference = {
  type?: CatalogItemFoodAndBeverageDetailsDietaryPreferenceType;
  standardName?: CatalogItemFoodAndBeverageDetailsDietaryPreferenceStandardDietaryPreference;
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
