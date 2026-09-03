import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { catalogObjectBatchSchema, type CatalogObjectBatch } from "./catalog-object-batch.js";

export type BatchUpsertCatalogObjectsRequest = {
  idempotencyKey: string;
  batches: CatalogObjectBatch[];
};

export const batchUpsertCatalogObjectsRequestSchema: Schema<BatchUpsertCatalogObjectsRequest> =
  s.object<BatchUpsertCatalogObjectsRequest>({
    idempotencyKey: s.string(),
    batches: s.array(s.lazy(() => catalogObjectBatchSchema)),
    _keysMap: {
      idempotencyKey: "idempotency_key",
    },
  });
