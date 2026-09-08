import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  bulkUpsertCustomerCustomAttributesResponseCustomerCustomAttributeUpsertResponseSchema,
  type BulkUpsertCustomerCustomAttributesResponseCustomerCustomAttributeUpsertResponse,
} from "./bulk-upsert-customer-custom-attributes-response-customer-custom-attribute-upsert-response.js";
import { errorSchema, type Error } from "./error.js";

/**
 * Represents a
 * [BulkUpsertCustomerCustomAttributes](api-endpoint:CustomerCustomAttributes-BulkUpsertCustomerCustomAttributes)
 * response, which contains a map of responses that each corresponds to an individual upsert
 * request.
 */
export type BulkUpsertCustomerCustomAttributesResponse = {
  /**
   * A map of responses that correspond to individual upsert requests. Each response has the same ID
   * as the corresponding request and contains either a `customer_id` and `custom_attribute` or an
   * `errors` field.
   */
  values?: Record<string, BulkUpsertCustomerCustomAttributesResponseCustomerCustomAttributeUpsertResponse>;
  /** Any errors that occurred during the request. */
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
