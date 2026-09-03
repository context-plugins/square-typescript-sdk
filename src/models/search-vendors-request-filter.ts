import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { vendorStatusSchema, type VendorStatus } from "./vendor-status.js";

export type SearchVendorsRequestFilter = {
  name?: string[] | null;
  status?: VendorStatus[] | null;
};

export const searchVendorsRequestFilterSchema: Schema<SearchVendorsRequestFilter> =
  s.object<SearchVendorsRequestFilter>({
    name: s.optionalNullable(s.array(s.string())),
    status: s.optionalNullable(s.array(s.lazy(() => vendorStatusSchema))),
  });
