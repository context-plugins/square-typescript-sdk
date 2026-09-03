import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  catalogCustomAttributeDefinitionTypeSchema,
  type CatalogCustomAttributeDefinitionType,
} from "./catalog-custom-attribute-definition-type.js";

export type CatalogCustomAttributeValue = {
  name?: string | null;
  stringValue?: string | null;
  customAttributeDefinitionId?: string;
  type?: CatalogCustomAttributeDefinitionType;
  numberValue?: string | null;
  booleanValue?: boolean | null;
  selectionUidValues?: string[] | null;
  key?: string;
};

export const catalogCustomAttributeValueSchema: Schema<CatalogCustomAttributeValue> =
  s.object<CatalogCustomAttributeValue>({
    name: s.optionalNullable(s.string()),
    stringValue: s.optionalNullable(s.string()),
    customAttributeDefinitionId: s.optional(s.string()),
    type: s.optional(s.lazy(() => catalogCustomAttributeDefinitionTypeSchema)),
    numberValue: s.optionalNullable(s.string()),
    booleanValue: s.optionalNullable(s.boolean()),
    selectionUidValues: s.optionalNullable(s.array(s.string())),
    key: s.optional(s.string()),
    _keysMap: {
      stringValue: "string_value",
      customAttributeDefinitionId: "custom_attribute_definition_id",
      numberValue: "number_value",
      booleanValue: "boolean_value",
      selectionUidValues: "selection_uid_values",
    },
  });
