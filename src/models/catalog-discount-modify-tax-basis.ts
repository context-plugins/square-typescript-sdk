import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CatalogDiscountModifyTaxBasis = {
  /** Application of the discount will modify the tax basis. */
  ModifyTaxBasis: "MODIFY_TAX_BASIS",
  /** Application of the discount will not modify the tax basis. */
  DoNotModifyTaxBasis: "DO_NOT_MODIFY_TAX_BASIS",
} as const;
export type CatalogDiscountModifyTaxBasis =
  | (typeof CatalogDiscountModifyTaxBasis)[keyof typeof CatalogDiscountModifyTaxBasis]
  | (string & {});

export const catalogDiscountModifyTaxBasisSchema: EnumSchema<CatalogDiscountModifyTaxBasis> =
  s.enumOf<CatalogDiscountModifyTaxBasis>(CatalogDiscountModifyTaxBasis);
