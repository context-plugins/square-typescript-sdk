import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import {
  retrieveCustomerResponseSchema,
  type RetrieveCustomerResponse,
} from "./retrieve-customer-response.js";

export type BulkRetrieveCustomersResponse = {
  responses?: Record<string, RetrieveCustomerResponse>;
  errors?: Error[];
};

export const bulkRetrieveCustomersResponseSchema: Schema<BulkRetrieveCustomersResponse> =
  s.object<BulkRetrieveCustomersResponse>({
    responses: s.optional(
      s.record(
        s.string(),
        s.lazy(() => retrieveCustomerResponseSchema),
      ),
    ),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
  });
