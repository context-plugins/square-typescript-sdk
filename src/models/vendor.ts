import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addressSchema, type Address } from "./address.js";
import { vendorContactSchema, type VendorContact } from "./vendor-contact.js";
import { vendorStatusSchema, type VendorStatus } from "./vendor-status.js";

/** Represents a supplier to a seller. */
export type Vendor = {
  /**
   * A unique Square-generated ID for the [Vendor](entity:Vendor). This field is required when
   * attempting to update a [Vendor](entity:Vendor).
   */
  id?: string;
  /**
   * An RFC 3339-formatted timestamp that indicates when the [Vendor](entity:Vendor) was created.
   */
  createdAt?: string;
  /**
   * An RFC 3339-formatted timestamp that indicates when the [Vendor](entity:Vendor) was last
   * updated.
   */
  updatedAt?: string;
  /**
   * The name of the [Vendor](entity:Vendor). This field is required when attempting to create or
   * update a [Vendor](entity:Vendor).
   */
  name?: string | null;
  /**
   * Represents a postal address in a country. For more information, see [Working with
   * Addresses](https://developer.squareup.com/docs/build-basics/working-with-addresses).
   */
  address?: Address;
  /** The contacts of the [Vendor](entity:Vendor). */
  contacts?: VendorContact[] | null;
  /** The account number of the [Vendor](entity:Vendor). */
  accountNumber?: string | null;
  /** A note detailing information about the [Vendor](entity:Vendor). */
  note?: string | null;
  /** The version of the [Vendor](entity:Vendor). */
  version?: number;
  /**
   * The status of the [Vendor](entity:Vendor), whether a [Vendor](entity:Vendor) is active or
   * inactive.
   */
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
  version: s.optional(s.int()),
  status: s.optional(s.lazy(() => vendorStatusSchema)),
  _keysMap: {
    createdAt: "created_at",
    updatedAt: "updated_at",
    accountNumber: "account_number",
  },
});
