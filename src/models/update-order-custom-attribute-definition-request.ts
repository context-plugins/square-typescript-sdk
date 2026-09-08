import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  customAttributeDefinitionSchema,
  type CustomAttributeDefinition,
} from "./custom-attribute-definition.js";

/** Represents an update request for an order custom attribute definition. */
export type UpdateOrderCustomAttributeDefinitionRequest = {
  /**
   * Represents a definition for custom attribute values. A custom attribute definition specifies
   * the key, visibility, schema, and other properties for a custom attribute.
   */
  customAttributeDefinition: CustomAttributeDefinition;
  /**
   * A unique identifier for this request, used to ensure idempotency. For more information, see
   * [Idempotency](https://developer.squareup.com/docs/build-basics/common-api-patterns/idempotency).
   */
  idempotencyKey?: string | null;
};

export const updateOrderCustomAttributeDefinitionRequestSchema: Schema<UpdateOrderCustomAttributeDefinitionRequest> =
  s.object<UpdateOrderCustomAttributeDefinitionRequest>({
    customAttributeDefinition: customAttributeDefinitionSchema,
    idempotencyKey: s.optionalNullable(s.string()),
    _keysMap: {
      customAttributeDefinition: "custom_attribute_definition",
      idempotencyKey: "idempotency_key",
    },
  });
