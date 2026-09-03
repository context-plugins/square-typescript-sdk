import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CatalogQueryItemVariationsForItemOptionValues = {
  itemOptionValueIds?: string[] | null;
};

export const catalogQueryItemVariationsForItemOptionValuesSchema: Schema<CatalogQueryItemVariationsForItemOptionValues> =
  s.object<CatalogQueryItemVariationsForItemOptionValues>({
    itemOptionValueIds: s.optionalNullable(s.array(s.string())),
    _keysMap: {
      itemOptionValueIds: "item_option_value_ids",
    },
  });
