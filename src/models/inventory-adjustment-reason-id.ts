import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  inventoryAdjustmentReasonIdTypeSchema,
  type InventoryAdjustmentReasonIdType,
} from "./inventory-adjustment-reason-id-type.js";

export type InventoryAdjustmentReasonId = {
  type: InventoryAdjustmentReasonIdType;
  customReasonId?: string | null;
};

export const inventoryAdjustmentReasonIdSchema: Schema<InventoryAdjustmentReasonId> =
  s.object<InventoryAdjustmentReasonId>({
    type: inventoryAdjustmentReasonIdTypeSchema,
    customReasonId: s.optionalNullable(s.string()),
    _keysMap: {
      customReasonId: "custom_reason_id",
    },
  });
