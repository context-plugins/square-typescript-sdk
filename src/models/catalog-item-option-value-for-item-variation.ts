import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * A `CatalogItemOptionValue` links an item variation to an item option as an item option value. For
 * example, a t-shirt item may offer a color option and a size option. An item option value would
 * represent each variation of t-shirt: For example, "Color:Red, Size:Small" or "Color:Blue,
 * Size:Medium".
 */
export type CatalogItemOptionValueForItemVariation = {
  /** The unique id of an item option. */
  itemOptionId?: string | null;
  /** The unique id of the selected value for the item option. */
  itemOptionValueId?: string | null;
};

export const catalogItemOptionValueForItemVariationSchema: Schema<CatalogItemOptionValueForItemVariation> =
  s.object<CatalogItemOptionValueForItemVariation>({
    itemOptionId: s.optionalNullable(s.string()),
    itemOptionValueId: s.optionalNullable(s.string()),
    _keysMap: {
      itemOptionId: "item_option_id",
      itemOptionValueId: "item_option_value_id",
    },
  });
