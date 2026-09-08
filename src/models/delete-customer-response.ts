import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

/**
 * Defines the fields that are included in the response body of a request to the `DeleteCustomer`
 * endpoint.
 */
export type DeleteCustomerResponse = {
  /** Any errors that occurred during the request. */
  errors?: Error[];
};

export const deleteCustomerResponseSchema: Schema<DeleteCustomerResponse> = s.object<DeleteCustomerResponse>({
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
});
