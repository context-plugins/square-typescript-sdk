import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { catalogObjectSchema, type CatalogObject } from "./catalog-object.js";
import { errorSchema, type Error } from "./error.js";

export type SearchCatalogObjectsResponse = {
  errors?: Error[];
  cursor?: string;
  objects?: CatalogObject[];
  relatedObjects?: CatalogObject[];
  latestTime?: string;
};

export const searchCatalogObjectsResponseSchema: Schema<SearchCatalogObjectsResponse> =
  s.object<SearchCatalogObjectsResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    cursor: s.optional(s.string()),
    objects: s.optional(s.array(s.lazy(() => catalogObjectSchema))),
    relatedObjects: s.optional(s.array(s.lazy(() => catalogObjectSchema))),
    latestTime: s.optional(s.string()),
    _keysMap: {
      relatedObjects: "related_objects",
      latestTime: "latest_time",
    },
  });
