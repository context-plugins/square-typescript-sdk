import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { invoiceQuerySchema, type InvoiceQuery } from "./invoice-query.js";

export type SearchInvoicesRequest = {
  query: InvoiceQuery;
  limit?: number;
  cursor?: string;
};

export const searchInvoicesRequestSchema: Schema<SearchInvoicesRequest> = s.object<SearchInvoicesRequest>({
  query: invoiceQuerySchema,
  limit: s.optional(s.number()),
  cursor: s.optional(s.string()),
});
