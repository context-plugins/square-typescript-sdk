import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const InvoiceStatus = {
  Draft: "DRAFT",
  Unpaid: "UNPAID",
  Scheduled: "SCHEDULED",
  PartiallyPaid: "PARTIALLY_PAID",
  Paid: "PAID",
  PartiallyRefunded: "PARTIALLY_REFUNDED",
  Refunded: "REFUNDED",
  Canceled: "CANCELED",
  Failed: "FAILED",
  PaymentPending: "PAYMENT_PENDING",
} as const;
export type InvoiceStatus = (typeof InvoiceStatus)[keyof typeof InvoiceStatus] | (string & {});

export const invoiceStatusSchema: EnumSchema<InvoiceStatus> = s.enumOf<InvoiceStatus>(InvoiceStatus);
