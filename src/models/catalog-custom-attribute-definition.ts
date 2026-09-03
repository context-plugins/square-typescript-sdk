import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  catalogCustomAttributeDefinitionAppVisibilitySchema,
  type CatalogCustomAttributeDefinitionAppVisibility,
} from "./catalog-custom-attribute-definition-app-visibility.js";
import {
  catalogCustomAttributeDefinitionNumberConfigSchema,
  type CatalogCustomAttributeDefinitionNumberConfig,
} from "./catalog-custom-attribute-definition-number-config.js";
import {
  catalogCustomAttributeDefinitionSelectionConfigSchema,
  type CatalogCustomAttributeDefinitionSelectionConfig,
} from "./catalog-custom-attribute-definition-selection-config.js";
import {
  catalogCustomAttributeDefinitionSellerVisibilitySchema,
  type CatalogCustomAttributeDefinitionSellerVisibility,
} from "./catalog-custom-attribute-definition-seller-visibility.js";
import {
  catalogCustomAttributeDefinitionStringConfigSchema,
  type CatalogCustomAttributeDefinitionStringConfig,
} from "./catalog-custom-attribute-definition-string-config.js";
import {
  catalogCustomAttributeDefinitionTypeSchema,
  type CatalogCustomAttributeDefinitionType,
} from "./catalog-custom-attribute-definition-type.js";
import { catalogObjectTypeSchema, type CatalogObjectType } from "./catalog-object-type.js";
import { sourceApplicationSchema, type SourceApplication } from "./source-application.js";

export type CatalogCustomAttributeDefinition = {
  type: CatalogCustomAttributeDefinitionType;
  name: string;
  description?: string | null;
  sourceApplication?: SourceApplication;
  allowedObjectTypes: CatalogObjectType[];
  sellerVisibility?: CatalogCustomAttributeDefinitionSellerVisibility;
  appVisibility?: CatalogCustomAttributeDefinitionAppVisibility;
  stringConfig?: CatalogCustomAttributeDefinitionStringConfig;
  numberConfig?: CatalogCustomAttributeDefinitionNumberConfig;
  selectionConfig?: CatalogCustomAttributeDefinitionSelectionConfig;
  customAttributeUsageCount?: number;
  key?: string | null;
};

export const catalogCustomAttributeDefinitionSchema: Schema<CatalogCustomAttributeDefinition> =
  s.object<CatalogCustomAttributeDefinition>({
    type: catalogCustomAttributeDefinitionTypeSchema,
    name: s.string(),
    description: s.optionalNullable(s.string()),
    sourceApplication: s.optional(s.lazy(() => sourceApplicationSchema)),
    allowedObjectTypes: s.array(s.lazy(() => catalogObjectTypeSchema)),
    sellerVisibility: s.optional(s.lazy(() => catalogCustomAttributeDefinitionSellerVisibilitySchema)),
    appVisibility: s.optional(s.lazy(() => catalogCustomAttributeDefinitionAppVisibilitySchema)),
    stringConfig: s.optional(s.lazy(() => catalogCustomAttributeDefinitionStringConfigSchema)),
    numberConfig: s.optional(s.lazy(() => catalogCustomAttributeDefinitionNumberConfigSchema)),
    selectionConfig: s.optional(s.lazy(() => catalogCustomAttributeDefinitionSelectionConfigSchema)),
    customAttributeUsageCount: s.optional(s.number()),
    key: s.optionalNullable(s.string()),
    _keysMap: {
      sourceApplication: "source_application",
      allowedObjectTypes: "allowed_object_types",
      sellerVisibility: "seller_visibility",
      appVisibility: "app_visibility",
      stringConfig: "string_config",
      numberConfig: "number_config",
      selectionConfig: "selection_config",
      customAttributeUsageCount: "custom_attribute_usage_count",
    },
  });
