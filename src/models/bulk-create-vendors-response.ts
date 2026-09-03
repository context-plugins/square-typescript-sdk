import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { createVendorResponseSchema, type CreateVendorResponse } from "./create-vendor-response.js";
import { errorSchema, type Error } from "./error.js";

export type BulkCreateVendorsResponse = {
  errors?: Error[];
  responses?: Record<string, CreateVendorResponse>;
};

export const bulkCreateVendorsResponseSchema: Schema<BulkCreateVendorsResponse> =
  s.object<BulkCreateVendorsResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    responses: s.optional(
      s.record(
        s.string(),
        s.lazy(() => createVendorResponseSchema),
      ),
    ),
  });
