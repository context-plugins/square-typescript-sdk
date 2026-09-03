import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CatalogItemFoodAndBeverageDetailsIngredientStandardIngredient = {
  Celery: "CELERY",
  Crustaceans: "CRUSTACEANS",
  Eggs: "EGGS",
  Fish: "FISH",
  Gluten: "GLUTEN",
  Lupin: "LUPIN",
  Milk: "MILK",
  Molluscs: "MOLLUSCS",
  Mustard: "MUSTARD",
  Peanuts: "PEANUTS",
  Sesame: "SESAME",
  Soy: "SOY",
  Sulphites: "SULPHITES",
  TreeNuts: "TREE_NUTS",
} as const;
export type CatalogItemFoodAndBeverageDetailsIngredientStandardIngredient =
  | (typeof CatalogItemFoodAndBeverageDetailsIngredientStandardIngredient)[keyof typeof CatalogItemFoodAndBeverageDetailsIngredientStandardIngredient]
  | (string & {});

export const catalogItemFoodAndBeverageDetailsIngredientStandardIngredientSchema: EnumSchema<CatalogItemFoodAndBeverageDetailsIngredientStandardIngredient> =
  s.enumOf<CatalogItemFoodAndBeverageDetailsIngredientStandardIngredient>(
    CatalogItemFoodAndBeverageDetailsIngredientStandardIngredient,
  );
