import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SignatureImage = {
  imageType?: string;
  data?: string;
};

export const signatureImageSchema: Schema<SignatureImage> = s.object<SignatureImage>({
  imageType: s.optional(s.string()),
  data: s.optional(s.string()),
  _keysMap: {
    imageType: "image_type",
  },
});
