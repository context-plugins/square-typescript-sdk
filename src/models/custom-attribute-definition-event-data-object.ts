import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  customAttributeDefinitionSchema,
  type CustomAttributeDefinition,
} from "./custom-attribute-definition.js";

export type CustomAttributeDefinitionEventDataObject = {
  customAttributeDefinition?: CustomAttributeDefinition;
};

export const customAttributeDefinitionEventDataObjectSchema: Schema<CustomAttributeDefinitionEventDataObject> =
  s.object<CustomAttributeDefinitionEventDataObject>({
    customAttributeDefinition: s.optional(s.lazy(() => customAttributeDefinitionSchema)),
    _keysMap: {
      customAttributeDefinition: "custom_attribute_definition",
    },
  });
