import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CatalogQueryExact = {
  attributeName: string;
  attributeValue: string;
};

export const catalogQueryExactSchema: Schema<CatalogQueryExact> = s.object<CatalogQueryExact>({
  attributeName: s.string(),
  attributeValue: s.string(),
  _keysMap: {
    attributeName: "attribute_name",
    attributeValue: "attribute_value",
  },
});
