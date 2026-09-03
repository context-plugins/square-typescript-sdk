import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { vendorSchema, type Vendor } from "./vendor.js";

export type UpdateVendorRequest = {
  idempotencyKey?: string | null;
  vendor: Vendor;
};

export const updateVendorRequestSchema: Schema<UpdateVendorRequest> = s.object<UpdateVendorRequest>({
  idempotencyKey: s.optionalNullable(s.string()),
  vendor: vendorSchema,
  _keysMap: {
    idempotencyKey: "idempotency_key",
  },
});
