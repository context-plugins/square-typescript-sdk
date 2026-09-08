import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BatchDeleteCatalogObjectsRequest = {
  /**
   * The IDs of the CatalogObjects to be deleted. When an object is deleted, other objects in the
   * graph that depend on that object will be deleted as well (for example, deleting a CatalogItem
   * will delete its CatalogItemVariation.
   */
  objectIds: string[];
};

export const batchDeleteCatalogObjectsRequestSchema: Schema<BatchDeleteCatalogObjectsRequest> =
  s.object<BatchDeleteCatalogObjectsRequest>({
    objectIds: s.array(s.string()),
    _keysMap: {
      objectIds: "object_ids",
    },
  });
