import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  searchVendorsRequestFilterSchema,
  type SearchVendorsRequestFilter,
} from "./search-vendors-request-filter.js";
import {
  searchVendorsRequestSortSchema,
  type SearchVendorsRequestSort,
} from "./search-vendors-request-sort.js";

export type SearchVendorsRequest = {
  filter?: SearchVendorsRequestFilter;
  sort?: SearchVendorsRequestSort;
  cursor?: string;
};

export const searchVendorsRequestSchema: Schema<SearchVendorsRequest> = s.object<SearchVendorsRequest>({
  filter: s.optional(s.lazy(() => searchVendorsRequestFilterSchema)),
  sort: s.optional(s.lazy(() => searchVendorsRequestSortSchema)),
  cursor: s.optional(s.string()),
});
