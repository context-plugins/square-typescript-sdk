import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  bulkDeleteMerchantCustomAttributesRequestMerchantCustomAttributeDeleteRequestSchema,
  type BulkDeleteMerchantCustomAttributesRequestMerchantCustomAttributeDeleteRequest,
} from "./bulk-delete-merchant-custom-attributes-request-merchant-custom-attribute-delete-request.js";

/**
 * Represents a
 * [BulkDeleteMerchantCustomAttributes](api-endpoint:MerchantCustomAttributes-BulkDeleteMerchantCustomAttributes)
 * request.
 */
export type BulkDeleteMerchantCustomAttributesRequest = {
  /**
   * The data used to update the `CustomAttribute` objects. The keys must be unique and are used to
   * map to the corresponding response.
   */
  values: Record<string, BulkDeleteMerchantCustomAttributesRequestMerchantCustomAttributeDeleteRequest>;
};

export const bulkDeleteMerchantCustomAttributesRequestSchema: Schema<BulkDeleteMerchantCustomAttributesRequest> =
  s.object<BulkDeleteMerchantCustomAttributesRequest>({
    values: s.record(
      s.string(),
      s.lazy(() => bulkDeleteMerchantCustomAttributesRequestMerchantCustomAttributeDeleteRequestSchema),
    ),
  });
