import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

export type BatchDeleteCatalogObjectsResponse = {
  errors?: Error[];
  deletedObjectIds?: string[];
  deletedAt?: string;
};

export const batchDeleteCatalogObjectsResponseSchema: Schema<BatchDeleteCatalogObjectsResponse> =
  s.object<BatchDeleteCatalogObjectsResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    deletedObjectIds: s.optional(s.array(s.string())),
    deletedAt: s.optional(s.string()),
    _keysMap: {
      deletedObjectIds: "deleted_object_ids",
      deletedAt: "deleted_at",
    },
  });
