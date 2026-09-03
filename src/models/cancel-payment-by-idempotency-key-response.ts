import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

export type CancelPaymentByIdempotencyKeyResponse = {
  errors?: Error[];
};

export const cancelPaymentByIdempotencyKeyResponseSchema: Schema<CancelPaymentByIdempotencyKeyResponse> =
  s.object<CancelPaymentByIdempotencyKeyResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
  });
