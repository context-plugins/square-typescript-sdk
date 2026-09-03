import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

export type DeleteCatalogObjectResponse = {
  errors?: Error[];
  deletedObjectIds?: string[];
  deletedAt?: string;
};

export const deleteCatalogObjectResponseSchema: Schema<DeleteCatalogObjectResponse> =
  s.object<DeleteCatalogObjectResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    deletedObjectIds: s.optional(s.array(s.string())),
    deletedAt: s.optional(s.string()),
    _keysMap: {
      deletedObjectIds: "deleted_object_ids",
      deletedAt: "deleted_at",
    },
  });
