import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addressSchema, type Address } from "./address.js";
import { customerTaxIdsSchema, type CustomerTaxIds } from "./customer-tax-ids.js";

export type CreateCustomerRequest = {
  idempotencyKey?: string;
  givenName?: string;
  familyName?: string;
  companyName?: string;
  nickname?: string;
  emailAddress?: string;
  address?: Address;
  phoneNumber?: string;
  referenceId?: string;
  note?: string;
  birthday?: string;
  taxIds?: CustomerTaxIds;
};

export const createCustomerRequestSchema: Schema<CreateCustomerRequest> = s.object<CreateCustomerRequest>({
  idempotencyKey: s.optional(s.string()),
  givenName: s.optional(s.string()),
  familyName: s.optional(s.string()),
  companyName: s.optional(s.string()),
  nickname: s.optional(s.string()),
  emailAddress: s.optional(s.string()),
  address: s.optional(s.lazy(() => addressSchema)),
  phoneNumber: s.optional(s.string()),
  referenceId: s.optional(s.string()),
  note: s.optional(s.string()),
  birthday: s.optional(s.string()),
  taxIds: s.optional(s.lazy(() => customerTaxIdsSchema)),
  _keysMap: {
    idempotencyKey: "idempotency_key",
    givenName: "given_name",
    familyName: "family_name",
    companyName: "company_name",
    emailAddress: "email_address",
    phoneNumber: "phone_number",
    referenceId: "reference_id",
    taxIds: "tax_ids",
  },
});
