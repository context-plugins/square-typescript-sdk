import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Defines the possible types for a custom attribute. */
export const CatalogCustomAttributeDefinitionType = {
  /** A free-form string containing up to 255 characters. */
  String: "STRING",
  /** A `true` or `false` value. */
  Boolean: "BOOLEAN",
  /**
   * A decimal string representation of a number. Can support up to 5 digits after the decimal
   * point.
   */
  Number: "NUMBER",
  /** One or more choices from `allowed_selections`. */
  Selection: "SELECTION",
} as const;
export type CatalogCustomAttributeDefinitionType =
  | (typeof CatalogCustomAttributeDefinitionType)[keyof typeof CatalogCustomAttributeDefinitionType]
  | (string & {});

export const catalogCustomAttributeDefinitionTypeSchema: EnumSchema<CatalogCustomAttributeDefinitionType> =
  s.enumOf<CatalogCustomAttributeDefinitionType>(CatalogCustomAttributeDefinitionType);
