import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Represents a [CreateInvoiceAttachment](api-endpoint:Invoices-CreateInvoiceAttachment) request.
 */
export type CreateInvoiceAttachmentRequest = {
  /**
   * A unique string that identifies the `CreateInvoiceAttachment` request. For more information,
   * see
   * [Idempotency](https://developer.squareup.com/docs/build-basics/common-api-patterns/idempotency).
   */
  idempotencyKey?: string;
  /** The description of the attachment to display on the invoice. */
  description?: string;
};

export const createInvoiceAttachmentRequestSchema: Schema<CreateInvoiceAttachmentRequest> =
  s.object<CreateInvoiceAttachmentRequest>({
    idempotencyKey: s.optional(s.string()),
    description: s.optional(s.string()),
    _keysMap: {
      idempotencyKey: "idempotency_key",
    },
  });
