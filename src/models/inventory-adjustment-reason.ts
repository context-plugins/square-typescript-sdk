import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  inventoryAdjustmentReasonDirectionSchema,
  type InventoryAdjustmentReasonDirection,
} from "./inventory-adjustment-reason-direction.js";
import {
  inventoryAdjustmentReasonIdSchema,
  type InventoryAdjustmentReasonId,
} from "./inventory-adjustment-reason-id.js";

/** Represents an inventory adjustment reason. */
export type InventoryAdjustmentReason = {
  /** Identifies a standard or custom inventory adjustment reason. */
  id: InventoryAdjustmentReasonId;
  /**
   * The seller-facing name for a custom inventory adjustment reason. This field is empty for
   * standard and system-generated adjustment reasons.
   */
  name?: string | null;
  direction?: InventoryAdjustmentReasonDirection;
  /**
   * An RFC 3339-formatted timestamp that indicates when the custom adjustment reason was created.
   * This field is empty for standard adjustment reasons.
   */
  createdAt?: string;
  /**
   * An RFC 3339-formatted timestamp that indicates when the custom adjustment reason was last
   * updated. This field is empty for standard adjustment reasons.
   */
  updatedAt?: string;
  /**
   * Indicates whether this custom inventory adjustment reason has been deleted. Deleted custom
   * reasons can still be retrieved by ID, but are omitted from list responses unless deleted
   * reasons are explicitly included. To restore a deleted custom reason, call
   * [RestoreInventoryAdjustmentReason](api-endpoint:Inventory-RestoreInventoryAdjustmentReason).
   * This field is always `false` for standard and system-generated adjustment reasons.
   */
  isDeleted?: boolean | null;
};

export const inventoryAdjustmentReasonSchema: Schema<InventoryAdjustmentReason> =
  s.object<InventoryAdjustmentReason>({
    id: inventoryAdjustmentReasonIdSchema,
    name: s.optionalNullable(s.string()),
    direction: s.optional(s.lazy(() => inventoryAdjustmentReasonDirectionSchema)),
    createdAt: s.optional(s.string()),
    updatedAt: s.optional(s.string()),
    isDeleted: s.optionalNullable(s.boolean()),
    _keysMap: {
      createdAt: "created_at",
      updatedAt: "updated_at",
      isDeleted: "is_deleted",
    },
  });
