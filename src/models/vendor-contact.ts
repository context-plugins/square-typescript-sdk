import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type VendorContact = {
  id?: string;
  name?: string | null;
  emailAddress?: string | null;
  phoneNumber?: string | null;
  removed?: boolean | null;
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
