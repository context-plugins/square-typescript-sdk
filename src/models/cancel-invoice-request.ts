import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Describes a `CancelInvoice` request. */
export type CancelInvoiceRequest = {
  /**
   * The version of the [invoice](entity:Invoice) to cancel. If you do not know the version, you can
   * call [GetInvoice](api-endpoint:Invoices-GetInvoice) or
   * [ListInvoices](api-endpoint:Invoices-ListInvoices).
   */
  version: number;
};

export const cancelInvoiceRequestSchema: Schema<CancelInvoiceRequest> = s.object<CancelInvoiceRequest>({
  version: s.number(),
});
