import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { invoiceSchema, type Invoice } from "./invoice.js";

export type InvoiceUpdatedEventObject = {
  invoice?: Invoice;
};

export const invoiceUpdatedEventObjectSchema: Schema<InvoiceUpdatedEventObject> =
  s.object<InvoiceUpdatedEventObject>({
    invoice: s.optional(s.lazy(() => invoiceSchema)),
  });
