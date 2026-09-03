import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

export type BulkDeleteMerchantCustomAttributesResponseMerchantCustomAttributeDeleteResponse = {
  errors?: Error[];
};

export const bulkDeleteMerchantCustomAttributesResponseMerchantCustomAttributeDeleteResponseSchema: Schema<BulkDeleteMerchantCustomAttributesResponseMerchantCustomAttributeDeleteResponse> =
  s.object<BulkDeleteMerchantCustomAttributesResponseMerchantCustomAttributeDeleteResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
  });
