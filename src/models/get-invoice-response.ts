import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { invoiceSchema, type Invoice } from "./invoice.js";

/** Describes a `GetInvoice` response. */
export type GetInvoiceResponse = {
  /**
   * Stores information about an invoice. You use the Invoices API to create and manage invoices.
   * For more information, see [Invoices API
   * Overview](https://developer.squareup.com/docs/invoices-api/overview).
   */
  invoice?: Invoice;
  /** Information about errors encountered during the request. */
  errors?: Error[];
};

export const getInvoiceResponseSchema: Schema<GetInvoiceResponse> = s.object<GetInvoiceResponse>({
  invoice: s.optional(s.lazy(() => invoiceSchema)),
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
});
