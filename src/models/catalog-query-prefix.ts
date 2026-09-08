import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The query filter to return the search result whose named attribute values are prefixed by the
 * specified attribute value.
 */
export type CatalogQueryPrefix = {
  /** The name of the attribute to be searched. */
  attributeName: string;
  /** The desired prefix of the search attribute value. */
  attributePrefix: string;
};

export const catalogQueryPrefixSchema: Schema<CatalogQueryPrefix> = s.object<CatalogQueryPrefix>({
  attributeName: s.string(),
  attributePrefix: s.string(),
  _keysMap: {
    attributeName: "attribute_name",
    attributePrefix: "attribute_prefix",
  },
});
