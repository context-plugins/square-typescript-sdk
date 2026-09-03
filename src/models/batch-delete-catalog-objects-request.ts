import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BatchDeleteCatalogObjectsRequest = {
  objectIds: string[];
};

export const batchDeleteCatalogObjectsRequestSchema: Schema<BatchDeleteCatalogObjectsRequest> =
  s.object<BatchDeleteCatalogObjectsRequest>({
    objectIds: s.array(s.string()),
    _keysMap: {
      objectIds: "object_ids",
    },
  });
