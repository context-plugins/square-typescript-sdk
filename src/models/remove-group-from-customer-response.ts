import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

/**
 * Defines the fields that are included in the response body of a request to the
 * [RemoveGroupFromCustomer](api-endpoint:Customers-RemoveGroupFromCustomer) endpoint.
 */
export type RemoveGroupFromCustomerResponse = {
  /** Any errors that occurred during the request. */
  errors?: Error[];
};

export const removeGroupFromCustomerResponseSchema: Schema<RemoveGroupFromCustomerResponse> =
  s.object<RemoveGroupFromCustomerResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
  });
