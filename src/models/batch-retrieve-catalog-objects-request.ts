import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BatchRetrieveCatalogObjectsRequest = {
  objectIds: string[];
  includeRelatedObjects?: boolean | null;
  catalogVersion?: number | null;
  includeDeletedObjects?: boolean | null;
  includeCategoryPathToRoot?: boolean | null;
};

export const batchRetrieveCatalogObjectsRequestSchema: Schema<BatchRetrieveCatalogObjectsRequest> =
  s.object<BatchRetrieveCatalogObjectsRequest>({
    objectIds: s.array(s.string()),
    includeRelatedObjects: s.optionalNullable(s.boolean()),
    catalogVersion: s.optionalNullable(s.number()),
    includeDeletedObjects: s.optionalNullable(s.boolean()),
    includeCategoryPathToRoot: s.optionalNullable(s.boolean()),
    _keysMap: {
      objectIds: "object_ids",
      includeRelatedObjects: "include_related_objects",
      catalogVersion: "catalog_version",
      includeDeletedObjects: "include_deleted_objects",
      includeCategoryPathToRoot: "include_category_path_to_root",
    },
  });
