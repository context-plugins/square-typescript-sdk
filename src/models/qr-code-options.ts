import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Fields to describe the action that displays QR-Codes. */
export type QrCodeOptions = {
  /** The title text to display in the QR code flow on the Terminal. */
  title: string;
  /** The body text to display in the QR code flow on the Terminal. */
  body: string;
  /** The text representation of the data to show in the QR code as UTF8-encoded data. */
  barcodeContents: string;
};

export const qrCodeOptionsSchema: Schema<QrCodeOptions> = s.object<QrCodeOptions>({
  title: s.string(),
  body: s.string(),
  barcodeContents: s.string(),
  _keysMap: {
    barcodeContents: "barcode_contents",
  },
});
