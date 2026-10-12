import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Represents a file attached to an [invoice](entity:Invoice). */
export type InvoiceAttachment = {
  /** The Square-assigned ID of the attachment. */
  id?: string;
  /** The file name of the attachment, which is displayed on the invoice. */
  filename?: string;
  /**
   * The description of the attachment, which is displayed on the invoice. This field maps to the
   * seller-defined **Message** field.
   */
  description?: string;
  /** The file size of the attachment in bytes. */
  filesize?: number;
  /** The MD5 hash that was generated from the file contents. */
  hash?: string;
  /**
   * The mime type of the attachment. The following mime types are supported: image/gif, image/jpeg,
   * image/png, image/tiff, image/bmp, application/pdf.
   */
  mimeType?: string;
  /** The timestamp when the attachment was uploaded, in RFC 3339 format. */
  uploadedAt?: string;
};

export const invoiceAttachmentSchema: Schema<InvoiceAttachment> = s.object<InvoiceAttachment>({
  id: s.optional(s.string()),
  filename: s.optional(s.string()),
  description: s.optional(s.string()),
  filesize: s.optional(s.int()),
  hash: s.optional(s.string()),
  mimeType: s.optional(s.string()),
  uploadedAt: s.optional(s.string()),
  _keysMap: {
    mimeType: "mime_type",
    uploadedAt: "uploaded_at",
  },
});
