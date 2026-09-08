import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { invoiceAttachmentSchema, type InvoiceAttachment } from "./invoice-attachment.js";

/**
 * Represents a [CreateInvoiceAttachment](api-endpoint:Invoices-CreateInvoiceAttachment) response.
 */
export type CreateInvoiceAttachmentResponse = {
  /** Represents a file attached to an [invoice](entity:Invoice). */
  attachment?: InvoiceAttachment;
  /** Information about errors encountered during the request. */
  errors?: Error[];
};

export const createInvoiceAttachmentResponseSchema: Schema<CreateInvoiceAttachmentResponse> =
  s.object<CreateInvoiceAttachmentResponse>({
    attachment: s.optional(s.lazy(() => invoiceAttachmentSchema)),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
  });
