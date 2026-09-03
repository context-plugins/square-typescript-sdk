import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { catalogObjectSchema, type CatalogObject } from "./catalog-object.js";

export type UpsertCatalogObjectRequest = {
  idempotencyKey: string;
  object: CatalogObject;
};

export const upsertCatalogObjectRequestSchema: Schema<UpsertCatalogObjectRequest> =
  s.object<UpsertCatalogObjectRequest>({
    idempotencyKey: s.string(),
    object: catalogObjectSchema,
    _keysMap: {
      idempotencyKey: "idempotency_key",
    },
  });
