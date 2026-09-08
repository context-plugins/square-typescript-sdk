import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The query filter to return the items containing the specified tax IDs. */
export type CatalogQueryItemsForTax = {
  /** A set of `CatalogTax` IDs to be used to find associated `CatalogItem`s. */
  taxIds: string[];
};

export const catalogQueryItemsForTaxSchema: Schema<CatalogQueryItemsForTax> =
  s.object<CatalogQueryItemsForTax>({
    taxIds: s.array(s.string()),
    _keysMap: {
      taxIds: "tax_ids",
    },
  });
