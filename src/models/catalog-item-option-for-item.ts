import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * An option that can be assigned to an item. For example, a t-shirt item may offer a color option
 * or a size option.
 */
export type CatalogItemOptionForItem = {
  /**
   * The unique id of the item option, used to form the dimensions of the item option matrix in a
   * specified order.
   */
  itemOptionId?: string | null;
};

export const catalogItemOptionForItemSchema: Schema<CatalogItemOptionForItem> =
  s.object<CatalogItemOptionForItem>({
    itemOptionId: s.optionalNullable(s.string()),
    _keysMap: {
      itemOptionId: "item_option_id",
    },
  });
