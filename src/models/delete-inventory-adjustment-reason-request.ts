import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  inventoryAdjustmentReasonIdSchema,
  type InventoryAdjustmentReasonId,
} from "./inventory-adjustment-reason-id.js";

export type DeleteInventoryAdjustmentReasonRequest = {
  reasonId: InventoryAdjustmentReasonId;
};

export const deleteInventoryAdjustmentReasonRequestSchema: Schema<DeleteInventoryAdjustmentReasonRequest> =
  s.object<DeleteInventoryAdjustmentReasonRequest>({
    reasonId: inventoryAdjustmentReasonIdSchema,
    _keysMap: {
      reasonId: "reason_id",
    },
  });
