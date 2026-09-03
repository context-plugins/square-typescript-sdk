import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { invoiceSchema, type Invoice } from "./invoice.js";

export type InvoicePublishedEventObject = {
  invoice?: Invoice;
};

export const invoicePublishedEventObjectSchema: Schema<InvoicePublishedEventObject> =
  s.object<InvoicePublishedEventObject>({
    invoice: s.optional(s.lazy(() => invoiceSchema)),
  });
