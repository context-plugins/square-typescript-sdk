import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CatalogQueryRange = {
  attributeName: string;
  attributeMinValue?: number | null;
  attributeMaxValue?: number | null;
};

export const catalogQueryRangeSchema: Schema<CatalogQueryRange> = s.object<CatalogQueryRange>({
  attributeName: s.string(),
  attributeMinValue: s.optionalNullable(s.number()),
  attributeMaxValue: s.optionalNullable(s.number()),
  _keysMap: {
    attributeName: "attribute_name",
    attributeMinValue: "attribute_min_value",
    attributeMaxValue: "attribute_max_value",
  },
});
