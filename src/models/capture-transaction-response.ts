import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

export type CaptureTransactionResponse = {
  errors?: Error[];
};

export const captureTransactionResponseSchema: Schema<CaptureTransactionResponse> =
  s.object<CaptureTransactionResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
  });
