import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CatalogInfoResponseLimits = {
  batchUpsertMaxObjectsPerBatch?: number | null;
  batchUpsertMaxTotalObjects?: number | null;
  batchRetrieveMaxObjectIds?: number | null;
  searchMaxPageLimit?: number | null;
  batchDeleteMaxObjectIds?: number | null;
  updateItemTaxesMaxItemIds?: number | null;
  updateItemTaxesMaxTaxesToEnable?: number | null;
  updateItemTaxesMaxTaxesToDisable?: number | null;
  updateItemModifierListsMaxItemIds?: number | null;
  updateItemModifierListsMaxModifierListsToEnable?: number | null;
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
