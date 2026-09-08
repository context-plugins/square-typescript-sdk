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
  /**
   * The filter to return results by `CatalogObject` ID. The filter is only applicable when set. The
   * default value is null.
   */
  catalogObjectIds?: string[] | null;
  /**
   * The filter to return results by `Location` ID. The filter is only applicable when set. The
   * default value is null.
   */
  locationIds?: string[] | null;
  /**
   * The filter to return results by `InventoryChangeType` values other than `TRANSFER`. The default
   * value is `[PHYSICAL_COUNT, ADJUSTMENT]`.
   */
  types?: InventoryChangeType[] | null;
  /**
   * The filter to return `ADJUSTMENT` query results by `InventoryState`. This filter is only
   * applied when set. The default value is null.
   */
  states?: InventoryState[] | null;
  /**
   * The filter to return results with their `calculated_at` value after the given time as specified
   * in an RFC 3339 timestamp. The default value is the UNIX epoch of (`1970-01-01T00:00:00Z`).
   */
  updatedAfter?: string | null;
  /**
   * The filter to return results with their `created_at` or `calculated_at` value strictly before
   * the given time as specified in an RFC 3339 timestamp. The default value is the UNIX epoch of
   * (`1970-01-01T00:00:00Z`).
   */
  updatedBefore?: string | null;
  /**
   * A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the
   * next set of results for the original query.
   *
   * See the [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination) guide
   * for more information.
   */
  cursor?: string | null;
  /** The number of [records](entity:InventoryChange) to return. */
  limit?: number | null;
  sort?: BatchRetrieveInventoryChangesSort;
  /**
   * The filter to return `ADJUSTMENT` query results by inventory adjustment reason. This filter is
   * only applied when set. The request cannot include both `reason_ids` and `states`.
   */
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
