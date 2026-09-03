import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CatalogProductSet = {
  name?: string | null;
  productIdsAny?: string[] | null;
  productIdsAll?: string[] | null;
  quantityExact?: number | null;
  quantityMin?: number | null;
  quantityMax?: number | null;
  allProducts?: boolean | null;
};

export const catalogProductSetSchema: Schema<CatalogProductSet> = s.object<CatalogProductSet>({
  name: s.optionalNullable(s.string()),
  productIdsAny: s.optionalNullable(s.array(s.string())),
  productIdsAll: s.optionalNullable(s.array(s.string())),
  quantityExact: s.optionalNullable(s.number()),
  quantityMin: s.optionalNullable(s.number()),
  quantityMax: s.optionalNullable(s.number()),
  allProducts: s.optionalNullable(s.boolean()),
  _keysMap: {
    productIdsAny: "product_ids_any",
    productIdsAll: "product_ids_all",
    quantityExact: "quantity_exact",
    quantityMin: "quantity_min",
    quantityMax: "quantity_max",
    allProducts: "all_products",
  },
});
