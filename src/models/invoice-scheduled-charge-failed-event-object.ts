import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { invoiceSchema, type Invoice } from "./invoice.js";

export type InvoiceScheduledChargeFailedEventObject = {
  invoice?: Invoice;
};

export const invoiceScheduledChargeFailedEventObjectSchema: Schema<InvoiceScheduledChargeFailedEventObject> =
  s.object<InvoiceScheduledChargeFailedEventObject>({
    invoice: s.optional(s.lazy(() => invoiceSchema)),
  });
