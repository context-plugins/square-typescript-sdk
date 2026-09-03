import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CatalogQueryItemsForItemOptions = {
  itemOptionIds?: string[] | null;
};

export const catalogQueryItemsForItemOptionsSchema: Schema<CatalogQueryItemsForItemOptions> =
  s.object<CatalogQueryItemsForItemOptions>({
    itemOptionIds: s.optionalNullable(s.array(s.string())),
    _keysMap: {
      itemOptionIds: "item_option_ids",
    },
  });
