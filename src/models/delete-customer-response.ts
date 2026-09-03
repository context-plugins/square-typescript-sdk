import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

export type DeleteCustomerResponse = {
  errors?: Error[];
};

export const deleteCustomerResponseSchema: Schema<DeleteCustomerResponse> = s.object<DeleteCustomerResponse>({
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
});
