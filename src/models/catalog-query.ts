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

export type CatalogQuery = {
  sortedAttributeQuery?: CatalogQuerySortedAttribute;
  exactQuery?: CatalogQueryExact;
  setQuery?: CatalogQuerySet;
  prefixQuery?: CatalogQueryPrefix;
  rangeQuery?: CatalogQueryRange;
  textQuery?: CatalogQueryText;
  itemsForTaxQuery?: CatalogQueryItemsForTax;
  itemsForModifierListQuery?: CatalogQueryItemsForModifierList;
  itemsForItemOptionsQuery?: CatalogQueryItemsForItemOptions;
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
