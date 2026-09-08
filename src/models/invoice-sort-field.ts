import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The field to use for sorting. */
export const InvoiceSortField = {
  /**
   * The field works as follows:
   *
   * - If the invoice is a draft, it uses the invoice `created_at` date.
   * - If the invoice is scheduled for publication, it uses the `scheduled_at` date.
   * - If the invoice is published, it uses the invoice publication date.
   */
  InvoiceSortDate: "INVOICE_SORT_DATE",
} as const;
export type InvoiceSortField = (typeof InvoiceSortField)[keyof typeof InvoiceSortField] | (string & {});

export const invoiceSortFieldSchema: EnumSchema<InvoiceSortField> =
  s.enumOf<InvoiceSortField>(InvoiceSortField);
