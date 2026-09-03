import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CatalogDiscountModifyTaxBasis = {
  ModifyTaxBasis: "MODIFY_TAX_BASIS",
  DoNotModifyTaxBasis: "DO_NOT_MODIFY_TAX_BASIS",
} as const;
export type CatalogDiscountModifyTaxBasis =
  | (typeof CatalogDiscountModifyTaxBasis)[keyof typeof CatalogDiscountModifyTaxBasis]
  | (string & {});

export const catalogDiscountModifyTaxBasisSchema: EnumSchema<CatalogDiscountModifyTaxBasis> =
  s.enumOf<CatalogDiscountModifyTaxBasis>(CatalogDiscountModifyTaxBasis);
