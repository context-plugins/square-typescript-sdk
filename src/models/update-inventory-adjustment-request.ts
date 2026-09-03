import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { inventoryAdjustmentSchema, type InventoryAdjustment } from "./inventory-adjustment.js";

export type UpdateInventoryAdjustmentRequest = {
  idempotencyKey: string;
  adjustment: InventoryAdjustment;
};

export const updateInventoryAdjustmentRequestSchema: Schema<UpdateInventoryAdjustmentRequest> =
  s.object<UpdateInventoryAdjustmentRequest>({
    idempotencyKey: s.string(),
    adjustment: inventoryAdjustmentSchema,
    _keysMap: {
      idempotencyKey: "idempotency_key",
    },
  });
