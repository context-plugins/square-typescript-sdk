import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { updateVendorRequestSchema, type UpdateVendorRequest } from "./update-vendor-request.js";

/** Represents an input to a call to [BulkUpdateVendors](api-endpoint:Vendors-BulkUpdateVendors). */
export type BulkUpdateVendorsRequest = {
  /**
   * A set of [UpdateVendorRequest](entity:UpdateVendorRequest) objects encapsulating to-be-updated
   * [Vendor](entity:Vendor) objects. The set is represented by a collection of
   * `Vendor`-ID/`UpdateVendorRequest`-object pairs.
   */
  vendors: Record<string, UpdateVendorRequest>;
};

export const bulkUpdateVendorsRequestSchema: Schema<BulkUpdateVendorsRequest> =
  s.object<BulkUpdateVendorsRequest>({
    vendors: s.record(
      s.string(),
      s.lazy(() => updateVendorRequestSchema),
    ),
  });
