import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreateInvoiceAttachmentRequest = {
  idempotencyKey?: string;
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
