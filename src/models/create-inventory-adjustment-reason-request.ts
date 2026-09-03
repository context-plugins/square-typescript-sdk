import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  inventoryAdjustmentReasonSchema,
  type InventoryAdjustmentReason,
} from "./inventory-adjustment-reason.js";

export type CreateInventoryAdjustmentReasonRequest = {
  idempotencyKey: string;
  adjustmentReason: InventoryAdjustmentReason;
};

export const createInventoryAdjustmentReasonRequestSchema: Schema<CreateInventoryAdjustmentReasonRequest> =
  s.object<CreateInventoryAdjustmentReasonRequest>({
    idempotencyKey: s.string(),
    adjustmentReason: inventoryAdjustmentReasonSchema,
    _keysMap: {
      idempotencyKey: "idempotency_key",
      adjustmentReason: "adjustment_reason",
    },
  });
