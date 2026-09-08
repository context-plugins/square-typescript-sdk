import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { sortOrderSchema, type SortOrder } from "./sort-order.js";

/** Identifies the sort field and sort order. */
export type InvoiceSort = {
  /** The field to use for sorting. */
  field: "INVOICE_SORT_DATE";
  /**
   * The order (e.g., chronological or alphabetical) in which results from a request are returned.
   */
  order?: SortOrder;
};

export const invoiceSortSchema: Schema<InvoiceSort> = s.object<InvoiceSort>({
  field: s.literal("INVOICE_SORT_DATE"),
  order: s.optional(s.lazy(() => sortOrderSchema)),
});
