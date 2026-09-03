import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { vendorSchema, type Vendor } from "./vendor.js";

export type SearchVendorsResponse = {
  errors?: Error[];
  vendors?: Vendor[];
  cursor?: string;
};

export const searchVendorsResponseSchema: Schema<SearchVendorsResponse> = s.object<SearchVendorsResponse>({
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
  vendors: s.optional(s.array(s.lazy(() => vendorSchema))),
  cursor: s.optional(s.string()),
});
