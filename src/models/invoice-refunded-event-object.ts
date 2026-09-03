import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { invoiceSchema, type Invoice } from "./invoice.js";

export type InvoiceRefundedEventObject = {
  invoice?: Invoice;
};

export const invoiceRefundedEventObjectSchema: Schema<InvoiceRefundedEventObject> =
  s.object<InvoiceRefundedEventObject>({
    invoice: s.optional(s.lazy(() => invoiceSchema)),
  });
