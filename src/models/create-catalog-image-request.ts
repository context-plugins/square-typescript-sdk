import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { catalogObjectSchema, type CatalogObject } from "./catalog-object.js";

export type CreateCatalogImageRequest = {
  idempotencyKey: string;
  objectId?: string;
  image: CatalogObject;
  isPrimary?: boolean;
};

export const createCatalogImageRequestSchema: Schema<CreateCatalogImageRequest> =
  s.object<CreateCatalogImageRequest>({
    idempotencyKey: s.string(),
    objectId: s.optional(s.string()),
    image: catalogObjectSchema,
    isPrimary: s.optional(s.boolean()),
    _keysMap: {
      idempotencyKey: "idempotency_key",
      objectId: "object_id",
      isPrimary: "is_primary",
    },
  });
