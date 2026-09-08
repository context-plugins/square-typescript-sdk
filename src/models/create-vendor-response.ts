import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { vendorSchema, type Vendor } from "./vendor.js";

/** Represents an output from a call to [CreateVendor](api-endpoint:Vendors-CreateVendor). */
export type CreateVendorResponse = {
  /** Errors encountered when the request fails. */
  errors?: Error[];
  /** Represents a supplier to a seller. */
  vendor?: Vendor;
};

export const createVendorResponseSchema: Schema<CreateVendorResponse> = s.object<CreateVendorResponse>({
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
  vendor: s.optional(s.lazy(() => vendorSchema)),
});
