import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { sortOrderSchema, type SortOrder } from "./sort-order.js";

/** The query expression to specify the key to sort search results. */
export type CatalogQuerySortedAttribute = {
  /** The attribute whose value is used as the sort key. */
  attributeName: string;
  /**
   * The first attribute value to be returned by the query. Ascending sorts will return only objects
   * with this value or greater, while descending sorts will return only objects with this value or
   * less. If unset, start at the beginning (for ascending sorts) or end (for descending sorts).
   */
  initialAttributeValue?: string | null;
  /**
   * The order (e.g., chronological or alphabetical) in which results from a request are returned.
   */
  sortOrder?: SortOrder;
};

export const catalogQuerySortedAttributeSchema: Schema<CatalogQuerySortedAttribute> =
  s.object<CatalogQuerySortedAttribute>({
    attributeName: s.string(),
    initialAttributeValue: s.optionalNullable(s.string()),
    sortOrder: s.optional(s.lazy(() => sortOrderSchema)),
    _keysMap: {
      attributeName: "attribute_name",
      initialAttributeValue: "initial_attribute_value",
      sortOrder: "sort_order",
    },
  });
