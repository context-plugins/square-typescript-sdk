import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

/**
 * Represents an individual delete response in a
 * [BulkDeleteMerchantCustomAttributes](api-endpoint:MerchantCustomAttributes-BulkDeleteMerchantCustomAttributes)
 * request.
 */
export type BulkDeleteMerchantCustomAttributesResponseMerchantCustomAttributeDeleteResponse = {
  /**
   * Errors that occurred while processing the individual MerchantCustomAttributeDeleteRequest
   * request
   */
  errors?: Error[];
};

export const bulkDeleteMerchantCustomAttributesResponseMerchantCustomAttributeDeleteResponseSchema: Schema<BulkDeleteMerchantCustomAttributesResponseMerchantCustomAttributeDeleteResponse> =
  s.object<BulkDeleteMerchantCustomAttributesResponseMerchantCustomAttributeDeleteResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
  });
