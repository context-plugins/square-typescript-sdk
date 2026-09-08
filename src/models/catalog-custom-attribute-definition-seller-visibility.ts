import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Defines the visibility of a custom attribute to sellers in Square client applications, Square
 * APIs or in Square UIs (including Square Point of Sale applications and Square Dashboard).
 */
export const CatalogCustomAttributeDefinitionSellerVisibility = {
  /** Sellers cannot read this custom attribute in Square client applications or Square APIs. */
  SellerVisibilityHidden: "SELLER_VISIBILITY_HIDDEN",
  /**
   * Sellers can read and write this custom attribute value in catalog objects, but cannot edit the
   * custom attribute definition.
   */
  SellerVisibilityReadWriteValues: "SELLER_VISIBILITY_READ_WRITE_VALUES",
} as const;
export type CatalogCustomAttributeDefinitionSellerVisibility =
  | (typeof CatalogCustomAttributeDefinitionSellerVisibility)[keyof typeof CatalogCustomAttributeDefinitionSellerVisibility]
  | (string & {});

export const catalogCustomAttributeDefinitionSellerVisibilitySchema: EnumSchema<CatalogCustomAttributeDefinitionSellerVisibility> =
  s.enumOf<CatalogCustomAttributeDefinitionSellerVisibility>(
    CatalogCustomAttributeDefinitionSellerVisibility,
  );
