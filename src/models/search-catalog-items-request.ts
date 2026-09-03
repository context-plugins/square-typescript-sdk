import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { archivedStateSchema, type ArchivedState } from "./archived-state.js";
import { catalogItemProductTypeSchema, type CatalogItemProductType } from "./catalog-item-product-type.js";
import { customAttributeFilterSchema, type CustomAttributeFilter } from "./custom-attribute-filter.js";
import {
  searchCatalogItemsRequestStockLevelSchema,
  type SearchCatalogItemsRequestStockLevel,
} from "./search-catalog-items-request-stock-level.js";
import { sortOrderSchema, type SortOrder } from "./sort-order.js";

export type SearchCatalogItemsRequest = {
  textFilter?: string;
  categoryIds?: string[];
  stockLevels?: SearchCatalogItemsRequestStockLevel[];
  enabledLocationIds?: string[];
  cursor?: string;
  limit?: number;
  sortOrder?: SortOrder;
  productTypes?: CatalogItemProductType[];
  customAttributeFilters?: CustomAttributeFilter[];
  archivedState?: ArchivedState;
};

export const searchCatalogItemsRequestSchema: Schema<SearchCatalogItemsRequest> =
  s.object<SearchCatalogItemsRequest>({
    textFilter: s.optional(s.string()),
    categoryIds: s.optional(s.array(s.string())),
    stockLevels: s.optional(s.array(s.lazy(() => searchCatalogItemsRequestStockLevelSchema))),
    enabledLocationIds: s.optional(s.array(s.string())),
    cursor: s.optional(s.string()),
    limit: s.optional(s.number()),
    sortOrder: s.optional(s.lazy(() => sortOrderSchema)),
    productTypes: s.optional(s.array(s.lazy(() => catalogItemProductTypeSchema))),
    customAttributeFilters: s.optional(s.array(s.lazy(() => customAttributeFilterSchema))),
    archivedState: s.optional(s.lazy(() => archivedStateSchema)),
    _keysMap: {
      textFilter: "text_filter",
      categoryIds: "category_ids",
      stockLevels: "stock_levels",
      enabledLocationIds: "enabled_location_ids",
      sortOrder: "sort_order",
      productTypes: "product_types",
      customAttributeFilters: "custom_attribute_filters",
      archivedState: "archived_state",
    },
  });
