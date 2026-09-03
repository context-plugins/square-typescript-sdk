import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { updateVendorRequestSchema, type UpdateVendorRequest } from "./update-vendor-request.js";

export type BulkUpdateVendorsRequest = {
  vendors: Record<string, UpdateVendorRequest>;
};

export const bulkUpdateVendorsRequestSchema: Schema<BulkUpdateVendorsRequest> =
  s.object<BulkUpdateVendorsRequest>({
    vendors: s.record(
      s.string(),
      s.lazy(() => updateVendorRequestSchema),
    ),
  });
