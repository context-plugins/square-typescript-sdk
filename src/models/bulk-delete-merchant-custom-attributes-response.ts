import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  bulkDeleteMerchantCustomAttributesResponseMerchantCustomAttributeDeleteResponseSchema,
  type BulkDeleteMerchantCustomAttributesResponseMerchantCustomAttributeDeleteResponse,
} from "./bulk-delete-merchant-custom-attributes-response-merchant-custom-attribute-delete-response.js";
import { errorSchema, type Error } from "./error.js";

export type BulkDeleteMerchantCustomAttributesResponse = {
  values: Record<string, BulkDeleteMerchantCustomAttributesResponseMerchantCustomAttributeDeleteResponse>;
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
