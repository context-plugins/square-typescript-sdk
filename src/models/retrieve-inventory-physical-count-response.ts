import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { inventoryPhysicalCountSchema, type InventoryPhysicalCount } from "./inventory-physical-count.js";

export type RetrieveInventoryPhysicalCountResponse = {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /**
   * Represents the quantity of an item variation that is physically present at a specific location,
   * verified by a seller or a seller's employee. For example, a physical count might come from an
   * employee counting the item variations on hand or from syncing with an external system.
   */
  count?: InventoryPhysicalCount;
};

export const retrieveInventoryPhysicalCountResponseSchema: Schema<RetrieveInventoryPhysicalCountResponse> =
  s.object<RetrieveInventoryPhysicalCountResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    count: s.optional(s.lazy(() => inventoryPhysicalCountSchema)),
  });
