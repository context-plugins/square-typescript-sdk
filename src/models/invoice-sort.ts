import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { sortOrderSchema, type SortOrder } from "./sort-order.js";

export type InvoiceSort = {
  field: "INVOICE_SORT_DATE";
  order?: SortOrder;
};

export const invoiceSortSchema: Schema<InvoiceSort> = s.object<InvoiceSort>({
  field: s.literal("INVOICE_SORT_DATE"),
  order: s.optional(s.lazy(() => sortOrderSchema)),
});
