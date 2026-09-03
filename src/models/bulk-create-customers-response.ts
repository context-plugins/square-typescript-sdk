import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { createCustomerResponseSchema, type CreateCustomerResponse } from "./create-customer-response.js";
import { errorSchema, type Error } from "./error.js";

export type BulkCreateCustomersResponse = {
  responses?: Record<string, CreateCustomerResponse>;
  errors?: Error[];
};

export const bulkCreateCustomersResponseSchema: Schema<BulkCreateCustomersResponse> =
  s.object<BulkCreateCustomersResponse>({
    responses: s.optional(
      s.record(
        s.string(),
        s.lazy(() => createCustomerResponseSchema),
      ),
    ),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
  });
