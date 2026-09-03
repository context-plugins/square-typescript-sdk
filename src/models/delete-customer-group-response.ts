import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

export type DeleteCustomerGroupResponse = {
  errors?: Error[];
};

export const deleteCustomerGroupResponseSchema: Schema<DeleteCustomerGroupResponse> =
  s.object<DeleteCustomerGroupResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
  });
