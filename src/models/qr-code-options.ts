import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type QrCodeOptions = {
  title: string;
  body: string;
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
