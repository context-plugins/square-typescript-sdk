import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  inventoryAdjustmentReasonIdSchema,
  type InventoryAdjustmentReasonId,
} from "./inventory-adjustment-reason-id.js";

export type RestoreInventoryAdjustmentReasonRequest = {
  reasonId: InventoryAdjustmentReasonId;
};

export const restoreInventoryAdjustmentReasonRequestSchema: Schema<RestoreInventoryAdjustmentReasonRequest> =
  s.object<RestoreInventoryAdjustmentReasonRequest>({
    reasonId: inventoryAdjustmentReasonIdSchema,
    _keysMap: {
      reasonId: "reason_id",
    },
  });
