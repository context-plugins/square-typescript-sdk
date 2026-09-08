import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customAttributeSchema, type CustomAttribute } from "./custom-attribute.js";
import { errorSchema, type Error } from "./error.js";

/**
 * Represents a response for an individual upsert request in a
 * [BulkUpsertCustomerCustomAttributes](api-endpoint:CustomerCustomAttributes-BulkUpsertCustomerCustomAttributes)
 * operation.
 */
export type BulkUpsertCustomerCustomAttributesResponseCustomerCustomAttributeUpsertResponse = {
  /** The ID of the customer profile associated with the custom attribute. */
  customerId?: string;
  /**
   * A custom attribute value. Each custom attribute value has a corresponding
   * `CustomAttributeDefinition` object.
   */
  customAttribute?: CustomAttribute;
  /** Any errors that occurred while processing the individual request. */
  errors?: Error[];
};

export const bulkUpsertCustomerCustomAttributesResponseCustomerCustomAttributeUpsertResponseSchema: Schema<BulkUpsertCustomerCustomAttributesResponseCustomerCustomAttributeUpsertResponse> =
  s.object<BulkUpsertCustomerCustomAttributesResponseCustomerCustomAttributeUpsertResponse>({
    customerId: s.optional(s.string()),
    customAttribute: s.optional(s.lazy(() => customAttributeSchema)),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    _keysMap: {
      customerId: "customer_id",
      customAttribute: "custom_attribute",
    },
  });
