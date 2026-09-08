import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  bulkDeleteMerchantCustomAttributesResponseMerchantCustomAttributeDeleteResponseSchema,
  type BulkDeleteMerchantCustomAttributesResponseMerchantCustomAttributeDeleteResponse,
} from "./bulk-delete-merchant-custom-attributes-response-merchant-custom-attribute-delete-response.js";
import { errorSchema, type Error } from "./error.js";

/**
 * Represents a
 * [BulkDeleteMerchantCustomAttributes](api-endpoint:MerchantCustomAttributes-BulkDeleteMerchantCustomAttributes)
 * response, which contains a map of responses that each corresponds to an individual delete
 * request.
 */
export type BulkDeleteMerchantCustomAttributesResponse = {
  /**
   * A map of responses that correspond to individual delete requests. Each response has the same
   * key as the corresponding request.
   */
  values: Record<string, BulkDeleteMerchantCustomAttributesResponseMerchantCustomAttributeDeleteResponse>;
  /** Any errors that occurred during the request. */
  errors?: Error[];
};

export const bulkDeleteMerchantCustomAttributesResponseSchema: Schema<BulkDeleteMerchantCustomAttributesResponse> =
  s.object<BulkDeleteMerchantCustomAttributesResponse>({
    values: s.record(
      s.string(),
      s.lazy(() => bulkDeleteMerchantCustomAttributesResponseMerchantCustomAttributeDeleteResponseSchema),
    ),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
  });
