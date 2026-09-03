import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  bulkUpsertMerchantCustomAttributesResponseMerchantCustomAttributeUpsertResponseSchema,
  type BulkUpsertMerchantCustomAttributesResponseMerchantCustomAttributeUpsertResponse,
} from "./bulk-upsert-merchant-custom-attributes-response-merchant-custom-attribute-upsert-response.js";
import { errorSchema, type Error } from "./error.js";

export type BulkUpsertMerchantCustomAttributesResponse = {
  values?: Record<string, BulkUpsertMerchantCustomAttributesResponseMerchantCustomAttributeUpsertResponse>;
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
