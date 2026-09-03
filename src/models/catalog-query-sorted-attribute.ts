import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { sortOrderSchema, type SortOrder } from "./sort-order.js";

export type CatalogQuerySortedAttribute = {
  attributeName: string;
  initialAttributeValue?: string | null;
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
