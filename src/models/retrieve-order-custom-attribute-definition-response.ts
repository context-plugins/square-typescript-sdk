import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  customAttributeDefinitionSchema,
  type CustomAttributeDefinition,
} from "./custom-attribute-definition.js";
import { errorSchema, type Error } from "./error.js";

export type RetrieveOrderCustomAttributeDefinitionResponse = {
  customAttributeDefinition?: CustomAttributeDefinition;
  errors?: Error[];
};

export const retrieveOrderCustomAttributeDefinitionResponseSchema: Schema<RetrieveOrderCustomAttributeDefinitionResponse> =
  s.object<RetrieveOrderCustomAttributeDefinitionResponse>({
    customAttributeDefinition: s.optional(s.lazy(() => customAttributeDefinitionSchema)),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    _keysMap: {
      customAttributeDefinition: "custom_attribute_definition",
    },
  });
