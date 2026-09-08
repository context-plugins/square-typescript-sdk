import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  customAttributeDefinitionSchema,
  type CustomAttributeDefinition,
} from "./custom-attribute-definition.js";

/**
 * Represents an
 * [UpdateBookingCustomAttributeDefinition](api-endpoint:BookingCustomAttributes-UpdateBookingCustomAttributeDefinition)
 * request.
 */
export type UpdateBookingCustomAttributeDefinitionRequest = {
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

export const updateBookingCustomAttributeDefinitionRequestSchema: Schema<UpdateBookingCustomAttributeDefinitionRequest> =
  s.object<UpdateBookingCustomAttributeDefinitionRequest>({
    customAttributeDefinition: customAttributeDefinitionSchema,
    idempotencyKey: s.optionalNullable(s.string()),
    _keysMap: {
      customAttributeDefinition: "custom_attribute_definition",
      idempotencyKey: "idempotency_key",
    },
  });
