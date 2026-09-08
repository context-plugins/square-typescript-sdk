import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  customAttributeDefinitionSchema,
  type CustomAttributeDefinition,
} from "./custom-attribute-definition.js";
import { errorSchema, type Error } from "./error.js";

/** Represents a response from getting an order custom attribute definition. */
export type RetrieveOrderCustomAttributeDefinitionResponse = {
  /**
   * Represents a definition for custom attribute values. A custom attribute definition specifies
   * the key, visibility, schema, and other properties for a custom attribute.
   */
  customAttributeDefinition?: CustomAttributeDefinition;
  /** Any errors that occurred during the request. */
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
