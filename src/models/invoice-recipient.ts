import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addressSchema, type Address } from "./address.js";
import { invoiceRecipientTaxIdsSchema, type InvoiceRecipientTaxIds } from "./invoice-recipient-tax-ids.js";

/**
 * Represents a snapshot of customer data. This object stores customer data that is displayed on the
 * invoice and that Square uses to deliver the invoice.
 *
 * When you provide a customer ID for a draft invoice, Square retrieves the associated customer
 * profile and populates the remaining `InvoiceRecipient` fields. You cannot update these fields
 * after the invoice is published. Square updates the customer ID in response to a merge operation,
 * but does not update other fields.
 */
export type InvoiceRecipient = {
  /**
   * The ID of the customer. This is the customer profile ID that you provide when creating a draft
   * invoice.
   */
  customerId?: string | null;
  /** The recipient's given (that is, first) name. */
  givenName?: string;
  /** The recipient's family (that is, last) name. */
  familyName?: string;
  /** The recipient's email address. */
  emailAddress?: string;
  /**
   * Represents a postal address in a country. For more information, see [Working with
   * Addresses](https://developer.squareup.com/docs/build-basics/working-with-addresses).
   */
  address?: Address;
  /** The recipient's phone number. */
  phoneNumber?: string;
  /** The name of the recipient's company. */
  companyName?: string;
  /**
   * Represents the tax IDs for an invoice recipient. The country of the seller account determines
   * whether the corresponding `tax_ids` field is available for the customer. For more information,
   * see [Invoice recipient tax
   * IDs](https://developer.squareup.com/docs/invoices-api/overview#recipient-tax-ids).
   */
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
