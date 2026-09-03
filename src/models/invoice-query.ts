import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { invoiceFilterSchema, type InvoiceFilter } from "./invoice-filter.js";
import { invoiceSortSchema, type InvoiceSort } from "./invoice-sort.js";

export type InvoiceQuery = {
  filter: InvoiceFilter;
  sort?: InvoiceSort;
};

export const invoiceQuerySchema: Schema<InvoiceQuery> = s.object<InvoiceQuery>({
  filter: invoiceFilterSchema,
  sort: s.optional(s.lazy(() => invoiceSortSchema)),
});
