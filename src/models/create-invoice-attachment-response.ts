import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { invoiceAttachmentSchema, type InvoiceAttachment } from "./invoice-attachment.js";

export type CreateInvoiceAttachmentResponse = {
  attachment?: InvoiceAttachment;
  errors?: Error[];
};

export const createInvoiceAttachmentResponseSchema: Schema<CreateInvoiceAttachmentResponse> =
  s.object<CreateInvoiceAttachmentResponse>({
    attachment: s.optional(s.lazy(() => invoiceAttachmentSchema)),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
  });
