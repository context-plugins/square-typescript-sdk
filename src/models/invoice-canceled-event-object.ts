import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { invoiceSchema, type Invoice } from "./invoice.js";

export type InvoiceCanceledEventObject = {
  invoice?: Invoice;
};

export const invoiceCanceledEventObjectSchema: Schema<InvoiceCanceledEventObject> =
  s.object<InvoiceCanceledEventObject>({
    invoice: s.optional(s.lazy(() => invoiceSchema)),
  });
