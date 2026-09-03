import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { invoiceSchema, type Invoice } from "./invoice.js";

export type SearchInvoicesResponse = {
  invoices?: Invoice[];
  cursor?: string;
  errors?: Error[];
};

export const searchInvoicesResponseSchema: Schema<SearchInvoicesResponse> = s.object<SearchInvoicesResponse>({
  invoices: s.optional(s.array(s.lazy(() => invoiceSchema))),
  cursor: s.optional(s.string()),
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
});
