import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Represents an input to a call to [BulkRetrieveVendors](api-endpoint:Vendors-BulkRetrieveVendors).
 */
export type BulkRetrieveVendorsRequest = {
  /** IDs of the [Vendor](entity:Vendor) objects to retrieve. */
  vendorIds?: string[] | null;
};

export const bulkRetrieveVendorsRequestSchema: Schema<BulkRetrieveVendorsRequest> =
  s.object<BulkRetrieveVendorsRequest>({
    vendorIds: s.optionalNullable(s.array(s.string())),
    _keysMap: {
      vendorIds: "vendor_ids",
    },
  });
