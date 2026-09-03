import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BulkDeleteMerchantCustomAttributesRequestMerchantCustomAttributeDeleteRequest = {
  key?: string;
};

export const bulkDeleteMerchantCustomAttributesRequestMerchantCustomAttributeDeleteRequestSchema: Schema<BulkDeleteMerchantCustomAttributesRequestMerchantCustomAttributeDeleteRequest> =
  s.object<BulkDeleteMerchantCustomAttributesRequestMerchantCustomAttributeDeleteRequest>({
    key: s.optional(s.string()),
  });
