import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

export type DeleteInvoiceAttachmentResponse = {
  errors?: Error[];
};

export const deleteInvoiceAttachmentResponseSchema: Schema<DeleteInvoiceAttachmentResponse> =
  s.object<DeleteInvoiceAttachmentResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
  });
