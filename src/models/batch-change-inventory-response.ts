import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { inventoryChangeSchema, type InventoryChange } from "./inventory-change.js";
import { inventoryCountSchema, type InventoryCount } from "./inventory-count.js";

export type BatchChangeInventoryResponse = {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /** The current counts for all objects referenced in the request. */
  counts?: InventoryCount[];
  /** Changes created for the request. */
  changes?: InventoryChange[];
};

export const batchChangeInventoryResponseSchema: Schema<BatchChangeInventoryResponse> =
  s.object<BatchChangeInventoryResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    counts: s.optional(s.array(s.lazy(() => inventoryCountSchema))),
    changes: s.optional(s.array(s.lazy(() => inventoryChangeSchema))),
  });
