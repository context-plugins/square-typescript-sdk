import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Describes a request to cancel a payment using
 * [CancelPaymentByIdempotencyKey](api-endpoint:Payments-CancelPaymentByIdempotencyKey).
 */
export type CancelPaymentByIdempotencyKeyRequest = {
  /** The `idempotency_key` identifying the payment to be canceled. */
  idempotencyKey: string;
};

export const cancelPaymentByIdempotencyKeyRequestSchema: Schema<CancelPaymentByIdempotencyKeyRequest> =
  s.object<CancelPaymentByIdempotencyKeyRequest>({
    idempotencyKey: s.string(),
    _keysMap: {
      idempotencyKey: "idempotency_key",
    },
  });
