import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { vendorStatusSchema, type VendorStatus } from "./vendor-status.js";

/** Defines supported query expressions to search for vendors by. */
export type SearchVendorsRequestFilter = {
  /** The names of the [Vendor](entity:Vendor) objects to retrieve. */
  name?: string[] | null;
  /**
   * The statuses of the [Vendor](entity:Vendor) objects to retrieve. See
   * [VendorStatus](#type-vendorstatus) for possible values
   */
  status?: VendorStatus[] | null;
};

export const searchVendorsRequestFilterSchema: Schema<SearchVendorsRequestFilter> =
  s.object<SearchVendorsRequestFilter>({
    name: s.optionalNullable(s.array(s.string())),
    status: s.optionalNullable(s.array(s.lazy(() => vendorStatusSchema))),
  });
