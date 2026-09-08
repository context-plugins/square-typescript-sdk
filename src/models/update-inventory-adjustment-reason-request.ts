import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  inventoryAdjustmentReasonIdSchema,
  type InventoryAdjustmentReasonId,
} from "./inventory-adjustment-reason-id.js";
import {
  inventoryAdjustmentReasonSchema,
  type InventoryAdjustmentReason,
} from "./inventory-adjustment-reason.js";

/**
 * Represents an input to a call to
 * [UpdateInventoryAdjustmentReason](api-endpoint:Inventory-UpdateInventoryAdjustmentReason).
 */
export type UpdateInventoryAdjustmentReasonRequest = {
  /** Identifies a standard or custom inventory adjustment reason. */
  reasonId: InventoryAdjustmentReasonId;
  /** Represents an inventory adjustment reason. */
  adjustmentReason: InventoryAdjustmentReason;
};

export const updateInventoryAdjustmentReasonRequestSchema: Schema<UpdateInventoryAdjustmentReasonRequest> =
  s.object<UpdateInventoryAdjustmentReasonRequest>({
    reasonId: inventoryAdjustmentReasonIdSchema,
    adjustmentReason: inventoryAdjustmentReasonSchema,
    _keysMap: {
      reasonId: "reason_id",
      adjustmentReason: "adjustment_reason",
    },
  });
