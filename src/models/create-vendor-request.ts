import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { vendorSchema, type Vendor } from "./vendor.js";

export type CreateVendorRequest = {
  idempotencyKey: string;
  vendor?: Vendor;
};

export const createVendorRequestSchema: Schema<CreateVendorRequest> = s.object<CreateVendorRequest>({
  idempotencyKey: s.string(),
  vendor: s.optional(s.lazy(() => vendorSchema)),
  _keysMap: {
    idempotencyKey: "idempotency_key",
  },
});
