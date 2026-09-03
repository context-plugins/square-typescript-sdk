import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addressSchema, type Address } from "./address.js";
import { invoiceRecipientTaxIdsSchema, type InvoiceRecipientTaxIds } from "./invoice-recipient-tax-ids.js";

export type InvoiceRecipient = {
  customerId?: string | null;
  givenName?: string;
  familyName?: string;
  emailAddress?: string;
  address?: Address;
  phoneNumber?: string;
  companyName?: string;
  taxIds?: InvoiceRecipientTaxIds;
};

export const invoiceRecipientSchema: Schema<InvoiceRecipient> = s.object<InvoiceRecipient>({
  customerId: s.optionalNullable(s.string()),
  givenName: s.optional(s.string()),
  familyName: s.optional(s.string()),
  emailAddress: s.optional(s.string()),
  address: s.optional(s.lazy(() => addressSchema)),
  phoneNumber: s.optional(s.string()),
  companyName: s.optional(s.string()),
  taxIds: s.optional(s.lazy(() => invoiceRecipientTaxIdsSchema)),
  _keysMap: {
    customerId: "customer_id",
    givenName: "given_name",
    familyName: "family_name",
    emailAddress: "email_address",
    phoneNumber: "phone_number",
    companyName: "company_name",
    taxIds: "tax_ids",
  },
});
