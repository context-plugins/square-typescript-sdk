import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The query filter to return the items containing the specified item option IDs. */
export type CatalogQueryItemsForItemOptions = {
  /**
   * A set of `CatalogItemOption` IDs to be used to find associated `CatalogItem`s. All Items that
   * contain all of the given Item Options (in any order) will be returned.
   */
  itemOptionIds?: string[] | null;
};

export const catalogQueryItemsForItemOptionsSchema: Schema<CatalogQueryItemsForItemOptions> =
  s.object<CatalogQueryItemsForItemOptions>({
    itemOptionIds: s.optionalNullable(s.array(s.string())),
    _keysMap: {
      itemOptionIds: "item_option_ids",
    },
  });
