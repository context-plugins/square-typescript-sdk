import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { invoiceSchema, type Invoice } from "./invoice.js";

export type InvoiceCreatedEventObject = {
  invoice?: Invoice;
};

export const invoiceCreatedEventObjectSchema: Schema<InvoiceCreatedEventObject> =
  s.object<InvoiceCreatedEventObject>({
    invoice: s.optional(s.lazy(() => invoiceSchema)),
  });
