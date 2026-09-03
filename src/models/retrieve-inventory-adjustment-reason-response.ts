import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import {
  inventoryAdjustmentReasonSchema,
  type InventoryAdjustmentReason,
} from "./inventory-adjustment-reason.js";

export type RetrieveInventoryAdjustmentReasonResponse = {
  errors?: Error[];
  adjustmentReason?: InventoryAdjustmentReason;
};

export const retrieveInventoryAdjustmentReasonResponseSchema: Schema<RetrieveInventoryAdjustmentReasonResponse> =
  s.object<RetrieveInventoryAdjustmentReasonResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    adjustmentReason: s.optional(s.lazy(() => inventoryAdjustmentReasonSchema)),
    _keysMap: {
      adjustmentReason: "adjustment_reason",
    },
  });
