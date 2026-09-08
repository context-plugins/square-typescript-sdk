import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { catalogObjectSchema, type CatalogObject } from "./catalog-object.js";
import { errorSchema, type Error } from "./error.js";

export type SearchCatalogObjectsResponse = {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /**
   * The pagination cursor to be used in a subsequent request. If unset, this is the final response.
   * See
   * [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination)
   * for more information.
   */
  cursor?: string;
  /** The CatalogObjects returned. */
  objects?: CatalogObject[];
  /** A list of CatalogObjects referenced by the objects in the `objects` field. */
  relatedObjects?: CatalogObject[];
  /**
   * When the associated product catalog was last updated. Will match the value for `end_time` or
   * `cursor` if either field is included in the `SearchCatalog` request.
   */
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
