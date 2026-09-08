import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { inventoryAdjustmentSchema, type InventoryAdjustment } from "./inventory-adjustment.js";

export type UpdateInventoryAdjustmentResponse = {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /**
   * Represents a change in state or quantity of product inventory at a particular time and
   * location.
   */
  adjustment?: InventoryAdjustment;
};

export const updateInventoryAdjustmentResponseSchema: Schema<UpdateInventoryAdjustmentResponse> =
  s.object<UpdateInventoryAdjustmentResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    adjustment: s.optional(s.lazy(() => inventoryAdjustmentSchema)),
  });
