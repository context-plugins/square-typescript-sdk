import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { inventoryAdjustmentSchema, type InventoryAdjustment } from "./inventory-adjustment.js";

export type RetrieveInventoryAdjustmentResponse = {
  errors?: Error[];
  adjustment?: InventoryAdjustment;
};

export const retrieveInventoryAdjustmentResponseSchema: Schema<RetrieveInventoryAdjustmentResponse> =
  s.object<RetrieveInventoryAdjustmentResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    adjustment: s.optional(s.lazy(() => inventoryAdjustmentSchema)),
  });
