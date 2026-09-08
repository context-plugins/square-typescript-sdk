import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { vendorSchema, type Vendor } from "./vendor.js";

/** Represents an input to a call to [BulkCreateVendors](api-endpoint:Vendors-BulkCreateVendors). */
export type BulkCreateVendorsRequest = {
  /**
   * Specifies a set of new [Vendor](entity:Vendor) objects as represented by a collection of
   * idempotency-key/`Vendor`-object pairs.
   */
  vendors: Record<string, Vendor>;
};

export const bulkCreateVendorsRequestSchema: Schema<BulkCreateVendorsRequest> =
  s.object<BulkCreateVendorsRequest>({
    vendors: s.record(
      s.string(),
      s.lazy(() => vendorSchema),
    ),
  });
