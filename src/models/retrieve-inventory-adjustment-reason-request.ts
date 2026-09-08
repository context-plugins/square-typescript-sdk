import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  inventoryAdjustmentReasonIdSchema,
  type InventoryAdjustmentReasonId,
} from "./inventory-adjustment-reason-id.js";

/**
 * Represents an input to a call to
 * [RetrieveInventoryAdjustmentReason](api-endpoint:Inventory-RetrieveInventoryAdjustmentReason).
 */
export type RetrieveInventoryAdjustmentReasonRequest = {
  /** Identifies a standard or custom inventory adjustment reason. */
  reasonId: InventoryAdjustmentReasonId;
};

export const retrieveInventoryAdjustmentReasonRequestSchema: Schema<RetrieveInventoryAdjustmentReasonRequest> =
  s.object<RetrieveInventoryAdjustmentReasonRequest>({
    reasonId: inventoryAdjustmentReasonIdSchema,
    _keysMap: {
      reasonId: "reason_id",
    },
  });
