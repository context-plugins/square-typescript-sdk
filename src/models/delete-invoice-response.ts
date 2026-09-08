import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

/** Describes a `DeleteInvoice` response. */
export type DeleteInvoiceResponse = {
  /** Information about errors encountered during the request. */
  errors?: Error[];
};

export const deleteInvoiceResponseSchema: Schema<DeleteInvoiceResponse> = s.object<DeleteInvoiceResponse>({
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
});
