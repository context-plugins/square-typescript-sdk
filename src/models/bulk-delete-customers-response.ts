import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deleteCustomerResponseSchema, type DeleteCustomerResponse } from "./delete-customer-response.js";
import { errorSchema, type Error } from "./error.js";

/**
 * Defines the fields included in the response body from the
 * [BulkDeleteCustomers](api-endpoint:Customers-BulkDeleteCustomers) endpoint.
 */
export type BulkDeleteCustomersResponse = {
  /**
   * A map of responses that correspond to individual delete requests, represented by key-value
   * pairs.
   *
   * Each key is the customer ID that was specified for a delete request and each value is the
   * corresponding response. If the request succeeds, the value is an empty object (`{ }`). If the
   * request fails, the value contains any errors that occurred during the request.
   */
  responses?: Record<string, DeleteCustomerResponse>;
  /** Any top-level errors that prevented the bulk operation from running. */
  errors?: Error[];
};

export const bulkDeleteCustomersResponseSchema: Schema<BulkDeleteCustomersResponse> =
  s.object<BulkDeleteCustomersResponse>({
    responses: s.optional(
      s.record(
        s.string(),
        s.lazy(() => deleteCustomerResponseSchema),
      ),
    ),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
  });
