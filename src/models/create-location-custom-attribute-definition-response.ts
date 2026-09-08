import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  customAttributeDefinitionSchema,
  type CustomAttributeDefinition,
} from "./custom-attribute-definition.js";
import { errorSchema, type Error } from "./error.js";

/**
 * Represents a
 * [CreateLocationCustomAttributeDefinition](api-endpoint:LocationCustomAttributes-CreateLocationCustomAttributeDefinition)
 * response. Either `custom_attribute_definition` or `errors` is present in the response.
 */
export type CreateLocationCustomAttributeDefinitionResponse = {
  /**
   * Represents a definition for custom attribute values. A custom attribute definition specifies
   * the key, visibility, schema, and other properties for a custom attribute.
   */
  customAttributeDefinition?: CustomAttributeDefinition;
  /** Any errors that occurred during the request. */
  errors?: Error[];
};

export const createLocationCustomAttributeDefinitionResponseSchema: Schema<CreateLocationCustomAttributeDefinitionResponse> =
  s.object<CreateLocationCustomAttributeDefinitionResponse>({
    customAttributeDefinition: s.optional(s.lazy(() => customAttributeDefinitionSchema)),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    _keysMap: {
      customAttributeDefinition: "custom_attribute_definition",
    },
  });
