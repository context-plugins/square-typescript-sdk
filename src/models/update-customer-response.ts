import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customerSchema, type Customer } from "./customer.js";
import { errorSchema, type Error } from "./error.js";

export type UpdateCustomerResponse = {
  errors?: Error[];
  customer?: Customer;
};

export const updateCustomerResponseSchema: Schema<UpdateCustomerResponse> = s.object<UpdateCustomerResponse>({
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
  customer: s.optional(s.lazy(() => customerSchema)),
});
