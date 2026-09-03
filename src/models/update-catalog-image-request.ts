import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UpdateCatalogImageRequest = {
  idempotencyKey: string;
};

export const updateCatalogImageRequestSchema: Schema<UpdateCatalogImageRequest> =
  s.object<UpdateCatalogImageRequest>({
    idempotencyKey: s.string(),
    _keysMap: {
      idempotencyKey: "idempotency_key",
    },
  });
