import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CatalogItemOptionForItem = {
  itemOptionId?: string | null;
};

export const catalogItemOptionForItemSchema: Schema<CatalogItemOptionForItem> =
  s.object<CatalogItemOptionForItem>({
    itemOptionId: s.optionalNullable(s.string()),
    _keysMap: {
      itemOptionId: "item_option_id",
    },
  });
