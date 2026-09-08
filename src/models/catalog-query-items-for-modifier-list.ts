import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The query filter to return the items containing the specified modifier list IDs. */
export type CatalogQueryItemsForModifierList = {
  /** A set of `CatalogModifierList` IDs to be used to find associated `CatalogItem`s. */
  modifierListIds: string[];
};

export const catalogQueryItemsForModifierListSchema: Schema<CatalogQueryItemsForModifierList> =
  s.object<CatalogQueryItemsForModifierList>({
    modifierListIds: s.array(s.string()),
    _keysMap: {
      modifierListIds: "modifier_list_ids",
    },
  });
