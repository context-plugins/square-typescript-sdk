import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The query filter to return the search result whose named attribute values fall between the
 * specified range.
 */
export type CatalogQueryRange = {
  /** The name of the attribute to be searched. */
  attributeName: string;
  /** The desired minimum value for the search attribute (inclusive). */
  attributeMinValue?: number | null;
  /** The desired maximum value for the search attribute (inclusive). */
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
