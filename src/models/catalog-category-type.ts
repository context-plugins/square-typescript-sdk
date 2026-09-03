import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CatalogCategoryType = {
  RegularCategory: "REGULAR_CATEGORY",
  MenuCategory: "MENU_CATEGORY",
  KitchenCategory: "KITCHEN_CATEGORY",
} as const;
export type CatalogCategoryType =
  | (typeof CatalogCategoryType)[keyof typeof CatalogCategoryType]
  | (string & {});

export const catalogCategoryTypeSchema: EnumSchema<CatalogCategoryType> =
  s.enumOf<CatalogCategoryType>(CatalogCategoryType);
