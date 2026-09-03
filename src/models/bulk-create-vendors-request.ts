import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { vendorSchema, type Vendor } from "./vendor.js";

export type BulkCreateVendorsRequest = {
  vendors: Record<string, Vendor>;
};

export const bulkCreateVendorsRequestSchema: Schema<BulkCreateVendorsRequest> =
  s.object<BulkCreateVendorsRequest>({
    vendors: s.record(
      s.string(),
      s.lazy(() => vendorSchema),
    ),
  });
