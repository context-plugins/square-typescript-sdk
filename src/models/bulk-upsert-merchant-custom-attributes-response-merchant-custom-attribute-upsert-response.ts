import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customAttributeSchema, type CustomAttribute } from "./custom-attribute.js";
import { errorSchema, type Error } from "./error.js";

/**
 * Represents a response for an individual upsert request in a
 * [BulkUpsertMerchantCustomAttributes](api-endpoint:MerchantCustomAttributes-BulkUpsertMerchantCustomAttributes)
 * operation.
 */
export type BulkUpsertMerchantCustomAttributesResponseMerchantCustomAttributeUpsertResponse = {
  /** The ID of the merchant associated with the custom attribute. */
  merchantId?: string;
  /**
   * A custom attribute value. Each custom attribute value has a corresponding
   * `CustomAttributeDefinition` object.
   */
  customAttribute?: CustomAttribute;
  /** Any errors that occurred while processing the individual request. */
  errors?: Error[];
};

export const bulkUpsertMerchantCustomAttributesResponseMerchantCustomAttributeUpsertResponseSchema: Schema<BulkUpsertMerchantCustomAttributesResponseMerchantCustomAttributeUpsertResponse> =
  s.object<BulkUpsertMerchantCustomAttributesResponseMerchantCustomAttributeUpsertResponse>({
    merchantId: s.optional(s.string()),
    customAttribute: s.optional(s.lazy(() => customAttributeSchema)),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    _keysMap: {
      merchantId: "merchant_id",
      customAttribute: "custom_attribute",
    },
  });
