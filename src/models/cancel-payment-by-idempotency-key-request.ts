import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CancelPaymentByIdempotencyKeyRequest = {
  idempotencyKey: string;
};

export const cancelPaymentByIdempotencyKeyRequestSchema: Schema<CancelPaymentByIdempotencyKeyRequest> =
  s.object<CancelPaymentByIdempotencyKeyRequest>({
    idempotencyKey: s.string(),
    _keysMap: {
      idempotencyKey: "idempotency_key",
    },
  });
