import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CatalogCustomAttributeDefinitionType = {
  String: "STRING",
  Boolean: "BOOLEAN",
  Number: "NUMBER",
  Selection: "SELECTION",
} as const;
export type CatalogCustomAttributeDefinitionType =
  | (typeof CatalogCustomAttributeDefinitionType)[keyof typeof CatalogCustomAttributeDefinitionType]
  | (string & {});

export const catalogCustomAttributeDefinitionTypeSchema: EnumSchema<CatalogCustomAttributeDefinitionType> =
  s.enumOf<CatalogCustomAttributeDefinitionType>(CatalogCustomAttributeDefinitionType);
