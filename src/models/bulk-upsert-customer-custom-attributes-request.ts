import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  bulkUpsertCustomerCustomAttributesRequestCustomerCustomAttributeUpsertRequestSchema,
  type BulkUpsertCustomerCustomAttributesRequestCustomerCustomAttributeUpsertRequest,
} from "./bulk-upsert-customer-custom-attributes-request-customer-custom-attribute-upsert-request.js";

/**
 * Represents a
 * [BulkUpsertCustomerCustomAttributes](api-endpoint:CustomerCustomAttributes-BulkUpsertCustomerCustomAttributes)
 * request.
 */
export type BulkUpsertCustomerCustomAttributesRequest = {
  /**
   * A map containing 1 to 25 individual upsert requests. For each request, provide an arbitrary ID
   * that is unique for this `BulkUpsertCustomerCustomAttributes` request and the information needed
   * to create or update a custom attribute.
   */
  values: Record<string, BulkUpsertCustomerCustomAttributesRequestCustomerCustomAttributeUpsertRequest>;
};

export const bulkUpsertCustomerCustomAttributesRequestSchema: Schema<BulkUpsertCustomerCustomAttributesRequest> =
  s.object<BulkUpsertCustomerCustomAttributesRequest>({
    values: s.record(
      s.string(),
      s.lazy(() => bulkUpsertCustomerCustomAttributesRequestCustomerCustomAttributeUpsertRequestSchema),
    ),
  });
