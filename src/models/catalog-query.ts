import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { catalogQueryExactSchema, type CatalogQueryExact } from "./catalog-query-exact.js";
import {
  catalogQueryItemVariationsForItemOptionValuesSchema,
  type CatalogQueryItemVariationsForItemOptionValues,
} from "./catalog-query-item-variations-for-item-option-values.js";
import {
  catalogQueryItemsForItemOptionsSchema,
  type CatalogQueryItemsForItemOptions,
} from "./catalog-query-items-for-item-options.js";
import {
  catalogQueryItemsForModifierListSchema,
  type CatalogQueryItemsForModifierList,
} from "./catalog-query-items-for-modifier-list.js";
import {
  catalogQueryItemsForTaxSchema,
  type CatalogQueryItemsForTax,
} from "./catalog-query-items-for-tax.js";
import { catalogQueryPrefixSchema, type CatalogQueryPrefix } from "./catalog-query-prefix.js";
import { catalogQueryRangeSchema, type CatalogQueryRange } from "./catalog-query-range.js";
import { catalogQuerySetSchema, type CatalogQuerySet } from "./catalog-query-set.js";
import {
  catalogQuerySortedAttributeSchema,
  type CatalogQuerySortedAttribute,
} from "./catalog-query-sorted-attribute.js";
import { catalogQueryTextSchema, type CatalogQueryText } from "./catalog-query-text.js";

/**
 * A query composed of one or more different types of filters to narrow the scope of targeted
 * objects when calling the `SearchCatalogObjects` endpoint.
 *
 * Although a query can have multiple filters, only certain query types can be combined per call to
 * [SearchCatalogObjects](api-endpoint:Catalog-SearchCatalogObjects). Any combination of the
 * following types may be used together:
 * - [exact_query](entity:CatalogQueryExact)
 * - [prefix_query](entity:CatalogQueryPrefix)
 * - [range_query](entity:CatalogQueryRange)
 * - [sorted_attribute_query](entity:CatalogQuerySortedAttribute)
 * - [text_query](entity:CatalogQueryText)
 *
 * All other query types cannot be combined with any others.
 *
 * When a query filter is based on an attribute, the attribute must be searchable. Searchable
 * attributes are listed as follows, along their parent types that can be searched for with
 * applicable query filters.
 *
 * Searchable attribute and objects queryable by searchable attributes:
 * - `name`: `CatalogItem`, `CatalogItemVariation`, `CatalogCategory`, `CatalogTax`,
 *   `CatalogDiscount`, `CatalogModifier`, `CatalogModifierList`, `CatalogItemOption`,
 *   `CatalogItemOptionValue`
 * - `description`: `CatalogItem`, `CatalogItemOptionValue`
 * - `abbreviation`: `CatalogItem`
 * - `upc`: `CatalogItemVariation`
 * - `sku`: `CatalogItemVariation`
 * - `caption`: `CatalogImage`
 * - `display_name`: `CatalogItemOption`
 *
 * For example, to search for [CatalogItem](entity:CatalogItem) objects by searchable attributes,
 * you can use the `"name"`, `"description"`, or `"abbreviation"` attribute in an applicable query
 * filter.
 */
export type CatalogQuery = {
  /** The query expression to specify the key to sort search results. */
  sortedAttributeQuery?: CatalogQuerySortedAttribute;
  /**
   * The query filter to return the search result by exact match of the specified attribute name and
   * value.
   */
  exactQuery?: CatalogQueryExact;
  /**
   * The query filter to return the search result(s) by exact match of the specified
   * `attribute_name` and any of the `attribute_values`.
   */
  setQuery?: CatalogQuerySet;
  /**
   * The query filter to return the search result whose named attribute values are prefixed by the
   * specified attribute value.
   */
  prefixQuery?: CatalogQueryPrefix;
  /**
   * The query filter to return the search result whose named attribute values fall between the
   * specified range.
   */
  rangeQuery?: CatalogQueryRange;
  /**
   * The query filter to return the search result whose searchable attribute values contain all of
   * the specified keywords or tokens, independent of the token order or case.
   */
  textQuery?: CatalogQueryText;
  /** The query filter to return the items containing the specified tax IDs. */
  itemsForTaxQuery?: CatalogQueryItemsForTax;
  /** The query filter to return the items containing the specified modifier list IDs. */
  itemsForModifierListQuery?: CatalogQueryItemsForModifierList;
  /** The query filter to return the items containing the specified item option IDs. */
  itemsForItemOptionsQuery?: CatalogQueryItemsForItemOptions;
  /**
   * The query filter to return the item variations containing the specified item option value IDs.
   */
  itemVariationsForItemOptionValuesQuery?: CatalogQueryItemVariationsForItemOptionValues;
};

export const catalogQuerySchema: Schema<CatalogQuery> = s.object<CatalogQuery>({
  sortedAttributeQuery: s.optional(s.lazy(() => catalogQuerySortedAttributeSchema)),
  exactQuery: s.optional(s.lazy(() => catalogQueryExactSchema)),
  setQuery: s.optional(s.lazy(() => catalogQuerySetSchema)),
  prefixQuery: s.optional(s.lazy(() => catalogQueryPrefixSchema)),
  rangeQuery: s.optional(s.lazy(() => catalogQueryRangeSchema)),
  textQuery: s.optional(s.lazy(() => catalogQueryTextSchema)),
  itemsForTaxQuery: s.optional(s.lazy(() => catalogQueryItemsForTaxSchema)),
  itemsForModifierListQuery: s.optional(s.lazy(() => catalogQueryItemsForModifierListSchema)),
  itemsForItemOptionsQuery: s.optional(s.lazy(() => catalogQueryItemsForItemOptionsSchema)),
  itemVariationsForItemOptionValuesQuery: s.optional(
    s.lazy(() => catalogQueryItemVariationsForItemOptionValuesSchema),
  ),
  _keysMap: {
    sortedAttributeQuery: "sorted_attribute_query",
    exactQuery: "exact_query",
    setQuery: "set_query",
    prefixQuery: "prefix_query",
    rangeQuery: "range_query",
    textQuery: "text_query",
    itemsForTaxQuery: "items_for_tax_query",
    itemsForModifierListQuery: "items_for_modifier_list_query",
    itemsForItemOptionsQuery: "items_for_item_options_query",
    itemVariationsForItemOptionValuesQuery: "item_variations_for_item_option_values_query",
  },
});
