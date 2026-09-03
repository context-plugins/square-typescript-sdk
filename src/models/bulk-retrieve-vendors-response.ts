import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { retrieveVendorResponseSchema, type RetrieveVendorResponse } from "./retrieve-vendor-response.js";

export type BulkRetrieveVendorsResponse = {
  errors?: Error[];
  responses?: Record<string, RetrieveVendorResponse>;
};

export const bulkRetrieveVendorsResponseSchema: Schema<BulkRetrieveVendorsResponse> =
  s.object<BulkRetrieveVendorsResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    responses: s.optional(
      s.record(
        s.string(),
        s.lazy(() => retrieveVendorResponseSchema),
      ),
    ),
  });
