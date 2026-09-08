import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The query filter to return the item variations containing the specified item option value IDs.
 */
export type CatalogQueryItemVariationsForItemOptionValues = {
  /**
   * A set of `CatalogItemOptionValue` IDs to be used to find associated `CatalogItemVariation`s.
   * All ItemVariations that contain all of the given Item Option Values (in any order) will be
   * returned.
   */
  itemOptionValueIds?: string[] | null;
};

export const catalogQueryItemVariationsForItemOptionValuesSchema: Schema<CatalogQueryItemVariationsForItemOptionValues> =
  s.object<CatalogQueryItemVariationsForItemOptionValues>({
    itemOptionValueIds: s.optionalNullable(s.array(s.string())),
    _keysMap: {
      itemOptionValueIds: "item_option_value_ids",
    },
  });
