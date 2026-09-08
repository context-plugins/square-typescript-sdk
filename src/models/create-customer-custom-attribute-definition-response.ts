import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  customAttributeDefinitionSchema,
  type CustomAttributeDefinition,
} from "./custom-attribute-definition.js";
import { errorSchema, type Error } from "./error.js";

/**
 * Represents a
 * [CreateCustomerCustomAttributeDefinition](api-endpoint:CustomerCustomAttributes-CreateCustomerCustomAttributeDefinition)
 * response. Either `custom_attribute_definition` or `errors` is present in the response.
 */
export type CreateCustomerCustomAttributeDefinitionResponse = {
  /**
   * Represents a definition for custom attribute values. A custom attribute definition specifies
   * the key, visibility, schema, and other properties for a custom attribute.
   */
  customAttributeDefinition?: CustomAttributeDefinition;
  /** Any errors that occurred during the request. */
  errors?: Error[];
};

export const createCustomerCustomAttributeDefinitionResponseSchema: Schema<CreateCustomerCustomAttributeDefinitionResponse> =
  s.object<CreateCustomerCustomAttributeDefinitionResponse>({
    customAttributeDefinition: s.optional(s.lazy(() => customAttributeDefinitionSchema)),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    _keysMap: {
      customAttributeDefinition: "custom_attribute_definition",
    },
  });
