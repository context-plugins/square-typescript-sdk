import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates the type of a category. */
export const CatalogCategoryType = {
  /** The regular category. */
  RegularCategory: "REGULAR_CATEGORY",
  /** The menu category. */
  MenuCategory: "MENU_CATEGORY",
  /**
   * Kitchen categories are used by KDS (Kitchen Display System) to route items to specific clients
   */
  KitchenCategory: "KITCHEN_CATEGORY",
} as const;
export type CatalogCategoryType =
  | (typeof CatalogCategoryType)[keyof typeof CatalogCategoryType]
  | (string & {});

export const catalogCategoryTypeSchema: EnumSchema<CatalogCategoryType> =
  s.enumOf<CatalogCategoryType>(CatalogCategoryType);
