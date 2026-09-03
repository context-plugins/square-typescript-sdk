import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  bulkUpsertCustomerCustomAttributesResponseCustomerCustomAttributeUpsertResponseSchema,
  type BulkUpsertCustomerCustomAttributesResponseCustomerCustomAttributeUpsertResponse,
} from "./bulk-upsert-customer-custom-attributes-response-customer-custom-attribute-upsert-response.js";
import { errorSchema, type Error } from "./error.js";

export type BulkUpsertCustomerCustomAttributesResponse = {
  values?: Record<string, BulkUpsertCustomerCustomAttributesResponseCustomerCustomAttributeUpsertResponse>;
  errors?: Error[];
};

export const bulkUpsertCustomerCustomAttributesResponseSchema: Schema<BulkUpsertCustomerCustomAttributesResponse> =
  s.object<BulkUpsertCustomerCustomAttributesResponse>({
    values: s.optional(
      s.record(
        s.string(),
        s.lazy(() => bulkUpsertCustomerCustomAttributesResponseCustomerCustomAttributeUpsertResponseSchema),
      ),
    ),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
  });
