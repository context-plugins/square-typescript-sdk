import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  customAttributeDefinitionSchema,
  type CustomAttributeDefinition,
} from "./custom-attribute-definition.js";
import { errorSchema, type Error } from "./error.js";

export type RetrieveCustomerCustomAttributeDefinitionResponse = {
  customAttributeDefinition?: CustomAttributeDefinition;
  errors?: Error[];
};

export const retrieveCustomerCustomAttributeDefinitionResponseSchema: Schema<RetrieveCustomerCustomAttributeDefinitionResponse> =
  s.object<RetrieveCustomerCustomAttributeDefinitionResponse>({
    customAttributeDefinition: s.optional(s.lazy(() => customAttributeDefinitionSchema)),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    _keysMap: {
      customAttributeDefinition: "custom_attribute_definition",
    },
  });
