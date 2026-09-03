import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addressSchema, type Address } from "./address.js";
import { customerTaxIdsSchema, type CustomerTaxIds } from "./customer-tax-ids.js";

export type BulkCreateCustomerData = {
  givenName?: string | null;
  familyName?: string | null;
  companyName?: string | null;
  nickname?: string | null;
  emailAddress?: string | null;
  address?: Address;
  phoneNumber?: string | null;
  referenceId?: string | null;
  note?: string | null;
  birthday?: string | null;
  taxIds?: CustomerTaxIds;
};

export const bulkCreateCustomerDataSchema: Schema<BulkCreateCustomerData> = s.object<BulkCreateCustomerData>({
  givenName: s.optionalNullable(s.string()),
  familyName: s.optionalNullable(s.string()),
  companyName: s.optionalNullable(s.string()),
  nickname: s.optionalNullable(s.string()),
  emailAddress: s.optionalNullable(s.string()),
  address: s.optional(s.lazy(() => addressSchema)),
  phoneNumber: s.optionalNullable(s.string()),
  referenceId: s.optionalNullable(s.string()),
  note: s.optionalNullable(s.string()),
  birthday: s.optionalNullable(s.string()),
  taxIds: s.optional(s.lazy(() => customerTaxIdsSchema)),
  _keysMap: {
    givenName: "given_name",
    familyName: "family_name",
    companyName: "company_name",
    emailAddress: "email_address",
    phoneNumber: "phone_number",
    referenceId: "reference_id",
    taxIds: "tax_ids",
  },
});
