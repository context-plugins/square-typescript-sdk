import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { updateCustomerResponseSchema, type UpdateCustomerResponse } from "./update-customer-response.js";

/**
 * Defines the fields included in the response body from the
 * [BulkUpdateCustomers](api-endpoint:Customers-BulkUpdateCustomers) endpoint.
 */
export type BulkUpdateCustomersResponse = {
  /**
   * A map of responses that correspond to individual update requests, represented by key-value
   * pairs.
   *
   * Each key is the customer ID that was specified for an update request and each value is the
   * corresponding response. If the request succeeds, the value is the updated customer profile. If
   * the request fails, the value contains any errors that occurred during the request.
   */
  responses?: Record<string, UpdateCustomerResponse>;
  /** Any top-level errors that prevented the bulk operation from running. */
  errors?: Error[];
};

export const bulkUpdateCustomersResponseSchema: Schema<BulkUpdateCustomersResponse> =
  s.object<BulkUpdateCustomersResponse>({
    responses: s.optional(
      s.record(
        s.string(),
        s.lazy(() => updateCustomerResponseSchema),
      ),
    ),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
  });
