import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { catalogObjectSchema, type CatalogObject } from "./catalog-object.js";
import { errorSchema, type Error } from "./error.js";

/**
 * Defines the response body returned from the
 * [SearchCatalogItems](api-endpoint:Catalog-SearchCatalogItems) endpoint.
 */
export type SearchCatalogItemsResponse = {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /** Returned items matching the specified query expressions. */
  items?: CatalogObject[];
  /** Pagination token used in the next request to return more of the search result. */
  cursor?: string;
  /** Ids of returned item variations matching the specified query expression. */
  matchedVariationIds?: string[];
};

export const searchCatalogItemsResponseSchema: Schema<SearchCatalogItemsResponse> =
  s.object<SearchCatalogItemsResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    items: s.optional(s.array(s.lazy(() => catalogObjectSchema))),
    cursor: s.optional(s.string()),
    matchedVariationIds: s.optional(s.array(s.string())),
    _keysMap: {
      matchedVariationIds: "matched_variation_ids",
    },
  });
