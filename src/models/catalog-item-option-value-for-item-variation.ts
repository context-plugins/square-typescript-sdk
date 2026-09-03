import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CatalogItemOptionValueForItemVariation = {
  itemOptionId?: string | null;
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
