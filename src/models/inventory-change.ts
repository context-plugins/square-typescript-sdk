import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { catalogMeasurementUnitSchema, type CatalogMeasurementUnit } from "./catalog-measurement-unit.js";
import { inventoryAdjustmentSchema, type InventoryAdjustment } from "./inventory-adjustment.js";
import { inventoryChangeTypeSchema, type InventoryChangeType } from "./inventory-change-type.js";
import { inventoryPhysicalCountSchema, type InventoryPhysicalCount } from "./inventory-physical-count.js";

/**
 * Represents a single physical count, inventory, adjustment, or transfer that is part of the
 * history of inventory changes for a particular [CatalogObject](entity:CatalogObject) instance.
 */
export type InventoryChange = {
  /** Indicates how the inventory change was applied to a tracked product quantity. */
  type?: InventoryChangeType;
  /**
   * Represents the quantity of an item variation that is physically present at a specific location,
   * verified by a seller or a seller's employee. For example, a physical count might come from an
   * employee counting the item variations on hand or from syncing with an external system.
   */
  physicalCount?: InventoryPhysicalCount;
  /**
   * Represents a change in state or quantity of product inventory at a particular time and
   * location.
   */
  adjustment?: InventoryAdjustment;
  /**
   * Represents the unit used to measure a `CatalogItemVariation` and specifies the precision for
   * decimal quantities.
   */
  measurementUnit?: CatalogMeasurementUnit;
  /**
   * The ID of the [CatalogMeasurementUnit](entity:CatalogMeasurementUnit) object representing the
   * catalog measurement unit associated with the inventory change.
   */
  measurementUnitId?: string;
};

export const inventoryChangeSchema: Schema<InventoryChange> = s.object<InventoryChange>({
  type: s.optional(s.lazy(() => inventoryChangeTypeSchema)),
  physicalCount: s.optional(s.lazy(() => inventoryPhysicalCountSchema)),
  adjustment: s.optional(s.lazy(() => inventoryAdjustmentSchema)),
  measurementUnit: s.optional(s.lazy(() => catalogMeasurementUnitSchema)),
  measurementUnitId: s.optional(s.string()),
  _keysMap: {
    physicalCount: "physical_count",
    measurementUnit: "measurement_unit",
    measurementUnitId: "measurement_unit_id",
  },
});
