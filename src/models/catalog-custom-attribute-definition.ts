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

/**
 * Contains information defining a custom attribute. Custom attributes are intended to store
 * additional information about a catalog object or to associate a catalog object with an entity in
 * another system. Do not use custom attributes to store any sensitive information (personally
 * identifiable information, card details, etc.). [Read more about custom
 * attributes](https://developer.squareup.com/docs/catalog-api/add-custom-attributes)
 */
export type CatalogCustomAttributeDefinition = {
  /** Defines the possible types for a custom attribute. */
  type: CatalogCustomAttributeDefinitionType;
  /**
   * The name of this definition for API and seller-facing UI purposes. The name must be unique
   * within the (merchant, application) pair. Required. May not be empty and may not exceed 255
   * characters. Can be modified after creation.
   */
  name: string;
  /**
   * Seller-oriented description of the meaning of this Custom Attribute, any constraints that the
   * seller should observe, etc. May be displayed as a tooltip in Square UIs.
   */
  description?: string | null;
  /** Represents information about the application used to generate a change. */
  sourceApplication?: SourceApplication;
  /**
   * The set of `CatalogObject` types that this custom atttribute may be applied to. Currently, only
   * `ITEM`, `ITEM_VARIATION`, `MODIFIER`, `MODIFIER_LIST`, and `CATEGORY` are allowed. At least one
   * type must be included. See [CatalogObjectType](#type-catalogobjecttype) for possible values
   */
  allowedObjectTypes: CatalogObjectType[];
  /**
   * Defines the visibility of a custom attribute to sellers in Square client applications, Square
   * APIs or in Square UIs (including Square Point of Sale applications and Square Dashboard).
   */
  sellerVisibility?: CatalogCustomAttributeDefinitionSellerVisibility;
  /**
   * Defines the visibility of a custom attribute to applications other than their creating
   * application.
   */
  appVisibility?: CatalogCustomAttributeDefinitionAppVisibility;
  /** Configuration associated with Custom Attribute Definitions of type `STRING`. */
  stringConfig?: CatalogCustomAttributeDefinitionStringConfig;
  numberConfig?: CatalogCustomAttributeDefinitionNumberConfig;
  /** Configuration associated with `SELECTION`-type custom attribute definitions. */
  selectionConfig?: CatalogCustomAttributeDefinitionSelectionConfig;
  /**
   * The number of custom attributes that reference this custom attribute definition. Set by the
   * server in response to a ListCatalog request with `include_counts` set to `true`. If the actual
   * count is greater than 100, `custom_attribute_usage_count` will be set to `100`.
   */
  customAttributeUsageCount?: number;
  /**
   * The name of the desired custom attribute key that can be used to access the custom attribute
   * value on catalog objects. Cannot be modified after the custom attribute definition has been
   * created. Must be between 1 and 60 characters, and may only contain the characters
   * `[a-zA-Z0-9_-]`.
   */
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
