import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import {
  retrieveCustomerResponseSchema,
  type RetrieveCustomerResponse,
} from "./retrieve-customer-response.js";

/**
 * Defines the fields included in the response body from the
 * [BulkRetrieveCustomers](api-endpoint:Customers-BulkRetrieveCustomers) endpoint.
 */
export type BulkRetrieveCustomersResponse = {
  /**
   * A map of responses that correspond to individual retrieve requests, represented by key-value
   * pairs.
   *
   * Each key is the customer ID that was specified for a retrieve request and each value is the
   * corresponding response. If the request succeeds, the value is the requested customer profile.
   * If the request fails, the value contains any errors that occurred during the request.
   */
  responses?: Record<string, RetrieveCustomerResponse>;
  /** Any top-level errors that prevented the bulk operation from running. */
  errors?: Error[];
};

export const bulkRetrieveCustomersResponseSchema: Schema<BulkRetrieveCustomersResponse> =
  s.object<BulkRetrieveCustomersResponse>({
    responses: s.optional(
      s.record(
        s.string(),
        s.lazy(() => retrieveCustomerResponseSchema),
      ),
    ),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
  });
