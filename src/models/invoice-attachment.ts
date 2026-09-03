import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type InvoiceAttachment = {
  id?: string;
  filename?: string;
  description?: string;
  filesize?: number;
  hash?: string;
  mimeType?: string;
  uploadedAt?: string;
};

export const invoiceAttachmentSchema: Schema<InvoiceAttachment> = s.object<InvoiceAttachment>({
  id: s.optional(s.string()),
  filename: s.optional(s.string()),
  description: s.optional(s.string()),
  filesize: s.optional(s.number()),
  hash: s.optional(s.string()),
  mimeType: s.optional(s.string()),
  uploadedAt: s.optional(s.string()),
  _keysMap: {
    mimeType: "mime_type",
    uploadedAt: "uploaded_at",
  },
});
