import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customerSchema, type Customer } from "./customer.js";
import { errorSchema, type Error } from "./error.js";

/**
 * Defines the fields that are included in the response body of a request to the
 * [UpdateCustomer](api-endpoint:Customers-UpdateCustomer) or
 * [BulkUpdateCustomers](api-endpoint:Customers-BulkUpdateCustomers) endpoint.
 *
 * Either `errors` or `customer` is present in a given response (never both).
 */
export type UpdateCustomerResponse = {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /** Represents a Square customer profile in the Customer Directory of a Square seller. */
  customer?: Customer;
};

export const updateCustomerResponseSchema: Schema<UpdateCustomerResponse> = s.object<UpdateCustomerResponse>({
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
  customer: s.optional(s.lazy(() => customerSchema)),
});
