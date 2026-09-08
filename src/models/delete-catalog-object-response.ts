import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

export type DeleteCatalogObjectResponse = {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /**
   * The IDs of all catalog objects deleted by this request. Multiple IDs may be returned when
   * associated objects are also deleted, for example a catalog item variation will be deleted (and
   * its ID included in this field) when its parent catalog item is deleted.
   */
  deletedObjectIds?: string[];
  /**
   * The database [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)
   * of this deletion in RFC 3339 format, e.g., `2016-09-04T23:59:33.123Z`.
   */
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
