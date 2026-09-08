import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UpdateItemModifierListsRequest = {
  /** The IDs of the catalog items associated with the CatalogModifierList objects being updated. */
  itemIds: string[];
  /**
   * The IDs of the CatalogModifierList objects to enable for the CatalogItem. At least one of
   * `modifier_lists_to_enable` or `modifier_lists_to_disable` must be specified.
   */
  modifierListsToEnable?: string[] | null;
  /**
   * The IDs of the CatalogModifierList objects to disable for the CatalogItem. At least one of
   * `modifier_lists_to_enable` or `modifier_lists_to_disable` must be specified.
   */
  modifierListsToDisable?: string[] | null;
};

export const updateItemModifierListsRequestSchema: Schema<UpdateItemModifierListsRequest> =
  s.object<UpdateItemModifierListsRequest>({
    itemIds: s.array(s.string()),
    modifierListsToEnable: s.optionalNullable(s.array(s.string())),
    modifierListsToDisable: s.optionalNullable(s.array(s.string())),
    _keysMap: {
      itemIds: "item_ids",
      modifierListsToEnable: "modifier_lists_to_enable",
      modifierListsToDisable: "modifier_lists_to_disable",
    },
  });
