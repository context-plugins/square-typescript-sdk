import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SearchCatalogItemsRequestStockLevel = {
  Out: "OUT",
  Low: "LOW",
} as const;
export type SearchCatalogItemsRequestStockLevel =
  | (typeof SearchCatalogItemsRequestStockLevel)[keyof typeof SearchCatalogItemsRequestStockLevel]
  | (string & {});

export const searchCatalogItemsRequestStockLevelSchema: EnumSchema<SearchCatalogItemsRequestStockLevel> =
  s.enumOf<SearchCatalogItemsRequestStockLevel>(SearchCatalogItemsRequestStockLevel);
