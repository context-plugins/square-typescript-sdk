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

export type UpdateInventoryAdjustmentReasonRequest = {
  reasonId: InventoryAdjustmentReasonId;
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
