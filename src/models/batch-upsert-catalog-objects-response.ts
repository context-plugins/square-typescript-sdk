import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { catalogIdMappingSchema, type CatalogIdMapping } from "./catalog-id-mapping.js";
import { catalogObjectSchema, type CatalogObject } from "./catalog-object.js";
import { errorSchema, type Error } from "./error.js";

export type BatchUpsertCatalogObjectsResponse = {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /** The created successfully created CatalogObjects. */
  objects?: CatalogObject[];
  /**
   * The database [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)
   * of this update in RFC 3339 format, e.g., "2016-09-04T23:59:33.123Z".
   */
  updatedAt?: string;
  /** The mapping between client and server IDs for this upsert. */
  idMappings?: CatalogIdMapping[];
};

export const batchUpsertCatalogObjectsResponseSchema: Schema<BatchUpsertCatalogObjectsResponse> =
  s.object<BatchUpsertCatalogObjectsResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    objects: s.optional(s.array(s.lazy(() => catalogObjectSchema))),
    updatedAt: s.optional(s.string()),
    idMappings: s.optional(s.array(s.lazy(() => catalogIdMappingSchema))),
    _keysMap: {
      updatedAt: "updated_at",
      idMappings: "id_mappings",
    },
  });
