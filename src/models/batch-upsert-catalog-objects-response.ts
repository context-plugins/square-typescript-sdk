import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { catalogIdMappingSchema, type CatalogIdMapping } from "./catalog-id-mapping.js";
import { catalogObjectSchema, type CatalogObject } from "./catalog-object.js";
import { errorSchema, type Error } from "./error.js";

export type BatchUpsertCatalogObjectsResponse = {
  errors?: Error[];
  objects?: CatalogObject[];
  updatedAt?: string;
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
