import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { catalogObjectSchema, type CatalogObject } from "./catalog-object.js";
import { errorSchema, type Error } from "./error.js";

export type ListCatalogResponse = {
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
};

export const listCatalogResponseSchema: Schema<ListCatalogResponse> = s.object<ListCatalogResponse>({
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
  cursor: s.optional(s.string()),
  objects: s.optional(s.array(s.lazy(() => catalogObjectSchema))),
});
