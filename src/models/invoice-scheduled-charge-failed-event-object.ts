import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { invoiceSchema, type Invoice } from "./invoice.js";

export type InvoiceScheduledChargeFailedEventObject = {
  /**
   * Stores information about an invoice. You use the Invoices API to create and manage invoices.
   * For more information, see [Invoices API
   * Overview](https://developer.squareup.com/docs/invoices-api/overview).
   */
  invoice?: Invoice;
};

export const invoiceScheduledChargeFailedEventObjectSchema: Schema<InvoiceScheduledChargeFailedEventObject> =
  s.object<InvoiceScheduledChargeFailedEventObject>({
    invoice: s.optional(s.lazy(() => invoiceSchema)),
  });
