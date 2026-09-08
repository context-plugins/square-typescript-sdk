import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Represents a contact of a [Vendor](entity:Vendor). */
export type VendorContact = {
  /**
   * A unique Square-generated ID for the [VendorContact](entity:VendorContact). This field is
   * required when attempting to update a [VendorContact](entity:VendorContact).
   */
  id?: string;
  /**
   * The name of the [VendorContact](entity:VendorContact). This field is required when attempting
   * to create a [Vendor](entity:Vendor).
   */
  name?: string | null;
  /** The email address of the [VendorContact](entity:VendorContact). */
  emailAddress?: string | null;
  /** The phone number of the [VendorContact](entity:VendorContact). */
  phoneNumber?: string | null;
  /** The state of the [VendorContact](entity:VendorContact). */
  removed?: boolean | null;
  /** The ordinal of the [VendorContact](entity:VendorContact). */
  ordinal: number;
};

export const vendorContactSchema: Schema<VendorContact> = s.object<VendorContact>({
  id: s.optional(s.string()),
  name: s.optionalNullable(s.string()),
  emailAddress: s.optionalNullable(s.string()),
  phoneNumber: s.optionalNullable(s.string()),
  removed: s.optionalNullable(s.boolean()),
  ordinal: s.number(),
  _keysMap: {
    emailAddress: "email_address",
    phoneNumber: "phone_number",
  },
});
