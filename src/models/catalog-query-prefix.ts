import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CatalogQueryPrefix = {
  attributeName: string;
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
