import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { updateCustomerResponseSchema, type UpdateCustomerResponse } from "./update-customer-response.js";

export type BulkUpdateCustomersResponse = {
  responses?: Record<string, UpdateCustomerResponse>;
  errors?: Error[];
};

export const bulkUpdateCustomersResponseSchema: Schema<BulkUpdateCustomersResponse> =
  s.object<BulkUpdateCustomersResponse>({
    responses: s.optional(
      s.record(
        s.string(),
        s.lazy(() => updateCustomerResponseSchema),
      ),
    ),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
  });
