import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SignatureImage = {
  /** The mime/type of the image data. Use `image/png;base64` for png. */
  imageType?: string;
  /** The base64 representation of the image. */
  data?: string;
};

export const signatureImageSchema: Schema<SignatureImage> = s.object<SignatureImage>({
  imageType: s.optional(s.string()),
  data: s.optional(s.string()),
  _keysMap: {
    imageType: "image_type",
  },
});
