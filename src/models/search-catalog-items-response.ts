import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { catalogObjectSchema, type CatalogObject } from "./catalog-object.js";
import { errorSchema, type Error } from "./error.js";

export type SearchCatalogItemsResponse = {
  errors?: Error[];
  items?: CatalogObject[];
  cursor?: string;
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
