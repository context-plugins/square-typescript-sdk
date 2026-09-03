import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  bulkDeleteMerchantCustomAttributesRequestMerchantCustomAttributeDeleteRequestSchema,
  type BulkDeleteMerchantCustomAttributesRequestMerchantCustomAttributeDeleteRequest,
} from "./bulk-delete-merchant-custom-attributes-request-merchant-custom-attribute-delete-request.js";

export type BulkDeleteMerchantCustomAttributesRequest = {
  values: Record<string, BulkDeleteMerchantCustomAttributesRequestMerchantCustomAttributeDeleteRequest>;
};

export const bulkDeleteMerchantCustomAttributesRequestSchema: Schema<BulkDeleteMerchantCustomAttributesRequest> =
  s.object<BulkDeleteMerchantCustomAttributesRequest>({
    values: s.record(
      s.string(),
      s.lazy(() => bulkDeleteMerchantCustomAttributesRequestMerchantCustomAttributeDeleteRequestSchema),
    ),
  });
