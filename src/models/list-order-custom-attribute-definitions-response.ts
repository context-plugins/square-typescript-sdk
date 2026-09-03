import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  customAttributeDefinitionSchema,
  type CustomAttributeDefinition,
} from "./custom-attribute-definition.js";
import { errorSchema, type Error } from "./error.js";

export type ListOrderCustomAttributeDefinitionsResponse = {
  customAttributeDefinitions: CustomAttributeDefinition[];
  cursor?: string;
  errors?: Error[];
};

export const listOrderCustomAttributeDefinitionsResponseSchema: Schema<ListOrderCustomAttributeDefinitionsResponse> =
  s.object<ListOrderCustomAttributeDefinitionsResponse>({
    customAttributeDefinitions: s.array(s.lazy(() => customAttributeDefinitionSchema)),
    cursor: s.optional(s.string()),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    _keysMap: {
      customAttributeDefinitions: "custom_attribute_definitions",
    },
  });
