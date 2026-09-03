import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { vendorSchema, type Vendor } from "./vendor.js";

export type UpdateVendorResponse = {
  errors?: Error[];
  vendor?: Vendor;
};

export const updateVendorResponseSchema: Schema<UpdateVendorResponse> = s.object<UpdateVendorResponse>({
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
  vendor: s.optional(s.lazy(() => vendorSchema)),
});
