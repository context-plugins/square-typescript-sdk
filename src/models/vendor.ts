import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addressSchema, type Address } from "./address.js";
import { vendorContactSchema, type VendorContact } from "./vendor-contact.js";
import { vendorStatusSchema, type VendorStatus } from "./vendor-status.js";

export type Vendor = {
  id?: string;
  createdAt?: string;
  updatedAt?: string;
  name?: string | null;
  address?: Address;
  contacts?: VendorContact[] | null;
  accountNumber?: string | null;
  note?: string | null;
  version?: number;
  status?: VendorStatus;
};

export const vendorSchema: Schema<Vendor> = s.object<Vendor>({
  id: s.optional(s.string()),
  createdAt: s.optional(s.string()),
  updatedAt: s.optional(s.string()),
  name: s.optionalNullable(s.string()),
  address: s.optional(s.lazy(() => addressSchema)),
  contacts: s.optionalNullable(s.array(s.lazy(() => vendorContactSchema))),
  accountNumber: s.optionalNullable(s.string()),
  note: s.optionalNullable(s.string()),
  version: s.optional(s.number()),
  status: s.optional(s.lazy(() => vendorStatusSchema)),
  _keysMap: {
    createdAt: "created_at",
    updatedAt: "updated_at",
    accountNumber: "account_number",
  },
});
