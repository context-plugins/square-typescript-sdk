import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  batchRetrieveInventoryChangesSortSchema,
  type BatchRetrieveInventoryChangesSort,
} from "./batch-retrieve-inventory-changes-sort.js";
import {
  inventoryAdjustmentReasonIdSchema,
  type InventoryAdjustmentReasonId,
} from "./inventory-adjustment-reason-id.js";
import { inventoryChangeTypeSchema, type InventoryChangeType } from "./inventory-change-type.js";
import { inventoryStateSchema, type InventoryState } from "./inventory-state.js";

export type BatchRetrieveInventoryChangesRequest = {
  catalogObjectIds?: string[] | null;
  locationIds?: string[] | null;
  types?: InventoryChangeType[] | null;
  states?: InventoryState[] | null;
  updatedAfter?: string | null;
  updatedBefore?: string | null;
  cursor?: string | null;
  limit?: number | null;
  sort?: BatchRetrieveInventoryChangesSort;
  reasonIds?: InventoryAdjustmentReasonId[] | null;
};

export const batchRetrieveInventoryChangesRequestSchema: Schema<BatchRetrieveInventoryChangesRequest> =
  s.object<BatchRetrieveInventoryChangesRequest>({
    catalogObjectIds: s.optionalNullable(s.array(s.string())),
    locationIds: s.optionalNullable(s.array(s.string())),
    types: s.optionalNullable(s.array(s.lazy(() => inventoryChangeTypeSchema))),
    states: s.optionalNullable(s.array(s.lazy(() => inventoryStateSchema))),
    updatedAfter: s.optionalNullable(s.string()),
    updatedBefore: s.optionalNullable(s.string()),
    cursor: s.optionalNullable(s.string()),
    limit: s.optionalNullable(s.number()),
    sort: s.optional(s.lazy(() => batchRetrieveInventoryChangesSortSchema)),
    reasonIds: s.optionalNullable(s.array(s.lazy(() => inventoryAdjustmentReasonIdSchema))),
    _keysMap: {
      catalogObjectIds: "catalog_object_ids",
      locationIds: "location_ids",
      updatedAfter: "updated_after",
      updatedBefore: "updated_before",
      reasonIds: "reason_ids",
    },
  });
