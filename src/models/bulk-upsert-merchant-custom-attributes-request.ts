import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  bulkUpsertMerchantCustomAttributesRequestMerchantCustomAttributeUpsertRequestSchema,
  type BulkUpsertMerchantCustomAttributesRequestMerchantCustomAttributeUpsertRequest,
} from "./bulk-upsert-merchant-custom-attributes-request-merchant-custom-attribute-upsert-request.js";

export type BulkUpsertMerchantCustomAttributesRequest = {
  values: Record<string, BulkUpsertMerchantCustomAttributesRequestMerchantCustomAttributeUpsertRequest>;
};

export const bulkUpsertMerchantCustomAttributesRequestSchema: Schema<BulkUpsertMerchantCustomAttributesRequest> =
  s.object<BulkUpsertMerchantCustomAttributesRequest>({
    values: s.record(
      s.string(),
      s.lazy(() => bulkUpsertMerchantCustomAttributesRequestMerchantCustomAttributeUpsertRequestSchema),
    ),
  });
