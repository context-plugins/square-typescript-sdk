import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  searchVendorsRequestSortFieldSchema,
  type SearchVendorsRequestSortField,
} from "./search-vendors-request-sort-field.js";
import { sortOrderSchema, type SortOrder } from "./sort-order.js";

/**
 * Defines a sorter used to sort results from [SearchVendors](api-endpoint:Vendors-SearchVendors).
 */
export type SearchVendorsRequestSort = {
  /** The field to sort the returned [Vendor](entity:Vendor) objects by. */
  field?: SearchVendorsRequestSortField;
  /**
   * The order (e.g., chronological or alphabetical) in which results from a request are returned.
   */
  order?: SortOrder;
};

export const searchVendorsRequestSortSchema: Schema<SearchVendorsRequestSort> =
  s.object<SearchVendorsRequestSort>({
    field: s.optional(s.lazy(() => searchVendorsRequestSortFieldSchema)),
    order: s.optional(s.lazy(() => sortOrderSchema)),
  });
