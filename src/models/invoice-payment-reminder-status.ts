import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of a payment request reminder. */
export const InvoicePaymentReminderStatus = {
  /** The reminder will be sent on the `relative_scheduled_date` (if the invoice is published). */
  Pending: "PENDING",
  /**
   * The reminder is not applicable and is not sent. The following are examples of when reminders
   * are not applicable and are not sent:
   * - You schedule a reminder to be sent before the invoice is published.
   * - The invoice is configured with multiple payment requests and a payment request reminder is
   *   configured to be sent after the next payment request `due_date`.
   * - Two reminders (for different payment requests) are configured to be sent on the same date.
   *   Therefore, only one reminder is sent.
   * - You configure a reminder to be sent on the date that the invoice is scheduled to be sent.
   * - The payment request is already paid.
   * - The invoice status is `CANCELED` or `FAILED`.
   */
  NotApplicable: "NOT_APPLICABLE",
  /** The reminder is sent. */
  Sent: "SENT",
} as const;
export type InvoicePaymentReminderStatus =
  | (typeof InvoicePaymentReminderStatus)[keyof typeof InvoicePaymentReminderStatus]
  | (string & {});

export const invoicePaymentReminderStatusSchema: EnumSchema<InvoicePaymentReminderStatus> =
  s.enumOf<InvoicePaymentReminderStatus>(InvoicePaymentReminderStatus);
