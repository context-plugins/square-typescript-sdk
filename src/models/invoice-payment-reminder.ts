import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  invoicePaymentReminderStatusSchema,
  type InvoicePaymentReminderStatus,
} from "./invoice-payment-reminder-status.js";

export type InvoicePaymentReminder = {
  uid?: string;
  relativeScheduledDays?: number | null;
  message?: string | null;
  status?: InvoicePaymentReminderStatus;
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
