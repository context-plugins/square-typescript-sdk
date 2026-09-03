import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CatalogQueryItemsForTax = {
  taxIds: string[];
};

export const catalogQueryItemsForTaxSchema: Schema<CatalogQueryItemsForTax> =
  s.object<CatalogQueryItemsForTax>({
    taxIds: s.array(s.string()),
    _keysMap: {
      taxIds: "tax_ids",
    },
  });
