import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { createCustomerResponseSchema, type CreateCustomerResponse } from "./create-customer-response.js";
import { errorSchema, type Error } from "./error.js";

/**
 * Defines the fields included in the response body from the
 * [BulkCreateCustomers](api-endpoint:Customers-BulkCreateCustomers) endpoint.
 */
export type BulkCreateCustomersResponse = {
  /**
   * A map of responses that correspond to individual create requests, represented by key-value
   * pairs.
   *
   * Each key is the idempotency key that was provided for a create request and each value is the
   * corresponding response. If the request succeeds, the value is the new customer profile. If the
   * request fails, the value contains any errors that occurred during the request.
   */
  responses?: Record<string, CreateCustomerResponse>;
  /** Any top-level errors that prevented the bulk operation from running. */
  errors?: Error[];
};

export const bulkCreateCustomersResponseSchema: Schema<BulkCreateCustomersResponse> =
  s.object<BulkCreateCustomersResponse>({
    responses: s.optional(
      s.record(
        s.string(),
        s.lazy(() => createCustomerResponseSchema),
      ),
    ),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
  });
