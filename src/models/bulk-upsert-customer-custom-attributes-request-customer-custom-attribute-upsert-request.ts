import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customAttributeSchema, type CustomAttribute } from "./custom-attribute.js";

/**
 * Represents an individual upsert request in a
 * [BulkUpsertCustomerCustomAttributes](api-endpoint:CustomerCustomAttributes-BulkUpsertCustomerCustomAttributes)
 * request. An individual request contains a customer ID, the custom attribute to create or update,
 * and an optional idempotency key.
 */
export type BulkUpsertCustomerCustomAttributesRequestCustomerCustomAttributeUpsertRequest = {
  /** The ID of the target [customer profile](entity:Customer). */
  customerId: string;
  /**
   * A custom attribute value. Each custom attribute value has a corresponding
   * `CustomAttributeDefinition` object.
   */
  customAttribute: CustomAttribute;
  /**
   * A unique identifier for this individual upsert request, used to ensure idempotency. For more
   * information, see
   * [Idempotency](https://developer.squareup.com/docs/build-basics/common-api-patterns/idempotency).
   */
  idempotencyKey?: string | null;
};

export const bulkUpsertCustomerCustomAttributesRequestCustomerCustomAttributeUpsertRequestSchema: Schema<BulkUpsertCustomerCustomAttributesRequestCustomerCustomAttributeUpsertRequest> =
  s.object<BulkUpsertCustomerCustomAttributesRequestCustomerCustomAttributeUpsertRequest>({
    customerId: s.string(),
    customAttribute: customAttributeSchema,
    idempotencyKey: s.optionalNullable(s.string()),
    _keysMap: {
      customerId: "customer_id",
      customAttribute: "custom_attribute",
      idempotencyKey: "idempotency_key",
    },
  });
