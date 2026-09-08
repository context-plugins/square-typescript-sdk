import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the [Vendor](entity:Vendor), whether a [Vendor](entity:Vendor) is active or
 * inactive.
 */
export const VendorStatus = {
  /** Vendor is active and can receive purchase orders. */
  Active: "ACTIVE",
  /** Vendor is inactive and cannot receive purchase orders. */
  Inactive: "INACTIVE",
} as const;
export type VendorStatus = (typeof VendorStatus)[keyof typeof VendorStatus] | (string & {});

export const vendorStatusSchema: EnumSchema<VendorStatus> = s.enumOf<VendorStatus>(VendorStatus);
