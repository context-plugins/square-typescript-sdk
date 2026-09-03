import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { inventoryCountSchema, type InventoryCount } from "./inventory-count.js";

export type BatchRetrieveInventoryCountsResponse = {
  errors?: Error[];
  counts?: InventoryCount[];
  cursor?: string;
};

export const batchRetrieveInventoryCountsResponseSchema: Schema<BatchRetrieveInventoryCountsResponse> =
  s.object<BatchRetrieveInventoryCountsResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    counts: s.optional(s.array(s.lazy(() => inventoryCountSchema))),
    cursor: s.optional(s.string()),
  });
