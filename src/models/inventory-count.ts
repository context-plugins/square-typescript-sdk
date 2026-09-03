import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { inventoryStateSchema, type InventoryState } from "./inventory-state.js";

export type InventoryCount = {
  catalogObjectId?: string | null;
  catalogObjectType?: string | null;
  state?: InventoryState;
  locationId?: string | null;
  quantity?: string | null;
  calculatedAt?: string;
  isEstimated?: boolean;
};

export const inventoryCountSchema: Schema<InventoryCount> = s.object<InventoryCount>({
  catalogObjectId: s.optionalNullable(s.string()),
  catalogObjectType: s.optionalNullable(s.string()),
  state: s.optional(s.lazy(() => inventoryStateSchema)),
  locationId: s.optionalNullable(s.string()),
  quantity: s.optionalNullable(s.string()),
  calculatedAt: s.optional(s.string()),
  isEstimated: s.optional(s.boolean()),
  _keysMap: {
    catalogObjectId: "catalog_object_id",
    catalogObjectType: "catalog_object_type",
    locationId: "location_id",
    calculatedAt: "calculated_at",
    isEstimated: "is_estimated",
  },
});
