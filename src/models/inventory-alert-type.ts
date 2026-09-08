import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates whether Square should alert the merchant when the inventory quantity of a
 * CatalogItemVariation is low.
 */
export const InventoryAlertType = {
  /** The variation does not display an alert. */
  None: "NONE",
  /** The variation generates an alert when its quantity is low. */
  LowQuantity: "LOW_QUANTITY",
} as const;
export type InventoryAlertType = (typeof InventoryAlertType)[keyof typeof InventoryAlertType] | (string & {});

export const inventoryAlertTypeSchema: EnumSchema<InventoryAlertType> =
  s.enumOf<InventoryAlertType>(InventoryAlertType);
