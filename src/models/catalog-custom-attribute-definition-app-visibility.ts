import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CatalogCustomAttributeDefinitionAppVisibility = {
  AppVisibilityHidden: "APP_VISIBILITY_HIDDEN",
  AppVisibilityReadOnly: "APP_VISIBILITY_READ_ONLY",
  AppVisibilityReadWriteValues: "APP_VISIBILITY_READ_WRITE_VALUES",
} as const;
export type CatalogCustomAttributeDefinitionAppVisibility =
  | (typeof CatalogCustomAttributeDefinitionAppVisibility)[keyof typeof CatalogCustomAttributeDefinitionAppVisibility]
  | (string & {});

export const catalogCustomAttributeDefinitionAppVisibilitySchema: EnumSchema<CatalogCustomAttributeDefinitionAppVisibility> =
  s.enumOf<CatalogCustomAttributeDefinitionAppVisibility>(CatalogCustomAttributeDefinitionAppVisibility);
