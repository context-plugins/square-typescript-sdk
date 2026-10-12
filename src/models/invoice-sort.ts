import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { invoiceSortFieldSchema, type InvoiceSortField } from "./invoice-sort-field.js";
import { sortOrderSchema, type SortOrder } from "./sort-order.js";

/** Identifies the sort field and sort order. */
export type InvoiceSort = {
  /** The field to use for sorting. */
  field: InvoiceSortField;
  /**
   * The order (e.g., chronological or alphabetical) in which results from a request are returned.
   */
  order?: SortOrder;
};

export const invoiceSortSchema: Schema<InvoiceSort> = s.object<InvoiceSort>({
  field: invoiceSortFieldSchema,
  order: s.optional(s.lazy(() => sortOrderSchema)),
});
