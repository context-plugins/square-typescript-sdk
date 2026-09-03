import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CatalogQuerySet = {
  attributeName: string;
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
