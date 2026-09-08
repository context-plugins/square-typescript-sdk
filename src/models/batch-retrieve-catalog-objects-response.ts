import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { catalogObjectSchema, type CatalogObject } from "./catalog-object.js";
import { errorSchema, type Error } from "./error.js";

export type BatchRetrieveCatalogObjectsResponse = {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /** A list of [CatalogObject](entity:CatalogObject)s returned. */
  objects?: CatalogObject[];
  /**
   * A list of [CatalogObject](entity:CatalogObject)s referenced by the object in the `objects`
   * field.
   */
  relatedObjects?: CatalogObject[];
};

export const batchRetrieveCatalogObjectsResponseSchema: Schema<BatchRetrieveCatalogObjectsResponse> =
  s.object<BatchRetrieveCatalogObjectsResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    objects: s.optional(s.array(s.lazy(() => catalogObjectSchema))),
    relatedObjects: s.optional(s.array(s.lazy(() => catalogObjectSchema))),
    _keysMap: {
      relatedObjects: "related_objects",
    },
  });
