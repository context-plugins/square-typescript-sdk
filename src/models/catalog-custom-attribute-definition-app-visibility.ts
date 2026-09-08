import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Defines the visibility of a custom attribute to applications other than their creating
 * application.
 */
export const CatalogCustomAttributeDefinitionAppVisibility = {
  /** Other applications cannot read this custom attribute. */
  AppVisibilityHidden: "APP_VISIBILITY_HIDDEN",
  /** Other applications can read this custom attribute definition and values. */
  AppVisibilityReadOnly: "APP_VISIBILITY_READ_ONLY",
  /**
   * Other applications can read and write custom attribute values on objects. They can read but
   * cannot edit the custom attribute definition.
   */
  AppVisibilityReadWriteValues: "APP_VISIBILITY_READ_WRITE_VALUES",
} as const;
export type CatalogCustomAttributeDefinitionAppVisibility =
  | (typeof CatalogCustomAttributeDefinitionAppVisibility)[keyof typeof CatalogCustomAttributeDefinitionAppVisibility]
  | (string & {});

export const catalogCustomAttributeDefinitionAppVisibilitySchema: EnumSchema<CatalogCustomAttributeDefinitionAppVisibility> =
  s.enumOf<CatalogCustomAttributeDefinitionAppVisibility>(CatalogCustomAttributeDefinitionAppVisibility);
