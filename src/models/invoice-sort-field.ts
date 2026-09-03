import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const InvoiceSortField = {
  InvoiceSortDate: "INVOICE_SORT_DATE",
} as const;
export type InvoiceSortField = (typeof InvoiceSortField)[keyof typeof InvoiceSortField] | (string & {});

export const invoiceSortFieldSchema: EnumSchema<InvoiceSortField> =
  s.enumOf<InvoiceSortField>(InvoiceSortField);
