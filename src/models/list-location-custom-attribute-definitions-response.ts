import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  customAttributeDefinitionSchema,
  type CustomAttributeDefinition,
} from "./custom-attribute-definition.js";
import { errorSchema, type Error } from "./error.js";

export type ListLocationCustomAttributeDefinitionsResponse = {
  customAttributeDefinitions?: CustomAttributeDefinition[];
  cursor?: string;
  errors?: Error[];
};

export const listLocationCustomAttributeDefinitionsResponseSchema: Schema<ListLocationCustomAttributeDefinitionsResponse> =
  s.object<ListLocationCustomAttributeDefinitionsResponse>({
    customAttributeDefinitions: s.optional(s.array(s.lazy(() => customAttributeDefinitionSchema))),
    cursor: s.optional(s.string()),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    _keysMap: {
      customAttributeDefinitions: "custom_attribute_definitions",
    },
  });
