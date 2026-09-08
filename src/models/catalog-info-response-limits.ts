import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CatalogInfoResponseLimits = {
  /**
   * The maximum number of objects that may appear within a single batch in a
   * `/v2/catalog/batch-upsert` request.
   */
  batchUpsertMaxObjectsPerBatch?: number | null;
  /**
   * The maximum number of objects that may appear across all batches in a
   * `/v2/catalog/batch-upsert` request.
   */
  batchUpsertMaxTotalObjects?: number | null;
  /** The maximum number of object IDs that may appear in a `/v2/catalog/batch-retrieve` request. */
  batchRetrieveMaxObjectIds?: number | null;
  /**
   * The maximum number of results that may be returned in a page of a `/v2/catalog/search`
   * response.
   */
  searchMaxPageLimit?: number | null;
  /**
   * The maximum number of object IDs that may be included in a single `/v2/catalog/batch-delete`
   * request.
   */
  batchDeleteMaxObjectIds?: number | null;
  /**
   * The maximum number of item IDs that may be included in a single `/v2/catalog/update-item-taxes`
   * request.
   */
  updateItemTaxesMaxItemIds?: number | null;
  /**
   * The maximum number of tax IDs to be enabled that may be included in a single
   * `/v2/catalog/update-item-taxes` request.
   */
  updateItemTaxesMaxTaxesToEnable?: number | null;
  /**
   * The maximum number of tax IDs to be disabled that may be included in a single
   * `/v2/catalog/update-item-taxes` request.
   */
  updateItemTaxesMaxTaxesToDisable?: number | null;
  /**
   * The maximum number of item IDs that may be included in a single
   * `/v2/catalog/update-item-modifier-lists` request.
   */
  updateItemModifierListsMaxItemIds?: number | null;
  /**
   * The maximum number of modifier list IDs to be enabled that may be included in a single
   * `/v2/catalog/update-item-modifier-lists` request.
   */
  updateItemModifierListsMaxModifierListsToEnable?: number | null;
  /**
   * The maximum number of modifier list IDs to be disabled that may be included in a single
   * `/v2/catalog/update-item-modifier-lists` request.
   */
  updateItemModifierListsMaxModifierListsToDisable?: number | null;
};

export const catalogInfoResponseLimitsSchema: Schema<CatalogInfoResponseLimits> =
  s.object<CatalogInfoResponseLimits>({
    batchUpsertMaxObjectsPerBatch: s.optionalNullable(s.number()),
    batchUpsertMaxTotalObjects: s.optionalNullable(s.number()),
    batchRetrieveMaxObjectIds: s.optionalNullable(s.number()),
    searchMaxPageLimit: s.optionalNullable(s.number()),
    batchDeleteMaxObjectIds: s.optionalNullable(s.number()),
    updateItemTaxesMaxItemIds: s.optionalNullable(s.number()),
    updateItemTaxesMaxTaxesToEnable: s.optionalNullable(s.number()),
    updateItemTaxesMaxTaxesToDisable: s.optionalNullable(s.number()),
    updateItemModifierListsMaxItemIds: s.optionalNullable(s.number()),
    updateItemModifierListsMaxModifierListsToEnable: s.optionalNullable(s.number()),
    updateItemModifierListsMaxModifierListsToDisable: s.optionalNullable(s.number()),
    _keysMap: {
      batchUpsertMaxObjectsPerBatch: "batch_upsert_max_objects_per_batch",
      batchUpsertMaxTotalObjects: "batch_upsert_max_total_objects",
      batchRetrieveMaxObjectIds: "batch_retrieve_max_object_ids",
      searchMaxPageLimit: "search_max_page_limit",
      batchDeleteMaxObjectIds: "batch_delete_max_object_ids",
      updateItemTaxesMaxItemIds: "update_item_taxes_max_item_ids",
      updateItemTaxesMaxTaxesToEnable: "update_item_taxes_max_taxes_to_enable",
      updateItemTaxesMaxTaxesToDisable: "update_item_taxes_max_taxes_to_disable",
      updateItemModifierListsMaxItemIds: "update_item_modifier_lists_max_item_ids",
      updateItemModifierListsMaxModifierListsToEnable:
        "update_item_modifier_lists_max_modifier_lists_to_enable",
      updateItemModifierListsMaxModifierListsToDisable:
        "update_item_modifier_lists_max_modifier_lists_to_disable",
    },
  });
