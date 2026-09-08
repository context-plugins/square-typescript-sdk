import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

export type BatchDeleteCatalogObjectsResponse = {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /** The IDs of all CatalogObjects deleted by this request. */
  deletedObjectIds?: string[];
  /**
   * The database [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)
   * of this deletion in RFC 3339 format, e.g., "2016-09-04T23:59:33.123Z".
   */
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
