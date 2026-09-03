import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const InventoryAdjustmentReasonDirection = {
  Increase: "INCREASE",
  Decrease: "DECREASE",
} as const;
export type InventoryAdjustmentReasonDirection =
  | (typeof InventoryAdjustmentReasonDirection)[keyof typeof InventoryAdjustmentReasonDirection]
  | (string & {});

export const inventoryAdjustmentReasonDirectionSchema: EnumSchema<InventoryAdjustmentReasonDirection> =
  s.enumOf<InventoryAdjustmentReasonDirection>(InventoryAdjustmentReasonDirection);
