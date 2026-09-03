import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BulkRetrieveVendorsRequest = {
  vendorIds?: string[] | null;
};

export const bulkRetrieveVendorsRequestSchema: Schema<BulkRetrieveVendorsRequest> =
  s.object<BulkRetrieveVendorsRequest>({
    vendorIds: s.optionalNullable(s.array(s.string())),
    _keysMap: {
      vendorIds: "vendor_ids",
    },
  });
