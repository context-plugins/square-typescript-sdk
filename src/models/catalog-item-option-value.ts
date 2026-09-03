import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CatalogItemOptionValue = {
  itemOptionId?: string | null;
  name?: string | null;
  description?: string | null;
  color?: string | null;
  ordinal?: number | null;
};

export const catalogItemOptionValueSchema: Schema<CatalogItemOptionValue> = s.object<CatalogItemOptionValue>({
  itemOptionId: s.optionalNullable(s.string()),
  name: s.optionalNullable(s.string()),
  description: s.optionalNullable(s.string()),
  color: s.optionalNullable(s.string()),
  ordinal: s.optionalNullable(s.number()),
  _keysMap: {
    itemOptionId: "item_option_id",
  },
});
