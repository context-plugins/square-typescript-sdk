import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { updateVendorResponseSchema, type UpdateVendorResponse } from "./update-vendor-response.js";

export type BulkUpdateVendorsResponse = {
  errors?: Error[];
  responses?: Record<string, UpdateVendorResponse>;
};

export const bulkUpdateVendorsResponseSchema: Schema<BulkUpdateVendorsResponse> =
  s.object<BulkUpdateVendorsResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    responses: s.optional(
      s.record(
        s.string(),
        s.lazy(() => updateVendorResponseSchema),
      ),
    ),
  });
