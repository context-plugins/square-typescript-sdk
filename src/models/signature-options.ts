import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { signatureImageSchema, type SignatureImage } from "./signature-image.js";

export type SignatureOptions = {
  title: string;
  body: string;
  signature?: SignatureImage[];
};

export const signatureOptionsSchema: Schema<SignatureOptions> = s.object<SignatureOptions>({
  title: s.string(),
  body: s.string(),
  signature: s.optional(s.array(s.lazy(() => signatureImageSchema))),
});
