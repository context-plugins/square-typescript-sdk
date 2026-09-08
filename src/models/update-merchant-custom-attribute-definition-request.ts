import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  customAttributeDefinitionSchema,
  type CustomAttributeDefinition,
} from "./custom-attribute-definition.js";

/**
 * Represents an
 * [UpdateMerchantCustomAttributeDefinition](api-endpoint:MerchantCustomAttributes-UpdateMerchantCustomAttributeDefinition)
 * request.
 */
export type UpdateMerchantCustomAttributeDefinitionRequest = {
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

export const updateMerchantCustomAttributeDefinitionRequestSchema: Schema<UpdateMerchantCustomAttributeDefinitionRequest> =
  s.object<UpdateMerchantCustomAttributeDefinitionRequest>({
    customAttributeDefinition: customAttributeDefinitionSchema,
    idempotencyKey: s.optionalNullable(s.string()),
    _keysMap: {
      customAttributeDefinition: "custom_attribute_definition",
      idempotencyKey: "idempotency_key",
    },
  });
