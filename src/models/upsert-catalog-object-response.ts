import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { catalogIdMappingSchema, type CatalogIdMapping } from "./catalog-id-mapping.js";
import { catalogObjectSchema, type CatalogObject } from "./catalog-object.js";
import { errorSchema, type Error } from "./error.js";

export type UpsertCatalogObjectResponse = {
  errors?: Error[];
  catalogObject?: CatalogObject;
  idMappings?: CatalogIdMapping[];
};

export const upsertCatalogObjectResponseSchema: Schema<UpsertCatalogObjectResponse> =
  s.object<UpsertCatalogObjectResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    catalogObject: s.optional(s.lazy(() => catalogObjectSchema)),
    idMappings: s.optional(s.array(s.lazy(() => catalogIdMappingSchema))),
    _keysMap: {
      catalogObject: "catalog_object",
      idMappings: "id_mappings",
    },
  });
