import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { vendorSchema, type Vendor } from "./vendor.js";

export type CreateVendorResponse = {
  errors?: Error[];
  vendor?: Vendor;
};

export const createVendorResponseSchema: Schema<CreateVendorResponse> = s.object<CreateVendorResponse>({
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
  vendor: s.optional(s.lazy(() => vendorSchema)),
});
