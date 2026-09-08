import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customAttributeSchema, type CustomAttribute } from "./custom-attribute.js";

/**
 * Represents an
 * [UpsertMerchantCustomAttribute](api-endpoint:MerchantCustomAttributes-UpsertMerchantCustomAttribute)
 * request.
 */
export type UpsertMerchantCustomAttributeRequest = {
  /**
   * A custom attribute value. Each custom attribute value has a corresponding
   * `CustomAttributeDefinition` object.
   */
  customAttribute: CustomAttribute;
  /**
   * A unique identifier for this request, used to ensure idempotency. For more information, see
   * [Idempotency](https://developer.squareup.com/docs/build-basics/common-api-patterns/idempotency).
   */
  idempotencyKey?: string | null;
};

export const upsertMerchantCustomAttributeRequestSchema: Schema<UpsertMerchantCustomAttributeRequest> =
  s.object<UpsertMerchantCustomAttributeRequest>({
    customAttribute: customAttributeSchema,
    idempotencyKey: s.optionalNullable(s.string()),
    _keysMap: {
      customAttribute: "custom_attribute",
      idempotencyKey: "idempotency_key",
    },
  });
