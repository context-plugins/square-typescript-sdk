import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { retrieveVendorResponseSchema, type RetrieveVendorResponse } from "./retrieve-vendor-response.js";

/**
 * Represents an output from a call to
 * [BulkRetrieveVendors](api-endpoint:Vendors-BulkRetrieveVendors).
 */
export type BulkRetrieveVendorsResponse = {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /**
   * The set of [RetrieveVendorResponse](entity:RetrieveVendorResponse) objects encapsulating
   * successfully retrieved [Vendor](entity:Vendor) objects or error responses for failed attempts.
   * The set is represented by a collection of `Vendor`-ID/`Vendor`-object or
   * `Vendor`-ID/error-object pairs.
   */
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
