import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deleteCustomerResponseSchema, type DeleteCustomerResponse } from "./delete-customer-response.js";
import { errorSchema, type Error } from "./error.js";

export type BulkDeleteCustomersResponse = {
  responses?: Record<string, DeleteCustomerResponse>;
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
