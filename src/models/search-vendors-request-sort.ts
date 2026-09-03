import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  searchVendorsRequestSortFieldSchema,
  type SearchVendorsRequestSortField,
} from "./search-vendors-request-sort-field.js";
import { sortOrderSchema, type SortOrder } from "./sort-order.js";

export type SearchVendorsRequestSort = {
  field?: SearchVendorsRequestSortField;
  order?: SortOrder;
};

export const searchVendorsRequestSortSchema: Schema<SearchVendorsRequestSort> =
  s.object<SearchVendorsRequestSort>({
    field: s.optional(s.lazy(() => searchVendorsRequestSortFieldSchema)),
    order: s.optional(s.lazy(() => sortOrderSchema)),
  });
