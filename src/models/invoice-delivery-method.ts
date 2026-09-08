import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates how Square delivers the [invoice](entity:Invoice) to the customer. */
export const InvoiceDeliveryMethod = {
  /** Directs Square to send invoices, reminders, and receipts to the customer using email. */
  Email: "EMAIL",
  /**
   * Directs Square to take no action on the invoice. In this case, the seller or application
   * developer follows up with the customer for payment. For example, a seller might collect a
   * payment in the Seller Dashboard or Point of Sale (POS) application. The seller might also share
   * the URL of the Square-hosted invoice page (`public_url`) with the customer to request payment.
   */
  ShareManually: "SHARE_MANUALLY",
  /**
   * Directs Square to send invoices and receipts to the customer using SMS (text message).
   *
   * You cannot set `SMS` as a delivery method using the Invoices API, but you can change an `SMS`
   * delivery method to `EMAIL` or `SHARE_MANUALLY`.
   */
  Sms: "SMS",
} as const;
export type InvoiceDeliveryMethod =
  | (typeof InvoiceDeliveryMethod)[keyof typeof InvoiceDeliveryMethod]
  | (string & {});

export const invoiceDeliveryMethodSchema: EnumSchema<InvoiceDeliveryMethod> =
  s.enumOf<InvoiceDeliveryMethod>(InvoiceDeliveryMethod);
