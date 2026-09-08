import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  inventoryAdjustmentReasonIdSchema,
  type InventoryAdjustmentReasonId,
} from "./inventory-adjustment-reason-id.js";

/**
 * Represents an input to a call to
 * [DeleteInventoryAdjustmentReason](api-endpoint:Inventory-DeleteInventoryAdjustmentReason).
 */
export type DeleteInventoryAdjustmentReasonRequest = {
  /** Identifies a standard or custom inventory adjustment reason. */
  reasonId: InventoryAdjustmentReasonId;
};

export const deleteInventoryAdjustmentReasonRequestSchema: Schema<DeleteInventoryAdjustmentReasonRequest> =
  s.object<DeleteInventoryAdjustmentReasonRequest>({
    reasonId: inventoryAdjustmentReasonIdSchema,
    _keysMap: {
      reasonId: "reason_id",
    },
  });
