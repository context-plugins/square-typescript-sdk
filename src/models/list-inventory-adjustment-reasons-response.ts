import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import {
  inventoryAdjustmentReasonSchema,
  type InventoryAdjustmentReason,
} from "./inventory-adjustment-reason.js";

/**
 * Represents an output from a call to
 * [ListInventoryAdjustmentReasons](api-endpoint:Inventory-ListInventoryAdjustmentReasons).
 */
export type ListInventoryAdjustmentReasonsResponse = {
  /** Errors encountered when the request fails. */
  errors?: Error[];
  /**
   * The standard, system-generated, and custom inventory adjustment reasons available to the
   * seller.
   */
  adjustmentReasons?: InventoryAdjustmentReason[];
};

export const listInventoryAdjustmentReasonsResponseSchema: Schema<ListInventoryAdjustmentReasonsResponse> =
  s.object<ListInventoryAdjustmentReasonsResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    adjustmentReasons: s.optional(s.array(s.lazy(() => inventoryAdjustmentReasonSchema))),
    _keysMap: {
      adjustmentReasons: "adjustment_reasons",
    },
  });
