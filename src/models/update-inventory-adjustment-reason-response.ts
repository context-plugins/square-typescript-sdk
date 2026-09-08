import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import {
  inventoryAdjustmentReasonSchema,
  type InventoryAdjustmentReason,
} from "./inventory-adjustment-reason.js";

/**
 * Represents an output from a call to
 * [UpdateInventoryAdjustmentReason](api-endpoint:Inventory-UpdateInventoryAdjustmentReason).
 */
export type UpdateInventoryAdjustmentReasonResponse = {
  /** Errors encountered when the request fails. */
  errors?: Error[];
  /** Represents an inventory adjustment reason. */
  adjustmentReason?: InventoryAdjustmentReason;
};

export const updateInventoryAdjustmentReasonResponseSchema: Schema<UpdateInventoryAdjustmentReasonResponse> =
  s.object<UpdateInventoryAdjustmentReasonResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    adjustmentReason: s.optional(s.lazy(() => inventoryAdjustmentReasonSchema)),
    _keysMap: {
      adjustmentReason: "adjustment_reason",
    },
  });
