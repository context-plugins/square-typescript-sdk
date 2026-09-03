import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import {
  inventoryAdjustmentReasonSchema,
  type InventoryAdjustmentReason,
} from "./inventory-adjustment-reason.js";

export type RestoreInventoryAdjustmentReasonResponse = {
  errors?: Error[];
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
