import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

export type DeleteInvoiceResponse = {
  errors?: Error[];
};

export const deleteInvoiceResponseSchema: Schema<DeleteInvoiceResponse> = s.object<DeleteInvoiceResponse>({
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
});
