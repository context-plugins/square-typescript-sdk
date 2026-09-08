import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import {
  inventoryAdjustmentReasonSchema,
  type InventoryAdjustmentReason,
} from "./inventory-adjustment-reason.js";

/**
 * Represents an output from a call to
 * [RestoreInventoryAdjustmentReason](api-endpoint:Inventory-RestoreInventoryAdjustmentReason).
 */
export type RestoreInventoryAdjustmentReasonResponse = {
  /** Errors encountered when the request fails. */
  errors?: Error[];
  /** Represents an inventory adjustment reason. */
  adjustmentReason?: InventoryAdjustmentReason;
};

export const restoreInventoryAdjustmentReasonResponseSchema: Schema<RestoreInventoryAdjustmentReasonResponse> =
  s.object<RestoreInventoryAdjustmentReasonResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    adjustmentReason: s.optional(s.lazy(() => inventoryAdjustmentReasonSchema)),
    _keysMap: {
      adjustmentReason: "adjustment_reason",
    },
  });
