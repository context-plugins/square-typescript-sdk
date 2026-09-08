import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates the status of an [invoice](entity:Invoice). */
export const InvoiceStatus = {
  /**
   * The invoice is a draft. You must publish a draft invoice before Square can process it. A draft
   * invoice has no `public_url`, so it is not available to customers.
   */
  Draft: "DRAFT",
  /** The invoice is published but not yet paid. */
  Unpaid: "UNPAID",
  /**
   * The invoice is scheduled to be processed. On the scheduled date, Square sends the invoice,
   * initiates an automatic payment, or takes no action, depending on the delivery method and
   * payment request settings. Square also sets the invoice status to the appropriate state:
   * `UNPAID`, `PAID`, `PARTIALLY_PAID`, or `PAYMENT_PENDING`.
   */
  Scheduled: "SCHEDULED",
  /** A partial payment is received for the invoice. */
  PartiallyPaid: "PARTIALLY_PAID",
  /** The customer paid the invoice in full. */
  Paid: "PAID",
  /** The invoice is paid (or partially paid) and some but not all the amount paid is refunded. */
  PartiallyRefunded: "PARTIALLY_REFUNDED",
  /** The full amount that the customer paid for the invoice is refunded. */
  Refunded: "REFUNDED",
  /**
   * The invoice is canceled. Square no longer requests payments from the customer. The
   * Square-hosted payment page is still accessible using the temporary `public_url` link, but the
   * invoice is shown as canceled and does not accept payment.
   */
  Canceled: "CANCELED",
  /** Square canceled the invoice due to suspicious activity. */
  Failed: "FAILED",
  /**
   * A payment on the invoice was initiated but has not yet been processed.
   *
   * When in this state, invoices cannot be updated and other payments cannot be initiated.
   */
  PaymentPending: "PAYMENT_PENDING",
} as const;
export type InvoiceStatus = (typeof InvoiceStatus)[keyof typeof InvoiceStatus] | (string & {});

export const invoiceStatusSchema: EnumSchema<InvoiceStatus> = s.enumOf<InvoiceStatus>(InvoiceStatus);
