import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { catalogObjectSchema, type CatalogObject } from "./catalog-object.js";
import { errorSchema, type Error } from "./error.js";

export type RetrieveCatalogObjectResponse = {
  errors?: Error[];
  object?: CatalogObject;
  relatedObjects?: CatalogObject[];
};

export const retrieveCatalogObjectResponseSchema: Schema<RetrieveCatalogObjectResponse> =
  s.object<RetrieveCatalogObjectResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    object: s.optional(s.lazy(() => catalogObjectSchema)),
    relatedObjects: s.optional(s.array(s.lazy(() => catalogObjectSchema))),
    _keysMap: {
      relatedObjects: "related_objects",
    },
  });
