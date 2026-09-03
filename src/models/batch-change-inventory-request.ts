import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { inventoryChangeSchema, type InventoryChange } from "./inventory-change.js";

export type BatchChangeInventoryRequest = {
  idempotencyKey: string;
  changes?: InventoryChange[] | null;
  ignoreUnchangedCounts?: boolean | null;
};

export const batchChangeInventoryRequestSchema: Schema<BatchChangeInventoryRequest> =
  s.object<BatchChangeInventoryRequest>({
    idempotencyKey: s.string(),
    changes: s.optionalNullable(s.array(s.lazy(() => inventoryChangeSchema))),
    ignoreUnchangedCounts: s.optionalNullable(s.boolean()),
    _keysMap: {
      idempotencyKey: "idempotency_key",
      ignoreUnchangedCounts: "ignore_unchanged_counts",
    },
  });
