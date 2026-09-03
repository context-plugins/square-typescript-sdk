import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import {
  inventoryAdjustmentReasonSchema,
  type InventoryAdjustmentReason,
} from "./inventory-adjustment-reason.js";

export type UpdateInventoryAdjustmentReasonResponse = {
  errors?: Error[];
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
