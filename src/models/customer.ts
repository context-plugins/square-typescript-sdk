import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addressSchema, type Address } from "./address.js";
import { customerCreationSourceSchema, type CustomerCreationSource } from "./customer-creation-source.js";
import { customerPreferencesSchema, type CustomerPreferences } from "./customer-preferences.js";
import { customerTaxIdsSchema, type CustomerTaxIds } from "./customer-tax-ids.js";

export type Customer = {
  id?: string;
  createdAt?: string;
  updatedAt?: string;
  givenName?: string | null;
  familyName?: string | null;
  nickname?: string | null;
  companyName?: string | null;
  emailAddress?: string | null;
  address?: Address;
  phoneNumber?: string | null;
  birthday?: string | null;
  referenceId?: string | null;
  note?: string | null;
  preferences?: CustomerPreferences;
  creationSource?: CustomerCreationSource;
  groupIds?: string[] | null;
  segmentIds?: string[] | null;
  version?: number;
  taxIds?: CustomerTaxIds;
};

export const customerSchema: Schema<Customer> = s.object<Customer>({
  id: s.optional(s.string()),
  createdAt: s.optional(s.string()),
  updatedAt: s.optional(s.string()),
  givenName: s.optionalNullable(s.string()),
  familyName: s.optionalNullable(s.string()),
  nickname: s.optionalNullable(s.string()),
  companyName: s.optionalNullable(s.string()),
  emailAddress: s.optionalNullable(s.string()),
  address: s.optional(s.lazy(() => addressSchema)),
  phoneNumber: s.optionalNullable(s.string()),
  birthday: s.optionalNullable(s.string()),
  referenceId: s.optionalNullable(s.string()),
  note: s.optionalNullable(s.string()),
  preferences: s.optional(s.lazy(() => customerPreferencesSchema)),
  creationSource: s.optional(s.lazy(() => customerCreationSourceSchema)),
  groupIds: s.optionalNullable(s.array(s.string())),
  segmentIds: s.optionalNullable(s.array(s.string())),
  version: s.optional(s.number()),
  taxIds: s.optional(s.lazy(() => customerTaxIdsSchema)),
  _keysMap: {
    createdAt: "created_at",
    updatedAt: "updated_at",
    givenName: "given_name",
    familyName: "family_name",
    companyName: "company_name",
    emailAddress: "email_address",
    phoneNumber: "phone_number",
    referenceId: "reference_id",
    creationSource: "creation_source",
    groupIds: "group_ids",
    segmentIds: "segment_ids",
    taxIds: "tax_ids",
  },
});
