import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CatalogCustomAttributeDefinitionSellerVisibility = {
  SellerVisibilityHidden: "SELLER_VISIBILITY_HIDDEN",
  SellerVisibilityReadWriteValues: "SELLER_VISIBILITY_READ_WRITE_VALUES",
} as const;
export type CatalogCustomAttributeDefinitionSellerVisibility =
  | (typeof CatalogCustomAttributeDefinitionSellerVisibility)[keyof typeof CatalogCustomAttributeDefinitionSellerVisibility]
  | (string & {});

export const catalogCustomAttributeDefinitionSellerVisibilitySchema: EnumSchema<CatalogCustomAttributeDefinitionSellerVisibility> =
  s.enumOf<CatalogCustomAttributeDefinitionSellerVisibility>(
    CatalogCustomAttributeDefinitionSellerVisibility,
  );
