import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

export type DeleteCustomerCustomAttributeResponse = {
  errors?: Error[];
};

export const deleteCustomerCustomAttributeResponseSchema: Schema<DeleteCustomerCustomAttributeResponse> =
  s.object<DeleteCustomerCustomAttributeResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
  });
