import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UpdateItemModifierListsRequest = {
  itemIds: string[];
  modifierListsToEnable?: string[] | null;
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
