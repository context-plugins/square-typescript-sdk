import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { updateVendorResponseSchema, type UpdateVendorResponse } from "./update-vendor-response.js";

/**
 * Represents an output from a call to [BulkUpdateVendors](api-endpoint:Vendors-BulkUpdateVendors).
 */
export type BulkUpdateVendorsResponse = {
  /** Errors encountered when the request fails. */
  errors?: Error[];
  /**
   * A set of [UpdateVendorResponse](entity:UpdateVendorResponse) objects encapsulating successfully
   * created [Vendor](entity:Vendor) objects or error responses for failed attempts. The set is
   * represented by a collection of `Vendor`-ID/`UpdateVendorResponse`-object or
   * `Vendor`-ID/error-object pairs.
   */
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
