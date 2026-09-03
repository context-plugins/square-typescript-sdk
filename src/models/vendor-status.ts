import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const VendorStatus = {
  Active: "ACTIVE",
  Inactive: "INACTIVE",
} as const;
export type VendorStatus = (typeof VendorStatus)[keyof typeof VendorStatus] | (string & {});

export const vendorStatusSchema: EnumSchema<VendorStatus> = s.enumOf<VendorStatus>(VendorStatus);
