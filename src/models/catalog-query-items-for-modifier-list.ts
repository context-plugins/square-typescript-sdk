import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CatalogQueryItemsForModifierList = {
  modifierListIds: string[];
};

export const catalogQueryItemsForModifierListSchema: Schema<CatalogQueryItemsForModifierList> =
  s.object<CatalogQueryItemsForModifierList>({
    modifierListIds: s.array(s.string()),
    _keysMap: {
      modifierListIds: "modifier_list_ids",
    },
  });
