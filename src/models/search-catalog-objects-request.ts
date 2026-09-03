import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { catalogObjectTypeSchema, type CatalogObjectType } from "./catalog-object-type.js";
import { catalogQuerySchema, type CatalogQuery } from "./catalog-query.js";

export type SearchCatalogObjectsRequest = {
  cursor?: string;
  objectTypes?: CatalogObjectType[];
  includeDeletedObjects?: boolean;
  includeRelatedObjects?: boolean;
  beginTime?: string;
  query?: CatalogQuery;
  limit?: number;
  includeCategoryPathToRoot?: boolean;
};

export const searchCatalogObjectsRequestSchema: Schema<SearchCatalogObjectsRequest> =
  s.object<SearchCatalogObjectsRequest>({
    cursor: s.optional(s.string()),
    objectTypes: s.optional(s.array(s.lazy(() => catalogObjectTypeSchema))),
    includeDeletedObjects: s.optional(s.boolean()),
    includeRelatedObjects: s.optional(s.boolean()),
    beginTime: s.optional(s.string()),
    query: s.optional(s.lazy(() => catalogQuerySchema)),
    limit: s.optional(s.number()),
    includeCategoryPathToRoot: s.optional(s.boolean()),
    _keysMap: {
      objectTypes: "object_types",
      includeDeletedObjects: "include_deleted_objects",
      includeRelatedObjects: "include_related_objects",
      beginTime: "begin_time",
      includeCategoryPathToRoot: "include_category_path_to_root",
    },
  });
