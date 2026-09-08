import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The query filter to return the search result(s) by exact match of the specified `attribute_name`
 * and any of the `attribute_values`.
 */
export type CatalogQuerySet = {
  /** The name of the attribute to be searched. Matching of the attribute name is exact. */
  attributeName: string;
  /**
   * The desired values of the search attribute. Matching of the attribute values is exact and case
   * insensitive. A maximum of 250 values may be searched in a request.
   */
  attributeValues: string[];
};

export const catalogQuerySetSchema: Schema<CatalogQuerySet> = s.object<CatalogQuerySet>({
  attributeName: s.string(),
  attributeValues: s.array(s.string()),
  _keysMap: {
    attributeName: "attribute_name",
    attributeValues: "attribute_values",
  },
});
