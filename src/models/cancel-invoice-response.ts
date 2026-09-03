import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { invoiceSchema, type Invoice } from "./invoice.js";

export type CancelInvoiceResponse = {
  invoice?: Invoice;
  errors?: Error[];
};

export const cancelInvoiceResponseSchema: Schema<CancelInvoiceResponse> = s.object<CancelInvoiceResponse>({
  invoice: s.optional(s.lazy(() => invoiceSchema)),
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
});
