import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  bulkUpsertMerchantCustomAttributesResponseMerchantCustomAttributeUpsertResponseSchema,
  type BulkUpsertMerchantCustomAttributesResponseMerchantCustomAttributeUpsertResponse,
} from "./bulk-upsert-merchant-custom-attributes-response-merchant-custom-attribute-upsert-response.js";
import { errorSchema, type Error } from "./error.js";

/**
 * Represents a
 * [BulkUpsertMerchantCustomAttributes](api-endpoint:MerchantCustomAttributes-BulkUpsertMerchantCustomAttributes)
 * response, which contains a map of responses that each corresponds to an individual upsert
 * request.
 */
export type BulkUpsertMerchantCustomAttributesResponse = {
  /**
   * A map of responses that correspond to individual upsert requests. Each response has the same ID
   * as the corresponding request and contains either a `merchant_id` and `custom_attribute` or an
   * `errors` field.
   */
  values?: Record<string, BulkUpsertMerchantCustomAttributesResponseMerchantCustomAttributeUpsertResponse>;
  /** Any errors that occurred during the request. */
  errors?: Error[];
};

export const bulkUpsertMerchantCustomAttributesResponseSchema: Schema<BulkUpsertMerchantCustomAttributesResponse> =
  s.object<BulkUpsertMerchantCustomAttributesResponse>({
    values: s.optional(
      s.record(
        s.string(),
        s.lazy(() => bulkUpsertMerchantCustomAttributesResponseMerchantCustomAttributeUpsertResponseSchema),
      ),
    ),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
  });
