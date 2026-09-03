import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { inventoryStateSchema, type InventoryState } from "./inventory-state.js";

export type BatchRetrieveInventoryCountsRequest = {
  catalogObjectIds?: string[] | null;
  locationIds?: string[] | null;
  updatedAfter?: string | null;
  cursor?: string | null;
  states?: InventoryState[] | null;
  limit?: number | null;
};

export const batchRetrieveInventoryCountsRequestSchema: Schema<BatchRetrieveInventoryCountsRequest> =
  s.object<BatchRetrieveInventoryCountsRequest>({
    catalogObjectIds: s.optionalNullable(s.array(s.string())),
    locationIds: s.optionalNullable(s.array(s.string())),
    updatedAfter: s.optionalNullable(s.string()),
    cursor: s.optionalNullable(s.string()),
    states: s.optionalNullable(s.array(s.lazy(() => inventoryStateSchema))),
    limit: s.optionalNullable(s.number()),
    _keysMap: {
      catalogObjectIds: "catalog_object_ids",
      locationIds: "location_ids",
      updatedAfter: "updated_after",
    },
  });
