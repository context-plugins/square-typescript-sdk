import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  inventoryAdjustmentReasonIdTypeSchema,
  type InventoryAdjustmentReasonIdType,
} from "./inventory-adjustment-reason-id-type.js";

/** Identifies a standard or custom inventory adjustment reason. */
export type InventoryAdjustmentReasonId = {
  /**
   * The type of inventory adjustment reason.
   *
   * Custom reasons use `CUSTOM` and include a `custom_reason_id`. Standard seller-selectable
   * reasons use `RECEIVED`, `DAMAGED`, `THEFT`, `LOST`, `RETURNED`, `SPOILAGE_WASTE`,
   * `SAMPLES_PROMOTIONAL`, `INTERNAL_USE`, `VENDOR_RETURN`, or `PRODUCTION_WASTE`.
   *
   * The writable standard reasons with direction `INCREASE` are `RECEIVED` and `RETURNED`. The
   * writable standard reasons with direction `DECREASE` are `DAMAGED`, `THEFT`, `LOST`,
   * `SPOILAGE_WASTE`, `SAMPLES_PROMOTIONAL`, `INTERNAL_USE`, `VENDOR_RETURN`, and
   * `PRODUCTION_WASTE`.
   *
   * The `SALE`, `RECOUNT`, `TRANSFER`, `IN_TRANSIT`, and `CANCELED_SALE` values identify
   * system-generated inventory events. These values can be returned by Square, but cannot be used
   * when writing inventory adjustments.
   */
  type: InventoryAdjustmentReasonIdType;
  /**
   * The Square-generated ID of the custom adjustment reason. This field is only set when `type` is
   * `CUSTOM`.
   */
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
