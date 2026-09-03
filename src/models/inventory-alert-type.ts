import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const InventoryAlertType = {
  None: "NONE",
  LowQuantity: "LOW_QUANTITY",
} as const;
export type InventoryAlertType = (typeof InventoryAlertType)[keyof typeof InventoryAlertType] | (string & {});

export const inventoryAlertTypeSchema: EnumSchema<InventoryAlertType> =
  s.enumOf<InventoryAlertType>(InventoryAlertType);
