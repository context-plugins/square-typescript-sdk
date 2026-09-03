import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const InvoicePaymentReminderStatus = {
  Pending: "PENDING",
  NotApplicable: "NOT_APPLICABLE",
  Sent: "SENT",
} as const;
export type InvoicePaymentReminderStatus =
  | (typeof InvoicePaymentReminderStatus)[keyof typeof InvoicePaymentReminderStatus]
  | (string & {});

export const invoicePaymentReminderStatusSchema: EnumSchema<InvoicePaymentReminderStatus> =
  s.enumOf<InvoicePaymentReminderStatus>(InvoicePaymentReminderStatus);
