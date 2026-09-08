import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { createVendorResponseSchema, type CreateVendorResponse } from "./create-vendor-response.js";
import { errorSchema, type Error } from "./error.js";

/**
 * Represents an output from a call to [BulkCreateVendors](api-endpoint:Vendors-BulkCreateVendors).
 */
export type BulkCreateVendorsResponse = {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /**
   * A set of [CreateVendorResponse](entity:CreateVendorResponse) objects encapsulating successfully
   * created [Vendor](entity:Vendor) objects or error responses for failed attempts. The set is
   * represented by a collection of idempotency-key/`Vendor`-object or idempotency-key/error-object
   * pairs. The idempotency keys correspond to those specified in the input.
   */
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
