import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const InventoryChangeType = {
  PhysicalCount: "PHYSICAL_COUNT",
  Adjustment: "ADJUSTMENT",
} as const;
export type InventoryChangeType =
  | (typeof InventoryChangeType)[keyof typeof InventoryChangeType]
  | (string & {});

export const inventoryChangeTypeSchema: EnumSchema<InventoryChangeType> =
  s.enumOf<InventoryChangeType>(InventoryChangeType);
