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

export type InventoryAdjustmentReason = {
  id: InventoryAdjustmentReasonId;
  name?: string | null;
  direction?: InventoryAdjustmentReasonDirection;
  createdAt?: string;
  updatedAt?: string;
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
