import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  bulkUpsertCustomerCustomAttributesRequestCustomerCustomAttributeUpsertRequestSchema,
  type BulkUpsertCustomerCustomAttributesRequestCustomerCustomAttributeUpsertRequest,
} from "./bulk-upsert-customer-custom-attributes-request-customer-custom-attribute-upsert-request.js";

export type BulkUpsertCustomerCustomAttributesRequest = {
  values: Record<string, BulkUpsertCustomerCustomAttributesRequestCustomerCustomAttributeUpsertRequest>;
};

export const bulkUpsertCustomerCustomAttributesRequestSchema: Schema<BulkUpsertCustomerCustomAttributesRequest> =
  s.object<BulkUpsertCustomerCustomAttributesRequest>({
    values: s.record(
      s.string(),
      s.lazy(() => bulkUpsertCustomerCustomAttributesRequestCustomerCustomAttributeUpsertRequestSchema),
    ),
  });
