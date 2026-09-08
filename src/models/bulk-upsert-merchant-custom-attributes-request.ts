import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  bulkUpsertMerchantCustomAttributesRequestMerchantCustomAttributeUpsertRequestSchema,
  type BulkUpsertMerchantCustomAttributesRequestMerchantCustomAttributeUpsertRequest,
} from "./bulk-upsert-merchant-custom-attributes-request-merchant-custom-attribute-upsert-request.js";

/**
 * Represents a
 * [BulkUpsertMerchantCustomAttributes](api-endpoint:MerchantCustomAttributes-BulkUpsertMerchantCustomAttributes)
 * request.
 */
export type BulkUpsertMerchantCustomAttributesRequest = {
  /**
   * A map containing 1 to 25 individual upsert requests. For each request, provide an arbitrary ID
   * that is unique for this `BulkUpsertMerchantCustomAttributes` request and the information needed
   * to create or update a custom attribute.
   */
  values: Record<string, BulkUpsertMerchantCustomAttributesRequestMerchantCustomAttributeUpsertRequest>;
};

export const bulkUpsertMerchantCustomAttributesRequestSchema: Schema<BulkUpsertMerchantCustomAttributesRequest> =
  s.object<BulkUpsertMerchantCustomAttributesRequest>({
    values: s.record(
      s.string(),
      s.lazy(() => bulkUpsertMerchantCustomAttributesRequestMerchantCustomAttributeUpsertRequestSchema),
    ),
  });
