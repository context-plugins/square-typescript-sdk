import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { invoiceSchema, type Invoice } from "./invoice.js";

/** Describes a `ListInvoice` response. */
export type ListInvoicesResponse = {
  /** The invoices retrieved. */
  invoices?: Invoice[];
  /**
   * When a response is truncated, it includes a cursor that you can use in a subsequent request to
   * retrieve the next set of invoices. If empty, this is the final response. For more information,
   * see
   * [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
   */
  cursor?: string;
  /** Information about errors encountered during the request. */
  errors?: Error[];
};

export const listInvoicesResponseSchema: Schema<ListInvoicesResponse> = s.object<ListInvoicesResponse>({
  invoices: s.optional(s.array(s.lazy(() => invoiceSchema))),
  cursor: s.optional(s.string()),
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
});
