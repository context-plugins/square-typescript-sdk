import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { signatureImageSchema, type SignatureImage } from "./signature-image.js";

export type SignatureOptions = {
  /** The title text to display in the signature capture flow on the Terminal. */
  title: string;
  /** The body text to display in the signature capture flow on the Terminal. */
  body: string;
  /** An image representation of the collected signature. */
  signature?: SignatureImage[];
};

export const signatureOptionsSchema: Schema<SignatureOptions> = s.object<SignatureOptions>({
  title: s.string(),
  body: s.string(),
  signature: s.optional(s.array(s.lazy(() => signatureImageSchema))),
});
