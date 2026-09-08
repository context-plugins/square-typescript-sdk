import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  invoicePaymentReminderStatusSchema,
  type InvoicePaymentReminderStatus,
} from "./invoice-payment-reminder-status.js";

/**
 * Describes a payment request reminder (automatic notification) that Square sends to the customer.
 * You configure a reminder relative to the payment request `due_date`.
 */
export type InvoicePaymentReminder = {
  /**
   * A Square-assigned ID that uniquely identifies the reminder within the `InvoicePaymentRequest`.
   */
  uid?: string;
  /**
   * The number of days before (a negative number) or after (a positive number) the payment request
   * `due_date` when the reminder is sent. For example, -3 indicates that the reminder should be
   * sent 3 days before the payment request `due_date`.
   */
  relativeScheduledDays?: number | null;
  /** The reminder message. */
  message?: string | null;
  /** The status of a payment request reminder. */
  status?: InvoicePaymentReminderStatus;
  /** If sent, the timestamp when the reminder was sent, in RFC 3339 format. */
  sentAt?: string;
};

export const invoicePaymentReminderSchema: Schema<InvoicePaymentReminder> = s.object<InvoicePaymentReminder>({
  uid: s.optional(s.string()),
  relativeScheduledDays: s.optionalNullable(s.number()),
  message: s.optionalNullable(s.string()),
  status: s.optional(s.lazy(() => invoicePaymentReminderStatusSchema)),
  sentAt: s.optional(s.string()),
  _keysMap: {
    relativeScheduledDays: "relative_scheduled_days",
    sentAt: "sent_at",
  },
});
