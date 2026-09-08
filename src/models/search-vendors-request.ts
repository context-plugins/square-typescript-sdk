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

/** Represents an input into a call to [SearchVendors](api-endpoint:Vendors-SearchVendors). */
export type SearchVendorsRequest = {
  /** Defines supported query expressions to search for vendors by. */
  filter?: SearchVendorsRequestFilter;
  /**
   * Defines a sorter used to sort results from [SearchVendors](api-endpoint:Vendors-SearchVendors).
   */
  sort?: SearchVendorsRequestSort;
  /**
   * A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the
   * next set of results for the original query.
   *
   * See the [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination) guide
   * for more information.
   */
  cursor?: string;
};

export const searchVendorsRequestSchema: Schema<SearchVendorsRequest> = s.object<SearchVendorsRequest>({
  filter: s.optional(s.lazy(() => searchVendorsRequestFilterSchema)),
  sort: s.optional(s.lazy(() => searchVendorsRequestSortSchema)),
  cursor: s.optional(s.string()),
});
