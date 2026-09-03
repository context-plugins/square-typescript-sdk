import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { inventoryCountSchema, type InventoryCount } from "./inventory-count.js";

export type InventoryCountUpdatedEventObject = {
  inventoryCounts?: InventoryCount[] | null;
};

export const inventoryCountUpdatedEventObjectSchema: Schema<InventoryCountUpdatedEventObject> =
  s.object<InventoryCountUpdatedEventObject>({
    inventoryCounts: s.optionalNullable(s.array(s.lazy(() => inventoryCountSchema))),
    _keysMap: {
      inventoryCounts: "inventory_counts",
    },
  });
