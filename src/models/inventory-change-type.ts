import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates how the inventory change was applied to a tracked product quantity. */
export const InventoryChangeType = {
  /** The change occurred as part of a physical count update. */
  PhysicalCount: "PHYSICAL_COUNT",
  /**
   * The change occurred as part of the normal lifecycle of goods (e.g., as an inventory
   * adjustment).
   */
  Adjustment: "ADJUSTMENT",
} as const;
export type InventoryChangeType =
  | (typeof InventoryChangeType)[keyof typeof InventoryChangeType]
  | (string & {});

export const inventoryChangeTypeSchema: EnumSchema<InventoryChangeType> =
  s.enumOf<InventoryChangeType>(InventoryChangeType);
