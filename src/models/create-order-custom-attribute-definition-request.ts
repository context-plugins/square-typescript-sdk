import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  customAttributeDefinitionSchema,
  type CustomAttributeDefinition,
} from "./custom-attribute-definition.js";

/** Represents a create request for an order custom attribute definition. */
export type CreateOrderCustomAttributeDefinitionRequest = {
  /**
   * Represents a definition for custom attribute values. A custom attribute definition specifies
   * the key, visibility, schema, and other properties for a custom attribute.
   */
  customAttributeDefinition: CustomAttributeDefinition;
  /**
   * A unique identifier for this request, used to ensure idempotency. For more information, see
   * [Idempotency](https://developer.squareup.com/docs/build-basics/common-api-patterns/idempotency).
   */
  idempotencyKey?: string;
};

export const createOrderCustomAttributeDefinitionRequestSchema: Schema<CreateOrderCustomAttributeDefinitionRequest> =
  s.object<CreateOrderCustomAttributeDefinitionRequest>({
    customAttributeDefinition: customAttributeDefinitionSchema,
    idempotencyKey: s.optional(s.string()),
    _keysMap: {
      customAttributeDefinition: "custom_attribute_definition",
      idempotencyKey: "idempotency_key",
    },
  });
