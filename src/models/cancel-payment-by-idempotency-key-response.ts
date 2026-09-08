import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

/**
 * Defines the response returned by
 * [CancelPaymentByIdempotencyKey](api-endpoint:Payments-CancelPaymentByIdempotencyKey). On success,
 * `errors` is empty.
 */
export type CancelPaymentByIdempotencyKeyResponse = {
  /** Any errors that occurred during the request. */
  errors?: Error[];
};

export const cancelPaymentByIdempotencyKeyResponseSchema: Schema<CancelPaymentByIdempotencyKeyResponse> =
  s.object<CancelPaymentByIdempotencyKeyResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
  });
