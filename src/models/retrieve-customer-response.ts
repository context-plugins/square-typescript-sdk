import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customerSchema, type Customer } from "./customer.js";
import { errorSchema, type Error } from "./error.js";

export type RetrieveCustomerResponse = {
  errors?: Error[];
  customer?: Customer;
};

export const retrieveCustomerResponseSchema: Schema<RetrieveCustomerResponse> =
  s.object<RetrieveCustomerResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    customer: s.optional(s.lazy(() => customerSchema)),
  });
