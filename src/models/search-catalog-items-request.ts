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

/**
 * Defines the request body for the [SearchCatalogItems](api-endpoint:Catalog-SearchCatalogItems)
 * endpoint.
 */
export type SearchCatalogItemsRequest = {
  /**
   * The text filter expression to return items or item variations containing specified text in the
   * `name`, `description`, or `abbreviation` attribute value of an item, or in the `name`, `sku`,
   * or `upc` attribute value of an item variation.
   */
  textFilter?: string;
  /** The category id query expression to return items containing the specified category IDs. */
  categoryIds?: string[];
  /**
   * The stock-level query expression to return item variations with the specified stock levels. See
   * [SearchCatalogItemsRequestStockLevel](#type-searchcatalogitemsrequeststocklevel) for possible
   * values
   */
  stockLevels?: SearchCatalogItemsRequestStockLevel[];
  /**
   * The enabled-location query expression to return items and item variations having specified
   * enabled locations.
   */
  enabledLocationIds?: string[];
  /**
   * The pagination token, returned in the previous response, used to fetch the next batch of
   * pending results.
   */
  cursor?: string;
  /** The maximum number of results to return per page. The default value is 100. */
  limit?: number;
  /**
   * The order (e.g., chronological or alphabetical) in which results from a request are returned.
   */
  sortOrder?: SortOrder;
  /**
   * The product types query expression to return items or item variations having the specified
   * product types.
   */
  productTypes?: CatalogItemProductType[];
  /**
   * The customer-attribute filter to return items or item variations matching the specified custom
   * attribute expressions. A maximum number of 10 custom attribute expressions are supported in a
   * single call to the [SearchCatalogItems](api-endpoint:Catalog-SearchCatalogItems) endpoint.
   */
  customAttributeFilters?: CustomAttributeFilter[];
  /**
   * Defines the values for the `archived_state` query expression used in
   * [SearchCatalogItems](api-endpoint:Catalog-SearchCatalogItems) to return the archived, not
   * archived or either type of catalog items.
   */
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
