import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { catalogMeasurementUnitSchema, type CatalogMeasurementUnit } from "./catalog-measurement-unit.js";
import { inventoryAdjustmentSchema, type InventoryAdjustment } from "./inventory-adjustment.js";
import { inventoryChangeTypeSchema, type InventoryChangeType } from "./inventory-change-type.js";
import { inventoryPhysicalCountSchema, type InventoryPhysicalCount } from "./inventory-physical-count.js";

export type InventoryChange = {
  type?: InventoryChangeType;
  physicalCount?: InventoryPhysicalCount;
  adjustment?: InventoryAdjustment;
  measurementUnit?: CatalogMeasurementUnit;
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
