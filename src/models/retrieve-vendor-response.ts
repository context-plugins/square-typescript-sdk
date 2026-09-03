import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { vendorSchema, type Vendor } from "./vendor.js";

export type RetrieveVendorResponse = {
  errors?: Error[];
  vendor?: Vendor;
};

export const retrieveVendorResponseSchema: Schema<RetrieveVendorResponse> = s.object<RetrieveVendorResponse>({
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
  vendor: s.optional(s.lazy(() => vendorSchema)),
});
