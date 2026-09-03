import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { catalogObjectSchema, type CatalogObject } from "./catalog-object.js";
import { errorSchema, type Error } from "./error.js";

export type BatchRetrieveCatalogObjectsResponse = {
  errors?: Error[];
  objects?: CatalogObject[];
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
