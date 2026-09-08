import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Defines supported stock levels of the item inventory. */
export const SearchCatalogItemsRequestStockLevel = {
  /** The item inventory is empty. */
  Out: "OUT",
  /** The item inventory is low. */
  Low: "LOW",
} as const;
export type SearchCatalogItemsRequestStockLevel =
  | (typeof SearchCatalogItemsRequestStockLevel)[keyof typeof SearchCatalogItemsRequestStockLevel]
  | (string & {});

export const searchCatalogItemsRequestStockLevelSchema: EnumSchema<SearchCatalogItemsRequestStockLevel> =
  s.enumOf<SearchCatalogItemsRequestStockLevel>(SearchCatalogItemsRequestStockLevel);
