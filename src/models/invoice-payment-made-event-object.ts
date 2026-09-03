import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { invoiceSchema, type Invoice } from "./invoice.js";

export type InvoicePaymentMadeEventObject = {
  invoice?: Invoice;
};

export const invoicePaymentMadeEventObjectSchema: Schema<InvoicePaymentMadeEventObject> =
  s.object<InvoicePaymentMadeEventObject>({
    invoice: s.optional(s.lazy(() => invoiceSchema)),
  });
