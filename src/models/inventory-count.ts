import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { inventoryStateSchema, type InventoryState } from "./inventory-state.js";

/**
 * Represents Square-estimated quantity of items in a particular state at a particular seller
 * location based on the known history of physical counts and inventory adjustments. The absence of
 * an inventory count indicates that the catalog object hasn't interacted with the given inventory
 * state at the given location.
 */
export type InventoryCount = {
  /** The Square-generated ID of the [CatalogObject](entity:CatalogObject) being tracked. */
  catalogObjectId?: string | null;
  /**
   * The [type](entity:CatalogObjectType) of the [CatalogObject](entity:CatalogObject) being
   * tracked.
   *
   * The Inventory API supports setting and reading the `"catalog_object_type": "ITEM_VARIATION"`
   * field value. In addition, it can also read the `"catalog_object_type": "ITEM"` field value that
   * is set by the Square Restaurants app.
   */
  catalogObjectType?: string | null;
  /** Indicates the state of a tracked item quantity in the lifecycle of goods. */
  state?: InventoryState;
  /**
   * The Square-generated ID of the [Location](entity:Location) where the related quantity of items
   * is being tracked.
   */
  locationId?: string | null;
  /**
   * The number of items affected by the estimated count as a decimal string. Can support up to 5
   * digits after the decimal point.
   */
  quantity?: string | null;
  /**
   * An RFC 3339-formatted timestamp that indicates when the most recent physical count or
   * adjustment affecting the estimated count is received.
   */
  calculatedAt?: string;
  /**
   * Whether the inventory count is for composed variation (TRUE) or not (FALSE). If true, the
   * inventory count will not be present in the response of any of these endpoints:
   * [BatchChangeInventory](api-endpoint:Inventory-BatchChangeInventory),
   * [BatchRetrieveInventoryChanges](api-endpoint:Inventory-BatchRetrieveInventoryChanges),
   * [BatchRetrieveInventoryCounts](api-endpoint:Inventory-BatchRetrieveInventoryCounts), and
   * [RetrieveInventoryChanges](api-endpoint:Inventory-RetrieveInventoryChanges).
   */
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
